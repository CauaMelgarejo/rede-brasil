import type { Metadata } from "next";
import { Assistant, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rede Brasil | Corretora de planos de saúde",
  description: "Site institucional para apresentação de planos de saúde e cotação por WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} ${assistant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F5F5] text-[#1A353C]">
        {children}
      </body>
    </html>
  );
}
