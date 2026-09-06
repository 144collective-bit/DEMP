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
    <footer className="mt-auto border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:px-6">
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-degen-cream/70"
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
        <p className="text-center text-[11px] tracking-wide text-degen-cream/40">
          Degen Emporium. PulseChain first. Merch that hits.
        </p>
      </div>
    </footer>
  );
}
