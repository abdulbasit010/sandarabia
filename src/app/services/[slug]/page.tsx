import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal } from "@/components/shared/Reveal";
import { getServiceBySlug, services } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#04080d] font-grotesk text-white">
      <SiteHeader overHero />
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.description}
        image={service.image}
        imageAlt={`${service.title} capability`}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.05]">
              What’s included
            </h2>
            <ul className="mt-6 space-y-3">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white/75 sm:text-base"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden />
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 sm:rounded-[2rem]">
              <Image
                src={service.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04080d]/70 to-transparent" />
            </div>
            <div className="mt-6 rounded-[1.35rem] border border-cyan-300/25 bg-cyan-300/[0.06] p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">Next step</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70 text-pretty">
                Discuss scope, standards alignment, and delivery timelines with our technical team.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex min-h-11 items-center rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-[#041018] transition hover:bg-white"
              >
                Request a consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="container-wide">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium">Related services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/40"
              >
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 text-pretty">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </div>
  );
}
