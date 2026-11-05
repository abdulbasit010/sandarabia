# Sand Arabia — Corporate Website

Production website for **Sand Arabia P.L.L.C** (Communications & Information Technology), built on the approved **Variant 2 — Modern / Futuristic** design direction.

## Technology stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Getting started

```bash
cd sand-arabia
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Site map

| Route | Purpose |
| --- | --- |
| `/` | Homepage |
| `/about` | Company overview, values, ESG, leadership |
| `/services` | Services & product portfolio |
| `/services/[slug]` | Individual service detail |
| `/projects` | Landmark projects |
| `/projects/[slug]` | Project detail |
| `/clients` | Key clients |
| `/contact` | Offices + inquiry form |

## Content source of truth

Canonical copy and data live in `src/content/site.ts`, compiled from:

- Company profile / presentation draft (2027)
- Services flyer (2025)
- Sand Arabia digital profile PDF
- Verified contact details from [sandarabia.com](https://www.sandarabia.com/)

Do not invent clients, projects, certifications, or contact details outside that file.

## Environment variables

Copy `.env.example` to `.env.local` and configure as needed.

| Variable | Required | Purpose |
| --- | --- | --- |
| `SMTP_HOST` | Yes (for form) | SMTP host (e.g. `mail.sandarabia.com`) |
| `SMTP_PORT` | No | SMTP port (default `465`) |
| `SMTP_SECURE` | No | `true` for TLS on 465 (default when port is 465) |
| `SMTP_USER` | Yes (for form) | SMTP username (e.g. `sales@sandarabia.com`) |
| `SMTP_PASS` | Yes (for form) | SMTP password |
| `CONTACT_TO_EMAIL` | Yes (for form) | Inbox that receives inquiries |
| `CONTACT_FROM_EMAIL` | No | From address (defaults to `SMTP_USER`) |

Contact form delivery uses **SMTP only** (no third-party email API). If SMTP env vars are incomplete, `/api/contact` returns HTTP 503 and the UI does **not** show a false success state.

## Deployment

1. Install dependencies: `npm install`
2. Set environment variables on the host (see above)
3. Build: `npm run build`
4. Start: `npm run start`

Compatible with Node hosting (Vercel, Railway, VPS, etc.). App Router uses static generation for content pages plus a server route for `/api/contact`.

Ensure the production domain matches SEO expectations (`siteConfig.url` in `src/content/site.ts` currently uses `https://www.sandarabia.com`).

## Assets

Brand imagery lives under `public/images/`. The official logo is `public/images/logo-official.png`.

## Notes

- Variants 1 and 3 from the homepage exploration phase have been removed.
- Arabic display name and tagline are included where appropriate; the primary site language is English.
