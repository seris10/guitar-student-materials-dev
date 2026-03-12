-- One-time songs table migration
-- Purpose:
-- 1) Add tab_link column
-- 2) Allow rejected status
-- 3) Normalize legacy 'approved' -> 'ready'

PRAGMA foreign_keys = OFF;

CREATE TABLE songs_new (
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

INSERT INTO songs_new (
  id, title, artist, video_id, chords, difficulty, capo, style, tab_link, status, requested_by, created_at
)
SELECT
  id,
  title,
  artist,
  video_id,
  chords,
  difficulty,
  capo,
  style,
  NULL AS tab_link,
  CASE
    WHEN status = 'approved' THEN 'ready'
    WHEN status IN ('ready', 'pending', 'rejected') THEN status
    ELSE 'pending'
  END AS status,
  requested_by,
  created_at
FROM songs;

DROP TABLE songs;
ALTER TABLE songs_new RENAME TO songs;

PRAGMA foreign_keys = ON;
