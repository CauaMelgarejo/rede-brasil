import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { OperatorPlanPage } from "@/components/plans/OperatorPlanPage";
import { getOperatorPlan, operatorPlans } from "@/lib/operatorPlans";

type OperatorRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return operatorPlans.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: OperatorRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const operator = getOperatorPlan(slug);

  if (!operator) notFound();

  return {
    title: `Planos ${operator.name} | Rede Brasil`,
    description: operator.description,
  };
}

export default function Page({ params }: OperatorRouteProps) {
  return (
    <Suspense
      fallback={
        <main
          aria-busy="true"
          className="min-h-screen bg-[#F5F5F5] px-4 py-16 text-[#1A353C]"
        >
          <p role="status">Carregando opções de cotação...</p>
        </main>
      }
    >
      <ResolvedOperatorPage params={params} />
    </Suspense>
  );
}

async function ResolvedOperatorPage({ params }: OperatorRouteProps) {
  const { slug } = await params;
  const operator = getOperatorPlan(slug);

  if (!operator) notFound();

  return <OperatorPlanPage operator={operator} />;
}
