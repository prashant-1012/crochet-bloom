# 06 — Design System

Tailwind CSS v4 is configured CSS-first via `@theme inline` in
`app/globals.css` (no `tailwind.config.js` in this version). All
tokens below are added as CSS custom properties in `globals.css` and
mapped into `@theme inline` — same mechanism as the reference project.

## Spacing scale

Use Tailwind's default scale (4px base). Section vertical padding
standard: `py-20` mobile → `py-28`/`py-32` desktop. Never use arbitrary
one-off spacing values without a reason — stick to the scale for
consistency.

## Border radius

| Token | Value | Use |
|---|---|---|
| `rounded-xl` | 0.75rem | Buttons, inputs, small badges |
| `rounded-2xl` | 1rem | Cards |
| `rounded-3xl` | 1.5rem | Large hero/image panels |
| `rounded-full` | — | Pills, avatar, floating action buttons |

## Shadows

Soft, layered, never harsh — same values as the reference project
(the underlying charcoal-based shadow color still works fine against
Crochet Bloom's warm cream background):

```css
--shadow-soft: 0 2px 8px rgba(43, 42, 40, 0.06), 0 8px 24px rgba(43, 42, 40, 0.06);
--shadow-lift: 0 8px 16px rgba(43, 42, 40, 0.08), 0 16px 40px rgba(43, 42, 40, 0.10);
```

`shadow-soft` for resting cards, `shadow-lift` on hover/active states.

## Decorative motifs

- **Thread swirl** (`<ThreadSwirl />`, replaces the reference
  project's generic `<Blob />`): an organic, single-line SVG curl
  evoking a loose loop of yarn/thread — a direct callback to the
  physical yarn-ball-and-thread detail in the actual logo. Used behind
  hero content and section dividers at low opacity (10–20%), in brand
  colors. Accepts `color`/`className` props, same API shape as the
  reference project's `Blob` so the component is a drop-in swap.
- **Soft blob shapes**: still used as a secondary background texture
  layer behind the thread swirl where a broader soft shape is needed
  (e.g. behind a product photo) — same `<Blob />` component as the
  reference project, ported over unchanged.
- **Floating product photo**: a bouquet/product image given a subtle
  rotate + drop shadow + slow float animation, used in the Hero — same
  pattern as the reference project's "floating workbook."

## Component inventory

See [09_COMPONENT_LIBRARY.md](./09_COMPONENT_LIBRARY.md) for the full
list — this doc defines the visual tokens those components consume.

## Design tokens summary (single source of truth)

| Category | Reference doc |
|---|---|
| Color | [07_COLOR_SYSTEM.md](./07_COLOR_SYSTEM.md) |
| Typography | [08_TYPOGRAPHY.md](./08_TYPOGRAPHY.md) |
| Motion | [10_ANIMATION_GUIDELINES.md](./10_ANIMATION_GUIDELINES.md) |
| Breakpoints | [11_RESPONSIVE_STRATEGY.md](./11_RESPONSIVE_STRATEGY.md) |
