-- Legacy D1 -> canonical schema migration
-- This migration is intended for databases that currently have:
--   users, songs, practice_log, user_progress
-- with legacy column layouts.
-- It preserves existing data and moves it into the canonical tables used by worker/src/index.ts.

PRAGMA foreign_keys = OFF;

ALTER TABLE users RENAME TO users_legacy;
ALTER TABLE songs RENAME TO songs_legacy;
ALTER TABLE practice_log RENAME TO practice_log_legacy;
ALTER TABLE user_progress RENAME TO user_progress_legacy;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  pin_hash TEXT NOT NULL,
  password_hash TEXT,
  display_name TEXT,
  rank TEXT DEFAULT 'Explorer',
  avatar TEXT,
  theme_config TEXT,
  needs_setup INTEGER DEFAULT 1,
  is_teacher INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_login DATETIME
);

CREATE TABLE practice_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  duration_minutes INTEGER NOT NULL,
  notes TEXT,
  tags TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE skill_progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  skill_id TEXT NOT NULL,
  status TEXT DEFAULT 'locked' CHECK(status IN ('locked', 'available', 'in_progress', 'completed')),
  started_at DATETIME,
  completed_at DATETIME,
  UNIQUE(user_id, skill_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  video_id TEXT,
  chords TEXT,
  difficulty INTEGER DEFAULT 2,
  capo TEXT,
  style TEXT,
  tab_link TEXT,
  status TEXT DEFAULT 'ready' CHECK(status IN ('ready', 'pending', 'rejected')),
  requested_by INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (requested_by) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE sessions (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (
  id, username, pin_hash, password_hash, display_name, rank, avatar, theme_config, needs_setup, is_teacher, created_at, last_login
)
SELECT
  id,
  username,
  CASE
    WHEN LOWER(username) = 'teacher' THEN '$demo$000000'
    ELSE '$disabled$'
  END,
  password_hash,
  display_name,
  'Explorer',
  NULL,
  theme,
  0,
  CASE WHEN LOWER(username) = 'teacher' THEN 1 ELSE 0 END,
  created_at,
  NULL
FROM users_legacy;

INSERT INTO practice_sessions (user_id, duration_minutes, notes, tags, created_at)
SELECT
  user_id,
  CASE WHEN minutes IS NULL OR minutes < 1 THEN 1 ELSE minutes END,
  notes,
  '',
  COALESCE(created_at, date)
FROM practice_log_legacy;

INSERT INTO skill_progress (user_id, skill_id, status, started_at, completed_at)
SELECT
  user_id,
  skill_id,
  CASE
    WHEN status = 'completed' THEN 'completed'
    WHEN status = 'unlocked' THEN 'available'
    ELSE 'locked'
  END,
  CASE WHEN status = 'unlocked' THEN updated_at ELSE NULL END,
  CASE WHEN status = 'completed' THEN updated_at ELSE NULL END
FROM user_progress_legacy;

INSERT INTO songs (id, title, artist, difficulty, style, status, requested_by, created_at)
SELECT
  id,
  title,
  artist,
  2,
  NULL,
  CASE
    WHEN status = 'mastered' THEN 'ready'
    WHEN status = 'learning' THEN 'pending'
    WHEN status = 'wishlist' THEN 'pending'
    ELSE 'pending'
  END,
  user_id,
  created_at
FROM songs_legacy;

CREATE INDEX idx_practice_user ON practice_sessions(user_id);
CREATE INDEX idx_practice_date ON practice_sessions(created_at);
CREATE INDEX idx_progress_user ON skill_progress(user_id);
CREATE INDEX idx_sessions_user ON sessions(user_id);
CREATE INDEX idx_sessions_expires ON sessions(expires_at);

INSERT INTO users (username, pin_hash, password_hash, display_name, rank, needs_setup, is_teacher)
SELECT 'teacher', '$demo$000000', NULL, 'Mr. Guitar', 'Teacher', 0, 1
WHERE NOT EXISTS (SELECT 1 FROM users WHERE LOWER(username) = 'teacher');

PRAGMA foreign_keys = ON;
