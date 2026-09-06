import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "lg" | "md";
};

export function NeonButton({
  href,
  children,
  className = "",
  size = "lg",
}: Props) {
  const sizing =
    size === "lg"
      ? "min-h-14 px-8 text-base sm:min-h-16 sm:px-12 sm:text-xl"
      : "min-h-12 px-6 text-sm sm:text-base";

  return (
    <Link href={href} className={`neon-btn ${sizing} ${className}`}>
      {children}
    </Link>
  );
}
