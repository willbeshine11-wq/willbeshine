import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline-dark" | "outline-light" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-blue-500 text-graphite-950 hover:bg-blue-400 focus-visible:outline-blue-600",
  "outline-dark":
    "border border-graphite-800/25 text-graphite-900 hover:border-graphite-800 hover:bg-graphite-900 hover:text-white focus-visible:outline-graphite-800",
  "outline-light":
    "border border-white/40 text-white hover:border-white hover:bg-white hover:text-graphite-950 focus-visible:outline-white",
  ghost: "text-graphite-900 hover:text-blue-600 focus-visible:outline-blue-600",
};

type Props = {
  href: string;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export default function Button({
  href,
  variant = "primary",
  withArrow = false,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
      {withArrow && <ArrowRight className="size-4" aria-hidden="true" />}
    </Link>
  );
}
