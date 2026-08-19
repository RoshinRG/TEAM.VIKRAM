# Team Vikram

Cinematic aerospace marketing site for **Team Vikram** student CanSat team competing in IN-SPACe CanSat competitions.

**Palette:** Galaxy Indigo (`#4B0082`) × Moonstone Silver (`#D0D3D6`) on void black (`#05070D`).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion + GSAP ScrollTrigger
- Vengeance UI components: `NotchNavbar`, `AsciiGlitchRipple`, `PerspectiveCarousel`
- Shared glass/metal `Box` panel
- Formspree-ready contact form

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure content

Edit placeholders in [`src/lib/data.ts`](src/lib/data.ts):

- Team member names, roles, photos
- Institution / mentor
- Stats, social links, email
- Countdown target date

## Contact form

1. Create a form at [formspree.io](https://formspree.io)
2. Copy `.env.example` → `.env.local`
3. Set `NEXT_PUBLIC_FORMSPREE_ID=your_id`

Without an ID, the form simulates a successful submit (useful for local UI testing).

## Deploy (Vercel)

Connect the repo to Vercel, set env vars, and deploy. Bind is automatic via Next.js.

Add optional PDFs:

- `/public/sponsorship-deck.pdf`
- `/public/docs/technical-report.pdf`
