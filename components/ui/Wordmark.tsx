import { cn } from "@/lib/utils/cn";

type WordmarkSize = "sm" | "md" | "lg" | "xl";

interface WordmarkProps {
  size?: WordmarkSize;
  tagline?: boolean;
  className?: string;
}

const sizes: Record<WordmarkSize, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-5xl sm:text-6xl",
};

// Colors sampled directly from /crochet-bloom-assets/logo.png (see
// crochet-bloom-docs/07_COLOR_SYSTEM.md) so any text rendering of the brand
// name matches the logo's blue "C" / pink "B" exactly.
export function Wordmark({ size = "md", tagline = false, className }: WordmarkProps) {
  return (
    <span className={cn("inline-flex flex-col", className)}>
      <span className={cn("font-display font-semibold leading-none", sizes[size])}>
        <span className="text-yarn">Crochet</span>{" "}
        <span className="text-bloom">Bloom</span>
      </span>
      {tagline && (
        <span className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-warm-gray">
          Handmade <span className="text-bloom">•</span> Made to Order
        </span>
      )}
    </span>
  );
}
