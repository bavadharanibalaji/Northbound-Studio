# Northbound Studio — Design Agency Homepage

A homepage for a fictional design agency, built for the Next.js Developer
Internship task. Four sections — Hero, Services, Portfolio, Contact — with a
compass/navigation motif ("Northbound") carried through the type, color, and
a couple of small recurring details.

## Tech stack

- **Next.js 14** (App Router)
- **React 18**, functional components only
- **Tailwind CSS 3** for styling and dark mode (`class` strategy)
- **next/font** for self-hosted Google Fonts (Fraunces, Space Grotesk, IBM Plex Mono)
- **next/image** for optimized portfolio images (placeholder photos via picsum.photos)

No component libraries or page templates — every section is hand-built for
this brief.

## Setup instructions

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To build for production:

```bash
npm run build
npm start
```

### Deploying to Vercel

Push this repo to GitHub, then import it at [vercel.com/new](https://vercel.com/new).
No environment variables or extra configuration are required — Vercel
detects the Next.js app automatically.

## Project structure

```
app/
  layout.js       # fonts, SEO metadata, dark-mode flash prevention
  page.js          # composes the four sections
  globals.css      # Tailwind entry + base styles
components/
  Navbar.jsx       # nav + dark mode toggle + compass mark
  Hero.jsx         # agency name, tagline, CTA, stats
  Services.jsx     # 4 service cards
  Portfolio.jsx    # 6-project image grid with hover reveal
  Contact.jsx      # form with client-side validation + success state
  Footer.jsx
```

Each section is its own component, imported into `app/page.js`, so sections
can be reordered, reused, or removed independently.

## Features implemented

- All four required sections with the content specified in the brief
- Fully responsive: single column on mobile, grid layouts from `sm`/`md` up
- Contact form with client-side validation (required fields, email format)
  and an inline success message on submit
- Dark mode toggle (persisted to `localStorage`, respects system preference
  on first visit, no flash of unstyled theme on load)
- SEO metadata (title, description, keywords, Open Graph) via the App
  Router `metadata` export
- Images served through `next/image` for automatic optimization and
  responsive `sizes`
- Subtle motion (hover states, a slow-spinning compass mark in the hero)
  that respects `prefers-reduced-motion`

## Assumptions

- The brief left content and imagery open, so agency name, copy, and
  portfolio projects are original placeholder content built around a
  "Northbound" / compass-bearing concept rather than lorem ipsum.
- Portfolio thumbnails use seeded `picsum.photos` URLs as stand-ins for real
  project photography — swap the `src` values in `components/Portfolio.jsx`
  for real assets in `/public` when available.
- The contact form validates and shows a success state on submit but does
  not call a backend. Wiring it to an API route, email service, or CRM
  would be a follow-up step outside the scope of this task.
