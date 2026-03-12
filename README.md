# Guitar Student Materials (Production Build)

Production-ready student + teacher web app for guitar lessons, with a Cloudflare Worker API and D1 database.

## Live Links

- Student app: https://guitar-students-live.pages.dev
- Teacher dashboard: https://guitar-students-live.pages.dev/teacher.html
- API health: https://guitar-club-api.rootsofreason.workers.dev/api/health

## Tech Stack

- Frontend: static HTML/CSS/JS (Cloudflare Pages)
- API: Cloudflare Workers + TypeScript
- Database: Cloudflare D1 (SQLite)
- Auth: cookie-based session auth (httpOnly)
- CI/CD: GitHub Actions
- Monitoring: scheduled uptime checks + structured worker error logging + optional webhook alerts

## Repository Layout

```
.
├── .github/workflows/
│   ├── ci.yml
│   ├── deploy.yml
│   └── uptime-monitor.yml
├── monitoring/
│   └── uptime-check.mjs
├── scripts/
├── styles/
├── tests/smoke/
│   └── site-smoke.mjs
└── worker/
    ├── src/index.ts
    ├── tests/
    ├── schema.sql
    └── wrangler.toml
```

## Local Development

### 1. Frontend (static files)

Serve the root directory with any static server. Example:

```bash
npx http-server .
```

### 2. API Worker

```bash
cd worker
npm ci
npm run dev
```

Initialize local D1 schema when needed:

```bash
npm run db:init:local
```

## Testing

### Worker API tests

```bash
cd worker
npm test
```

### Worker type checks

```bash
cd worker
npm run typecheck
```

### Frontend smoke checks

```bash
node tests/smoke/site-smoke.mjs
```

Smoke checks verify:

- core pages exist and contain complete HTML structure
- no stale Star Map draft route references
- no unexpected `codex` branding in frontend assets

## CI/CD

### `CI` workflow (`.github/workflows/ci.yml`)

Runs on push + PR:

- worker dependency install
- worker TypeScript typecheck
- worker test suite (Vitest)
- frontend JS syntax checks
- frontend smoke checks

### `Deploy` workflow (`.github/workflows/deploy.yml`)

Runs on push to `main` (and manually):

- reruns validation checks
- deploys static app to Cloudflare Pages
- deploys Worker API to production

Required GitHub secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Monitoring

### Uptime checks

`Uptime Monitor` workflow (`.github/workflows/uptime-monitor.yml`) runs every 30 minutes and checks:

- public site root URL
- worker `/api/health` endpoint

Optional GitHub repository variables:

- `UPTIME_SITE_URL`
- `UPTIME_API_BASE_URL`

### Error tracking

The worker emits structured error logs and supports optional webhook forwarding for unhandled exceptions.

Set a worker secret to enable alerts:

```bash
cd worker
wrangler secret put ERROR_WEBHOOK_URL
```

Accepted webhook format: JSON POST payload (works with Slack/Discord/custom ingestion endpoints).
