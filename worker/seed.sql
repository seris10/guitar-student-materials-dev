-- Guitar Club Student Seed Data
-- Run with: wrangler d1 execute guitar-club-db --file=worker/seed.sql
-- Run AFTER schema.sql

-- 5 Student accounts
-- PIN format: $demo$<6-digit-pin> (demo hash, swap for argon2 in production)
-- needs_setup = 1: student picks their username on first login
-- placeholder usernames are internal-only until the student chooses one

INSERT OR IGNORE INTO users (username, pin_hash, password_hash, display_name, rank, needs_setup, is_teacher)
VALUES
  ('_pin_482731',  '$demo$482731', NULL, NULL,  'Explorer', 1, 0),
  ('_pin_159364',  '$demo$159364', NULL, NULL,  'Explorer', 1, 0),
  ('_pin_720958',  '$demo$720958', NULL, NULL,  'Explorer', 1, 0),
  ('_pin_346812',  '$demo$346812', NULL, NULL,  'Explorer', 1, 0),
  ('_pin_691247',  '$demo$691247', NULL, NULL,  'Explorer', 1, 0);
