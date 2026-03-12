/**
 * GuitarAPI — Frontend API module for Guitar Club
 * 
 * Abstracts all backend communication. Uses the Cloudflare Worker API
 * when authenticated, falls back to localStorage for guest mode.
 * Includes offline queue for resilience.
 */
const GuitarAPI = (() => {
  // Detect file:// protocol — API calls are impossible in this mode
  const IS_LOCAL_FILE = window.location.protocol === 'file:';

  // Worker API base URL
  const API_BASE = window.GUITAR_API_BASE || 'https://guitar-club-api.rootsofreason.workers.dev/api';

  // Offline queue key
  const QUEUE_KEY = 'guitarclub_offline_queue';

  // ========================
  // Helpers
  // ========================

  function isOnline() {
    if (IS_LOCAL_FILE) return false; // No API when opened as local file
    return typeof GuitarAuth !== 'undefined'
      && GuitarAuth.isLoggedIn()
      && !GuitarAuth.isGuest();
  }

  async function apiFetch(path, options = {}) {
    if (IS_LOCAL_FILE) {
      throw new Error('API unavailable in local file mode');
    }
    const url = `${API_BASE}${path}`;
    const config = {
      credentials: 'include', // send cookies
      headers: { 'Content-Type': 'application/json', ...options.headers },
      ...options,
    };

    if (options.body && typeof options.body === 'object') {
      config.body = JSON.stringify(options.body);
    }

    const response = await fetch(url, config);
    let data = null;
    try {
      data = await response.json();
    } catch (_) {
      data = null;
    }
    const requestId = response.headers.get('X-Request-Id');

    if (!response.ok) {
      const baseMessage = (data && data.error) || `API error: ${response.status}`;
      const err = new Error(requestId ? `${baseMessage} (request ${requestId})` : baseMessage);
      err.status = response.status;
      err.requestId = requestId;
      throw err;
    }

    return data || {};
  }

  // ========================
  // Offline Queue
  // ========================

  function queueOfflineAction(action) {
    const queue = JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]');
    queue.push({ ...action, queuedAt: new Date().toISOString() });
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }

  async function flushOfflineQueue() {
    const queue = JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]');
    if (queue.length === 0) return;

    const remaining = [];
    for (const action of queue) {
      try {
        await apiFetch(action.path, {
          method: action.method,
          body: action.body,
        });
      } catch (e) {
        remaining.push(action);
      }
    }
    localStorage.setItem(QUEUE_KEY, JSON.stringify(remaining));
  }

  // ========================
  // Auth
  // ========================

  async function login(credentials) {
    try {
      const body = typeof credentials === 'string'
        ? { pin: credentials }
        : credentials;
      const data = await apiFetch('/auth/login', {
        method: 'POST',
        body,
      });
      return { success: true, user: data.user };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  async function signup(username, password, displayName) {
    try {
      const data = await apiFetch('/auth/signup', {
        method: 'POST',
        body: { username, password, displayName },
      });
      return { success: true, user: data.user };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  async function logout() {
    try {
      await apiFetch('/auth/logout', { method: 'POST' });
    } catch (e) {
      // Logout locally even if API fails
    }
  }

  async function getMe() {
    if (IS_LOCAL_FILE) return null;
    try {
      const data = await apiFetch('/auth/me');
      return data.user;
    } catch (e) {
      // Distinguish "server said no" from "server unreachable"
      if (e && e.status === 401) {
        return { _rejected: true };
      }
      return null; // network error, API down, etc.
    }
  }

  async function setupAccount(username, displayName, password) {
    try {
      const data = await apiFetch('/auth/setup', {
        method: 'POST',
        body: { username, displayName, password },
      });
      return { success: true, username: data.username, displayName: data.displayName };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  // ========================
  // Practice
  // ========================

  async function savePractice(session) {
    if (isOnline()) {
      try {
        return await apiFetch('/practice', {
          method: 'POST',
          body: {
            duration_minutes: session.minutes,
            notes: session.notes || '',
            tags: session.tags || [],
          },
        });
      } catch (e) {
        // Queue for later if network fails
        queueOfflineAction({
          path: '/practice',
          method: 'POST',
          body: {
            duration_minutes: session.minutes,
            notes: session.notes || '',
            tags: session.tags || [],
          },
        });
        // Still save locally as backup
        _saveToLocalStorage('practiceHistory', session);
        return { success: true, queued: true };
      }
    } else {
      _saveToLocalStorage('practiceHistory', session);
      return { success: true, local: true };
    }
  }

  async function getPracticeHistory(limit = 50, offset = 0) {
    if (isOnline()) {
      try {
        const data = await apiFetch(`/practice?limit=${limit}&offset=${offset}`);
        return data.sessions;
      } catch (e) {
        return _getFromLocalStorage('practiceHistory');
      }
    }
    return _getFromLocalStorage('practiceHistory');
  }

  async function getPracticeStats() {
    if (isOnline()) {
      try {
        return await apiFetch('/practice/stats');
      } catch (e) {
        return _computeLocalStats();
      }
    }
    return _computeLocalStats();
  }

  // ========================
  // Skills / Progress
  // ========================

  async function getProgress() {
    if (isOnline()) {
      try {
        const data = await apiFetch('/progress');
        return data.progress;
      } catch (e) {
        return _getFromLocalStorage('skillProgress') || [];
      }
    }
    return _getFromLocalStorage('skillProgress') || [];
  }

  async function updateProgress(skillId, status) {
    if (isOnline()) {
      try {
        return await apiFetch(`/progress/${skillId}`, {
          method: 'POST',
          body: { status },
        });
      } catch (e) {
        queueOfflineAction({
          path: `/progress/${skillId}`,
          method: 'POST',
          body: { status },
        });
        _updateLocalProgress(skillId, status);
        return { success: true, queued: true };
      }
    } else {
      _updateLocalProgress(skillId, status);
      return { success: true, local: true };
    }
  }

  // ========================
  // Songs
  // ========================

  async function getSongs(status = null) {
    if (isOnline()) {
      try {
        const query = status ? `?status=${status}` : '';
        const data = await apiFetch(`/songs${query}`);
        return data.songs;
      } catch (e) {
        return _getFromLocalStorage('songs') || [];
      }
    }
    return _getFromLocalStorage('songs') || [];
  }

  async function requestSong(title, artist, notes = '') {
    if (isOnline()) {
      try {
        return await apiFetch('/songs/request', {
          method: 'POST',
          body: { title, artist, notes },
        });
      } catch (e) {
        queueOfflineAction({
          path: '/songs/request',
          method: 'POST',
          body: { title, artist, notes },
        });
        return { success: true, queued: true };
      }
    } else {
      // Guest mode: save locally
      const requests = JSON.parse(localStorage.getItem('songRequests') || '[]');
      requests.push({ title, artist, notes, date: new Date().toISOString() });
      localStorage.setItem('songRequests', JSON.stringify(requests));
      return { success: true, local: true };
    }
  }

  // ========================
  // Teacher
  // ========================

  async function createStudent(username, pin, displayName) {
    return await apiFetch('/teacher/students', {
      method: 'POST',
      body: { username, pin, displayName },
    });
  }

  async function getStudents() {
    return await apiFetch('/teacher/students');
  }

  // ========================
  // localStorage helpers
  // ========================

  function _saveToLocalStorage(key, item) {
    const arr = JSON.parse(localStorage.getItem(key) || '[]');
    arr.unshift({ ...item, date: item.date || new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(arr));
  }

  function _getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  function _updateLocalProgress(skillId, status) {
    const progress = JSON.parse(localStorage.getItem('skillProgress') || '{}');
    progress[skillId] = { status, updatedAt: new Date().toISOString() };
    localStorage.setItem('skillProgress', JSON.stringify(progress));
  }

  function _computeLocalStats() {
    const history = _getFromLocalStorage('practiceHistory');
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    weekStart.setHours(0, 0, 0, 0);
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    let weekMinutes = 0, monthMinutes = 0;
    history.forEach(s => {
      const d = new Date(s.date);
      const mins = s.minutes || s.duration_minutes || 0;
      if (d >= weekStart) weekMinutes += mins;
      if (d >= monthStart) monthMinutes += mins;
    });

    return {
      weekMinutes,
      monthMinutes,
      totalSessions: history.length,
    };
  }

  // ========================
  // Init: flush offline queue on load
  // ========================

  if (typeof window !== 'undefined' && !IS_LOCAL_FILE) {
    window.addEventListener('online', flushOfflineQueue);
    // Try flushing on load too
    setTimeout(flushOfflineQueue, 3000);
  }

  // ========================
  // Public API
  // ========================

  return {
    // Auth
    login,
    signup,
    logout,
    getMe,
    setupAccount,

    // Practice
    savePractice,
    getPracticeHistory,
    getPracticeStats,

    // Skills
    getProgress,
    updateProgress,

    // Songs
    getSongs,
    requestSong,

    // Teacher
    createStudent,
    getStudents,

    // Utils
    flushOfflineQueue,
    isOnline,
  };
})();

// Make available globally
if (typeof window !== 'undefined') {
  window.GuitarAPI = GuitarAPI;
}
