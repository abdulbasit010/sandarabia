"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Logo } from "@/components/shared/Logo";
import { company, navLinks } from "@/content/site";

type NavbarProps = {
  tone?: "corporate" | "futuristic" | "editorial";
};

export function Navbar({ tone = "corporate" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overDarkHero = !scrolled;
  const logoTone = overDarkHero ? "light" : "dark";

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-black/5 bg-white/92 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-wide flex h-16 items-center justify-between gap-3 sm:h-[72px] md:h-20">
          <a href="#top" className="relative z-[60] min-w-0 shrink" aria-label="Sand Arabia">
            <Logo tone={logoTone} className="scale-[0.92] origin-left sm:scale-100" />
          </a>

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  "whitespace-nowrap text-sm font-medium tracking-wide transition",
                  scrolled
                    ? "text-sand-slate hover:text-sand-teal"
                    : "text-white/85 hover:text-white",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <span
              className={clsx(
                "rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em]",
                scrolled ? "bg-sand-mist text-sand-slate" : "bg-white/10 text-white",
              )}
              aria-label="Language: English"
            >
              EN | عربي
            </span>
            <a
              href="#contact"
              className={clsx(
                "inline-flex min-h-11 items-center rounded-full px-5 py-2.5 text-sm font-semibold transition",
                tone === "editorial"
                  ? scrolled
                    ? "bg-sand-ink text-white hover:bg-sand-teal"
                    : "bg-white text-sand-ink hover:bg-sand-teal hover:text-white"
                  : "bg-sand-teal text-white hover:bg-sand-teal-dark",
              )}
            >
              Contact Us
            </a>
          </div>

          <button
            type="button"
            className={clsx(
              "relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
              scrolled
                ? "border-sand-line bg-white text-sand-ink"
                : "border-white/30 bg-white/5 text-white",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="text-base leading-none">
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={clsx(
          "fixed inset-0 z-[55] bg-[#0d141a] px-6 pt-24 transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-2xl font-medium text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="mt-6 text-base text-sand-teal"
          >
            {company.phoneDisplay}
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex min-h-12 w-fit items-center rounded-full bg-sand-teal px-6 py-3 text-sm font-semibold text-white"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </>
  );
}
