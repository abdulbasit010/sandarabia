import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { company, footerLinks, offices } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#04080d] text-white">
      <div className="container-wide grid gap-10 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="min-w-0 lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55 text-pretty">
            {company.tagline}. Saudi system integrator supporting Vision 2030 with end-to-end
            Communications and Information Technology solutions.
          </p>
          <p className="mt-4 font-arabic text-sm text-white/45" lang="ar" dir="rtl">
            {company.taglineAr}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/40">{company.endToEndTagline}</p>
          <p className="mt-1 font-arabic text-xs leading-relaxed text-cyan-200/70" lang="ar" dir="rtl">
            {company.endToEndTaglineAr}
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-300">Company</p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/65 transition hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/projects" className="text-sm text-white/65 transition hover:text-cyan-300">
                Projects
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-300">Services</p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.services.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/65 transition hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="text-sm text-cyan-300/80 transition hover:text-cyan-300"
              >
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-300">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="transition hover:text-cyan-300"
              >
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="break-all transition hover:text-cyan-300">
                {company.email}
              </a>
            </li>
            <li className="leading-relaxed text-pretty">{offices[0].address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-3 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}
            <span className="mx-2 opacity-40">·</span>
            <span lang="ar" className="font-arabic">
              {company.nameAr}
            </span>
          </p>
          <p>
            <a
              href={`https://${company.website}`}
              className="transition hover:text-cyan-300"
              rel="noopener noreferrer"
            >
              {company.website}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
