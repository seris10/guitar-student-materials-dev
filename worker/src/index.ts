/**
 * Guitar Club API Worker
 * 
 * Handles authentication, practice logs, skill progress, and song requests.
 * Uses Cloudflare D1 for storage.
 */

export interface Env {
  DB: D1Database;
  ENVIRONMENT: string;
}

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://guitar-students.pages.dev',
  'https://guitar-club-dev.pages.dev',
  'http://localhost:3000',
  'http://localhost:8788',
  'http://127.0.0.1:8788',
];

// Build CORS headers based on request origin
function getCorsHeaders(request: Request) {
  const origin = request.headers.get('Origin') || '';
  // Allow any *.guitar-students.pages.dev preview deploy
  const isAllowed = ALLOWED_ORIGINS.includes(origin)
    || origin.endsWith('.guitar-students.pages.dev')
    || origin.endsWith('.guitar-club-dev.pages.dev');

  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };
}

// Helper: JSON response (needs request for CORS origin)
let _currentRequest: Request;

function json(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...getCorsHeaders(_currentRequest) },
  });
}

// Helper: Error response
function error(message: string, status = 400) {
  return json({ error: message }, status);
}

// Helper: Generate session ID
function generateSessionId(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
}

// Helper: encode bytes to base64 without spread (safe for large buffers)
function toBase64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

// Hash a credential (PIN or password) using PBKDF2-SHA256
// Format: $pbkdf2$<iterations>$<saltB64>$<hashB64>
async function hashSecret(secret: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iterations = 10000;
  const keyMaterial = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret), 'PBKDF2', false, ['deriveBits']
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
    keyMaterial, 256
  );
  return `$pbkdf2$${iterations}$${toBase64(salt)}$${toBase64(new Uint8Array(bits))}`;
}

// Verify a credential against a stored hash (supports legacy $demo$ and PBKDF2)
async function verifySecret(secret: string, stored: string): Promise<boolean> {
  if (stored.startsWith('$demo$')) {
    return stored === `$demo$${secret}`;
  }
  const parts = stored.split('$');
  // ['', 'pbkdf2', iterations, saltB64, hashB64]
  if (parts.length !== 5 || parts[1] !== 'pbkdf2') return false;
  const iterations = parseInt(parts[2], 10);
  const salt = Uint8Array.from(atob(parts[3]), c => c.charCodeAt(0));
  const expectedB64 = parts[4];
  const keyMaterial = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret), 'PBKDF2', false, ['deriveBits']
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
    keyMaterial, 256
  );
  const actualB64 = toBase64(new Uint8Array(bits));
  // Constant-time compare to prevent timing attacks
  if (actualB64.length !== expectedB64.length) return false;
  let diff = 0;
  for (let i = 0; i < actualB64.length; i++) {
    diff |= actualB64.charCodeAt(i) ^ expectedB64.charCodeAt(i);
  }
  return diff === 0;
}

// Helper: Get session from cookie
function getSessionFromCookie(request: Request): string | null {
  const cookie = request.headers.get('Cookie');
  if (!cookie) return null;
  
  const match = cookie.match(/guitarclub_session=([^;]+)/);
  return match ? match[1] : null;
}

// Helper: Create session cookie
export function createSessionCookie(sessionId: string, maxAge = 60 * 60 * 24 * 7): string {
  return `guitarclub_session=${sessionId}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}`;
}

type SongStatus = 'ready' | 'pending' | 'rejected';

export function normalizeSongStatus(value: unknown): SongStatus | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim().toLowerCase();
  if (normalized === 'approved') return 'ready'; // legacy teacher status alias
  if (normalized === 'ready' || normalized === 'pending' || normalized === 'rejected') {
    return normalized;
  }
  return null;
}

let _songsHasTabLink: boolean | null = null;
async function songsTableHasTabLink(env: Env): Promise<boolean> {
  if (_songsHasTabLink !== null) return _songsHasTabLink;
  try {
    const info = await env.DB.prepare('PRAGMA table_info(songs)').all();
    _songsHasTabLink = (info.results as Record<string, unknown>[])
      .some((column) => column.name === 'tab_link');
  } catch {
    _songsHasTabLink = false;
  }
  return _songsHasTabLink;
}

function generateRequestId(): string {
  if (typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return generateSessionId();
}

// Rate limiter (in-memory, resets on cold start — fine for class scale)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string, max = 10, windowMs = 60000): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  entry.count++;
  return entry.count <= max;
}

// Main handler
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    _currentRequest = request;
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;
    const requestId = generateRequestId();
    const startedAt = Date.now();
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

    try {
      const response = await (async (): Promise<Response> => {
        // Handle CORS preflight
        if (method === 'OPTIONS') {
          return new Response(null, { headers: getCorsHeaders(request) });
        }

        // Route: Health check
        if (path === '/api/health') {
          return json({
            status: 'ok',
            environment: env.ENVIRONMENT,
            timestamp: new Date().toISOString(),
          });
        }

    // ==================== AUTH ROUTES ====================
    
    // POST /api/auth/login
    if (path === '/api/auth/login' && method === 'POST') {
      try {
        const body = await request.json() as { pin?: string; username?: string; password?: string };
        const { pin, username, password } = body;

        if (!checkRateLimit(request.headers.get('CF-Connecting-IP') || 'unknown')) {
          return error('Too many attempts, try again later', 429);
        }

        const isPasswordLogin = username && password;
        const isPinLogin = pin && pin.length === 6;
        if (!isPasswordLogin && !isPinLogin) {
          return error('Provide username+password or a 6-digit PIN');
        }

        let user: Record<string, unknown> | null = null;

        if (isPasswordLogin) {
          // Username+password path: direct lookup
          const candidate = await env.DB.prepare(
            'SELECT id, username, pin_hash, password_hash, display_name, rank, avatar, needs_setup, is_teacher FROM users WHERE LOWER(username) = LOWER(?)'
          ).bind(username!.trim()).first() as Record<string, unknown> | null;

          if (candidate && candidate.password_hash && await verifySecret(password!, candidate.password_hash as string)) {
            user = candidate;
          }
          if (!user) {
            return error('Invalid username or password', 401);
          }
        } else {
          // PIN path: scan all users (class size is small, this is fine)
          const candidates = await env.DB.prepare(
            'SELECT id, username, pin_hash, password_hash, display_name, rank, avatar, needs_setup, is_teacher FROM users'
          ).all();

          for (const candidate of candidates.results as Record<string, unknown>[]) {
            if (candidate.pin_hash && await verifySecret(pin!, candidate.pin_hash as string)) {
              user = candidate;
              break;
            }
          }
          if (!user) {
            return error('Invalid PIN', 401);
          }
        }

        // Create session
        const sessionId = generateSessionId();
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

        await env.DB.prepare(
          'INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)'
        ).bind(sessionId, user.id, expiresAt).run();

        // Update last login
        await env.DB.prepare(
          'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?'
        ).bind(user.id).run();

        const response = json({
          user: {
            id: user.id,
            username: user.username,
            displayName: user.display_name,
            rank: user.rank,
            avatar: user.avatar,
            isTeacher: user.is_teacher === 1,
            needsSetup: user.needs_setup === 1
          }
        });

        response.headers.set('Set-Cookie', createSessionCookie(sessionId));
        return response;

      } catch (e) {
        return error('Login failed', 500);
      }
    }

    // POST /api/auth/signup
    if (path === '/api/auth/signup' && method === 'POST') {
      try {
        if (!checkRateLimit(request.headers.get('CF-Connecting-IP') || 'unknown')) {
          return error('Too many attempts, try again later', 429);
        }

        const { username, password, displayName } = await request.json() as {
          username: string;
          password: string;
          displayName?: string;
        };

        if (!username || username.trim().length < 3 || username.trim().length > 20) {
          return error('Username must be 3-20 characters');
        }
        if (!/^[a-zA-Z0-9_]+$/.test(username.trim())) {
          return error('Username can only contain letters, numbers, and underscores');
        }
        if (!password || password.length < 6) {
          return error('Password must be at least 6 characters');
        }

        const normalizedUsername = username.trim().toLowerCase();
        const passwordHash = await hashSecret(password);

        const result = await env.DB.prepare(
          `INSERT INTO users (username, pin_hash, password_hash, display_name, rank, needs_setup, is_teacher)
           VALUES (?, '', ?, ?, 'Explorer', 0, 0)`
        ).bind(normalizedUsername, passwordHash, displayName || normalizedUsername).run();

        const userId = result.meta.last_row_id;

        // Auto-create session
        const sessionId = generateSessionId();
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
        await env.DB.prepare(
          'INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)'
        ).bind(sessionId, userId, expiresAt).run();

        await env.DB.prepare(
          'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?'
        ).bind(userId).run();

        const response = json({
          user: {
            id: userId,
            username: normalizedUsername,
            displayName: displayName || normalizedUsername,
            rank: 'Explorer',
            avatar: null,
            isTeacher: false,
            needsSetup: false
          }
        }, 201);

        response.headers.set('Set-Cookie', createSessionCookie(sessionId));
        return response;

      } catch (e: any) {
        if (e.message?.includes('UNIQUE')) {
          return error('That username is already taken');
        }
        return error('Signup failed', 500);
      }
    }

    // POST /api/auth/logout
    if (path === '/api/auth/logout' && method === 'POST') {
      const sessionId = getSessionFromCookie(request);
      
      if (sessionId) {
        await env.DB.prepare('DELETE FROM sessions WHERE id = ?').bind(sessionId).run();
      }

      const response = json({ success: true });
      response.headers.set('Set-Cookie', createSessionCookie('', 0));
      return response;
    }

    // GET /api/auth/me
    if (path === '/api/auth/me' && method === 'GET') {
      const sessionId = getSessionFromCookie(request);
      
      if (!sessionId) {
        return error('Not authenticated', 401);
      }

      const session = await env.DB.prepare(
        `SELECT s.*, u.username, u.display_name, u.rank, u.avatar, u.needs_setup, u.is_teacher 
         FROM sessions s 
         JOIN users u ON s.user_id = u.id 
         WHERE s.id = ? AND s.expires_at > datetime('now')`
      ).bind(sessionId).first();

      if (!session) {
        return error('Session expired', 401);
      }

      return json({
        user: {
          id: session.user_id,
          username: session.username,
          displayName: session.display_name,
          rank: session.rank,
          avatar: session.avatar,
          isTeacher: session.is_teacher === 1,
          needsSetup: session.needs_setup === 1
        }
      });
    }

    // POST /api/auth/setup - first-time username selection
    if (path === '/api/auth/setup' && method === 'POST') {
      const sessionId = getSessionFromCookie(request);
      if (!sessionId) {
        return error('Not authenticated', 401);
      }

      const sess = await env.DB.prepare(
        `SELECT user_id FROM sessions WHERE id = ? AND expires_at > datetime('now')`
      ).bind(sessionId).first();

      if (!sess) {
        return error('Session expired', 401);
      }

      const { username, displayName, password } = await request.json() as {
        username: string;
        displayName?: string;
        password: string;
      };

      if (!username || username.length < 2 || username.length > 24) {
        return error('Username must be 2-24 characters');
      }

      if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return error('Username can only contain letters, numbers, and underscores');
      }

      if (!password || password.length < 6) {
        return error('Password must be at least 6 characters');
      }

      try {
        const passwordHash = await hashSecret(password);
        const normalizedUsername = username.trim().toLowerCase();
        await env.DB.prepare(
          `UPDATE users SET username = ?, display_name = ?, password_hash = ?, needs_setup = 0 WHERE id = ?`
        ).bind(normalizedUsername, displayName || username, passwordHash, sess.user_id).run();

        return json({ success: true, username: normalizedUsername, displayName: displayName || username });
      } catch (e: any) {
        if (e.message?.includes('UNIQUE')) {
          return error('That username is already taken');
        }
        return error('Setup failed', 500);
      }
    }

    // ==================== PRACTICE ROUTES ====================

    // Middleware: require auth for practice routes
    async function requireAuth(): Promise<{ userId: number } | Response> {
      const sessionId = getSessionFromCookie(request);
      if (!sessionId) return error('Not authenticated', 401);

      const session = await env.DB.prepare(
        `SELECT user_id FROM sessions WHERE id = ? AND expires_at > datetime('now')`
      ).bind(sessionId).first();

      if (!session) return error('Session expired', 401);
      return { userId: session.user_id as number };
    }

    // GET /api/practice
    if (path === '/api/practice' && method === 'GET') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const limit = parseInt(url.searchParams.get('limit') || '50');
      const offset = parseInt(url.searchParams.get('offset') || '0');

      const sessions = await env.DB.prepare(
        `SELECT * FROM practice_sessions 
         WHERE user_id = ? 
         ORDER BY created_at DESC 
         LIMIT ? OFFSET ?`
      ).bind(auth.userId, limit, offset).all();

      return json({ sessions: sessions.results });
    }

    // POST /api/practice
    if (path === '/api/practice' && method === 'POST') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const { duration_minutes, notes, tags } = await request.json() as {
        duration_minutes: number;
        notes?: string;
        tags?: string[];
      };

      if (!duration_minutes || duration_minutes < 1) {
        return error('Duration must be at least 1 minute');
      }

      const result = await env.DB.prepare(
        `INSERT INTO practice_sessions (user_id, duration_minutes, notes, tags) 
         VALUES (?, ?, ?, ?)`
      ).bind(
        auth.userId, 
        duration_minutes, 
        notes || '', 
        tags ? tags.join(',') : ''
      ).run();

      return json({ 
        success: true, 
        id: result.meta.last_row_id 
      }, 201);
    }

    // GET /api/practice/stats
    if (path === '/api/practice/stats' && method === 'GET') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      // Get various stats
      const weekStart = new Date();
      weekStart.setDate(weekStart.getDate() - weekStart.getDay());
      weekStart.setHours(0, 0, 0, 0);

      const monthStart = new Date();
      monthStart.setDate(1);
      monthStart.setHours(0, 0, 0, 0);

      const stats = await env.DB.prepare(`
        SELECT 
          COALESCE(SUM(CASE WHEN created_at >= ? THEN duration_minutes END), 0) as week_minutes,
          COALESCE(SUM(CASE WHEN created_at >= ? THEN duration_minutes END), 0) as month_minutes,
          COUNT(*) as total_sessions
        FROM practice_sessions 
        WHERE user_id = ?
      `).bind(weekStart.toISOString(), monthStart.toISOString(), auth.userId).first();

      // Calculate streak: count consecutive days with practice going backwards from today
      const streakRows = await env.DB.prepare(`
        SELECT DISTINCT DATE(created_at) as practice_date
        FROM practice_sessions
        WHERE user_id = ?
        ORDER BY practice_date DESC
        LIMIT 365
      `).bind(auth.userId).all();

      let streak = 0;
      if (streakRows.results && streakRows.results.length > 0) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const dates = streakRows.results.map((r: any) => {
          const d = new Date(r.practice_date + 'T00:00:00Z');
          d.setHours(0, 0, 0, 0);
          return d.getTime();
        });

        // Check if most recent practice was today or yesterday
        const mostRecent = dates[0];
        const diffDays = Math.floor((today.getTime() - mostRecent) / (86400000));
        if (diffDays <= 1) {
          // Count consecutive days backwards from most recent
          for (let i = 0; i < dates.length; i++) {
            const expected = new Date(mostRecent);
            expected.setDate(expected.getDate() - i);
            if (dates[i] === expected.getTime()) {
              streak++;
            } else {
              break;
            }
          }
        }
      }

      return json({
        weekMinutes: stats?.week_minutes || 0,
        monthMinutes: stats?.month_minutes || 0,
        totalSessions: stats?.total_sessions || 0,
        streak
      });
    }

    // ==================== PROGRESS ROUTES ====================

    // GET /api/progress
    if (path === '/api/progress' && method === 'GET') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const progress = await env.DB.prepare(
        'SELECT skill_id, status, started_at, completed_at FROM skill_progress WHERE user_id = ?'
      ).bind(auth.userId).all();

      return json({ progress: progress.results });
    }

    // POST /api/progress/:skillId
    if (path.startsWith('/api/progress/') && method === 'POST') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const skillId = path.split('/').pop();
      const { status } = await request.json() as { status: string };

      if (!['locked', 'available', 'in_progress', 'completed'].includes(status)) {
        return error('Invalid status');
      }

      const now = new Date().toISOString();
      const completedAt = status === 'completed' ? now : null;
      const startedAt = status === 'in_progress' ? now : null;

      await env.DB.prepare(`
        INSERT INTO skill_progress (user_id, skill_id, status, started_at, completed_at)
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(user_id, skill_id) DO UPDATE SET 
          status = excluded.status,
          started_at = COALESCE(excluded.started_at, skill_progress.started_at),
          completed_at = excluded.completed_at
      `).bind(auth.userId, skillId, status, startedAt, completedAt).run();

      return json({ success: true });
    }

    // ==================== SONGS ROUTES ====================

    // GET /api/songs
    if (path === '/api/songs' && method === 'GET') {
      const requestedStatus = url.searchParams.get('status');
      const params: unknown[] = [];
      let query = `
        SELECT
          id, title, artist, video_id, chords, difficulty, capo, style,
          CASE WHEN status = 'approved' THEN 'ready' ELSE status END AS status,
          requested_by, created_at
        FROM songs
      `;

      if (requestedStatus !== null) {
        const normalizedStatus = normalizeSongStatus(requestedStatus);
        if (!normalizedStatus) return error('Invalid song status');
        query += ` WHERE (CASE WHEN status = 'approved' THEN 'ready' ELSE status END) = ?`;
        params.push(normalizedStatus);
      }

      query += ' ORDER BY created_at DESC';

      const songs = await env.DB.prepare(query).bind(...params).all();
      return json({ songs: songs.results });
    }

    // POST /api/songs/request
    if (path === '/api/songs/request' && method === 'POST') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const { title, artist, notes } = await request.json() as {
        title: string;
        artist: string;
        notes?: string;
      };

      if (!title || !artist) {
        return error('Title and artist are required');
      }

      const result = await env.DB.prepare(`
        INSERT INTO songs (title, artist, status, requested_by, style)
        VALUES (?, ?, 'pending', ?, ?)
      `).bind(title, artist, auth.userId, notes || 'Requested').run();

      return json({ 
        success: true, 
        id: result.meta.last_row_id 
      }, 201);
    }

    // ==================== TEACHER ROUTES ====================

    // POST /api/teacher/students (create student account)
    if (path === '/api/teacher/students' && method === 'POST') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      // Check if teacher
      const user = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(auth.userId).first();

      if (!user || user.is_teacher !== 1) {
        return error('Teacher access required', 403);
      }

      const { username, pin, displayName } = await request.json() as {
        username: string;
        pin: string;
        displayName?: string;
      };

      if (!username || !pin || pin.length !== 6) {
        return error('Username and 6-digit PIN required');
      }

      try {
        const pinHash = await hashSecret(pin);

        const result = await env.DB.prepare(`
          INSERT INTO users (username, pin_hash, display_name, rank)
          VALUES (?, ?, ?, 'Explorer')
        `).bind(username, pinHash, displayName || username).run();

        return json({ 
          success: true, 
          userId: result.meta.last_row_id 
        }, 201);

      } catch (e: any) {
        if (e.message?.includes('UNIQUE')) {
          return error('Username already exists');
        }
        throw e;
      }
    }

    // GET /api/teacher/students (list all students with stats)
    if (path === '/api/teacher/students' && method === 'GET') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const user = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(auth.userId).first();

      if (!user || user.is_teacher !== 1) {
        return error('Teacher access required', 403);
      }

      const students = await env.DB.prepare(`
        SELECT 
          u.id, u.username, u.display_name, u.rank, u.pin_hash, 
          u.needs_setup, u.last_login, u.created_at,
          COALESCE(SUM(pl.duration_minutes), 0) as total_practice,
          COUNT(DISTINCT pl.id) as total_sessions,
          COUNT(DISTINCT CASE WHEN sp.status = 'completed' THEN sp.skill_id END) as skills_completed
        FROM users u
        LEFT JOIN practice_sessions pl ON pl.user_id = u.id
        LEFT JOIN skill_progress sp ON sp.user_id = u.id
        WHERE u.is_teacher = 0
        GROUP BY u.id
        ORDER BY u.created_at DESC
      `).all();

      // Extract PINs from demo hashes for teacher view
      const results = students.results.map((s: any) => ({
        ...s,
        pin: s.pin_hash?.startsWith('$demo$') ? s.pin_hash.slice(6) : '******',
        pin_hash: undefined
      }));

      return json({ students: results });
    }

    // DELETE /api/teacher/students/:id
    if (path.startsWith('/api/teacher/students/') && method === 'DELETE') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const user = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(auth.userId).first();

      if (!user || user.is_teacher !== 1) {
        return error('Teacher access required', 403);
      }

      const studentId = parseInt(path.split('/').pop() || '');
      if (!studentId) return error('Invalid student ID');

      // Prevent deleting teacher accounts
      const target = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(studentId).first();
      if (!target) return error('Student not found', 404);
      if (target.is_teacher === 1) return error('Cannot delete teacher accounts', 403);

      // Delete related data then user
      await env.DB.prepare('DELETE FROM practice_sessions WHERE user_id = ?').bind(studentId).run();
      await env.DB.prepare('DELETE FROM skill_progress WHERE user_id = ?').bind(studentId).run();
      await env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(studentId).run();
      await env.DB.prepare('DELETE FROM users WHERE id = ?').bind(studentId).run();

      return json({ success: true });
    }

    // PUT /api/teacher/students/:id/reset-pin
    if (path.match(/^\/api\/teacher\/students\/\d+\/reset-pin$/) && method === 'PUT') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const user = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(auth.userId).first();

      if (!user || user.is_teacher !== 1) {
        return error('Teacher access required', 403);
      }

      const parts = path.split('/');
      const studentId = parseInt(parts[4]);
      const { pin } = await request.json() as { pin: string };

      if (!pin || pin.length !== 6 || !/^\d{6}$/.test(pin)) {
        return error('PIN must be exactly 6 digits');
      }

      await env.DB.prepare(
        'UPDATE users SET pin_hash = ? WHERE id = ? AND is_teacher = 0'
      ).bind(await hashSecret(pin), studentId).run();

      // Invalidate existing sessions for that student
      await env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(studentId).run();

      return json({ success: true, pin });
    }

    // PUT /api/teacher/students/:id/reset-password
    if (path.match(/^\/api\/teacher\/students\/\d+\/reset-password$/) && method === 'PUT') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const user = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(auth.userId).first();

      if (!user || user.is_teacher !== 1) {
        return error('Teacher access required', 403);
      }

      const parts = path.split('/');
      const studentId = parseInt(parts[4]);
      const { password } = await request.json() as { password: string };

      if (!password || password.length < 6) {
        return error('Password must be at least 6 characters');
      }

      await env.DB.prepare(
        'UPDATE users SET password_hash = ? WHERE id = ? AND is_teacher = 0'
      ).bind(await hashSecret(password), studentId).run();

      // Invalidate existing sessions for that student
      await env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(studentId).run();

      return json({ success: true });
    }

    // PUT /api/teacher/students/:id/reset-username
    if (path.match(/^\/api\/teacher\/students\/\d+\/reset-username$/) && method === 'PUT') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const user = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(auth.userId).first();

      if (!user || user.is_teacher !== 1) {
        return error('Teacher access required', 403);
      }

      const parts = path.split('/');
      const studentId = parseInt(parts[4]);

      // Reset to needs_setup state
      const placeholder = `_pin_reset_${Date.now()}`;
      await env.DB.prepare(
        'UPDATE users SET username = ?, display_name = NULL, needs_setup = 1 WHERE id = ? AND is_teacher = 0'
      ).bind(placeholder, studentId).run();

      return json({ success: true });
    }

    // GET /api/teacher/activity (aggregated activity data)
    if (path === '/api/teacher/activity' && method === 'GET') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const user = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(auth.userId).first();

      if (!user || user.is_teacher !== 1) {
        return error('Teacher access required', 403);
      }

      // Recent practice logs with student info
      const recentLogs = await env.DB.prepare(`
        SELECT pl.*, u.display_name, u.username
        FROM practice_sessions pl
        JOIN users u ON u.id = pl.user_id
        ORDER BY pl.created_at DESC
        LIMIT 50
      `).all();

      // Practice totals by day (last 14 days)
      const dailyTotals = await env.DB.prepare(`
        SELECT DATE(created_at) as date, 
               COUNT(DISTINCT user_id) as active_students,
               SUM(duration_minutes) as total_minutes
        FROM practice_sessions
        WHERE created_at >= DATE('now', '-14 days')
        GROUP BY DATE(created_at)
        ORDER BY date DESC
      `).all();

      // Login history (last 20 logins)
      const loginHistory = await env.DB.prepare(`
        SELECT u.id, u.display_name, u.username, u.last_login
        FROM users u
        WHERE u.is_teacher = 0 AND u.last_login IS NOT NULL
        ORDER BY u.last_login DESC
        LIMIT 20
      `).all();

      return json({
        recentLogs: recentLogs.results,
        dailyTotals: dailyTotals.results,
        loginHistory: loginHistory.results
      });
    }

    // GET /api/teacher/songs (all songs for management)
    if (path === '/api/teacher/songs' && method === 'GET') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const user = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(auth.userId).first();

      if (!user || user.is_teacher !== 1) {
        return error('Teacher access required', 403);
      }

      const songs = await env.DB.prepare(`
        SELECT
          s.id, s.title, s.artist, s.video_id, s.chords, s.difficulty, s.capo, s.style,
          CASE WHEN s.status = 'approved' THEN 'ready' ELSE s.status END AS status,
          s.requested_by, s.created_at,
          u.display_name as requester_name
        FROM songs s
        LEFT JOIN users u ON u.id = s.requested_by
        ORDER BY 
          CASE (CASE WHEN s.status = 'approved' THEN 'ready' ELSE s.status END)
            WHEN 'pending' THEN 0
            WHEN 'ready' THEN 1
            WHEN 'rejected' THEN 2
            ELSE 3
          END,
          s.created_at DESC
      `).all();

      return json({ songs: songs.results });
    }

    // PUT /api/teacher/songs/:id
    if (path.match(/^\/api\/teacher\/songs\/\d+$/) && method === 'PUT') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const user = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(auth.userId).first();

      if (!user || user.is_teacher !== 1) {
        return error('Teacher access required', 403);
      }

      const songId = parseInt(path.split('/').pop() || '');
      const body = await request.json() as any;

      // Build dynamic update
      const fields: string[] = [];
      const values: unknown[] = [];

      if (body.status !== undefined) {
        const normalizedStatus = normalizeSongStatus(body.status);
        if (!normalizedStatus) return error('Invalid song status');
        fields.push('status = ?');
        values.push(normalizedStatus);
      }
      if (body.title) { fields.push('title = ?'); values.push(body.title.trim()); }
      if (body.artist) { fields.push('artist = ?'); values.push(body.artist.trim()); }
      if (body.difficulty !== undefined) { fields.push('difficulty = ?'); values.push(body.difficulty); }
      if (body.style !== undefined) { fields.push('style = ?'); values.push(body.style || null); }
      if (body.tab_link !== undefined && await songsTableHasTabLink(env)) {
        fields.push('tab_link = ?');
        values.push(body.tab_link ? String(body.tab_link).trim() : null);
      }

      if (fields.length === 0) return error('No fields to update');

      values.push(songId);
      await env.DB.prepare(
        `UPDATE songs SET ${fields.join(', ')} WHERE id = ?`
      ).bind(...values).run();

      return json({ success: true });
    }

    // POST /api/teacher/songs (add song directly)
    if (path === '/api/teacher/songs' && method === 'POST') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const user = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(auth.userId).first();

      if (!user || user.is_teacher !== 1) {
        return error('Teacher access required', 403);
      }

      const { title, artist, difficulty, style, tab_link, status } = await request.json() as Record<string, unknown>;

      if (!title || !artist) return error('Title and artist are required');

      const normalizedStatus = status === undefined ? 'ready' : normalizeSongStatus(status);
      if (!normalizedStatus) return error('Invalid song status');

      const cleanDifficulty = difficulty === undefined || difficulty === '' ? null : Number(difficulty);
      if (cleanDifficulty !== null && (!Number.isInteger(cleanDifficulty) || cleanDifficulty < 1 || cleanDifficulty > 5)) {
        return error('Difficulty must be an integer between 1 and 5');
      }

      let result;
      if (await songsTableHasTabLink(env)) {
        result = await env.DB.prepare(`
          INSERT INTO songs (title, artist, difficulty, style, tab_link, status, requested_by)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `).bind(
          String(title).trim(),
          String(artist).trim(),
          cleanDifficulty,
          style ? String(style).trim() : null,
          tab_link ? String(tab_link).trim() : null,
          normalizedStatus,
          auth.userId
        ).run();
      } else {
        result = await env.DB.prepare(`
          INSERT INTO songs (title, artist, difficulty, style, status, requested_by)
          VALUES (?, ?, ?, ?, ?, ?)
        `).bind(
          String(title).trim(),
          String(artist).trim(),
          cleanDifficulty,
          style ? String(style).trim() : null,
          normalizedStatus,
          auth.userId
        ).run();
      }

      return json({ success: true, id: result.meta.last_row_id }, 201);
    }

    // DELETE /api/teacher/songs/:id
    if (path.match(/^\/api\/teacher\/songs\/\d+$/) && method === 'DELETE') {
      const auth = await requireAuth();
      if (auth instanceof Response) return auth;

      const user = await env.DB.prepare(
        'SELECT is_teacher FROM users WHERE id = ?'
      ).bind(auth.userId).first();

      if (!user || user.is_teacher !== 1) {
        return error('Teacher access required', 403);
      }

      const songId = parseInt(path.split('/').pop() || '');
      await env.DB.prepare('DELETE FROM songs WHERE id = ?').bind(songId).run();

      return json({ success: true });
    }

        // 404 for unknown routes
        return error('Not found', 404);
      })();

      response.headers.set('X-Request-Id', requestId);
      console.log(JSON.stringify({
        level: 'info',
        event: 'request',
        requestId,
        method,
        path,
        status: response.status,
        durationMs: Date.now() - startedAt,
        ip,
      }));
      return response;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(JSON.stringify({
        level: 'error',
        event: 'unhandled',
        requestId,
        method,
        path,
        durationMs: Date.now() - startedAt,
        ip,
        message,
      }));
      const response = error('Internal server error', 500);
      response.headers.set('X-Request-Id', requestId);
      return response;
    }
  },
};
