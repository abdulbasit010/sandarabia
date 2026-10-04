import clsx from "clsx";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
  showArabic?: boolean;
};

export function Logo({ className, tone = "dark", showArabic = true }: LogoProps) {
  const ink = tone === "light" ? "#ffffff" : "#1b2430";
  const accent = "#00a8c0";

  return (
    <div className={clsx("flex items-center gap-2.5 sm:gap-3", className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
      >
        <rect x="2" y="2" width="14" height="14" fill={accent} />
        <rect x="18" y="2" width="8" height="8" fill={ink} opacity="0.85" />
        <rect x="28" y="2" width="10" height="10" fill={accent} opacity="0.55" />
        <rect x="2" y="18" width="8" height="8" fill={ink} opacity="0.7" />
        <rect x="12" y="16" width="12" height="12" fill={accent} opacity="0.85" />
        <rect x="26" y="18" width="6" height="6" fill={ink} opacity="0.45" />
        <rect x="2" y="28" width="10" height="10" fill={accent} opacity="0.4" />
        <rect x="16" y="30" width="8" height="8" fill={ink} opacity="0.8" />
        <rect x="28" y="26" width="10" height="12" fill={accent} />
      </svg>
      <div className="min-w-0 leading-none">
        {showArabic && (
          <p
            className="mb-1 truncate text-[10px] tracking-[0.04em] sm:text-[11px]"
            style={{ color: tone === "light" ? "rgba(255,255,255,0.78)" : "#5d6b78" }}
            dir="rtl"
            lang="ar"
          >
            الرمال العربية
          </p>
        )}
        <p
          className="truncate text-[13px] font-bold tracking-[0.08em] sm:text-[15px]"
          style={{ color: ink }}
        >
          SAND ARABIA
        </p>
      </div>
    </div>
  );
}
