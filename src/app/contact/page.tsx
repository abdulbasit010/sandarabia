import type { Metadata } from "next";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { Reveal } from "@/components/shared/Reveal";
import { company, offices } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sand Arabia in Al Khobar, Saudi Arabia. Call (966) 13-889-0128 or email sales@sandarabia.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#04080d] font-grotesk text-white">
      <SiteHeader overHero />
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss your next ICT program"
        description="Reach our Al Khobar team for design, supply, implementation, and support inquiries."
        image="/images/contact-bg.jpg"
        imageAlt="Contact Sand Arabia"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal>
            <div className="space-y-4">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="block rounded-[1.35rem] border border-cyan-300/30 bg-cyan-300/10 p-5 transition hover:bg-cyan-300 hover:text-[#041018] sm:p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] opacity-70">Call</p>
                <p className="mt-3 text-xl sm:text-2xl">{company.phoneDisplay}</p>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="block rounded-[1.35rem] border border-white/15 bg-white/5 p-5 transition hover:border-cyan-300/40 sm:p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Email</p>
                <p className="mt-3 break-all text-xl sm:text-2xl">{company.email}</p>
              </a>

              {offices.map((office) => (
                <div
                  key={office.id}
                  className="rounded-[1.35rem] border border-white/15 bg-white/5 p-5 sm:p-6"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">
                    {office.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 text-pretty">
                    {office.address}
                  </p>
                  {"poBox" in office && office.poBox && (
                    <p className="mt-2 text-sm text-white/45">{office.poBox}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 sm:rounded-[2rem] sm:p-8">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Send a message</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55 text-pretty">
                Tell us about your site, scope, and timeline. Our team will respond using the
                contact details you provide.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
