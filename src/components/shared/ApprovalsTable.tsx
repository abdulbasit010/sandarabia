import Image from "next/image";
import { approvalLogos } from "@/content/site";

export function ApprovalsTable() {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-white/15 bg-white">
      <div className="grid grid-cols-2 divide-x divide-y divide-black/10 sm:grid-cols-4 sm:divide-y-0">
        {approvalLogos.map((logo) => (
          <div
            key={logo.id}
            className="flex min-h-[120px] flex-col items-center justify-center gap-3 px-4 py-5 sm:min-h-[140px] sm:px-5 sm:py-6"
          >
            <div className="relative h-16 w-full sm:h-20">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width:640px) 45vw, 20vw"
              />
            </div>
            <p className="text-center text-[10px] leading-snug text-[#041018]/70 sm:text-[11px]">
              {logo.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
