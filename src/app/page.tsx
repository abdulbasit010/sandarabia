import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { company, variants } from "@/content/site";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_top_left,#d7f3f8,transparent_40%),radial-gradient(circle_at_bottom_right,#eef2f5,transparent_45%),#fbfcfd] font-jakarta text-sand-ink">
      <div className="container-shell py-10 md:py-16">
        <header className="mb-12 flex flex-col gap-6 border-b border-sand-line pb-10 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <Logo />
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-sand-slate/80 sm:text-base text-pretty">
              Three homepage directions for Sand Arabia. Select a concept to review —
              all content is drawn from the company profile.
            </p>
          </div>
          <div className="shrink-0 text-sm text-sand-slate/70">
            <p>{company.tagline}</p>
            <p dir="rtl" lang="ar" className="mt-1 font-arabic">
              {company.taglineAr}
            </p>
          </div>
        </header>

        <section className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {variants.map((variant) => (
            <Link
              key={variant.id}
              href={`/${variant.slug}`}
              className="group relative overflow-hidden rounded-[1.35rem] border border-sand-line bg-white p-5 shadow-[0_16px_50px_rgba(18,22,28,0.05)] transition duration-500 hover:-translate-y-1 hover:border-sand-teal/40 hover:shadow-[0_24px_70px_rgba(0,168,192,0.12)] sm:rounded-[1.5rem] sm:p-6"
            >
              <div className="mb-8 flex items-center justify-between gap-3 sm:mb-10">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sand-teal">
                  Direction {variant.id}
                </span>
                <span className="text-sm text-sand-slate/50 transition group-hover:text-sand-teal">
                  Open →
                </span>
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-sand-ink sm:text-2xl">
                {variant.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-sand-slate/75 text-pretty">
                {variant.description}
              </p>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-sand-teal transition duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </Link>
          ))}
        </section>

        <footer className="mt-14 border-t border-sand-line pt-6 text-sm text-sand-slate/60 md:mt-16">
          Client review concepts for homepage direction selection.
        </footer>
      </div>
    </main>
  );
}
