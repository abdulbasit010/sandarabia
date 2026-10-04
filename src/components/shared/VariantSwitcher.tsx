"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { variants } from "@/content/site";
import clsx from "clsx";

export function VariantSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/") return null;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[70] max-w-[min(100vw-1.5rem,300px)] sm:bottom-5 sm:right-5">
      <div className="pointer-events-auto overflow-hidden rounded-2xl border border-black/10 bg-[#12161c]/94 text-white shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-3 px-3.5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.16em]"
          aria-expanded={open}
        >
          <span>Compare directions</span>
          <span aria-hidden="true" className="text-base leading-none">
            {open ? "−" : "+"}
          </span>
        </button>
        {open && (
          <div className="max-h-[min(60vh,420px)] space-y-1 overflow-y-auto border-t border-white/10 p-2">
            <Link
              href="/"
              className="block rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              All directions
            </Link>
            {variants.map((variant) => {
              const href = `/${variant.slug}`;
              const active = pathname === href;
              return (
                <Link
                  key={variant.id}
                  href={href}
                  className={clsx(
                    "block rounded-xl px-3 py-2.5 transition",
                    active ? "bg-[#00a8c0] text-[#061016]" : "hover:bg-white/10",
                  )}
                >
                  <span className="block text-sm font-semibold">
                    {variant.id}. {variant.title}
                  </span>
                  <span
                    className={clsx(
                      "mt-0.5 block text-[11px] leading-snug",
                      active ? "text-[#061016]/75" : "text-white/55",
                    )}
                  >
                    {variant.description}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
