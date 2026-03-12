# Guitar Club API Worker

Cloudflare Worker backend for Guitar Club authentication and data persistence.

## Setup

### 1. Install dependencies

```bash
cd worker
npm install
```

### 2. Create D1 database

```bash
npm run db:create
```

This outputs a database ID. Copy it and update `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "guitar-club-db"
database_id = "YOUR_DATABASE_ID_HERE"  # <-- paste here
```

### 3. Initialize database schema

For local development:
```bash
npm run db:init:local
```

For production:
```bash
npm run db:init
```

If you already have an existing database, run the songs consistency migration once:
```bash
npm run db:migrate:songs
```

### 4. Run locally

```bash
npm run dev
```

Worker runs at `http://localhost:8787`

### 5. Quality checks

```bash
npm run typecheck
npm test
```

### 6. Deploy to production

```bash
npm run deploy
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Login with username+password or PIN |
| POST | `/api/auth/signup` | Create account |
| POST | `/api/auth/logout` | Logout |
| GET | `/api/auth/me` | Get current user |

### Practice Log

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/practice` | Get practice history |
| POST | `/api/practice` | Log new session |
| GET | `/api/practice/stats` | Get stats |

### Skill Progress

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/progress` | Get all skill progress |
| POST | `/api/progress/:skillId` | Update skill status |

### Songs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/songs` | List all songs |
| POST | `/api/songs/request` | Request new song |

### Teacher (requires teacher account)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/teacher/students` | List students |
| POST | `/api/teacher/students` | Create student |

## Default Accounts

After running `db:init`, these accounts exist:

| Username | PIN | Role |
|----------|-----|------|
| teacher | 000000 | Teacher |

## Notes

- Currently uses demo PIN hashing (`$demo$123456`)
- Production should use argon2 via `@node-rs/argon2`
- Session stored in httpOnly cookie (7 day expiry)
- Every API response includes an `X-Request-Id` header for traceability
- Worker logs emit structured JSON per request and unhandled error
