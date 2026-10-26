import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal } from "@/components/shared/Reveal";
import { getProjectBySlug, projects } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: `${project.nature} for ${project.client}. Contractor: ${project.contractor}.`,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.client === project.client)
    .slice(0, 3);
  const fallbackRelated =
    related.length > 0
      ? related
      : projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const facts = [
    { label: "Project owner", value: project.client },
    { label: "Contractor", value: project.contractor },
    { label: "Nature of works", value: project.nature },
    { label: "Start", value: project.start },
    { label: "End / status", value: project.end },
    { label: "Status", value: project.status === "ongoing" ? "In progress" : "Completed" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#04080d] font-grotesk text-white">
      <SiteHeader overHero />
      <PageHero
        eyebrow={project.client}
        title={project.title}
        description={project.nature}
        image="/images/desert-clean.jpg"
        crumbs={[{ label: "Projects", href: "/projects" }, { label: project.title }]}
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-wide">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base text-pretty">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="text-xl font-medium sm:text-2xl">Program context</h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base text-pretty">
                Sand Arabia delivered {project.nature.toLowerCase()} on the {project.title} program
                for {project.client}, working with {project.contractor}. This engagement is part of
                our ongoing portfolio of Communications and Information Technology works across the
                Kingdom.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-11 items-center rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-[#041018] transition hover:bg-white"
              >
                Discuss a similar project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="container-wide">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium">Related projects</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {fallbackRelated.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/40"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-300">{item.client}</p>
                <h3 className="mt-3 text-lg font-medium leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm text-white/55 text-pretty">{item.nature}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-8 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-white"
          >
            ← Back to all projects
          </Link>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </div>
  );
}
