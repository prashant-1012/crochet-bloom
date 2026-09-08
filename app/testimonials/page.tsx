import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TestimonialsColumn } from "@/components/ui/TestimonialsColumn";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real feedback from customers who chose handmade crochet bouquets, keychains, and gifts from Crochet Bloom.",
};

const firstColumn = testimonials.slice(0, 7);
const secondColumn = testimonials.slice(7, 14);
const thirdColumn = testimonials.slice(14, 20);

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Are Saying"
          subtitle="Real words from customers who chose handmade over mass-produced, and never looked back."
        />
      </Reveal>

      <div className="mt-12 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <TestimonialsColumn testimonials={firstColumn} duration={17} />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:block"
          duration={21}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:block"
          duration={19}
        />
      </div>

      <Reveal delay={0.1}>
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
  );
}
