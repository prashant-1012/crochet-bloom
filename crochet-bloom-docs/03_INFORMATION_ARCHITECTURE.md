# 03 — Information Architecture

## Primary navigation

```
Home · Shop · Testimonials · About · Contact          [Cart icon w/ badge]
```

- **Home**, **About**, **Contact** are conceptually sections, but
  About and Contact also get their own dedicated routes (`/about`,
  `/contact`) for direct linkability and SEO — the navbar links to the
  routes; the homepage additionally surfaces condensed versions of
  About/Testimonials/Contact as scroll sections so a single-page
  visitor gets the full pitch without navigating away.
- **Testimonials** also gets its own dedicated route (`/testimonials`)
  — **revised 2026-09-09**: the initial plan kept this as a homepage
  section only, but the owner asked for the reference project's
  dedicated testimonials page (the scrolling 3-column marquee layout)
  back, with a full ~20-testimonial set. The homepage section stays
  too, as a shorter preview with a "View All Testimonials" link into
  the full page — same relationship the reference project had between
  its own homepage section and dedicated page.
- **Cart** is not a route — it's a drawer, triggered from anywhere.
- No **Blog** in this phase — that part of the scope reduction still
  stands.

## Homepage section order (top → bottom)

1. Hero
2. Featured Products
3. Meet the Maker (condensed)
4. Testimonials
5. Contact (condensed)
6. Footer

This order is deliberate: hook → product proof → trust (who's behind
this, handmade authenticity) → social proof → conversion → utility
links. It's a shorter arc than the reference project's (no Learning
Benefits / Blog Preview equivalent — a handmade gifting catalog
doesn't need an educational-value section). Don't reorder without
re-checking this narrative arc.

## Route map

| Route | Purpose |
|---|---|
| `/` | Homepage — all sections above |
| `/shop` | Full product catalog, grouped by category |
| `/shop/[slug]` | Deferred — only add if card-level info stops being enough (e.g. care instructions, customization notes per product grow lengthy). Flag to the user before building. |
| `/testimonials` | Full testimonials page — scrolling 3-column marquee of ~20 entries |
| `/about` | Full "Meet the Maker" page |
| `/contact` | Full Contact page (deeper version of homepage section) |

## Global/persistent UI (not routes)

- Navbar (all pages)
- Footer (all pages)
- Cart drawer (all pages)
- Floating WhatsApp button (all pages)

See [04_SITE_MAP.md](./04_SITE_MAP.md) for the file-system mapping of
this structure under `app/`.
