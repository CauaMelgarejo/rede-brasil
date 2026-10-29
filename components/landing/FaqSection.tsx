"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_BUSINESS_PHONE } from "@/lib/whatsapp";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Onde os planos de saúde atendem?",
    answer:
      "A área de atendimento depende da operadora e do plano escolhido. Existem opções com abrangência regional, que atendem determinadas cidades ou regiões, e opções com abrangência nacional. Nossa equipe pode ajudar você a identificar as alternativas disponíveis para sua cidade e necessidade.",
  },
  {
    question: "Quais operadoras vocês oferecem?",
    answer:
      "Trabalhamos com opções de diferentes operadoras, incluindo MedSênior, Hapvida, Doctor Clin, Amil, Bradesco Saúde, SulAmérica, Humana Saúde, Sulmed e Unimed Porto Alegre. A disponibilidade depende da modalidade e das condições de contratação de cada produto.",
  },
  {
    question: "Quais tipos de planos posso contratar?",
    answer:
      "Existem opções individuais, empresariais e por adesão, conforme a operadora. A disponibilidade de cada modalidade e os requisitos de contratação variam de acordo com o produto.",
  },
  {
    question: "Posso contratar um plano para minha empresa?",
    answer:
      "Sim. Existem opções empresariais para empresas de diferentes portes, de acordo com as regras de cada operadora. A quantidade mínima de beneficiários e os documentos exigidos variam conforme o plano.",
  },
  {
    question: "Como faço para saber o preço de um plano?",
    answer:
      "O valor depende de fatores como operadora, modalidade de contratação, idades dos beneficiários, abrangência e características do produto. Entre em contato para solicitar uma cotação personalizada.",
  },
  {
    question: "Os planos possuem coparticipação?",
    answer:
      "Depende do produto contratado. Algumas opções possuem coparticipação, enquanto outras podem oferecer condições diferentes. Nossa equipe pode explicar as alternativas disponíveis antes da contratação.",
  },
  {
    question: "Como faço para contratar um plano de saúde?",
    answer:
      "Você pode entrar em contato pelo WhatsApp e informar o tipo de plano desejado, a cidade de atendimento e as principais necessidades. Nossa equipe ajudará a identificar as opções disponíveis e orientar você durante o processo de cotação.",
  },
  {
    question: "Posso incluir dependentes no plano?",
    answer:
      "Isso depende da modalidade contratada e das regras da operadora. Na cotação, podemos verificar as condições de inclusão de dependentes para o plano desejado.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const phone = WHATSAPP_BUSINESS_PHONE.replace(/\D/g, "");
  const hasConfiguredPhone = /^\d{10,15}$/.test(phone);
  const whatsappHref = hasConfiguredPhone
    ? `https://wa.me/${phone}?text=${encodeURIComponent("Olá! Tenho dúvidas sobre planos de saúde e gostaria de receber mais informações.")}`
    : "/#planos";

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-6 bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A353C]/65">
            FAQ
          </p>
          <h2
            id="faq-title"
            className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#1A353C] sm:text-4xl lg:text-5xl"
          >
            Dúvidas frequentes
          </h2>
          <p className="mt-4 text-base leading-7 text-[#1A353C]/75 sm:text-lg">
            Confira as respostas para as principais dúvidas sobre planos de saúde.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={[
                  "overflow-hidden rounded-[1.1rem] border transition-all duration-200",
                  isOpen
                    ? "border-[#1A353C]/25 bg-[#1A353C] shadow-[0_18px_40px_rgba(26,53,60,0.14)]"
                    : "border-[#1A353C]/10 bg-white shadow-[0_12px_30px_rgba(26,53,60,0.05)]",
                ].join(" ")}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[#1A353C]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A353C]/35 focus-visible:ring-inset sm:px-6"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span
                    className={[
                      "pr-4 text-base font-semibold sm:text-lg",
                      isOpen ? "text-white" : "text-[#1A353C]",
                    ].join(" ")}
                  >
                    {item.question}
                  </span>
                  <span
                    className={[
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                      isOpen ? "bg-white/10 text-white" : "bg-[#1A353C]/5 text-[#1A353C]",
                    ].join(" ")}
                  >
                    <ChevronDown
                      className={[
                        "h-5 w-5 transition-transform duration-200",
                        isOpen ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={[
                    "grid overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p
                      className={[
                        "px-5 pb-5 pt-0 text-base leading-8 sm:px-6 sm:text-lg",
                        isOpen ? "text-white/80" : "text-[#1A353C]/75",
                      ].join(" ")}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[1.4rem] border border-[#1A353C]/10 bg-[#1A353C] px-5 py-6 text-center sm:px-8 sm:py-7">
          <p className="text-lg font-medium text-white sm:text-xl">
            Ainda tem dúvidas? Estamos aqui para ajudar!
          </p>

          <a
            href={whatsappHref}
            target={hasConfiguredPhone ? "_blank" : undefined}
            rel={hasConfiguredPhone ? "noopener noreferrer" : undefined}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A353C] transition hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A353C]"
          >
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
