import Image from "next/image";
import { Blob } from "@/components/ui/Blob";
import { ThreadSwirl } from "@/components/ui/ThreadSwirl";
import { Reveal } from "@/components/ui/Reveal";

export function MeetTheMakerHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-16 xl:px-12">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-yarn-dark">
            About Us
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
            The Story Behind Crochet Bloom
          </h1>
          <p className="mt-4 text-lg text-warm-gray">
            Handmade flowers that don&apos;t fade, made one stitch at a time.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto h-[380px] w-[350px] sm:h-[440px] sm:w-[405px]">
            <Blob
              color="var(--color-bloom)"
              className="left-[-10%] top-[-8%] h-56 w-56"
            />
            <ThreadSwirl
              color="var(--color-yarn)"
              className="bottom-[-8%] right-[-8%] h-64 w-64"
            />
            <Image
              src="/images/maker-2.png"
              alt="A maker hand-crocheting with yarn, sitting cross-legged"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1024px) 405px, 350px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
