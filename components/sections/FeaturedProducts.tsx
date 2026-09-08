import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getFeaturedProducts } from "@/lib/data/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28 xl:px-12">
      <SectionHeading
        eyebrow="Featured Picks"
        title="Our Most-Loved Creations"
        subtitle="Hand-picked bouquets, keychains, and gifts our customers keep coming back for."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={index * 0.08} className="h-full">
            <ProductCard product={product} priority={index < 2} />
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button href="/shop" variant="secondary" size="lg">
          Browse the Full Shop
        </Button>
      </div>
    </section>
  );
}
