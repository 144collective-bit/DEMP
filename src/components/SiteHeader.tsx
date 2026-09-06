"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/store", label: "Store" },
  { href: "/blog", label: "Blog" },
  { href: "/board", label: "Board" },
  { href: "/pulsedex", label: "PulseDex" },
  { href: "/links", label: "Links" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-degen-black/90 backdrop-blur-md">
      <div className="page-shell flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-main.png"
            alt="The Degen Emporium"
            width={48}
            height={48}
            className="h-9 w-9 object-contain sm:h-11 sm:w-11"
            priority
          />
          <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-degen-cream">
            DEGEN EMPORIUM
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center px-2.5 text-[11px] uppercase tracking-[0.12em] text-degen-cream/70 transition-colors hover:text-degen-neon lg:px-3 lg:text-xs"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border-2 border-white/20 text-degen-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span aria-hidden className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[6px] block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[12px] block h-0.5 w-5 bg-current transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-degen-black md:hidden"
        >
          <nav
            aria-label="Mobile"
            className="page-shell flex flex-col py-2 pb-[max(1rem,env(safe-area-inset-bottom))]"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-12 items-center border-b border-white/5 text-sm uppercase tracking-[0.14em] text-degen-cream/85 last:border-b-0 hover:text-degen-neon"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
