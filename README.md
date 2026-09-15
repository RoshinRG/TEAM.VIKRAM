# Team Vikram

Cinematic aerospace website for **Team Vikram** — a student-led team from Rajalakshmi Engineering College competing in IN-SPACe Rocketry, CanSat, and Drone competitions.

**Design palette:** Frost (`#c8d8f0`) × Accent Blue (`#4f7ef8`) × Violet (`#7c3aed`) on Void Black (`#03040a`).

## Stack

- **Next.js** (App Router) + TypeScript
- **Vanilla CSS** via `globals.css` with Tailwind utility layer
- **Google Fonts** — Orbitron (display) + Space Grotesk (body)
- **Three.js** — 3D timer/animation init via `ThreeTimerInit`
- **Formspree** / Google Apps Script — contact form backend

## Pages

| Route | File |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/team` | `src/app/team/page.tsx` |
| `/sponsorship` | `src/app/sponsorship/page.tsx` |
| `/project` | `src/app/project/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure content

All site data is centralised in [`src/lib/data.ts`](src/lib/data.ts):

- `SITE` — name, email, phone, socials, competition details
- `TEAM_MEMBERS` / `FOUNDING_LEADS` — names, roles, photos, links
- `MENTOR` — faculty advisor info
- `SPONSOR_TIERS` — pricing and benefits per tier
- `IMPACT_STATS`, `MISSION_HIGHLIGHTS`, `FEATURE_TILES`
- `ROCKETRY_DIVISION`, `DRONE_DIVISION`, `GARUDA_DIVISION`

## Contact form

1. Create a form at [formspree.io](https://formspree.io) **or** deploy a Google Apps Script endpoint
2. Copy `.env.example` → `.env.local`
3. Set the relevant variable:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
APPS_SCRIPT_URL=https://script.google.com/macros/s/...
```

Without an ID, the form simulates a successful submit (useful for local UI testing).

## Static files (`public/`)

| File | URL | Purpose |
| --- | --- | --- |
| `sitemap.xml` | `/sitemap.xml` | XML sitemap for search engines |
| `robots.txt` | `/robots.txt` | Crawler directives + sitemap reference |
| `images/` | `/images/...` | Team photos, logo, assets |

## SEO

- `sitemap.xml` covers all 5 routes with priorities and change frequencies
- `robots.txt` allows all crawlers, blocks `/_next/` and `/api/`
- Metadata (title, description, OG, Twitter card) is set in `src/app/layout.tsx`

## Deploy (Vercel)

Connect the repo to Vercel, set env vars, and deploy. Next.js App Router is auto-detected.

Optional assets to add:

- `public/sponsorship-deck.pdf`
- `public/docs/technical-report.pdf`
