import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal } from "@/components/shared/Reveal";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Landmark Sand Arabia projects across NEOM, Saudi Aramco, Qiddiya, SEC, Red Sea, and more — ICT, ELV, IPTV, CCTV, and PON delivery.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const ongoing = projects.filter((p) => p.status === "ongoing");
  const completed = projects.filter((p) => p.status === "completed");

  return (
    <div className="min-h-screen overflow-x-clip bg-[#04080d] font-grotesk text-white">
      <SiteHeader overHero />
      <PageHero
        eyebrow="Landmark Projects"
        title="Delivery across giga-projects and critical infrastructure"
        description="Selected programs spanning design, supply, and implementation of ICT, ELV, AV, IPTV, CCTV, and PON works for national and enterprise clients."
        image="/images/desert-clean.jpg"
        imageAlt="Saudi landscape representing national-scale programs"
        crumbs={[{ label: "Projects" }]}
      />

      {ongoing.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="container-wide">
            <Reveal>
              <h2 className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">In progress</h2>
            </Reveal>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {ongoing.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.04}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-white/10 py-12 sm:py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">Completed</h2>
            <p className="mt-3 text-sm text-white/50">{completed.length} documented landmark projects</p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {completed.map((project, i) => (
              <Reveal key={project.slug} delay={Math.min(i * 0.02, 0.2)}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Planning a similar program?" />
      <SiteFooter />
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/40 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-300">{project.client}</p>
        <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white/45">
          {project.status}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-medium leading-tight text-balance">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60 text-pretty">{project.nature}</p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.12em] text-white/40">
        <span>
          {project.start} — {project.end}
        </span>
        <span className="text-cyan-300/70">Details →</span>
      </div>
    </Link>
  );
}
