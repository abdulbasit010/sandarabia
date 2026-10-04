# Sand Arabia — Homepage Design Variants

Three homepage prototypes for client review. Content is sourced from `Sand-Arabia-Digital.pdf`.

## Run locally

```bash
cd sand-arabia
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Use **Compare directions** (bottom-right) to switch between variants during review.

Content source of truth: `src/content/site.ts` (from `Sand-Arabia-Digital.pdf`).  
Imagery: cropped assets in `public/images/`.

## Routes

| Route | Direction |
| --- | --- |
| `/` | Variant overview |
| `/home-variant-1` | Premium Corporate |
| `/home-variant-2` | Modern Futuristic |
| `/home-variant-3` | Bold Editorial Tech |

A floating **Design Variants** panel appears on each homepage for quick switching.

## Notes

- Prototypes only — not a full website build
- Existing production site is unchanged
- Shared content lives in `src/content/site.ts`
