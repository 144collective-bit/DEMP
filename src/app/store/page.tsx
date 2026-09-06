import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Store",
};

export default function StorePage() {
  return (
    <ComingSoon
      title="Store"
      blurb="Racks empty for a minute. FABRIC and the rest land here soon. Cash register is warming up."
    />
  );
}
