import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal } from "@/components/shared/Reveal";
import {
  approvals,
  brandManagement,
  certifications,
  company,
  culture,
  esg,
  images,
  leadership,
  overview,
  sustainability,
  technology,
  values,
} from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sand Arabia — a Saudi Communications & Information Technology system integrator established in 2012, supporting Vision 2030.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#04080d] font-grotesk text-white">
      <SiteHeader overHero />
      <PageHero
        eyebrow="About Sand Arabia"
        title="A Saudi system integrator built for national-scale programs"
        description={overview.body}
        image={images.engineers}
        imageAlt="Sand Arabia technology and engineering environment"
        crumbs={[{ label: "About" }]}
      />

      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 sm:rounded-[2rem]">
              <Image
                src={images.controlRoom}
                alt="Data center and control infrastructure"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              {company.foundedNote}
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05] text-balance">
              {company.endToEndTagline}
            </h2>
            <p className="mt-3 font-arabic text-sm text-white/55" lang="ar" dir="rtl">
              {company.endToEndTaglineAr}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base text-pretty">
              {overview.supporting}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base text-pretty">
              {overview.whyUs}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 py-16 sm:py-20">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              {overview.teamworkTitle}
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base text-pretty">
              {overview.teamwork}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-wide grid gap-4 md:grid-cols-3">
          {[values.coreValues, values.mission, values.vision].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-cyan-300">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70 text-pretty">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 py-16 sm:py-20 md:py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">ESG Commitment</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05] text-balance">
              {esg.title}
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base text-pretty">
              {esg.intro}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {esg.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.05}>
                <article className="rounded-[1.35rem] border border-cyan-300/20 bg-cyan-300/[0.04] p-6">
                  <h3 className="text-lg font-medium text-cyan-200">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65 text-pretty">
                    {pillar.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">Corporate Culture</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05]">
              How we work together
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {culture.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65 text-pretty">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-16 sm:py-20 md:py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">Brand Management</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05]">
              How clients experience Sand Arabia
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brandManagement.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.03}>
                <article className="h-full rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <h3 className="text-[11px] uppercase tracking-[0.16em] text-cyan-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 text-pretty">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              {technology.title}
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05]">
              Building capability for what comes next
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {technology.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.04}>
                <article className="h-full rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-medium">{pillar.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-white/65 text-pretty"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-16 sm:py-20 md:py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              {sustainability.title}
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05]">
              Responsible growth across operations
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {sustainability.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.04}>
                <article className="h-full rounded-[1.35rem] border border-cyan-300/15 bg-cyan-300/[0.03] p-6">
                  <h3 className="text-lg font-medium text-cyan-100">{pillar.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-white/65 text-pretty"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              Approvals & Standards
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05]">
              Verified credentials
            </h2>
            <p className="mt-3 text-sm text-white/50">
              {company.registeredProvider}
              <span className="mx-2 opacity-40">·</span>
              <span lang="ar" className="font-arabic">
                {company.registeredProviderAr}
              </span>
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white p-4 sm:p-6">
            <Image
              src={images.approvalsStrip}
              alt="Approved by GDC Middle East, Supreme Authority for Industrial Security, Digital Government Authority, and Communications Space & Technology Commission"
              width={963}
              height={152}
              className="mx-auto h-auto w-full max-w-4xl object-contain"
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
            {[...approvals, ...certifications].map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-300/25 bg-cyan-300/5 px-4 py-2 text-xs text-cyan-100/85 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20 md:py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">Leadership</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05]">
              Executive team
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.04}>
                <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-medium">{person.name}</h3>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-cyan-300/80">
                    {person.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20 md:py-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              Organizational Chart
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05]">
              How Sand Arabia is structured
            </h2>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white p-3 sm:p-5">
            <Image
              src={images.orgChart}
              alt="Sand Arabia organizational chart showing Chairman, General Manager, and departmental structure"
              width={1299}
              height={844}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </div>
  );
}
