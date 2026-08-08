import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

const base =
  "group inline-flex items-center gap-3 label border px-6 py-4 transition-colors duration-200";

const variants: Record<Variant, string> = {
  solid:
    "border-signal bg-signal text-white hover:border-signal-deep hover:bg-signal-deep",
  outline:
    "border-ink text-ink hover:bg-ink hover:text-paper",
  ghost:
    "border-transparent text-ink-soft hover:border-rule hover:text-ink",
};

export function Button({
  href,
  variant = "solid",
  children,
  className = "",
  ...rest
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "children">) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
