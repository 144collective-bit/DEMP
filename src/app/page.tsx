import Image from "next/image";
import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";

const ECOSYSTEM = [
  {
    name: "Pulse",
    src: "/mark-pulse-hex.png",
    href: "/pulsedex",
    alt: "Pulse hex mark",
  },
  {
    name: "HEX",
    src: "/mark-hex.png",
    href: "/store",
    alt: "HEX nested hexagons mark",
  },
  {
    name: "PulseX",
    src: "/mark-pulsex.png",
    href: "/store",
    alt: "PulseX mark",
  },
  {
    name: "PulseDex",
    src: "/pulsedex-wordmark.png",
    href: "/pulsedex",
    alt: "PulseDex wordmark",
    featured: true,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* HERO: one punch, CTA above fold */}
      <section className="relative flex min-h-[calc(100dvh-var(--header-h))] flex-col justify-center py-8 sm:py-10 lg:py-12">
        <div className="page-shell grid items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-10 xl:gap-14">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="section-label mb-3 sm:mb-4">PulseChain first. Always.</p>
            <Image
              src="/logo-main.png"
              alt="The Degen Emporium"
              width={720}
              height={720}
              priority
              className="hero-logo h-auto w-full max-w-[min(100%,22rem)] drop-shadow-[0_0_48px_rgba(0,229,255,0.18)] sm:max-w-[min(100%,28rem)] lg:max-w-none"
            />
            <p className="mt-4 max-w-[28rem] text-sm leading-relaxed text-degen-cream/75 sm:mt-5 sm:text-[0.95rem]">
              Merch that punches. Tools that report the tape. No pitch decks.
              Just the shop and the chain.
            </p>
            <div className="mt-6 w-full max-w-xs sm:mt-7 sm:max-w-none sm:w-auto">
              <NeonButton href="/store" className="w-full sm:w-auto">
                Enter store
              </NeonButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-[380px] lg:justify-self-end">
            <div className="cream-panel overflow-hidden rounded-[14px] p-1.5 sm:p-2.5">
              <div className="relative aspect-square overflow-hidden rounded-[10px] bg-[#6BBEE2]">
                <Image
                  src="/mascot-degen.png"
                  alt="Degen mascot"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 380px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            <p className="mt-2.5 text-center text-[10px] uppercase tracking-[0.16em] text-degen-cream/45 sm:text-[11px] lg:text-left">
              House mascot. Gas fee gummies sold separately.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED DROP */}
      <section className="section-y">
        <div className="page-shell">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
            <div className="min-w-0">
              <p className="section-label mb-2">Featured drop</p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-degen-cream sm:text-3xl lg:text-4xl">
                FABRIC tee
              </h2>
            </div>
            <Link
              href="/store"
              className="hidden min-h-11 shrink-0 items-center text-xs uppercase tracking-[0.14em] text-degen-neon hover:underline sm:inline-flex"
            >
              Full rack
            </Link>
          </div>

          <div className="cream-panel grid overflow-hidden rounded-[14px] md:grid-cols-2">
            <div className="relative aspect-square bg-white md:aspect-auto md:min-h-[min(420px,50vw)]">
              <Image
                src="/product-tee-fabric.jpg"
                alt="FABRIC gradient tee with nested hex graphic"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4 sm:p-8"
              />
            </div>
            <div className="flex flex-col justify-center border-t-2 border-black p-6 sm:p-8 md:border-l-2 md:border-t-0 md:p-10">
              <p className="text-xs uppercase tracking-[0.16em] text-black/45">
                Graphic drop · Limited run
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-extrabold text-black sm:text-3xl">
                FABRIC
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/75">
                Magenta to orange bleed. Nested hex geometry. Loud on purpose.
                Wear it wrong and it still works.
              </p>
              <div className="mt-7 sm:mt-8">
                <NeonButton href="/store" size="md" className="w-full sm:w-auto">
                  Cop the tee
                </NeonButton>
              </div>
              <Link
                href="/store"
                className="mt-4 inline-flex min-h-11 items-center text-xs uppercase tracking-[0.14em] text-black/60 underline-offset-4 hover:text-black hover:underline sm:hidden"
              >
                Full rack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="section-y">
        <div className="page-shell">
          <p className="section-label mb-2">Ecosystem</p>
          <h2 className="mb-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-degen-cream sm:text-3xl lg:text-4xl">
            Marks we ride with
          </h2>
          <p className="mb-8 max-w-lg text-sm text-degen-cream/60 sm:mb-10">
            Pulse. HEX. PulseX. PulseDex. The kit on the wall.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {ECOSYSTEM.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="mark-tile group flex min-h-[7.5rem] flex-col items-center justify-center gap-3 rounded-sm p-4 sm:min-h-[9rem] sm:p-6"
              >
                <div className="relative h-16 w-full sm:h-20">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
                <span
                  className={`text-[11px] uppercase tracking-[0.14em] sm:text-xs ${
                    item.featured
                      ? "text-degen-neon"
                      : "text-degen-cream/60 group-hover:text-degen-cream"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 sm:items-center">
            <Image
              src="/pulsedex-pulse-icon.png"
              alt=""
              width={28}
              height={28}
              className="mt-0.5 shrink-0 opacity-80 sm:mt-0"
            />
            <p className="text-sm leading-relaxed text-degen-cream/55">
              We built{" "}
              <Link
                href="/pulsedex"
                className="text-degen-cyan underline decoration-degen-cyan/40 underline-offset-4 hover:text-degen-neon hover:decoration-degen-neon"
              >
                PulseDex
              </Link>
              . Field reports on the tape, not SaaS soft sell.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="section-y">
        <div className="page-shell">
          <div className="cream-panel-soft p-6 sm:p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-black/45">
              Desk notes
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-black sm:text-3xl">
              Blog is warming up
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/70">
              Short posts. Hangover honesty. Chain gossip with receipts.
              Nothing polished for VCs.
            </p>
            <div className="mt-6">
              <Link
                href="/blog"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-black bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black shadow-[0_4px_0_#000] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_#000] sm:w-auto"
              >
                Peek the blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL / LINKS */}
      <section className="pb-[max(4rem,env(safe-area-inset-bottom))] pt-4 sm:pb-24 sm:pt-6">
        <div className="page-shell flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="section-label mb-2">Elsewhere</p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-degen-cream sm:text-3xl">
              Social & links
            </h2>
            <p className="mt-3 max-w-md text-sm text-degen-cream/55">
              One page for the outs. Board, feeds, whatever we actually use.
            </p>
          </div>
          <NeonButton href="/links" size="md" className="w-full sm:w-auto">
            Open links
          </NeonButton>
        </div>
      </section>
    </main>
  );
}
