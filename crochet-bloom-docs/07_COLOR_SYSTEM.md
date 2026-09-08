# 07 — Color System

The palette below is sampled directly from the actual logo
(`crochet-bloom-assets/logo.png`), not guessed — the reference
project's docs record a case where an invented palette had to be
thrown out and redone once actual pixel sampling was done, so this
project started with sampling from the start.

## How it was sampled

The logo is a "CB" monogram: a blue gradient "C" and a pink/rose
gradient "B", with a small pink/white striped yarn ball and thread
swirl. Colors were extracted programmatically — every pixel above 30%
saturation was bucketed by hue into a "blue" cluster (190°–250°) and a
"pink/rose" cluster (320°–20°), then averaged, with the darkest
lightness value in each cluster also captured as a candidate "dark"
variant for button-fill contrast:

- **Pink/rose cluster** (9,813 sampled pixels): average `#F84E8B`,
  darkest `#EF115A`.
- **Blue cluster** (7,131 sampled pixels): average `#1D8AE5`, darkest
  `#0262CC`.

Unlike the reference project's logo (which had three distinctly
colored words, yielding three brand hues), Crochet Bloom's logo has
**two** dominant hues, not three. Rather than invent a third "brand"
color to match the reference project's structure, this palette stays
at two — the neutrals below (cream, charcoal, warm gray) are utility
tones, not brand assertions, so they're reused from the reference
project's already-contrast-validated values rather than invented
fresh.

## Core palette

| Name | Hex | Sampled from | Role |
|---|---|---|---|
| Bloom (Primary) | `#F84E8B` | Average of the "B" gradient | Brand color, text/icon/badge use, primary CTA identity |
| Bloom Dark | `#D70F51` | Darkened from the sampled dark end (`#EF115A`) for contrast | Actual button fill (see contrast note below) |
| Yarn (Secondary) | `#1D8AE5` | Average of the "C" gradient | Links, secondary badges, secondary button border/text |
| Yarn Dark | `#0262CC` | Darkest sampled value in the blue cluster | Section eyebrow labels, secondary button fill on hover |
| Cream (Background) | `#FFFBF2` | Reused from the reference project — warm neutral, not brand-specific | Primary page background |
| Cloud White | `#FFFFFF` | — | Card surfaces on top of Cream |
| Charcoal (Text) | `#2B2A28` | Reused — neutral, not brand-specific | Primary text |
| Warm Gray | `#726D65` | Reused, already contrast-validated at 4.97:1 on Cream | Secondary text, muted labels, borders |
| Warm Gray Light | `#E8E3D9` | Reused | Dividers, subtle borders |

## Usage rules

- **One primary CTA color per screen**: Bloom Dark for the dominant
  action (Add to Cart, Checkout, main Hero CTA).
- **Yarn** is used for links, secondary actions, badges, and section
  eyebrow labels.
- Text on Bloom buttons: use **white**, and use **Bloom Dark**
  (`#D70F51`) as the actual button fill rather than the brighter base
  Bloom — see the contrast table below. Reserve bright Bloom
  (`#F84E8B`) for text, icons, badges, and the `Wordmark` component,
  where it doesn't need to pass solid-fill text contrast rules.
- Product photography carries the site's actual color variety
  (sunflower yellow, rose red, tulip purple, forget-me-not blue,
  etc.) — the UI chrome itself stays disciplined to the two-hue system
  above so the products, not the interface, read as colorful.

## Accessibility (contrast) — measured, not estimated

| Pairing | Ratio | Verdict |
|---|---|---|
| Charcoal `#2B2A28` on Cream `#FFFBF2` | 13.88:1 | AAA — primary body text |
| Warm Gray `#726D65` on Cream | 4.97:1 | AA — secondary text at any size |
| White on Bloom Dark `#D70F51` | 5.15:1 | AA — safe for button text |
| Bloom Dark text on Cream | 4.99:1 | AA — safe for body-sized text/links |
| White on bright Bloom `#F84E8B` | 3.25:1 | **Fails AA** for normal text — never use white text on bright Bloom as a solid fill |
| Bright Bloom text on Cream | 3.15:1 | **Fails AA** for body-sized text — bright Bloom is for large text/icons/badges only, not body copy |
| White on Yarn Dark `#0262CC` | 5.80:1 | AA — safe for button text |
| Yarn Dark text on Cream | 5.61:1 | AA — safe for eyebrow labels, links |
| Bright Yarn text on Cream | 3.49:1 | **Fails AA** for body-sized text — same rule as bright Bloom, large-text/icon use only |

Same lesson the reference project learned the hard way: the bright,
saturated brand hues sampled straight from a logo are usually too
light to pass 4.5:1 against a light background or with white text at
body-text sizes. This project starts with the darkened variants
already validated above, rather than discovering the failure via a
Lighthouse pass later.

## The `Wordmark` component

`components/ui/Wordmark.tsx` renders "Crochet" / "Bloom" each in their
logo-matched color (Yarn / Bloom), with an optional tagline beneath.
Used anywhere the brand name appears as text rather than as the
`<Image>` logo — e.g. the Footer, and optionally the Hero.

## CSS custom properties (in `globals.css`)

```css
:root {
  --bloom: #f84e8b;
  --bloom-dark: #d70f51;
  --yarn: #1d8ae5;
  --yarn-dark: #0262cc;
  --cream: #fffbf2;
  --cloud: #ffffff;
  --charcoal: #2b2a28;
  --warm-gray: #726d65;
  --warm-gray-light: #e8e3d9;

  --shadow-soft: 0 2px 8px rgba(43, 42, 40, 0.06), 0 8px 24px rgba(43, 42, 40, 0.06);
  --shadow-lift: 0 8px 16px rgba(43, 42, 40, 0.08), 0 16px 40px rgba(43, 42, 40, 0.1);
}
```

These get mapped into Tailwind v4's `@theme inline` block so they're
usable as `bg-bloom-dark`, `text-charcoal`, etc. — see
[06_DESIGN_SYSTEM.md](./06_DESIGN_SYSTEM.md).
