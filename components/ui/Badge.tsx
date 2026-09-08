import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type BadgeVariant = "bloom" | "yarn" | "neutral";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  bloom: "bg-bloom/15 text-bloom-dark",
  yarn: "bg-yarn/15 text-yarn-dark",
  neutral: "bg-warm-gray-light text-charcoal",
};

export function Badge({
  variant = "bloom",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
