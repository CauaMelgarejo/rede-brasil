import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://planosdesauderedebrasil.com.br"),
  title: "Rede Brasil | Corretora de planos de saúde",
  description: "Site institucional para apresentação de planos de saúde e cotação por WhatsApp.",
  alternates: {
    canonical: "/",
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
