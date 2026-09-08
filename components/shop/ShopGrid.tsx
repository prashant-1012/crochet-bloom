"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils/cn";
import { CATEGORY_LABELS } from "@/lib/constants";
import type { Product, ProductCategory } from "@/lib/types/product";

type Filter = "all" | ProductCategory;

interface ShopGridProps {
  products: Product[];
}

export function ShopGrid({ products }: ShopGridProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const categories = useMemo(() => {
    const counts = products.reduce<Record<ProductCategory, number>>(
      (acc, product) => {
        acc[product.category] = (acc[product.category] ?? 0) + 1;
        return acc;
      },
      { bouquets: 0, keychains: 0, hampers: 0, decor: 0 }
    );

    return (Object.keys(CATEGORY_LABELS) as ProductCategory[])
      .filter((category) => counts[category] > 0)
      .map((category) => ({ category, count: counts[category] }));
  }, [products]);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter by category"
        className="flex gap-2 overflow-x-auto pb-2"
      >
        <FilterChip
          isActive={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All ({products.length})
        </FilterChip>
        {categories.map(({ category, count }) => (
          <FilterChip
            key={category}
            isActive={filter === category}
            onClick={() => setFilter(category)}
          >
            {CATEGORY_LABELS[category]} ({count})
          </FilterChip>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, index) => (
          <Reveal key={product.id} delay={(index % 3) * 0.06} className="h-full">
            <ProductCard product={product} priority={index < 3} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={cn(
        "flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yarn focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        isActive
          ? "border-bloom-dark bg-bloom-dark text-white"
          : "border-warm-gray-light bg-cloud text-charcoal hover:border-yarn hover:text-yarn-dark"
      )}
    >
      {children}
    </button>
  );
}
