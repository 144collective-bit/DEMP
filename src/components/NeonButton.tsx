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
      ? "min-h-[64px] px-8 sm:px-12 text-lg sm:text-2xl"
      : "min-h-[48px] px-6 text-sm sm:text-base";

  return (
    <Link href={href} className={`neon-btn ${sizing} ${className}`}>
      {children}
    </Link>
  );
}
