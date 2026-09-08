const SELECTORS = ["header", "#main-content", "footer", "#whatsapp-float"];

// Toggles the `inert` attribute on the page's non-overlay landmarks so
// background content can't receive focus (via Tab or a screen reader)
// while a modal drawer/menu is open — see crochet-bloom-docs/12_ACCESSIBILITY.md.
export function setBackgroundInert(isInert: boolean): void {
  for (const selector of SELECTORS) {
    const el = document.querySelector(selector);
    if (!el) continue;
    if (isInert) {
      el.setAttribute("inert", "");
    } else {
      el.removeAttribute("inert");
    }
  }
}
