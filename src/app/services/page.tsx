import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal } from "@/components/shared/Reveal";
import { company, productPortfolio, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sand Arabia ICT services: network, communications, AV, security, data centers, IPTV, CCTV — with ISO 9001, ISO/IEC 20000, and ISO 77200 certifications.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#04080d] font-grotesk text-white">
      <SiteHeader overHero />
      <PageHero
        eyebrow="Capabilities"
        title={company.endToEndTagline}
        description="Design, supply, and implementation across network, communications, AV, security, data center, and specialized ICT programs—backed by consultancy and SLA support. Registered services provider with SAIS approval and ISO 9001:2015, ISO/IEC 20000:2018 & ISO 77200 Security Service Providers Management Systems Certified Business™."
        image="/images/hero-futuristic-clean.jpg"
        imageAlt="Network and technology infrastructure"
        crumbs={[{ label: "Services" }]}
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium">Service domains</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/55">
              Capability bullets by domain — design, supply, and implementation with certified
              standards alignment.
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={Math.min(index * 0.03, 0.2)}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/[0.02] transition hover:border-cyan-300/40 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                >
                  <div className="relative min-h-[180px] md:min-h-full">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                      sizes="(max-width:768px) 100vw, 45vw"
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#04080d]/20 to-[#04080d]/80 md:bg-gradient-to-l" />
                    <p className="absolute left-5 top-5 text-4xl font-medium text-cyan-300/70 md:left-6 md:top-6">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <h3 className="text-2xl font-medium tracking-tight group-hover:text-cyan-300 sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base text-pretty">
                      {service.summary}
                    </p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-xl border border-white/25 bg-black/20 px-3 py-2 text-xs text-white/75"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 text-sm font-semibold text-cyan-300">
                      View service details →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-16 sm:py-20">
        <div className="container-wide">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              Major Products Portfolio
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05]">
              Technology brands we deploy
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productPortfolio.map((cat, i) => (
              <Reveal key={cat.category} delay={i * 0.03}>
                <article className="h-full rounded-[1.35rem] border border-cyan-300/20 bg-cyan-300/[0.04] p-5 sm:p-6">
                  <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-cyan-300">
                    {cat.category}
                  </h3>
                  {cat.brands ? (
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {cat.brands.join(" · ")}
                    </p>
                  ) : (
                    <ul className="mt-3 space-y-1.5">
                      {(cat.items || []).map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-white/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/20 bg-white">
              <Image
                src="/images/products-sheet-1.png"
                alt="Major products portfolio — computing, printing, switching, cyber security"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-[1.25rem] border border-white/20 bg-white">
              <Image
                src="/images/products-sheet-2.png"
                alt="Major products portfolio — wireless, CCTV, UPS, IPTV, IP telephony"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </div>
  );
}
