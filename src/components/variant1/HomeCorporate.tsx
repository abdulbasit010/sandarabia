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

export function HomeCorporate() {
  const featuredProjects = projects
    .filter((p) =>
      ["NEOM", "Saudi Aramco", "Saudi Electricity Company"].includes(p.client),
    )
    .slice(0, 4);

  return (
    <div id="top" className="overflow-x-clip bg-sand-fog font-jakarta text-sand-ink">
      <Navbar tone="corporate" />

      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src={images.heroCorporate}
          alt="Data center infrastructure supporting enterprise ICT delivery"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,18,24,0.82)_0%,rgba(10,18,24,0.55)_50%,rgba(10,18,24,0.3)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(0,168,192,0.2),transparent_42%)]" />

        <div className="container-wide relative flex min-h-[100svh] flex-col justify-end gap-10 pb-12 pt-28 sm:pb-16 md:pb-20 md:pt-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-teal sm:text-xs sm:tracking-[0.28em]">
              {company.tagline}
            </p>
            <h1 className="font-cormorant text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] font-semibold tracking-[0.01em] text-white">
              Sand Arabia
            </h1>
            <p className="mt-4 max-w-2xl text-[clamp(1.15rem,2.2vw,1.65rem)] font-medium leading-snug text-white/90 text-balance">
              Trusted ICT integration aligned with Saudi Vision 2030
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg text-pretty md:line-clamp-none line-clamp-5">
              {overview.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex min-h-12 items-center rounded-full bg-sand-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-sand-teal-dark"
              >
                Explore Services
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center rounded-full border border-white/35 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-sand-ink"
              >
                Landmark Projects
              </a>
            </div>
          </div>

          <div className="grid gap-5 border-t border-white/15 pt-7 sm:grid-cols-3 sm:gap-6">
            {[
              { label: "Saudi Market Presence", value: "Since 2012" },
              { label: "Delivery Model", value: "Design · Supply · Implement" },
              { label: "Focus", value: "Public & Private Sectors" },
            ].map((item) => (
              <div key={item.label} className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                  {item.label}
                </p>
                <p className="mt-2 font-cormorant text-xl text-white sm:text-2xl md:text-[1.75rem]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 md:py-28">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-teal">
              Company Overview
            </p>
            <h2 className="mt-4 font-cormorant text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.1] text-sand-ink text-balance">
              {overview.headline}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-sand-slate/80 sm:text-base text-pretty">
              {overview.supporting}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-sand-slate/80 sm:text-base">
              {company.foundedNote}. Headquartered in {company.addressShort}.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {approvals.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sand-line bg-white px-3 py-1.5 text-[11px] leading-snug text-sand-slate sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
              <Image
                src={images.engineers}
                alt="Technology professionals collaborating on infrastructure delivery"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 45vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 sm:p-6 text-white">
                <p className="text-[11px] uppercase tracking-[0.18em] text-sand-teal">
                  Operational Excellence
                </p>
                <p className="mt-2 font-cormorant text-xl sm:text-2xl">
                  Teamwork, leadership, and delivery discipline
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-sand-line bg-white py-16 sm:py-20 md:py-24">
        <div className="container-shell">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-teal">
              Values · Mission · Vision
            </p>
            <h2 className="mt-3 max-w-2xl font-cormorant text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1] text-balance">
              Built on integrity, trust, and long-term value
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
            {[values.coreValues, values.mission, values.vision].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-[1.35rem] border border-sand-line bg-sand-fog p-6 transition hover:border-sand-teal/40 hover:bg-white sm:p-7">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sand-teal">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-sand-slate/85 text-pretty">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-teal">
                  Services & Offerings
                </p>
                <h2 className="mt-3 font-cormorant text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1]">
                  Design, Supply & Implementation
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-sand-slate/75 text-pretty">
                End-to-end communications and information technology solutions
                across network, security, AV, data center, and consultancy.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 0.04}>
                <article className="group flex h-full flex-col rounded-[1.35rem] border border-sand-line bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-sand-teal/35 hover:shadow-[0_20px_50px_rgba(18,22,28,0.07)] sm:p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sand-mist text-sm font-semibold text-sand-teal transition group-hover:bg-sand-teal group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand-slate/75 text-pretty">
                    {service.summary}
                  </p>
                  <ul className="mt-auto space-y-2 border-t border-sand-line pt-4 mt-5">
                    {service.items.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-xs leading-relaxed text-sand-slate/70"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sand-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f171d] py-16 text-white sm:py-20 md:py-24">
        <div className="container-shell">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-teal">
              Major Products Portfolio
            </p>
            <h2 className="mt-3 font-cormorant text-[clamp(1.9rem,3.8vw,2.85rem)] leading-[1.1]">
              Technology partners across the stack
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {productPortfolio.map((item) => (
              <div
                key={item.category}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
              >
                <p className="text-sm font-semibold text-sand-teal">{item.category}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70 text-pretty">
                  {"brands" in item && item.brands
                    ? item.brands.join(" · ")
                    : item.items?.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20 md:py-28">
        <div className="container-shell">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-teal">
              Landmark Projects
            </p>
            <h2 className="mt-3 font-cormorant text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1]">
              Delivery for national-scale programs
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
            {featuredProjects.map((project, i) => (
              <Reveal key={`${project.title}-${i}`} delay={i * 0.04}>
                <article className="overflow-hidden rounded-[1.35rem] border border-sand-line bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sand-line px-5 py-3.5 sm:px-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sand-teal">
                      {project.client}
                    </p>
                    <span className="rounded-full bg-sand-mist px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-sand-slate">
                      {project.status === "ongoing" ? "Ongoing" : "Completed"}
                    </span>
                  </div>
                  <div className="px-5 py-5 sm:px-6 sm:py-6">
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl text-balance">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-sand-slate/75 text-pretty">
                      {project.nature}
                    </p>
                    <dl className="mt-5 grid grid-cols-1 gap-4 text-sm xs:grid-cols-2 sm:grid-cols-2">
                      <div className="min-w-0">
                        <dt className="text-[11px] uppercase tracking-[0.14em] text-sand-slate/50">
                          Contractor
                        </dt>
                        <dd className="mt-1 text-sand-ink">{project.contractor}</dd>
                      </div>
                      <div className="min-w-0">
                        <dt className="text-[11px] uppercase tracking-[0.14em] text-sand-slate/50">
                          Timeline
                        </dt>
                        <dd className="mt-1 text-sand-ink">
                          {project.start} — {project.end}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="border-y border-sand-line bg-white py-16 sm:py-20">
        <div className="container-shell">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-teal">
              Key Clients
            </p>
            <h2 className="mt-3 font-cormorant text-[clamp(1.9rem,3.8vw,2.85rem)] leading-[1.1]">
              Organizations that trust Sand Arabia
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client}
                className="flex min-h-[76px] items-center justify-center rounded-2xl border border-sand-line bg-sand-fog px-2.5 text-center text-xs font-medium text-sand-slate sm:min-h-[88px] sm:px-3 sm:text-sm"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-16 text-white sm:py-20 md:py-28">
        <Image
          src={images.dataCenter}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#0b141a]/90" />
        <div className="container-shell relative">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand-teal">
              Contact
            </p>
            <h2 className="mt-3 max-w-2xl font-cormorant text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.1] text-balance">
              Let’s discuss your next ICT program
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur transition hover:border-sand-teal/50"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">Phone</p>
                <p className="mt-3 text-base sm:text-lg">{company.phone}</p>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur transition hover:border-sand-teal/50"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">Email</p>
                <p className="mt-3 break-all text-base sm:text-lg">{company.email}</p>
              </a>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">Office</p>
                <p className="mt-3 text-sm leading-relaxed text-white/85 text-pretty">
                  {company.address}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="safe-pb-switcher border-t border-sand-line bg-white py-10">
        <div className="container-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold tracking-[0.08em]">{company.name.toUpperCase()}</p>
            <p className="mt-1 font-arabic text-sm text-sand-slate/70" dir="rtl" lang="ar">
              {company.nameAr}
            </p>
          </div>
          <p className="text-sm text-sand-slate/60">
            © {new Date().getFullYear()} {company.name} · {company.website}
          </p>
        </div>
      </footer>
    </div>
  );
}
