import {
  BadgeCheck,
  BriefcaseMedical,
  HandCoins,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PlanCarousel } from "@/components/landing/PlanCarousel";
import { PlanCatalog } from "@/components/landing/PlanCatalog";
import { AboutBroker } from "@/components/landing/AboutBroker";
import type { PlanCardData } from "@/components/landing/PlanCard";

const reasons = [
  {
    title: "Atendimento personalizado",
    text: "Você recebe orientação para entender as opções disponíveis e encontrar um plano adequado ao seu perfil.",
    icon: "user",
  },
  {
    title: "Diversas opções de planos",
    text: "Conheça alternativas de diferentes operadoras em um só lugar.",
    icon: "money",
  },
  {
    title: "Orientação na escolha",
    text: "Entenda as características de cada opção antes de tomar sua decisão.",
    icon: "shield",
  },
  {
    title: "Acompanhamento durante a contratação",
    text: "Conte com nosso suporte para esclarecer dúvidas durante o processo.",
    icon: "support",
  },
];

const plans: PlanCardData[] = [
  {
    id: "bradesco-saude",
    name: "Bradesco Saúde",
    logo: "/images/logo-bradesco-hero%201.png",
    coverage: "Nacional",
    modalities: ["Empresarial"],
    description:
      "Explore as opções de planos empresariais Bradesco Saúde e conheça as alternativas de cobertura e contratação disponíveis para sua empresa. Solicite uma cotação personalizada.",
    href: "/planos/bradesco-saude",
  },
  {
    id: "sulamerica",
    name: "SulAmérica",
    logo: "/images/sul_america-logo.png",
    logoClassName: "max-h-[74px] sm:max-h-[82px]",
    coverage: "Nacional",
    modalities: ["Empresarial", "Adesão"],
    description:
      "Conheça as alternativas de planos de saúde SulAmérica para empresas e para públicos elegíveis à contratação por adesão. Compare as opções e encontre a modalidade mais adequada às suas necessidades.",
    href: "/planos/sulamerica",
  },
  {
    id: "amil",
    name: "Amil",
    logo: "/images/amil-logo.png",
    logoClassName: "max-h-[74px] sm:max-h-[82px]",
    coverage: "Nacional",
    modalities: ["Empresarial"],
    description:
      "Descubra alternativas de planos de saúde empresariais para sua organização. Consulte as opções disponíveis e encontre uma configuração compatível com o perfil da empresa e de seus colaboradores.",
    href: "/planos/amil",
  },
  {
    id: "unimed-porto-alegre",
    name: "Unimed Porto Alegre",
    logo: "/images/unimed.png",
    logoClassName: "max-h-[74px] sm:max-h-[82px]",
    coverage: "Regional",
    modalities: ["Empresarial"],
    description:
      "Conheça as alternativas de planos empresariais da Unimed Porto Alegre. Consulte as opções de contratação, as coberturas disponíveis e as condições para encontrar uma solução adequada à sua empresa.",
    href: "/planos/unimed-porto-alegre",
  },
  {
    id: "medsenior",
    name: "MedSênior",
    logo: "/images/medSenior.png",
    logoClassName: "max-h-[74px] sm:max-h-[82px]",
    coverage: "Nacional + regional",
    modalities: ["Individual", "Empresarial"],
    description:
      "Planos de saúde voltados ao público sênior, com opções para diferentes necessidades de cuidado e assistência. Conheça as modalidades disponíveis e encontre uma alternativa alinhada ao seu perfil.",
    href: "/planos/medsenior",
  },
  {
    id: "doctor-clin",
    name: "Doctor Clin",
    logo: "/images/doctorclin.png",
    coverage: "Regional",
    modalities: ["Empresarial", "Adesão"],
    description:
      "Conheça as opções de assistência à saúde da Doctor Clin e avalie as alternativas disponíveis para empresas e para beneficiários elegíveis à modalidade por adesão.",
    href: "/planos/doctor-clin",
  },
  {
    id: "hapvida",
    name: "Hapvida",
    logo: "/images/hapvida.png",
    coverage: "Regional",
    modalities: ["Individual", "Empresarial"],
    description:
      "Encontre opções de planos de saúde para você, sua família ou sua empresa. Consulte as alternativas disponíveis e compare modalidades de contratação, coberturas e condições.",
    href: "/planos/hapvida",
  },
  {
    id: "sulmed",
    name: "Sulmed",
    logo: "/images/sulmed.png",
    coverage: "Regional",
    modalities: ["Empresarial", "Adesão"],
    description:
      "Conheça as opções de assistência à saúde da Sulmed, com alternativas para contratação empresarial e por adesão, conforme os critérios de elegibilidade. Solicite informações para identificar o plano mais adequado ao seu perfil.",
    href: "/planos/sulmed",
  },
  {
    id: "humana-saude",
    name: "Humana Saúde",
    logo: "/images/humana.png",
    coverage: "Regional",
    modalities: ["Empresarial", "Adesão"],
    description:
      "Avalie as opções de planos Humana Saúde para empresas e para beneficiários que atendam aos critérios da modalidade por adesão. Consulte as condições de contratação e as alternativas disponíveis.",
    href: "/planos/humana-saude",
  },
];

function Icon({ type }: { type: string }) {
  const common = { size: 42, strokeWidth: 2.25, className: "h-[42px] w-[42px] text-[#1A353C]" };

  if (type === "user") {
    return <UserRound {...common} />;
  }

  if (type === "money") {
    return <HandCoins {...common} />;
  }

  if (type === "shield") {
    return <ShieldCheck {...common} />;
  }

  if (type === "support") {
    return <BriefcaseMedical {...common} />;
  }

  return <BadgeCheck {...common} />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#1A353C]">
      <SiteHeader />

      <section
        id="inicio"
        className="scroll-mt-6 relative isolate overflow-hidden bg-[#1A353C]"
      >
        <div className="absolute inset-0 bg-[url('/images/fundo.png')] bg-cover bg-[position:80%_center] opacity-95 sm:bg-center" />
        <div className="absolute inset-0 bg-[#1A353C]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_32%),radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.12),transparent_28%)]" />

        <div className="pointer-events-none absolute -left-16 top-10 h-65 w-65 rounded-full border-[3px] border-white/20" />
        <div className="pointer-events-none absolute -right-20 top-0 h-105 w-105 rounded-full border-[3px] border-white/10" />

        <div className="relative mx-auto grid min-h-155 max-w-360 items-center gap-10 px-4 pb-10 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-16">
          <div className="max-w-170 pb-4 pt-4 sm:pt-10">
            <h1 className="max-w-135 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4rem]">
              Sua saúde merece a escolha certa
            </h1>

            <p className="mt-6 max-w-152.5 text-xl leading-9 text-white/85">
              Encontre o plano de saúde ideal para você, sua família ou sua empresa.
              Conheça as opções disponíveis e conte com atendimento personalizado para
              encontrar uma alternativa que combine com suas necessidades.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/#planos" className="rounded-full px-7 py-4 text-base shadow-[0_18px_40px_rgba(26,53,60,0.28)]">
                Solicitar cotação
              </Button>

              <Button variant="secondary" href="/#planos" className="rounded-full border-white/35 bg-white/8 px-7 py-4 text-base text-white hover:bg-white/15">
                Conhecer os planos
              </Button>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </section>

      <section className="bg-[#1A353C] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-360">
          <p className="text-center text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            Trabalhamos com diferentes operadoras
          </p>

          <PlanCarousel />
        </div>
      </section>

      <section
        id="atendimento"
        className="scroll-mt-6 bg-[#E9EEEE] px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-360 rounded-[18px] bg-[#E9EEEE] px-2 py-3">
          <h2 className="px-2 pt-2 text-[clamp(2.1rem,4vw,4rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#1A353C] sm:px-4">
            Por que escolher nosso atendimento?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={[
                  "flex flex-col items-start justify-start gap-4 px-4 py-4 md:min-h-55 md:border-l md:border-[#1A353C]/20 md:pl-8",
                  index === 0 ? "md:border-l-0 md:pl-2" : "",
                ].join(" ")}
              >
                <div className="flex h-18 w-18 items-center justify-center rounded-full bg-transparent text-[#1A353C]">
                  <Icon type={reason.icon} />
                </div>

                <div className="space-y-3">
                  <h3 className="max-w-52.5 text-[1.05rem] font-semibold leading-[1.3] tracking-[-0.02em] text-[#1A353C] lg:text-[1.25rem]">
                    {reason.title}
                  </h3>
                  <p className="max-w-60 text-[0.96rem] leading-[1.65] text-[#1A353C]/75">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutBroker />
      <PlanCatalog plans={plans} />
    </main>
  );
}
