import Image from "next/image";
import Link from "next/link";

export type PlanCardData = {
  id: string;
  name: string;
  logo: string;
  category: "Todos" | "Individual" | "Empresarial";
  description: string;
  href?: string;
};

type PlanCardProps = PlanCardData & {
  className?: string;
};

export function PlanCard({
  name,
  logo,
  category,
  description,
  href = "#",
  className = "",
}: PlanCardProps) {
  return (
    <article
      className={`flex min-h-[260px] flex-col justify-between rounded-[1.25rem] border border-[#1A353C]/25 bg-[#F5F5F5] p-5 shadow-[0_10px_25px_rgba(26,53,60,0.04)] ${className}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex h-[70px] items-center justify-center">
          <Image
            src={logo}
            alt={name}
            width={220}
            height={80}
            className="h-auto max-h-[52px] w-auto object-contain"
          />
        </div>

        <span className="inline-flex w-fit rounded-full border border-[#1A353C]/30 bg-white px-2.5 py-1 text-[0.75rem] font-medium text-[#1A353C]/80">
          {category}
        </span>

        <p className="text-base leading-7 text-[#1A353C]/80">{description}</p>
      </div>

      <Link
        href={href}
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#1A353C] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#244a52]"
      >
        Ver planos
      </Link>
    </article>
  );
}
