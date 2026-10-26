import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
  showArabic?: boolean;
};

export function Logo({ className, tone = "dark", showArabic = true }: LogoProps) {
  const src = tone === "light" ? "/images/logo-brand-light.png" : "/images/logo-brand.png";

  return (
    <div className={clsx("flex items-center", className)}>
      <Image
        src={src}
        alt="Sand Arabia — الرمال العربية"
        width={200}
        height={66}
        className="h-9 w-auto max-w-[min(58vw,200px)] object-contain object-left sm:h-10 sm:max-w-[220px] md:h-11"
        priority
      />
      {showArabic && (
        <span className="sr-only" lang="ar">
          الرمال العربية
        </span>
      )}
    </div>
  );
}
