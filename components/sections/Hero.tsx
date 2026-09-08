import Image from "next/image";
import { Button } from "@/components/ui/Button";

function HeroText() {
  return (
    <div className="hero-fade-up flex flex-col items-start gap-4 text-left sm:gap-5">
      <div className="flex max-w-xs flex-col items-start gap-4 sm:max-w-sm sm:gap-5">
        <span className="text-sm font-semibold uppercase tracking-wide text-yarn-dark">
          Bouquets, Keychains &amp; Gifts
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl xl:text-6xl">
          Handmade Blooms That{" "}
          <span className="text-bloom-dark">Never Wilt</span>
        </h1>
        <p className="max-w-xs text-base text-warm-gray sm:max-w-sm sm:text-lg">
          Crochet flower bouquets, keychains, and gifts — hand-stitched to
          order, so the gift lasts as long as the feeling behind it.
        </p>
      </div>
      {/* Deliberately outside the text column's max-w — that constraint was
          squeezing this row narrower than both buttons' natural width,
          wrapping each button's label onto two lines. */}
      <div className="flex flex-wrap gap-3 pt-1">
        <Button href="/shop" size="md">
          Shop Bouquets
        </Button>
        <Button href="#meet-the-maker" variant="secondary" size="md">
          Meet the Maker
        </Button>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full">
      {/*
        Mobile / narrow: also full-bleed, using the image's native 2:3 aspect
        ratio (not a cropped fixed height) so the photo's own blank zones —
        the wall above the bear's head, the bedsheet below its feet — stay
        fully visible at any viewport width instead of being cropped away.
        Text sits in the top (wall) zone, buttons sit in the bottom
        (bedsheet) zone — the two places in this specific photo with room.
      */}
      <div className="relative w-full sm:hidden" style={{ aspectRatio: "2 / 3" }}>
        <Image
          src="/images/hero-mobile.png"
          alt="A hand-crocheted teddy bear wearing a knit hat and scarf, styled on a bed"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="hero-fade-up absolute inset-x-0 top-0 flex flex-col items-start gap-2 px-4 pt-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-yarn-dark">
            Bouquets, Keychains &amp; Gifts
          </span>
          <h1 className="font-display text-3xl font-semibold leading-tight text-charcoal">
            <span className="block">Handmade Blooms</span>
            <span className="block text-bloom-dark">That Never Wilt</span>
          </h1>
        </div>

        <div className="hero-fade-up absolute inset-x-0 bottom-0 flex flex-wrap gap-3 px-4 pb-8">
          <Button href="/shop" size="sm">
            Shop Bouquets
          </Button>
          <Button href="#meet-the-maker" variant="secondary" size="sm">
            Meet the Maker
          </Button>
        </div>
      </div>

      {/* Tablet+/Desktop: full-bleed photo, text overlaid in its own blank
          left-side space — matches crochet-bloom-assets/reference-sections/hero-section.png */}
      <div className="relative hidden h-[620px] w-full overflow-hidden sm:block lg:h-[720px]">
        <Image
          src="/images/hero-desktop.png"
          alt="A hand-crocheted teddy bear wearing a knit hat and scarf, styled on a bed"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10 xl:px-12">
          <HeroText />
        </div>
      </div>
    </section>
  );
}
