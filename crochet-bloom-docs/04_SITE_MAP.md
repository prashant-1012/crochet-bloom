# 04 — Site Map (route → file mapping)

Next.js 16 App Router, file-system based routing under `app/`. This is
the same physical `app/` directory as the reference project — routes
not listed here (`/blog`, `/testimonials`) are removed as part of the
cleanup in the final build phase, see
[20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md).

```
app/
├── layout.tsx              → root layout (Navbar, Footer, CartProvider, WhatsAppFloat)
├── page.tsx                → "/"            Home (all homepage sections)
├── globals.css
├── sitemap.ts               → /sitemap.xml (generated)
├── robots.ts                → /robots.txt (generated)
├── shop/
│   └── page.tsx             → "/shop"        Full catalog
├── about/
│   └── page.tsx             → "/about"
└── contact/
    └── page.tsx             → "/contact"
```

## Notes specific to this Next.js version

(Carried forward from the reference project's analysis — same
`node_modules`, same version, still accurate.)

- `params` in dynamic routes (if `/shop/[slug]` is ever built) are a
  **Promise** and must be awaited: `const { slug } = await params`.
- This version generates global `PageProps<'/route'>` and
  `LayoutProps<'/route'>` helper types automatically during `next
  dev`/`next build` — prefer these over hand-writing the
  `params`/`searchParams` prop types.
- No `middleware.ts` is needed for this project (no auth/redirect
  logic), and this version renamed that file to `proxy.ts` if it's
  ever needed.

## Deferred / not built in this phase

- `/shop/[slug]` product detail pages — only add if the catalog grows
  past what a card grid can communicate, or per-product info (care
  instructions, customization options) needs more room than a card.
- `/blog` — out of scope per the owner's site-scope decision.
- A dedicated `/testimonials` route — Testimonials stays a homepage
  section only for now.
