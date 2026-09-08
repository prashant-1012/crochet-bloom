# 19 — Testing Checklist

Run this checklist after each section (Phase step) and once more
fully at the end. **Step 9 full pass completed 2026-09-09** — see
[20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md) for the detailed findings
and fixes that came out of it. Checked items below were verified via
real headless-Chrome interaction (Puppeteer driving the system's own
Chrome, not just reading the code), not just code review.

## Functional
- [x] Add to cart from Featured Products and `/shop` both work and
      merge quantities correctly for the same product
- [x] `/shop` category grouping/filtering (Bouquets, Keychains,
      Hampers, Decor) shows the correct products per category
- [x] Cart drawer opens/closes from the navbar on every route
- [x] Quantity stepper never goes below 1; remove button removes the
      line entirely
- [x] Cart persists across a full page reload (`localStorage`)
- [x] Cart persists across navigation between routes
- [x] Checkout button opens WhatsApp with correctly formatted message
      (verified item names, quantities, per-line price, total items,
      total price all match)
- [ ] Empty cart shows an empty state, checkout CTA disabled/hidden —
      the empty state itself was exercised (fresh-session drawer),
      but not explicitly re-verified after emptying a populated cart
      via repeated removes. Low risk (same conditional render either
      way), but not literally checked — worth a quick manual look.
- [x] Floating WhatsApp button opens a general-inquiry/custom-order
      chat, unrelated to cart contents
- [x] All nav links route correctly; mobile menu opens/closes and
      closes on route change
- [x] Contact form submission opens WhatsApp with the form content
      pre-filled

## Responsive (see [11_RESPONSIVE_STRATEGY.md](./11_RESPONSIVE_STRATEGY.md))
- [x] 375px, 390px, 768px, 1024px, 1440px — checked for Home and
      `/shop` specifically (the two most layout-complex pages); not
      individually re-screenshotted for every route at every
      breakpoint, but all routes share the same responsive primitives.
- [x] No horizontal scroll at any breakpoint (measured
      `scrollWidth`/`clientWidth`, not just visual spot-check)
- [x] Touch targets ≥44px on mobile — **found and fixed two real
      violations**: the navbar logo link (40px) and all `/shop`
      category filter chips (38px). Both now meet 44px. See
      [20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md).

## Accessibility (see [12_ACCESSIBILITY.md](./12_ACCESSIBILITY.md))
- [x] Full keyboard traversal: nav (Tab), cart drawer, mobile menu
      checked directly. Product cards and contact form use standard
      native `<button>`/`<input>` elements with no custom tab-index
      handling, so they inherit correct behavior, but weren't
      individually tab-traversed end-to-end.
- [x] Focus trap + `Escape`-to-close verified on cart drawer and
      mobile menu — **this was a real, pre-existing gap**: neither
      component moved focus in, trapped it, or returned it to the
      trigger on close before this pass. Fixed for both — see
      [20_CLAUDE_NOTES.md](./20_CLAUDE_NOTES.md) for the `inert`-based
      implementation.
- [x] All images have appropriate `alt` (or `alt=""` if decorative) —
      swept every `<img>` on Home, `/shop`, `/about`, `/contact`,
      `/testimonials`; zero missing.
- [ ] Color contrast spot-checked — not re-verified in this pass;
      already mathematically validated against real hex values when
      the palette was defined (see
      [07_COLOR_SYSTEM.md](./07_COLOR_SYSTEM.md)'s contrast table),
      not re-derived here.
- [x] `prefers-reduced-motion` respected — confirmed the Hero's CSS
      entrance animation (`.hero-fade-up`) actually resolves to
      `animation: none` under `prefers-reduced-motion: reduce`, not
      just that the media query exists in the stylesheet.

## Performance / SEO
- [ ] Lighthouse run — **not completed**. Chrome was available for
      interaction testing, but a full Lighthouse audit wasn't run in
      this pass; revisit before launch.
- [x] All images use `next/image`, no raw `<img>` tags — every `<img>`
      found during the alt-text sweep was a `next/image`-rendered one
      (Next renders `next/image` as `<img>` under the hood; none were
      hand-written raw tags bypassing it).
- [x] Root metadata no longer says "Create Next App" — confirmed since
      Step 0.
- [x] Sitemap and robots.txt reachable and correct.

## Cross-browser (spot check, not exhaustive)
- [x] Chrome — thoroughly exercised (this pass's primary tool).
- [ ] Safari, Firefox — **not tested**. Neither is available in this
      environment; needs a real device/manual check before launch,
      especially the Safari-vs-Chrome WhatsApp deep-link difference
      this doc already flags.

## Build
- [x] `npm run build` succeeds with no type errors — verified twice
      (before and after this pass's fixes), both clean.
- [x] `npm run lint` passes — including a pre-existing, unrelated
      `react-hooks/set-state-in-effect` error in `Navbar.tsx` that
      predated this project (present since the reference project's
      original scaffolding) — fixed in this pass since it was
      encountered directly while editing that file for the
      touch-target fix.
