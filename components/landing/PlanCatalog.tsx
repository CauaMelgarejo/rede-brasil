"use client";

import { MessageCircleMore } from "lucide-react";
import { useMemo, useState } from "react";
import { PlanCard, type PlanCardData } from "@/components/landing/PlanCard";

const categories = ["Todos", "Individual", "Empresarial"] as const;
type Category = (typeof categories)[number];

type PlanCatalogProps = {
  plans: PlanCardData[];
};

export function PlanCatalog({ plans }: PlanCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<Category>("Todos");

  const filteredPlans = useMemo(() => {
    if (activeFilter === "Todos") return plans;
    return plans.filter((plan) =>
      plan.modalities.includes(activeFilter),
    );
  }, [activeFilter, plans]);

  return (
    <section
      id="planos"
      className="scroll-mt-6 bg-[#F5F5F5] px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-6 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeFilter === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={[
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "border-[#1A353C] bg-[#1A353C] text-white shadow-[0_10px_20px_rgba(26,53,60,0.12)]"
                    : "border-[#1A353C]/25 bg-transparent text-[#1A353C] hover:border-[#1A353C]/45",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredPlans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>

        <div className="mt-8 rounded-[1.4rem] bg-[#1A353C] px-5 py-4 text-white shadow-[0_20px_40px_rgba(26,53,60,0.18)] sm:px-7 sm:py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-[0.75rem] border border-white/20 bg-white/5 text-white">
                <MessageCircleMore className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.05em] text-white">
                  Quer conhecer todas as opções?
                </h3>
                <p className="mt-2 max-w-[620px] text-sm leading-7 text-white/80 sm:text-base">
                  Se você deseja comparar alternativas de diferentes operadoras, nossa equipe pode ajudar.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#27C58B] px-5 py-3 text-sm font-semibold text-[#1A353C] shadow-[0_12px_32px_rgba(39,197,139,0.35)] transition hover:bg-[#36d79d]"
            >
              Fazer cotação de todos os planos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
