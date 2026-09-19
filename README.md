# Team Vikram

Official website for **Team Vikram** — a student-led aerospace engineering team from Rajalakshmi Engineering College (REC), Chennai, competing in IN-SPACe Rocketry, CanSat, and Drone competitions nationally and internationally.

🏆 **3rd Rank All India — SIRC 2026** | 🛰️ IN-SPACe CanSat 2026 | ✈️ Spaceport America Cup

🌐 **Live:** [teamvikram.in](https://www.teamvikram.in)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 16** (App Router) + TypeScript |
| Styling | **Tailwind CSS v4** + custom `globals.css` |
| Fonts | **Orbitron** (display) · **Space Grotesk** (body) · **Inter** (UI) |
| Animation | **Framer Motion** + **GSAP** |
| 3D | **Three.js** · `@react-three/fiber` · `@react-three/drei` |
| Contact | Google Apps Script endpoint (server-side, no CORS) |
| SEO | `sitemap.ts` · `robots.ts` · `manifest.ts` · JSON-LD schema |

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Home — hero, mission video, feature tiles, stats |
| `/team` | `src/app/team/page.tsx` | Founding leads carousel + full team roster |
| `/project` | `src/app/project/page.tsx` | Rocketry, Drone & CanSat division details |
| `/sponsorship` | `src/app/sponsorship/page.tsx` | Sponsorship tiers, benefits & FAQ |
| `/contact` | `src/app/contact/page.tsx` | Contact form (Google Apps Script) |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** The dev server uses Turbopack by default (`next dev --turbo`).

---

## Configure Content

All site data is centralised in [`src/lib/data.ts`](src/lib/data.ts):

| Export | Purpose |
|---|---|
| `SITE` | Name, email, phone, socials, competition, countdown target |
| `FOUNDING_LEADS` | Carousel members (name, role, photo) |
| `TEAM_MEMBERS` | Full roster — sorted A–Z, grouped by division |
| `MENTOR` | Faculty advisor info |
| `SPONSOR_TIERS` | Pricing and benefits per tier |
| `IMPACT_STATS` | Stats strip (rank, teams, projects) |
| `MISSION_HIGHLIGHTS` | Timeline achievements |
| `FEATURE_TILES` | Rocketry / Drone / CanSat feature cards |
| `ROCKETRY_DIVISION` | Rocketry division detail + projects |
| `DRONE_DIVISION` | Drone division detail + projects |
| `GARUDA_DIVISION` | CanSat division detail + milestones |

### Team Member Groups

Members are typed by division:

```ts
group: "Rocketry" | "Drone Tech" | "CanSat & Hardware" | "CanSat & Software" | "Software & Ground Station" | "Outreach"
```

---

## Contact Form

1. Deploy a Google Apps Script as a web app (POST, anyone)
2. Copy `.env.example` → `.env.local`
3. Set:

```env
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/...
```

Without a URL, the form falls back to a mock success response (useful for local testing).

---

## Static Files (`public/`)

| Path | URL | Purpose |
|---|---|---|
| `images/vikram-logo-white.png` | `/images/vikram-logo-white.png` | Primary brand logo |
| `images/logo-light.png` | `/images/logo-light.png` | Light variant |
| `images/logo-dark.png` | `/images/logo-dark.png` | Dark variant |
| `images/team/` | `/images/team/...` | Team member photos |
| `sitemap.xml` | `/sitemap.xml` | XML sitemap |
| `robots.txt` | `/robots.txt` | Crawler directives |

---

## SEO

- **Metadata** — title template, OG image, Twitter card in `src/app/layout.tsx`
- **Sitemap** — all 5 routes with priorities in `src/app/sitemap.ts`
- **Robots** — allows all crawlers, blocks `/_next/` and `/api/`
- **Manifest** — PWA manifest via `src/app/manifest.ts`
- **JSON-LD** — `Organization` + `WebSite` schema injected in layout
- **Google Search Console** — verified via `public/google0b058b092ac4cf4c.html`

---

## Deploy (Vercel)

1. Connect the repo to [Vercel](https://vercel.com)
2. Set environment variables (`NEXT_PUBLIC_APPS_SCRIPT_URL`)
3. Deploy — Next.js App Router is auto-detected

Optional assets to add:

- `public/docs/sponsorship-deck.pdf`
- `public/docs/technical-report.pdf`

---

## Remotes

| Remote | URL |
|---|---|
| `origin` | https://github.com/RoshinRG/TEAM.VIKRAM |
| `teamvikramrec` | https://github.com/teamvikramrec/Team-Vikram |
