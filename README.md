# Guitar Student Materials Dev

Live site:
- https://guitar-students-live.pages.dev
- https://7540121e.guitar-students-live.pages.dev

Live API:
- https://guitar-club-api.rootsofreason.workers.dev/api/health

## Local development

Frontend (static):
- open `index.html` or serve the repo root with any static server

Worker API:
```bash
cd worker
npm ci
npm run dev
```

## Deploy

Frontend (Cloudflare Pages):
```bash
npx wrangler pages deploy . --project-name guitar-students-live --branch main --commit-dirty=true
```

Worker:
```bash
cd worker
npm run deploy
```
