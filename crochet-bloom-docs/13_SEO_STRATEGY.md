# 13 — SEO Strategy

## Metadata

- Every route exports a `metadata` object with a unique `title`,
  `description`, and canonical-friendly structure.
- Root layout sets a `title.template` (e.g. `"%s | Crochet Bloom"`) so
  child routes only need their own segment title.
- Root metadata must not be left at the Next.js scaffolding default
  ("Create Next App") — set correctly from Step 0.

## Open Graph / social

- Use the file-convention `opengraph-image` (static image or generated
  via `opengraph-image.tsx`) at the root so shared links (Instagram,
  WhatsApp — the primary discovery/referral channels per
  [02_USER_PERSONAS.md](./02_USER_PERSONAS.md)) render a rich preview
  card.

## Structured data (JSON-LD)

- `Organization` schema in the root layout (name, logo, URL, contact
  point — using placeholder contact info until real values are
  provided).
- `Product` schema per item on `/shop` (name, image, price,
  availability, category) — note: price/availability are placeholder
  values until real product data lands.

## Sitemap & robots

- `app/sitemap.ts` — generated sitemap covering `/`, `/shop`, `/about`,
  `/contact`.
- `app/robots.ts` — allow all, point to the sitemap.

## Performance-as-SEO

- All images via `next/image` (automatic sizing, lazy-loading, modern
  formats).
- Fonts already optimized via `next/font/google` (self-hosted, no
  render-blocking external font requests).

## Content/keyword notes

- Primary intent keywords to weave naturally into copy: "crochet
  flower bouquet," "handmade crochet flowers," "crochet gift hamper,"
  "crochet keychain," "everlasting flower bouquet," "amigurumi
  flowers." Don't keyword-stuff — copy quality and the maker's
  authentic voice matter more than density for a handmade brand.
