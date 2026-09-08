import type { Metadata } from "next";
import { Scissors, Flower2, Gift } from "lucide-react";
import { MeetTheMakerHero } from "@/components/sections/MeetTheMakerHero";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Crochet Bloom — handmade crochet flower bouquets, keychains, and gifts, made to order, one stitch at a time.",
};

const values = [
  {
    icon: Scissors,
    word: "Craft",
    variant: "yarn" as const,
    description:
      "Every piece is stitched entirely by hand — no molds, no machines, no two exactly alike.",
  },
  {
    icon: Flower2,
    word: "Bloom",
    variant: "bloom" as const,
    description:
      "Crochet flowers that hold their color and shape long after real ones would have wilted.",
  },
  {
    icon: Gift,
    word: "Gift",
    variant: "neutral" as const,
    description:
      "Made to order for a specific person and a specific moment — not pulled off a shelf.",
  },
];

const variantClasses = {
  yarn: "bg-yarn/15 text-yarn-dark",
  bloom: "bg-bloom/15 text-bloom-dark",
  neutral: "bg-warm-gray-light text-charcoal",
};

// TODO: personalize with the real maker's name, photo, and personal story if desired
export default function AboutPage() {
  return (
    <>
      <MeetTheMakerHero />

      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24 xl:px-12">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center text-lg text-warm-gray">
            <p>
              Crochet Bloom started the way most handmade businesses do — with
              too much yarn, a lot of patience, and a habit of turning
              leftover thread into flowers instead of throwing it away. What
              began as gifts for friends slowly turned into something people
              wanted to buy for themselves.
            </p>
            <p>
              There&apos;s no factory behind this shop — just a hook, a lot of
              yarn, and the belief that a gift means more when someone
              actually made it for you. Every bouquet, keychain, and hamper
              here is made to order, one stitch at a time.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.word} delay={index * 0.1} className="h-full">
              <Card className="flex h-full flex-col items-center gap-4 p-8 text-center">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${variantClasses[value.variant]}`}
                >
                  <value.icon size={26} aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-charcoal">
                  {value.word}
                </h3>
                <p className="text-sm text-warm-gray">{value.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
              Ready to Find Your Perfect Bloom?
            </h2>
            <Button href="/shop" size="lg">
              Shop the Collection
            </Button>
          </div>
        </Reveal>
      </div>
    </>
  );
}
