<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Base44 dev environment

This is a Next.js 16 app (Turbopack) — a Cookiebot/GTM consent demo shop. No database; orders are simulated in-browser.

### Running
- `docker compose -f docker-compose.base44.yml up -d` starts the dev server on port 3000.
- Node 24 (per `.nvmrc`); deps installed at container start via `npm ci` into a named volume.
- Source is bind-mounted at `/app`; edits hot-reload via Turbopack.

### Environment variables (all optional — public browser identifiers, not secrets)
- `NEXT_PUBLIC_GTM_ID` — GTM container ID (e.g. `GTM-XXXXXX`). Blank = no GTM loaded.
- `NEXT_PUBLIC_COOKIEBOT_ID` — Cookiebot Domain Group ID (UUID). Blank = no consent banner.
- `NEXT_PUBLIC_ALLOWED_HOSTS` — comma-separated hostnames for consent validation. Defaults to `localhost,127.0.0.1`.
- When all are blank the app "fails closed": the shop works, no external tags fire.
- `allowedDevOrigins` in `next.config.ts` is driven by `BASE44_PUBLIC_HOST_SUFFIX` so the preview origin can access dev assets/HMR.

### Verifying
- `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` should return `200`.
- Title should be "Fieldnotes — Make room for your ideas".
