import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Links",
};

export default function LinksPage() {
  return (
    <ComingSoon
      title="Links"
      blurb="Socials and outs in one place. Accounts still getting wired. Check back."
    />
  );
}
