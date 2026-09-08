import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/ui/Blob";
import { ThreadSwirl } from "@/components/ui/ThreadSwirl";
import { Reveal } from "@/components/ui/Reveal";

// TODO: personalize with the real maker's name, photo, and personal story if desired.
// Copy is deliberately written in a "we/the maker" voice rather than a named
// first-person persona, since /images/maker-1.png and maker-2.png are stock
// photography, not an actual photo of whoever runs this shop — see
// crochet-bloom-docs/20_CLAUDE_NOTES.md.
export function MeetTheMaker() {
  return (
    <section
      id="meet-the-maker"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28 xl:px-12"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto h-[380px] w-[260px] sm:h-[440px] sm:w-[300px]">
            <Blob
              color="var(--color-bloom)"
              className="left-[-12%] top-[-6%] h-56 w-56"
            />
            <ThreadSwirl
              color="var(--color-yarn)"
              className="bottom-[-8%] right-[-14%] h-60 w-60"
            />
            <Image
              src="/images/maker-1.png"
              alt="A maker wearing a hand-crocheted hat, smiling"
              fill
              className="object-contain"
              sizes="(min-width: 640px) 300px, 260px"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Meet the Maker"
            title="The Hands Behind Every Bloom"
            align="left"
          />
          <p className="mt-6 text-lg text-warm-gray">
            Crochet Bloom started the way most handmade businesses do — with
            too much yarn, a lot of patience, and a habit of turning leftover
            thread into flowers instead of throwing it away. What began as
            gifts for friends slowly turned into something people wanted to
            buy for themselves.
          </p>
          <p className="mt-4 text-lg text-warm-gray">
            Every bouquet, keychain, and gift here is still made the same way
            it always has been — one stitch at a time, by hand, made to order
            rather than pulled off a shelf.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary" size="lg">
              Read Our Story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
