import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Board",
};

export default function BoardPage() {
  return (
    <ComingSoon
      title="Board"
      blurb="Forum bones coming. Categories, topics, wallet or email. No Discord corporate chrome."
    />
  );
}
