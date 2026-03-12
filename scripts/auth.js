/**
 * Guitar Club - Authentication Utilities
 * 
 * Handles user session state across all pages.
 * Uses Worker API authentication + httpOnly cookies.
 */

const GuitarAuth = (function() {
  const SESSION_KEY = 'guitarclub_session';
  const GUEST_KEY = 'guitarclub_guest';

  /**
   * Get current session data
   */
  function getSession() {
    try {
      const session = localStorage.getItem(SESSION_KEY);
      if (session) {
        return JSON.parse(session);
      }
    } catch {}
    return null;
  }

  /**
   * Check if user is logged in
   */
  function isLoggedIn() {
    const session = getSession();
    return session && session.loggedIn === true;
  }

  /**
   * Check if user is in guest mode
   */
  function isGuest() {
    return !isLoggedIn();
  }

  /**
   * Get current user data
   */
  function getUser() {
    const session = getSession();
    return session ? session.user : null;
  }

  /**
   * Login with username+password or PIN via API
   */
  async function login(credentials) {
    if (typeof GuitarAPI === 'undefined' || !GuitarAPI.login) {
      throw new Error('Login requires an API connection');
    }

    const apiResult = await GuitarAPI.login(credentials);
    if (!apiResult.success || !apiResult.user) {
      throw new Error(apiResult.error || 'Invalid login credentials');
    }

    const apiSession = {
      user: apiResult.user,
      loggedIn: true,
      needsSetup: apiResult.user.needsSetup || false,
      apiAuthenticated: true
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(apiSession));
    return apiSession;
  }

  /**
   * Sign up with username + password (no demo fallback — requires API)
   */
  async function signup(username, password, displayName) {
    if (typeof GuitarAPI === 'undefined' || !GuitarAPI.signup) {
      throw new Error('Signup requires an API connection');
    }
    const apiResult = await GuitarAPI.signup(username, password, displayName);
    if (apiResult.success && apiResult.user) {
      const session = {
        user: apiResult.user,
        loggedIn: true,
        needsSetup: false,
        apiAuthenticated: true
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return session;
    }
    throw new Error(apiResult.error || 'Signup failed');
  }

  /**
   * Complete first-time account setup (set username + password after PIN login)
   */
  async function setupAccount(username, displayName, password) {
    if (typeof GuitarAPI === 'undefined' || !GuitarAPI.setupAccount) {
      throw new Error('Account setup requires an API connection');
    }

    const result = await GuitarAPI.setupAccount(username, displayName, password);
    if (!result.success) {
      throw new Error(result.error || 'Setup failed');
    }

    // Update local session with new username
    const session = getSession();
    if (session) {
      session.user.username = result.username;
      session.user.displayName = result.displayName;
      session.needsSetup = false;
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    }

    return result;
  }

  /**
   * Logout current user
   */
  async function logout() {
    // Call GuitarAPI logout if available
    if (typeof GuitarAPI !== 'undefined' && GuitarAPI.logout) {
      try {
        await GuitarAPI.logout();
      } catch (e) {
        // Logout locally even if API fails
        console.warn('API logout failed:', e);
      }
    }
    
    // Clear local session state
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(GUEST_KEY);
    window.location.href = getBasePath() + 'login.html';
  }

  /**
   * Get base path (handles being in subdirectory like /skills/)
   */
  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/skills/')) {
      return '../';
    }
    return '';
  }

  /**
   * Sync session with API on page load
   * Calls GuitarAPI.getMe() to verify if user has a valid API session
   */
  async function syncSession() {
    if (typeof GuitarAPI === 'undefined' || !GuitarAPI.getMe) {
      // API not available, skip sync
      return;
    }

    try {
      const apiUser = await GuitarAPI.getMe();
      if (apiUser && apiUser._rejected) {
        // API explicitly rejected the session (401) - clear it
        const currentSession = getSession();
        if (currentSession && currentSession.loggedIn) {
          localStorage.removeItem(SESSION_KEY);
          localStorage.removeItem(GUEST_KEY);
          updateSidebar();
        }
      } else if (apiUser) {
        // User has valid API session - update local auth state
        const session = {
          user: apiUser,
          loggedIn: true,
          apiAuthenticated: true
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        updateSidebar(); // reflect any updated user data
      }
      // If apiUser is null (network error, API unreachable), do nothing.
      // Keep the existing session so logins survive when the worker is down.
    } catch (e) {
      // Network error - keep existing session (offline tolerance)
      // Only clear if we got a definitive 401, not a network failure
      console.warn('Session sync failed:', e);
    }
  }

  /**
   * Update sidebar UI based on auth state
   */
  function updateSidebar() {
    const user = getUser();
    const sidebar = document.querySelector('.app-sidebar');
    if (!sidebar) return;

    const profileName = sidebar.querySelector('.profile-name');
    const profileRank = sidebar.querySelector('.profile-rank');
    const sidebarFooter = sidebar.querySelector('.sidebar-footer');

    if (isLoggedIn() && user) {
      // Logged in state
      if (profileName) profileName.textContent = user.displayName || user.username;
      if (profileRank) profileRank.textContent = user.rank || 'Explorer';
      
      // Update footer to show logout
      if (sidebarFooter) {
        sidebarFooter.innerHTML = `
          <button class="nav-item design-mode">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/>
              <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/>
              <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/>
              <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/>
            </svg>
            Design Mode
          </button>
          <button class="nav-item logout" onclick="GuitarAuth.logout()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </button>
        `;
      }
    } else {
      // Guest state
      if (profileName) profileName.textContent = 'Guest';
      if (profileRank) profileRank.textContent = 'Explorer';
      
      // Update footer to show login
      if (sidebarFooter) {
        const basePath = getBasePath();
        sidebarFooter.innerHTML = `
          <a href="${basePath}login.html" class="nav-item login-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
            Login
          </a>
        `;
      }
    }
  }

  /**
   * Show "login to save" prompt
   */
  function showSavePrompt(message = 'Login to save your progress') {
    if (isLoggedIn()) return null;

    const prompt = document.createElement('div');
    prompt.className = 'save-prompt';
    prompt.innerHTML = `
      <span>${message}</span>
      <a href="${getBasePath()}login.html" class="save-prompt-btn">Login</a>
    `;
    return prompt;
  }

  /**
   * Initialize auth on page load
   */
  function init() {
    document.addEventListener('DOMContentLoaded', function() {
      updateSidebar();
      syncSession();
      applyUserPreferences();
      
      // Add save prompts where needed
      if (isGuest()) {
        addGuestPrompts();
      }
    });
  }

  /**
   * Apply saved user preferences (accent color, etc.) on every page load
   */
  function applyUserPreferences() {
    // Accent color
    const accentColor = localStorage.getItem('guitarclub_accentColor');
    if (accentColor) {
      document.documentElement.style.setProperty('--accent', accentColor);
    }
  }

  /**
   * Add guest mode prompts to relevant elements
   */
  function addGuestPrompts() {
    // Add subtle indicator that data won't be saved
    const practiceLog = document.querySelector('.practice-page');
    if (practiceLog) {
      const header = practiceLog.querySelector('.practice-header');
      if (header) {
        const notice = document.createElement('div');
        notice.className = 'guest-notice';
        notice.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>Guest mode - <a href="${getBasePath()}login.html">Login</a> to save your progress</span>
        `;
        notice.style.cssText = `
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: rgba(255, 166, 87, 0.1);
          border: 1px solid rgba(255, 166, 87, 0.3);
          border-radius: 8px;
          margin-top: 12px;
          font-size: 0.9rem;
          color: var(--accent-orange);
        `;
        notice.querySelector('a').style.color = 'var(--accent)';
        header.appendChild(notice);
      }
    }
  }

  // Auto-initialize
  init();

  // Public API
  return {
    isLoggedIn,
    isGuest,
    getUser,
    getSession,
    login,
    signup,
    logout,
    setupAccount,
    syncSession,
    updateSidebar,
    showSavePrompt
  };
})();

// Make available globally
window.GuitarAuth = GuitarAuth;
