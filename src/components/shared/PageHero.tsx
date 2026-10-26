import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/desert-clean.jpg",
  imageAlt = "",
  crumbs,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,13,0.75)_0%,rgba(4,8,13,0.92)_55%,#04080d_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,200,220,0.12),transparent_40%)]" />
      </div>

      <div className="container-wide relative">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/45">
              <li>
                <Link href="/" className="transition hover:text-cyan-300">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-white/25">
                    /
                  </span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition hover:text-cyan-300">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-cyan-300/80">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Reveal>
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
          )}
          <h1 className="mt-4 max-w-4xl text-[clamp(2.1rem,5.5vw,4.25rem)] font-medium leading-[0.98] tracking-tight text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg text-pretty">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
