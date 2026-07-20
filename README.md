# CareerHubX — Frontend

A real Next.js 15 (App Router) project, built from the 10 design-phase
artifacts. Shared components are extracted once into `components/ui/` and
`components/layout/` instead of being redefined per page (which the
standalone artifact files did, since each had to be self-contained).

## What's wired up in this scaffold

- Project config: `package.json`, `tailwind.config.ts` (design tokens baked
  in as `primary`/`accent`/`ink`/etc. so pages don't need hex codes),
  `tsconfig.json`, ESLint, `.env.example`
- Shared components: `Button`, `Card`/`GlassCard`, `TrustRing`/`TrustBadge`,
  `Avatar`, `Toggle`, `TopNav`
- `lib/api.ts` — typed fetch client pointed at `NEXT_PUBLIC_API_URL`
  (your Phase 11 FastAPI backend)
- Routes, fully built and connected to real endpoints where noted:
  - `app/(marketing)/page.tsx` — landing page
  - `app/(auth)/{login,register,verify-email,forgot-password}` — **wired
    to real `/auth/*` calls**, not mocked
  - `app/(dashboard)/dashboard` — dashboard shell (stats/recommendations
    currently hardcoded demo data; swap for real fetches, see comments)

## What still needs porting from the artifacts

These phases were fully designed and built as standalone React artifacts
earlier in this project — turning them into routes here is mechanical
(same pattern as the pages above: import shared components, replace local
state with real API calls) but not yet done in this scaffold:

- `app/(auth)/profile-setup` (Phase 2)
- `app/(marketing)/jobs` + `app/(marketing)/jobs/[slug]` (Phase 4)
- `app/(dashboard)/agent` (Phase 5)
- `app/(marketing)/jobs/[slug]/trust` or a drawer component (Phase 6)
- `app/(admin)/admin/*` (Phase 7) — gate behind RBAC using the JWT role claim
- `app/(dashboard)/profile` (Phase 8)
- `app/(dashboard)/notifications` (Phase 9)
- `app/(marketing)/search` (Phase 10)

Ask for any of these to be ported next and they'll follow the exact same
pattern as `login`/`register` above.

## Running locally

```bash
npm install
cp .env.example .env.local   # point NEXT_PUBLIC_API_URL at your backend
npm run dev                  # http://localhost:3000
```

Needs the Phase 11 backend running (locally via its own `docker compose up`,
or deployed) for the auth pages to actually work — they're not mocked.

## Deploying (matches the step-by-step launch plan)

1. Push this folder to its own GitHub repo
2. Import it in Vercel (auto-detects Next.js, zero config needed)
3. Set `NEXT_PUBLIC_API_URL` in Vercel's environment variables to your
   deployed Render backend URL
4. Deploy — Vercel gives you a free `.vercel.app` URL immediately
5. Add your custom domain under Project Settings → Domains once you have one

## Auth token note

`login/page.tsx` currently stashes the access token in `sessionStorage` as
the simplest thing that works with zero extra libraries. Before going
further, replace this with a proper React context (`AuthProvider`) that
holds the token in memory and exposes `useAuth()` — sessionStorage is
readable by any script on the page, which is fine for this scaffold but
not where you want long-term auth state to live.
