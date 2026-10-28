import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type PlanModality = "Individual" | "Empresarial" | "Adesão";
export type PlanCoverage = "Nacional" | "Nacional + regional" | "Regional";

export type PlanCardData = {
  id: string;
  name: string;
  logo: string;
  logoClassName?: string;
  coverage: PlanCoverage;
  modalities: PlanModality[];
  description: string;
  href: string;
};

type PlanCardProps = PlanCardData & {
  className?: string;
};

export function PlanCard({
  name,
  logo,
  logoClassName,
  coverage,
  modalities,
  description,
  href,
  className = "",
}: PlanCardProps) {
  return (
    <article
      className={`flex min-h-[320px] flex-col justify-between rounded-[1.25rem] border border-[#1A353C]/25 bg-[#F5F5F5] p-5 shadow-[0_10px_25px_rgba(26,53,60,0.04)] ${className}`}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-[70px] items-center justify-center">
          <Image
            src={logo}
            alt={name}
            width={220}
            height={80}
            className={[
              "h-auto w-auto object-contain",
              logoClassName ?? "max-h-[60px]",
            ].join(" ")}
          />
        </div>

        <Link
          href={href}
          className="text-base leading-7 text-[#1A353C]/80"
        >
          {name}
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex w-fit rounded-full bg-[#1A353C] px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-white">
            {coverage}
          </span>
          <span className="inline-flex w-fit rounded-full border border-[#1A353C]/30 bg-white px-2.5 py-1 text-[0.75rem] font-medium text-[#1A353C]/80">
            {modalities.join(" e ")}
          </span>
        </div>

        <p className="text-sm leading-6 text-[#1A353C]/80">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1A353C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#244a52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A353C]/40 focus-visible:ring-offset-2"
      >
        Conhecer opções
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
