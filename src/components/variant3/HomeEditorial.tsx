"use client";

import Image from "next/image";
import { Navbar } from "@/components/shared/Navbar";
import { Reveal } from "@/components/shared/Reveal";
import {
  approvals,
  clients,
  company,
  images,
  overview,
  productPortfolio,
  projects,
  services,
  values,
} from "@/content/site";

export function HomeEditorial() {
  const primaryServices = services.slice(0, 4);
  const secondaryServices = services.slice(4);
  const spotlightProjects = [
    projects.find((p) => p.title.includes("Sindhala")),
    projects.find((p) => p.title.includes("Jafura")),
    projects.find((p) => p.title.includes("SDCC")),
    projects.find((p) => p.title.includes("Command")),
  ].filter(Boolean);

  return (
    <div id="top" className="overflow-x-clip bg-[#f3f5f7] font-dm text-[#111111]">
      <Navbar tone="editorial" />

      <section className="relative overflow-hidden border-b border-black/10 pt-24 sm:pt-28 md:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#101820_0%,#1a2a33_45%,#0d3a42_100%)]" />
        <div className="absolute inset-0 opacity-25 grain" />
        <div className="container-wide relative grid min-h-[min(92svh,920px)] gap-10 pb-14 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12 lg:pb-16 lg:pt-10">
          <div className="relative z-[1] min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7fd7e4] sm:text-xs sm:tracking-[0.28em]">
              <span lang="ar" className="font-arabic normal-case tracking-normal">
                {company.taglineAr}
              </span>
              <span className="mx-1.5 opacity-50">·</span>
              <span className="inline">{company.tagline}</span>
            </p>
            <h1 className="mt-5 font-syne text-[clamp(3.2rem,11vw,8rem)] font-semibold leading-[0.88] tracking-[-0.045em] text-white sm:mt-6">
              Sand Arabia
            </h1>
            <p className="mt-5 max-w-xl font-syne text-[clamp(1.25rem,2.8vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-[#7fd7e4] sm:mt-6">
              Integrate. Secure. Deliver.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base md:text-lg text-pretty">
              {overview.headline}. {company.foundedNote}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <a
                href="#services"
                className="inline-flex min-h-12 items-center bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-[#7fd7e4] sm:px-7 sm:text-sm"
              >
                View Services
              </a>
              <a
                href="#projects"
                className="border-b border-white/50 pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[#7fd7e4] hover:text-[#7fd7e4] sm:text-sm"
              >
                Selected Projects
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
              <Image
                src={images.heroEditorial}
                alt="Security and ICT systems representing Sand Arabia capabilities"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width:1024px) 90vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="font-instrument text-xl italic sm:text-2xl md:text-3xl text-balance">
                  End-to-end ICT for public and private sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#e8eef1] py-5 sm:py-6">
        <div className="container-wide flex flex-col gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/55 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:text-xs sm:tracking-[0.18em]">
          <span>Aligned with Saudi Vision 2030</span>
          <span className="hidden md:inline">Design · Supply · Implementation</span>
          <span>{company.addressShort}</span>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 md:py-28">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0f6f7f]">
                Company
              </p>
              <h2 className="mt-4 font-syne text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-balance">
                A Saudi system integrator with national-scale ambition
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg md:text-xl text-pretty">
                {overview.body}
              </p>
              <div className="mt-8 grid gap-6 border-t border-black/10 pt-8 sm:mt-10 sm:grid-cols-3">
                {[values.coreValues, values.mission, values.vision].map((item) => (
                  <div key={item.title} className="min-w-0">
                    <h3 className="font-syne text-base font-semibold sm:text-lg">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-black/65 text-pretty">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white py-14 sm:py-16">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="font-syne text-2xl font-semibold sm:text-3xl md:text-4xl text-balance">
                Approvals & Oversight Bodies
              </h2>
              <p className="max-w-md text-sm text-black/60 text-pretty">
                As presented in the Sand Arabia company profile.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {approvals.map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <div className="h-full border border-black/10 px-5 py-6 transition hover:border-[#0f6f7f] hover:bg-[#e8eef1]">
                  <p className="font-syne text-3xl font-semibold text-[#0f6f7f]/40 sm:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-snug text-pretty">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0f6f7f]">
              Services Portfolio
            </p>
            <h2 className="mt-4 max-w-3xl font-syne text-[clamp(2rem,4.5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-balance">
              Seven practice areas. One delivery standard.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-px bg-black/10 md:mt-14 md:grid-cols-2 md:pb-10">
            {primaryServices.map((service, i) => (
              <Reveal key={service.id}>
                <article
                  className={`group min-h-[260px] bg-[#f3f5f7] p-6 transition hover:bg-[#111] hover:text-white sm:min-h-[280px] sm:p-8 ${
                    i % 2 === 1 ? "md:translate-y-6" : ""
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f6f7f] group-hover:text-[#7fd7e4]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-syne text-2xl font-semibold tracking-tight sm:mt-5 sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-black/65 group-hover:text-white/70 sm:mt-4 text-pretty">
                    {service.summary}
                  </p>
                  <ul className="mt-5 space-y-2 sm:mt-6">
                    {service.items.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="text-[11px] uppercase tracking-[0.06em] text-black/50 group-hover:text-white/50 sm:tracking-[0.08em]"
                      >
                        — {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {secondaryServices.map((service) => (
              <Reveal key={service.id}>
                <article className="h-full border border-black/10 bg-white p-5 sm:p-6">
                  <h3 className="font-syne text-lg font-semibold sm:text-xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65 text-pretty">
                    {service.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111] py-16 text-white sm:py-20 md:py-28">
        <div className="container-wide relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7fd7e4]">
              Products Portfolio
            </p>
            <h2 className="mt-4 font-syne text-[clamp(1.9rem,3.8vw,3.4rem)] font-semibold leading-[0.98] text-balance">
              Hardware and platforms across computing, networking, security, and AV.
            </h2>
            <p className="mt-5 font-instrument text-xl italic text-white/70 sm:text-2xl">
              Major brands as listed in the company profile.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="grid gap-3 sm:grid-cols-2">
              {productPortfolio.map((item) => (
                <div key={item.category} className="border border-white/15 p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7fd7e4] sm:text-xs sm:tracking-[0.16em]">
                    {item.category}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 text-pretty">
                    {"brands" in item && item.brands
                      ? item.brands.join(", ")
                      : item.items?.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="mb-8 flex flex-col gap-4 border-b border-black/10 pb-8 sm:mb-12 md:flex-row md:items-end md:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0f6f7f]">
                  Landmark Projects
                </p>
                <h2 className="mt-3 font-syne text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[0.98]">
                  Selected delivery
                </h2>
              </div>
              <p className="max-w-sm text-sm text-black/60 text-pretty">
                Featured engagements spanning NEOM, Saudi Aramco, and Saudi Electricity Company.
              </p>
            </div>
          </Reveal>

          <div>
            {spotlightProjects.map((project, i) =>
              project ? (
                <Reveal key={project.title}>
                  <article className="grid gap-4 border-t border-black/10 py-7 sm:gap-5 sm:py-8 lg:grid-cols-[80px_minmax(0,1.2fr)_minmax(0,1fr)_160px] lg:items-start xl:grid-cols-[100px_minmax(0,1.2fr)_minmax(0,1fr)_180px]">
                    <p className="font-syne text-2xl font-semibold text-black/25 sm:text-3xl">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#0f6f7f]">
                        {project.client}
                      </p>
                      <h3 className="mt-2 font-syne text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl text-balance">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-black/65 text-pretty">
                      {project.nature}
                    </p>
                    <div className="text-sm lg:text-right">
                      <p className="uppercase tracking-[0.14em] text-black/40">{project.status}</p>
                      <p className="mt-2">
                        {project.start} — {project.end}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ) : null,
            )}
          </div>
        </div>
      </section>

      <section id="clients" className="border-y border-black/10 bg-white py-16 sm:py-20">
        <div className="container-wide">
          <Reveal>
            <h2 className="font-syne text-[clamp(1.9rem,3.8vw,3.4rem)] font-semibold tracking-tight">
              Key Clients
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-px bg-black/10 sm:mt-10 sm:grid-cols-3 md:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client}
                className="flex min-h-[84px] items-center justify-center bg-white px-3 text-center text-xs font-medium tracking-wide transition hover:bg-[#111] hover:text-white sm:min-h-[100px] sm:px-4 sm:text-sm"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#0f6f7f] py-16 text-white sm:py-20 md:py-28"
      >
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="container-wide relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-10">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
              Contact
            </p>
            <h2 className="mt-4 font-syne text-[clamp(2.2rem,5.5vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.03em] text-balance">
              Start the next conversation.
            </h2>
            <p className="mt-5 max-w-xl text-sm text-white/75 sm:text-base text-pretty">
              {values.vision.body}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-5 border border-white/25 bg-black/10 p-5 backdrop-blur sm:p-6">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="block text-xl font-semibold tracking-tight transition hover:text-[#d7f7fb] sm:text-2xl"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="block break-all text-base transition hover:text-[#d7f7fb] sm:text-lg"
              >
                {company.email}
              </a>
              <p className="text-sm leading-relaxed text-white/75 text-pretty">{company.address}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="safe-pb-switcher bg-[#111] py-10 text-white">
        <div className="container-wide flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-syne text-lg font-semibold tracking-tight sm:text-xl">
              {company.name}
            </p>
            <p className="mt-1 font-arabic text-sm text-white/50" dir="rtl" lang="ar">
              {company.nameAr}
            </p>
          </div>
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} {company.name} · {company.website}
          </p>
        </div>
      </footer>
    </div>
  );
}
