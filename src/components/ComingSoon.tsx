import Link from "next/link";
import { NeonButton } from "./NeonButton";

type Props = {
  title: string;
  blurb: string;
};

export function ComingSoon({ title, blurb }: Props) {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center py-20 sm:py-24">
      <div className="page-shell flex justify-center">
        <div className="cream-panel relative w-full max-w-lg p-6 text-center sm:p-10 md:p-12">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-black/50">
            Under construction
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-black/75">
            {blurb}
          </p>
          <div className="mt-8 flex justify-center">
            <NeonButton href="/" size="md" className="w-full sm:w-auto">
              Back home
            </NeonButton>
          </div>
          <p className="mt-6 text-[11px] text-black/40">
            Or poke around the{" "}
            <Link href="/store" className="underline hover:text-black">
              store stub
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
