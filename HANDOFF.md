# Guitar Dashboard — Auth & Persistence Upgrade Handoff

## Goal

Make the guitar dashboard fully autonomous: students create accounts with username+password, log in, and their progress/practice/songs persist across sessions. Currently uses 6-digit PIN auth where teachers create student accounts. The upgrade adds self-service signup.

## Working Copy

**DO NOT edit the original.** Work in:
`/Users/kreed/!claude/roots-of-reason/4. guitar/student-materials-dev/`

Original (read-only reference):
`/Users/kreed/!claude/roots-of-reason/4. guitar/student-materials/`

## Current Architecture

Static HTML pages + separate Cloudflare Worker API:

```
student-materials-dev/
├── login.html              ← PIN entry form (needs username+password upgrade)
├── index.html              ← Dashboard
├── practice-log.html       ← Practice timer + log
├── song-bank.html          ← Song library
├── skill.html              ← Skill detail + progress
├── star-map.html           ← Skill constellation
├── settings.html           ← User settings
├── teacher.html            ← Teacher admin panel
├── tuner.html, chords.html ← Tools
├── scripts/
│   ├── api.js              ← GuitarAPI module (all backend calls)
│   ├── auth.js             ← GuitarAuth module (session state, sidebar updates)
│   ├── main.js             ← Shared page init
│   ├── sidebar.js          ← Navigation sidebar
│   └── skill-data.js       ← 118KB skill definitions
├── styles/
│   └── base.css            ← Shared styles
├── worker/
│   ├── src/index.ts        ← 840-line Worker API (all routes in one file)
│   ├── schema.sql          ← D1 schema (users, practice_sessions, skill_progress, songs, sessions)
│   ├── seed.sql            ← Default teacher + songs
│   ├── wrangler.toml       ← D1 binding: guitar-club-db
│   └── package.json        ← Worker deps
```

## Current Auth Flow

1. Student enters 6-digit PIN on `login.html`
2. `GuitarAuth.login(pin)` → `GuitarAPI.login(pin)` → Worker `POST /api/auth/login`
3. Worker scans ALL users, verifies PIN hash with PBKDF2 (class is small, ~10 users)
4. Creates D1 session row, returns httpOnly cookie `guitarclub_session`
5. If `needs_setup=1`, redirects to username selection
6. Falls back to demo/guest mode if API unreachable

## What Needs to Change

### Worker (`worker/src/index.ts`)
- **Add `POST /api/auth/signup`**: accepts `{ username, password, displayName }`, validates (3-20 chars alphanumeric, password 6+), hashes with PBKDF2, inserts user, creates session
- **Modify `POST /api/auth/login`**: accept `{ username, password }` instead of `{ pin }`. Look up user by username, verify password hash. Keep PIN login as fallback for existing students.
- **Schema migration**: `users` table needs `password_hash TEXT` column alongside existing `pin_hash`. Users with password_hash use password login; users with only pin_hash use PIN login.
- **CORS**: Add dev domain to ALLOWED_ORIGINS

### Frontend (`login.html`)
- Add toggle between Login/Signup modes
- Login: username + password fields
- Signup: username + password + display name fields
- Keep existing dark theme styling
- Error display for invalid credentials / taken username

### Frontend (`scripts/auth.js`)
- `GuitarAuth.login()` → send username+password instead of PIN
- Add `GuitarAuth.signup()` method
- Keep `syncSession()` and guest fallback working

### Frontend (`scripts/api.js`)
- `GuitarAPI.login()` → send `{ username, password }`
- Add `GuitarAPI.signup()` → `POST /api/auth/signup`
- API_BASE is currently `https://guitar-club-api.rootsofreason.workers.dev/api` — dev deploy will need a different worker URL

## D1 Database

- **Name**: `guitar-club-db`
- **ID**: `6511e4d0-62fe-468f-914a-0c9f1809f1a0`
- **WARNING**: I (previous Claude) dropped the old tables and recreated with a different schema during a mistaken attempt on the wrong project. The original schema from `worker/schema.sql` needs to be reapplied:
  ```
  wrangler d1 execute guitar-club-db --remote --file=worker/schema.sql
  ```
- Or create a fresh D1 for dev if the 10-database limit has been resolved

## Deployment

- **Pages**: `wrangler pages deploy . --project-name guitar-club-dev` (already created, lives at guitar-club-dev.pages.dev)
- **Worker**: Deploy from `worker/` dir with `wrangler deploy` (needs separate project name for dev)
- **JWT_SECRET**: Already set on guitar-club-dev Pages project, but the Worker uses D1 sessions not JWT — so this may not be needed if keeping the session-table approach

## What NOT to Do

- Don't touch the original `student-materials/` directory
- Don't rewrite files from scratch — surgical edits only
- Don't break the existing PIN login for current students
- Don't break teacher functionality
- Don't break guest/offline fallback mode

## Files Created on Wrong Project (Can Ignore)

During this session, auth files were created at `/Users/kreed/!claude/roots-of-reason/4. guitar/guitar-site/` — these were built for the React prototype, not the real project. They include `functions/api/auth/*.js`, `src/context/AuthContext.jsx`, `src/pages/Login.jsx`, and modifications to `App.jsx`, `Layout.jsx`, `Home.jsx`, `Practice.jsx`, `Songs.jsx`. These are irrelevant to the real student-materials project.

Claude Code - 2026-03-11
