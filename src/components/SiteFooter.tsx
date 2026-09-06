import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/store", label: "Store" },
  { href: "/blog", label: "Blog" },
  { href: "/board", label: "Board" },
  { href: "/pulsedex", label: "PulseDex" },
  { href: "/links", label: "Links" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/90">
      <div className="page-shell flex flex-col items-center gap-5 py-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center px-3 text-xs uppercase tracking-[0.14em] text-degen-cream/70 transition-colors hover:text-degen-neon"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-center text-[11px] tracking-wide text-degen-cream/40">
          Degen Emporium. PulseChain first. Merch that hits.
        </p>
      </div>
    </footer>
  );
}
