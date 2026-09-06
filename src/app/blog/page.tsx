import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog"
      blurb="Desk is set. First posts still cooking. Expect short hits, not thinkpieces."
    />
  );
}
