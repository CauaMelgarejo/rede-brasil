import type { Metadata } from "next";
import { BradescoSaudePage } from "./BradescoSaudePage";

export const metadata: Metadata = {
  title: "Planos Bradesco Saúde | Rede Brasil",
  description:
    "Conheça as opções empresariais Bradesco Saúde e solicite uma cotação personalizada.",
};

export default function Page() {
  return <BradescoSaudePage />;
}
