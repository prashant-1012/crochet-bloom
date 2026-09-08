import { cn } from "@/lib/utils/cn";

interface ThreadSwirlProps {
  className?: string;
  color?: string;
}

// A loose, single-line loop of thread/yarn — a callback to the yarn ball and
// thread swirl in the actual logo, used as the reference project's generic
// <Blob /> shapes were: a low-opacity decorative accent behind content, never
// as a literal illustration. Stroke-based (not filled), so it reads as a
// thread rather than a solid blob shape.
export function ThreadSwirl({ className, color = "var(--color-yarn)" }: ThreadSwirlProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("absolute -z-10 opacity-20", className)}
    >
      <path
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M28,132 C10,104 18,64 54,44 C96,20 152,34 166,74 C178,108 152,142 114,138 C84,135 64,112 74,86 C82,66 108,58 122,74 C134,88 126,108 108,110 C96,111 88,102 92,92"
      />
    </svg>
  );
}
