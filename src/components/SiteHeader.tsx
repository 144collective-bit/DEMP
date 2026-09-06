import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/store", label: "Store" },
  { href: "/blog", label: "Blog" },
  { href: "/board", label: "Board" },
  { href: "/pulsedex", label: "PulseDex" },
  { href: "/links", label: "Links" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-degen-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-main.png"
            alt="The Degen Emporium"
            width={48}
            height={48}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            priority
          />
          <span className="hidden font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-degen-cream sm:inline">
            DEGEN EMPORIUM
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.12em] text-degen-cream/70 sm:gap-x-5 sm:text-xs"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-degen-neon transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
