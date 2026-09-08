# 08 — Typography

## Body/UI face — Geist Sans (kept from the reference project)

`app/layout.tsx` already loads **Geist Sans** via `next/font/google`,
exposed as a CSS variable and wired into Tailwind's `@theme inline` as
`--font-sans`. It's a strong, clean, highly legible UI face — good for
body text, nav, buttons, forms — and there's no brand reason to
replace it.

`Geist Mono` (also loaded in the reference project) is **dropped** —
it was unused there beyond being wired up, and this site has no code
snippets or tabular/monospace need.

## Display face for headings — proposed: Fraunces

The reference project used Fredoka for headings, which read as
confidently "kids/toddler" — appropriate there, wrong here. For a
handmade, artisanal, gifting brand, **Fraunces** (Google Font) is
proposed instead: a warm serif with soft, slightly organic curves
(it has variable "soft"/optical-size grades built specifically to
read as less rigid than a standard editorial serif) — it reads as
crafted and boutique rather than corporate, without tipping into
overly formal wedding-invitation territory the way a classic serif
like Playfair Display can.

This is a proposal, not yet pixel-tested in the browser against real
content — confirm/adjust once the Hero section is built and visible
(Step 2 of the roadmap), the same way the reference project's font
choice was locked in after seeing it render.

```ts
// app/layout.tsx
import { Fraunces } from 'next/font/google'

const fraunces = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal'],
})
```

Body/UI text stays on Geist Sans (`font-sans`); only heading-level
elements get `font-display`.

## Type scale

| Token | Size (mobile → desktop) | Weight | Use |
|---|---|---|---|
| Display / Hero H1 | `text-4xl` → `text-6xl/7xl` | 600 | Hero headline only |
| H2 | `text-3xl` → `text-4xl/5xl` | 600 | Section titles |
| H3 | `text-xl` → `text-2xl` | 600 | Card titles, sub-sections |
| Body Large | `text-lg` | 400 | Hero subhead, intro paragraphs |
| Body | `text-base` | 400 | Default paragraph text |
| Small | `text-sm` | 400/500 | Meta text, labels, captions |
| Button | `text-base` | 600 | All CTA buttons |

Fraunces reads well at slightly lower weights than Fredoka did (600
rather than 700 for most headings) since its warmth comes from letter
shape, not boldness — worth confirming visually once built rather than
assuming the reference project's weights transfer directly.

## Rules

- Line-height: generous for body (`leading-relaxed`), tighter for
  large display headings (`leading-tight`).
- Max line length for body copy: constrain paragraph containers to
  `max-w-prose` (~65ch) for readability.
- Never use more than 2 font families total (one sans for UI/body, one
  display for headings).
- All heading levels must remain semantically correct (one `<h1>` per
  page) regardless of visual size — accessibility over convenience.
