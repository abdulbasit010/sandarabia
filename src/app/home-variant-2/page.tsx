import type { Metadata } from "next";
import { HomeFuturistic } from "@/components/variant2/HomeFuturistic";

export const metadata: Metadata = {
  title: "Sand Arabia — Modern Futuristic Homepage",
  description:
    "Modern futuristic homepage direction for Sand Arabia Communications & Information Technology.",
};

export default function Page() {
  return <HomeFuturistic />;
}
