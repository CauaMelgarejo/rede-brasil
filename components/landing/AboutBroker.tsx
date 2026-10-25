import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { WHATSAPP_BUSINESS_PHONE } from "@/lib/whatsapp";

export function AboutBroker() {
  const phone = WHATSAPP_BUSINESS_PHONE.replace(/\D/g, "");
  const hasConfiguredPhone = /^\d{10,15}$/.test(phone);
  const contactHref = hasConfiguredPhone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(
        "Olá! Gostaria de falar com a corretora.",
      )}`
    : "/#planos";

  return (
    <section
      id="sobre"
      aria-labelledby="about-broker-title"
      className="scroll-mt-6 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-360 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="mx-auto w-full max-w-sm rounded-[2rem] bg-[#E9EEEE] p-3 sm:p-4">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-white">
            <Image
              src="/images/corretora.png"
              alt="Vanessa Tavares, corretora de seguros, em seu escritório"
              fill
              sizes="(max-width: 1023px) 90vw, 400px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1A353C]/10 bg-[#F5F5F5] px-4 py-2 text-sm font-semibold text-[#1A353C]">
            <Trophy className="h-4 w-4" aria-hidden="true" />
            Experiência que aproxima
          </div>

          <h2
            id="about-broker-title"
            className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#1A353C] sm:text-4xl lg:text-5xl"
          >
            17 anos de experiência no ramo de seguros, planos de saúde e
            odontológico.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#1A353C]/80 sm:text-xl">
            Atendimento personalizado para ajudar você, sua família ou sua
            empresa a encontrar a opção mais adequada às suas necessidades.
          </p>

          <div className="mt-6 space-y-4 text-base leading-8 text-[#1A353C]/75">
            <p>
              Com 17 anos de experiência no mercado de seguros, planos de saúde
              e odontológicos, oferecemos atendimento personalizado para
              ajudar cada cliente a encontrar soluções adequadas ao seu perfil.
            </p>
            <p>
              Nosso compromisso é entender suas necessidades, esclarecer suas
              dúvidas e acompanhar você durante o processo de escolha e
              contratação, com atenção, transparência e cuidado em cada etapa.
            </p>
            <p>
              Mais do que apresentar opções, queremos construir uma relação de
              confiança, oferecendo orientação próxima para que você tome sua
              decisão com segurança.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href={contactHref}
              target={hasConfiguredPhone ? "_blank" : undefined}
              rel={hasConfiguredPhone ? "noopener noreferrer" : undefined}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1A353C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#244a52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A353C]/40 focus-visible:ring-offset-2"
            >
              Fale com a corretora
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {!hasConfiguredPhone && (
              <p className="mt-3 text-sm text-[#1A353C]/65">
                O WhatsApp comercial ainda não está configurado. Você pode
                consultar as opções de planos enquanto isso.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
