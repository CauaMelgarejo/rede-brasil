import type { Metadata } from "next";
import { BradescoSaudePage } from "./BradescoSaudePage";

export const metadata: Metadata = {
  title: "Planos Bradesco Saúde em Porto Alegre e atendimento em todo o Brasil | Rede Brasil",
  description:
    "Conheça as opções de planos Bradesco Saúde para pessoas físicas e empresas em Porto Alegre/RS e atendimento em todo o Brasil. Solicite uma cotação personalizada.",
  alternates: {
    canonical: "/planos/bradesco-saude",
  },
};

export default function Page() {
  return <BradescoSaudePage />;
}
