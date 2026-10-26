import Link from "next/link";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";

export default function NotFound() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#04080d] font-grotesk text-white">
      <SiteHeader />
      <main className="container-wide flex min-h-[70vh] flex-col justify-center py-28">
        <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">404</p>
        <h1 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[0.98] text-balance">
          This page is outside the mapped network.
        </h1>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
          The URL may have changed, or the page does not exist. Return home or explore our services
          and projects.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#041018] transition hover:bg-white"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            Contact us
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
