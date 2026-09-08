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
- **Built (Step 8)**: `app/opengraph-image.tsx` generates the card via
  `next/og`'s `ImageResponse` — the real logo (read from
  `public/images/logo.png` and embedded as a base64 data URI, not a
  redrawn approximation) plus the "Crochet Bloom" wordmark, the Hero's
  headline, and a one-line description on the Cream background. No
  separate `twitter-image.tsx`: Next.js automatically reuses the
  `opengraph-image` output for both `og:image` and `twitter:image`
  when no dedicated Twitter file exists, confirmed in the rendered
  `<head>` output — a duplicate file would've been redundant.
  `app/icon.tsx` (64×64, circular) and `app/apple-icon.tsx` (180×180,
  square) use the same real-logo approach at favicon scale. The
  original `app/favicon.ico` was the unmodified default Next.js
  scaffold icon (verified via `git log` — untouched since the very
  first "Initial commit from Create Next App"), not a customized asset
  worth preserving, so it was deleted rather than left stale.

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
