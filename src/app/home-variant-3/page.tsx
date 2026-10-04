import type { Metadata } from "next";
import { HomeEditorial } from "@/components/variant3/HomeEditorial";

export const metadata: Metadata = {
  title: "Sand Arabia — Bold Editorial Tech Homepage",
  description:
    "Bold editorial tech homepage direction for Sand Arabia Communications & Information Technology.",
};

export default function Page() {
  return <HomeEditorial />;
}
