import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { company } from "@/content/site";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Ready to architect, deploy, and secure what comes next.",
  description = "Talk with our team about ICT, ELV, security, and data center programs across the Kingdom.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,200,220,0.14),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(0,120,160,0.16),transparent_40%)]" />
      <div className="container-wide relative">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-[1.02] text-balance">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base text-pretty">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#041018] transition hover:bg-white"
              >
                Start a Conversation
              </Link>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                {company.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
