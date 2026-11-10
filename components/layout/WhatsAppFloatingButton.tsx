import { MessageCircleMore } from "lucide-react";
import { WHATSAPP_BUSINESS_PHONE } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  const phone = WHATSAPP_BUSINESS_PHONE.replace(/\D/g, "");
  const hasConfiguredPhone = /^\d{10,15}$/.test(phone);
  const href = hasConfiguredPhone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(
        "Olá! Gostaria de solicitar informações sobre planos de saúde.",
      )}`
    : "/#planos";

  return (
    <a
      href={href}
      target={hasConfiguredPhone ? "_blank" : undefined}
      rel={hasConfiguredPhone ? "noopener noreferrer" : undefined}
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <MessageCircleMore className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
