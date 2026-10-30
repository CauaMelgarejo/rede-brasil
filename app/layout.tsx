import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://planosdesauderedebrasil.com.br"),
  title: "Planos de saúde em Porto Alegre e atendimento em todo o Brasil | Rede Brasil",
  description:
    "Corretora de planos de saúde em Porto Alegre/RS com atendimento em todo o Brasil. Compare opções para pessoas físicas e empresas e solicite uma cotação personalizada.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Planos de saúde em Porto Alegre e atendimento em todo o Brasil | Rede Brasil",
    description:
      "Atendimento personalizado de planos de saúde em Porto Alegre/RS e em todo o Brasil para pessoas físicas e empresas.",
    url: "https://planosdesauderedebrasil.com.br/",
    siteName: "Rede Brasil",
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planos de saúde em Porto Alegre e atendimento em todo o Brasil | Rede Brasil",
    description:
      "Corretora de planos de saúde em Porto Alegre/RS com atendimento em todo o Brasil.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#F5F5F5] text-[#1A353C]">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
