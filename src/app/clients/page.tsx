import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal } from "@/components/shared/Reveal";
import { clients, flyerPartners, projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Sand Arabia key clients and registered partners including NEOM, Saudi Aramco, Qiddiya, SEC, Red Sea Global, and more.",
  alternates: { canonical: "/clients" },
};

const partnerFiles = [
  "image1.png",
  "image2.png",
  "image3.jpeg",
  "image4.png",
  "image5.jpeg",
  "image6.png",
  "image7.png",
  "image8.png",
  "image9.jpeg",
  "image10.jpeg",
  "image11.jpeg",
  "image12.png",
  "image13.png",
  "image14.png",
  "image15.jpeg",
  "image16.png",
  "image17.jpeg",
  "image18.png",
  "image19.png",
  "image20.jpeg",
  "image21.png",
  "image22.jpeg",
  "image23.jpeg",
  "image24.png",
  "image25.png",
  "image27.png",
  "image28.png",
  "image29.png",
  "image30.jpeg",
  "image31.png",
  "image32.png",
  "image33.jpeg",
];

export default function ClientsPage() {
  const owners = Array.from(new Set(projects.map((p) => p.client))).sort();

  return (
    <div className="min-h-screen overflow-x-clip bg-[#04080d] font-grotesk text-white">
      <SiteHeader overHero />
      <PageHero
        eyebrow="Key Clients"
        title="Trusted across giga-projects and enterprise programs"
        description="Organizations that have engaged Sand Arabia for Communications and Information Technology design, supply, and implementation."
        image="/images/about-clean.jpg"
        crumbs={[{ label: "Clients" }]}
      />

      <section className="pb-12 sm:pb-16">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              From company profile
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/75"
              >
                {client}
              </span>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white p-3 sm:p-5">
            <Image
              src="/images/key-clients-sheet.png"
              alt="Sand Arabia key clients sheet from company profile"
              width={1400}
              height={900}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-12 sm:py-16">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
              From services flyer — Registered Services Provider |{" "}
              <span lang="ar" className="font-arabic normal-case tracking-normal">
                مسجل — كمقدم خدمات
              </span>
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {flyerPartners.map((partner) => (
              <span
                key={partner}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.04] px-4 py-2.5 text-sm text-white/80"
              >
                {partner}
              </span>
            ))}
          </div>

          <Reveal>
            <h3 className="mt-12 text-[clamp(1.35rem,2.5vw,1.85rem)] font-medium">
              Client & partner marks
            </h3>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {partnerFiles.map((file) => (
              <div
                key={file}
                className="flex aspect-[3/2] items-center justify-center rounded-2xl border border-white/10 bg-white p-3"
              >
                <Image
                  src={`/images/partners/${file}`}
                  alt=""
                  width={180}
                  height={100}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.05]">
              Project owners in our landmark portfolio
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {owners.map((owner, i) => {
              const count = projects.filter((p) => p.client === owner).length;
              return (
                <Reveal key={owner} delay={Math.min(i * 0.03, 0.2)}>
                  <article className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-5 py-4">
                    <h3 className="font-medium">{owner}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/40">
                      {count} documented project{count === 1 ? "" : "s"}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </div>
  );
}
