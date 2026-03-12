-- Guitar Club D1 Database Schema
-- Run with: wrangler d1 execute guitar-club-db --file=schema.sql

-- Users table
CREATE TABLE IF NOT EXISTS users (
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

-- Practice sessions
CREATE TABLE IF NOT EXISTS practice_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  duration_minutes INTEGER NOT NULL,
  notes TEXT,
  tags TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Skill progress
CREATE TABLE IF NOT EXISTS skill_progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  skill_id TEXT NOT NULL,
  status TEXT DEFAULT 'locked' CHECK(status IN ('locked', 'available', 'in_progress', 'completed')),
  started_at DATETIME,
  completed_at DATETIME,
  UNIQUE(user_id, skill_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Song library (shared + personal)
CREATE TABLE IF NOT EXISTS songs (
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

-- User sessions (for authentication)
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_practice_user ON practice_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_practice_date ON practice_sessions(created_at);
CREATE INDEX IF NOT EXISTS idx_progress_user ON skill_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at);

-- Insert default teacher account (PIN: 000000)
-- In production, hash this properly with argon2
INSERT OR IGNORE INTO users (username, pin_hash, password_hash, display_name, rank, needs_setup, is_teacher)
VALUES ('teacher', '$demo$000000', NULL, 'Mr. Guitar', 'Teacher', 0, 1);

-- Insert some default songs
INSERT OR IGNORE INTO songs (title, artist, video_id, chords, difficulty, capo, style, status)
VALUES 
  ('Remember Me (Lullaby)', 'from Coco', 'KP_XkN2v7OM', 'C,G,Am,F', 2, 'No capo', 'Fingerpicking', 'ready'),
  ('Hey Lover', 'The Daughters of Eve', 'KbHaIbDKQMc', 'G,D,Bm,A', 2, 'Capo 1', 'Strumming', 'ready'),
  ('Seven Nation Army', 'The White Stripes', '0J2QdDbelmY', '', 1, 'No capo', 'Riff', 'ready'),
  ('Knockin'' on Heaven''s Door', 'Bob Dylan', 'rm9coqlk8fY', 'G,D,Am,C', 1, 'No capo', 'Strumming', 'ready');
