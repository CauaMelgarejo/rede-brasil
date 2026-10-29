import Link from "next/link";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { WHATSAPP_BUSINESS_PHONE } from "@/lib/whatsapp";

const footerNavigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Planos", href: "/#planos" },
  { label: "Atendimento", href: "/#atendimento" },
  { label: "Clientes", href: "/#clientes" },
  { label: "FAQ", href: "/#faq" },
  { label: "Sobre nós", href: "/#sobre" },
];

export function SiteFooter() {
  const phone = WHATSAPP_BUSINESS_PHONE.replace(/\D/g, "");
  const hasConfiguredPhone = /^\d{10,15}$/.test(phone);
  const contactHref = hasConfiguredPhone
    ? `https://wa.me/${phone}?text=${encodeURIComponent("Olá! Gostaria de solicitar uma cotação de plano de saúde.")}`
    : "/#planos";

  return (
    <footer className="mt-auto border-t border-[#1A353C]/10 bg-[#1A353C] text-white">
      <div className="mx-auto max-w-360 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
              Rede Brasil
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
              Seu próximo passo em saúde começa com uma conversa.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              Encontre uma alternativa de plano de saúde que combine com sua rotina,
              sua empresa e suas necessidades de atendimento.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={contactHref}
                target={hasConfiguredPhone ? "_blank" : undefined}
                rel={hasConfiguredPhone ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1A353C] transition hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A353C]"
              >
                Solicitar cotação
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={contactHref}
                target={hasConfiguredPhone ? "_blank" : undefined}
                rel={hasConfiguredPhone ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A353C]"
              >
                <MessageCircleMore className="h-4 w-4" aria-hidden="true" />
                Fale pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:min-w-[420px] lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                Navegação
              </p>
              <nav aria-label="Menu do rodapé" className="mt-4 space-y-3">
                {footerNavigation.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="block text-sm text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                Atendimento
              </p>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                <p>Atendimento personalizado com foco em saúde e clareza.</p>
                <p>Orientação para encontrar o plano ideal para você ou sua empresa.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>© 2026 Rede Brasil. Todos os direitos reservados.</p>
          <p>Desenvolvido por RM Solutions</p>
        </div>
      </div>
    </footer>
  );
}
