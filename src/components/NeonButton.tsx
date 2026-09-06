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
      ? "min-h-14 px-9 text-base sm:min-h-[4.25rem] sm:px-14 sm:text-xl"
      : "min-h-12 px-7 text-sm sm:px-8 sm:text-base";

  return (
    <Link href={href} className={`neon-btn ${sizing} ${className}`}>
      <span className="relative z-[1]">{children}</span>
    </Link>
  );
}
