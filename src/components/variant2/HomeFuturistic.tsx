"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Reveal } from "@/components/shared/Reveal";
import {
  approvals,
  clients,
  company,
  images,
  overview,
  projects,
  services,
  values,
} from "@/content/site";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, target]);
  return value;
}

function Metric({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <div className="min-w-0">
      <p className="font-grotesk text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-cyan-200/70 sm:text-xs sm:tracking-[0.18em]">
        {label}
      </p>
    </div>
  );
}

export function HomeFuturistic() {
  const heroRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [metricsActive, setMetricsActive] = useState(false);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]), {
    stiffness: 80,
    damping: 24,
  });

  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMetricsActive(true);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ongoing = projects.filter((p) => p.status === "ongoing").slice(0, 3);
  const featured = projects.slice(0, 6);

  return (
    <div id="top" className="overflow-x-clip bg-[#04080d] font-grotesk text-white">
      <Navbar tone="futuristic" />

      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <Image
            src={images.heroFuturistic}
            alt="Immersive technology environment representing Sand Arabia ICT capabilities"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_8%,rgba(4,8,13,0.35)_50%,rgba(4,8,13,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,13,0.45)_0%,transparent_35%,rgba(4,8,13,0.88)_100%)]" />
        <div className="absolute inset-0 opacity-[0.12] mix-blend-screen grain" />

        <div className="relative flex h-full flex-col justify-center px-4 pb-12 pt-28 sm:px-6 md:px-8 md:pb-16">
          <div className="container-wide">
            <p className="mb-4 max-w-3xl text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-300 sm:mb-5 sm:tracking-[0.3em]">
              <span lang="ar" className="font-arabic normal-case tracking-normal">
                {company.nameAr}
              </span>
              <span className="mx-2 opacity-50">·</span>
              <span>{company.tagline}</span>
            </p>
            <h1 className="max-w-5xl text-[clamp(2.6rem,8vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.035em]">
              Sand Arabia
              <span className="mt-3 block text-[clamp(1.15rem,2.8vw,2.35rem)] font-normal tracking-[-0.02em] text-cyan-300">
                Systems that power the Kingdom
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/72 sm:mt-7 sm:text-base md:text-lg text-pretty">
              {overview.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <a
                href="#services"
                className="inline-flex min-h-12 items-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#041018] transition hover:bg-white sm:px-7"
              >
                Enter Capabilities
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300 sm:px-7"
              >
                View Landmark Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={metricsRef}
        className="relative border-y border-white/10 bg-[linear-gradient(180deg,#071018,#04080d)] py-12 sm:py-16"
      >
        <div className="container-wide grid gap-8 sm:grid-cols-3 sm:gap-10">
          <Metric
            value={projects.length}
            suffix="+"
            label="Landmark Projects"
            active={metricsActive}
          />
          <Metric value={services.length} suffix="" label="Service Domains" active={metricsActive} />
          <Metric
            value={clients.length}
            suffix=""
            label="Key Client Organizations"
            active={metricsActive}
          />
        </div>
      </section>

      <section id="about" className="relative py-16 sm:py-24 md:py-32">
        <div className="container-wide grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">Who we are</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3.8rem)] font-medium leading-[0.98] tracking-tight text-balance">
              Innovation with Saudi identity and operational trust
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:rounded-[2rem] sm:p-8">
              <p className="text-base leading-relaxed text-white/75 sm:text-lg text-pretty">
                {overview.supporting}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base text-pretty">
                {values.mission.body}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {approvals.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-300/25 bg-cyan-300/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] text-cyan-100/80 sm:text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-6 sm:py-10">
        <div className="container-wide">
          <div className="grid gap-4 md:grid-cols-3">
            {[values.coreValues, values.mission, values.vision].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 sm:min-h-[320px] sm:rounded-[1.75rem]">
                  <Image
                    src={i === 2 ? images.controlRoom : images.network}
                    alt=""
                    fill
                    className="object-cover opacity-45"
                    sizes="(max-width:768px) 100vw, 33vw"
                    aria-hidden
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04080d] via-[#04080d]/75 to-[#04080d]/25" />
                  <div className="relative mt-auto flex flex-col justify-end p-5 sm:p-6">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] text-cyan-300">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75 text-pretty">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">Capabilities</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(1.9rem,4.5vw,4rem)] font-medium leading-[0.98] text-balance">
              Layered systems. Precise delivery.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-3 sm:mt-14 sm:space-y-4">
            {services.map((service, index) => (
              <Reveal key={service.id}>
                <article className="group grid gap-5 rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent p-5 transition hover:border-cyan-300/40 sm:p-6 md:grid-cols-[100px_minmax(0,1fr)] lg:grid-cols-[120px_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-6 lg:p-8">
                  <p className="text-3xl font-medium text-cyan-300/80 sm:text-4xl md:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="min-w-0">
                    <h3 className="text-xl font-medium tracking-tight sm:text-2xl md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60 text-pretty">
                      {service.summary}
                    </p>
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-1">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-white/5 bg-black/20 px-3 py-2 text-xs leading-snug text-white/65 transition group-hover:border-cyan-300/20"
                      >
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

      <section id="projects" className="relative py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={images.desert}
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#04080d]/88" />
        </div>
        <div className="container-wide relative">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                  Landmark Projects
                </p>
                <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3.8rem)] font-medium leading-[0.98]">
                  From NEOM to Aramco
                </h2>
              </div>
              <p className="max-w-sm text-sm text-white/60 text-pretty">
                Ongoing: {ongoing.map((p) => p.title).join(" · ")}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 [&::-webkit-scrollbar]:hidden">
            {featured.map((project) => (
              <article
                key={project.title}
                className="w-[min(84vw,340px)] shrink-0 snap-start rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:w-[360px] sm:rounded-[1.75rem] sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-300">
                    {project.client}
                  </p>
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.14em] text-white/45">
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-medium leading-tight sm:mt-5 sm:text-2xl text-balance">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 text-pretty sm:mt-4">
                  {project.nature}
                </p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-white/40 sm:mt-6">
                  {project.start} — {project.end}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="border-y border-white/10 py-16 sm:py-20">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">Key Clients</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-[1.05] text-balance">
              Trusted across giga-projects and enterprise programs
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white/75 transition hover:border-cyan-300/40 hover:text-cyan-200 sm:px-4 sm:text-sm"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,200,220,0.16),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(0,120,160,0.18),transparent_40%)]" />
        <div className="container-wide relative">
          <Reveal>
            <h2 className="max-w-3xl text-[clamp(2rem,5.5vw,4.5rem)] font-medium leading-[0.98] text-balance">
              Ready to architect, deploy, and secure what comes next.
            </h2>
            <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="rounded-[1.35rem] border border-cyan-300/30 bg-cyan-300/10 p-5 transition hover:bg-cyan-300 hover:text-[#041018] sm:rounded-[1.5rem] sm:p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] opacity-70">Call</p>
                <p className="mt-3 text-lg sm:text-xl">{company.phone}</p>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="rounded-[1.35rem] border border-white/15 bg-white/5 p-5 transition hover:border-cyan-300/40 sm:rounded-[1.5rem] sm:p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Email</p>
                <p className="mt-3 break-all text-lg sm:text-xl">{company.email}</p>
              </a>
              <div className="rounded-[1.35rem] border border-white/15 bg-white/5 p-5 sm:rounded-[1.5rem] sm:p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Visit</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75 text-pretty">
                  {company.address}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="safe-pb-switcher border-t border-white/10 py-8">
        <div className="container-wide flex flex-col gap-3 text-sm text-white/45 md:flex-row md:justify-between">
          <p>
            <span>{company.name}</span>
            <span className="mx-2 opacity-40">·</span>
            <span lang="ar" className="font-arabic">
              {company.nameAr}
            </span>
          </p>
          <p>
            © {new Date().getFullYear()} {company.name} · {company.website}
          </p>
        </div>
      </footer>
    </div>
  );
}
