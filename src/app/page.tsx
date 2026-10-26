import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { company, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: `${company.name} — ${company.tagline}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
