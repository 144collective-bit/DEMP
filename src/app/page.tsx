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
      {/* HERO */}
      <section className="relative px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
            <p className="section-label mb-4">PulseChain first. Always.</p>
            <Image
              src="/logo-main.png"
              alt="The Degen Emporium"
              width={720}
              height={720}
              priority
              className="w-full max-w-[340px] sm:max-w-[420px] drop-shadow-[0_0_40px_rgba(0,229,255,0.15)]"
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-degen-cream/70 sm:text-base">
              Merch that punches. Tools that report the tape. No pitch decks.
              Just the shop and the chain.
            </p>
            <div className="mt-8 w-full sm:w-auto">
              <NeonButton href="/store" className="w-full sm:w-auto">
                Enter store
              </NeonButton>
            </div>
          </div>

          <div className="relative w-full max-w-sm shrink-0">
            <div className="cream-panel overflow-hidden p-2 sm:p-3">
              <div className="relative aspect-square overflow-hidden bg-[#6BBEE2]">
                <Image
                  src="/mascot-degen.png"
                  alt="Degen mascot"
                  fill
                  sizes="(max-width: 640px) 90vw, 380px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] uppercase tracking-[0.16em] text-degen-cream/45 lg:text-left">
              House mascot. Gas fee gummies sold separately.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED DROP */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="section-label mb-2">Featured drop</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-degen-cream sm:text-4xl">
                FABRIC tee
              </h2>
            </div>
            <Link
              href="/store"
              className="hidden text-xs uppercase tracking-[0.14em] text-degen-neon hover:underline sm:inline"
            >
              Full rack →
            </Link>
          </div>

          <div className="cream-panel grid overflow-hidden md:grid-cols-2">
            <div className="relative aspect-square bg-white md:aspect-auto md:min-h-[420px]">
              <Image
                src="/product-tee-fabric.jpg"
                alt="FABRIC gradient tee with nested hex graphic"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4 sm:p-8"
              />
            </div>
            <div className="flex flex-col justify-center border-t-2 border-black p-8 sm:p-10 md:border-l-2 md:border-t-0">
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
              <div className="mt-8">
                <NeonButton href="/store" size="md">
                  Cop the tee
                </NeonButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-label mb-2">Ecosystem</p>
          <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-degen-cream sm:text-4xl">
            Marks we ride with
          </h2>
          <p className="mb-10 max-w-lg text-sm text-degen-cream/60">
            Pulse. HEX. PulseX. PulseDex. The kit on the wall.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {ECOSYSTEM.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="mark-tile group flex flex-col items-center gap-3 rounded-sm p-4 sm:p-6"
              >
                <div className="relative h-20 w-full sm:h-24">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
                <span
                  className={`text-xs uppercase tracking-[0.14em] ${
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

          <div className="mt-8 flex items-center gap-3">
            <Image
              src="/pulsedex-pulse-icon.png"
              alt=""
              width={28}
              height={28}
              className="opacity-80"
            />
            <p className="text-sm text-degen-cream/55">
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
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="cream-panel-soft p-8 sm:p-10">
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
                className="inline-flex items-center gap-2 border-2 border-black bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black shadow-[3px_3px_0_#000] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000]"
              >
                Peek the blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL / LINKS */}
      <section className="px-4 pb-20 pt-8 sm:px-6 sm:pb-28">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="section-label mb-2">Elsewhere</p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-degen-cream sm:text-3xl">
              Social & links
            </h2>
            <p className="mt-3 max-w-md text-sm text-degen-cream/55">
              One page for the outs. Board, feeds, whatever we actually use.
            </p>
          </div>
          <NeonButton href="/links" size="md">
            Open links
          </NeonButton>
        </div>
      </section>
    </main>
  );
}
