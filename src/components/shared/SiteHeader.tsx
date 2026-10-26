"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import clsx from "clsx";
import { Logo } from "@/components/shared/Logo";
import { company, navLinks } from "@/content/site";

type SiteHeaderProps = {
  overHero?: boolean;
};

export function SiteHeader({ overHero = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = !overHero || scrolled || open;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "border-b border-white/10 bg-[#04080d]/92 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-wide flex h-16 items-center justify-between gap-3 sm:h-[72px] md:h-20">
          <Link href="/" className="relative z-[60] min-w-0 shrink" aria-label="Sand Arabia home">
            <Logo tone="light" className="origin-left scale-[0.92] sm:scale-100" />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "whitespace-nowrap text-sm font-medium tracking-wide transition",
                  isActive(link.href) ? "text-cyan-300" : "text-white/80 hover:text-white",
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-[#041018] transition hover:bg-white"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
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
        id={panelId}
        className={clsx(
          "fixed inset-0 z-[55] bg-[#04080d] px-6 pt-24 transition-opacity duration-300 lg:hidden",
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "border-b border-white/10 py-4 text-2xl font-medium",
                isActive(link.href) ? "text-cyan-300" : "text-white",
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="mt-6 text-base text-cyan-300"
          >
            {company.phoneDisplay}
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex min-h-12 w-fit items-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#041018]"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}
