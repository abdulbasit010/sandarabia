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
| `CONTACT_WEBHOOK_URL` | No | POST destination for contact form JSON |
| `RESEND_API_KEY` | No | Send form emails via [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | No | Inbox (default `sales@sandarabia.com`) |
| `CONTACT_FROM_EMAIL` | No | From address for Resend |

If neither `CONTACT_WEBHOOK_URL` nor `RESEND_API_KEY` is set, the contact API returns HTTP 503 with a clear message directing users to email or phone. The UI does **not** show a false success state.

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
