import type { Metadata } from "next";
import { HomeCorporate } from "@/components/variant1/HomeCorporate";

export const metadata: Metadata = {
  title: "Sand Arabia — Premium Corporate Homepage",
  description:
    "Premium corporate homepage direction for Sand Arabia Communications & Information Technology.",
};

export default function Page() {
  return <HomeCorporate />;
}
