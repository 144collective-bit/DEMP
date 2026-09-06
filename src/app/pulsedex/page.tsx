import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "PulseDex",
};

export default function PulseDexPage() {
  return (
    <ComingSoon
      title="PulseDex"
      blurb="Our tape machine. Field reports and the real PulseDex home land here. War correspondent mode."
    />
  );
}
