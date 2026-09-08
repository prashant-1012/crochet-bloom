# 14 — Folder Structure

This is the target end-state of the same repository — most paths are
identical to the reference project's structure (proven, no reason to
reinvent), with toddler-specific files removed. See
[20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md) for the exact list of what
gets deleted and when.

```
crochet-bloom/
├── app/
│   ├── layout.tsx              (root layout: fonts, CartProvider, Navbar, Footer, WhatsAppFloat, JSON-LD)
│   ├── page.tsx                (Home — composes all section components)
│   ├── globals.css             (Tailwind v4 @theme tokens, base styles)
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── shop/
│   │   └── page.tsx
│   ├── testimonials/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── MeetTheMaker.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── cart/
│   │   ├── CartProvider.tsx
│   │   ├── CartButton.tsx
│   │   ├── CartDrawer.tsx
│   │   └── CartItemRow.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Blob.tsx
│   │   ├── ThreadSwirl.tsx
│   │   ├── ProductCard.tsx
│   │   ├── QuantityStepper.tsx
│   │   ├── Wordmark.tsx
│   │   ├── TestimonialsColumn.tsx (auto-scrolling marquee column, used on /testimonials)
│   │   └── Reveal.tsx           (client-only scroll-reveal wrapper, see 10_ANIMATION_GUIDELINES)
│   └── shared/
│       ├── WhatsAppFloat.tsx
│       └── JsonLd.tsx
│
├── lib/
│   ├── data/
│   │   ├── products.ts
│   │   └── testimonials.ts
│   ├── types/
│   │   ├── product.ts
│   │   └── cart.ts
│   ├── utils/
│   │   ├── format-price.ts
│   │   ├── whatsapp.ts
│   │   └── cn.ts               (clsx wrapper for conditional classNames)
│   └── constants.ts             (site name, nav links, WhatsApp number, placeholder contact info)
│
├── public/
│   └── images/                  (Crochet Bloom assets, migrated from crochet-bloom-assets/)
│
└── crochet-bloom-docs/          (this documentation)
```

## Rules

- `lib/data/*` files are the **single source of truth** for content —
  components never hardcode product/testimonial content inline.
- `lib/types/*` defines the shape every data file and component prop
  must conform to — see
  [15_DATA_STRUCTURE.md](./15_DATA_STRUCTURE.md).
- No component duplicates logic that already exists in `lib/utils/` —
  e.g. price formatting always goes through `format-price.ts`.
- Path alias `@/*` (already configured in `tsconfig.json`) is used for
  all cross-folder imports instead of relative `../../../` chains.
- No `lib/types/blog.ts` and no `lib/data/blogPosts.ts` — no blog in
  this project's scope.
