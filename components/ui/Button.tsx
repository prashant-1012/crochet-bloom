import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-150 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yarn focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-bloom-dark text-white hover:brightness-95 shadow-soft hover:shadow-lift",
  // Fill sweeps in from the corner via a scaled circular ::before instead of
  // an instant bg swap — same yarn fill color as before, just animated.
  // `motion-reduce:` falls back to the old instant-fill behavior.
  secondary: `relative z-0 overflow-hidden bg-transparent text-yarn-dark border-2 border-yarn
    before:absolute before:inset-0 before:-z-10 before:rounded-[100%] before:bg-yarn
    before:scale-[2.5] before:translate-x-[150%] before:translate-y-[150%]
    before:transition-transform before:duration-500 before:content-['']
    hover:text-white hover:before:translate-x-0 hover:before:translate-y-0
    motion-reduce:before:hidden motion-reduce:hover:bg-yarn`,
  ghost: "bg-transparent text-charcoal hover:bg-warm-gray-light",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
