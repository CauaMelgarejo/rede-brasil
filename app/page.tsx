import Image from "next/image";
import {
  BadgeCheck,
  BriefcaseMedical,
  HandCoins,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PlanCarousel } from "@/components/landing/PlanCarousel";
import { PlanCatalog } from "@/components/landing/PlanCatalog";
import type { PlanCardData } from "@/components/landing/PlanCard";

const navigation = ["Inicio", "Planos", "Como funciona", "Sobre nós", "FAQ"];

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
    id: "bradesco-individual",
    name: "Bradesco",
    logo: "/images/logo-bradesco-hero%201.png",
    category: "Individual",
    description: "Conheça as opções disponíveis e descubra quais modalidades podem atender ao seu perfil.",
    href: "#",
  },
  {
    id: "bradesco-empresarial",
    name: "Bradesco",
    logo: "/images/logo-bradesco-hero%201.png",
    category: "Empresarial",
    description: "Conheça as opções disponíveis e descubra quais modalidades podem atender ao seu perfil.",
    href: "#",
  },
  {
    id: "amil-individual",
    name: "Amil",
    logo: "/images/amil-logo.png",
    category: "Individual",
    description: "Conheça as opções disponíveis e descubra quais modalidades podem atender ao seu perfil.",
    href: "#",
  },
  {
    id: "amil-empresarial",
    name: "Amil",
    logo: "/images/amil-logo.png",
    category: "Empresarial",
    description: "Conheça as opções disponíveis e descubra quais modalidades podem atender ao seu perfil.",
    href: "#",
  },
  {
    id: "sul-individual",
    name: "SulAmérica",
    logo: "/images/sul_america-logo.png",
    category: "Individual",
    description: "Conheça as opções disponíveis e descubra quais modalidades podem atender ao seu perfil.",
    href: "#",
  },
  {
    id: "sul-empresarial",
    name: "SulAmérica",
    logo: "/images/sul_america-logo.png",
    category: "Empresarial",
    description: "Conheça as opções disponíveis e descubra quais modalidades podem atender ao seu perfil.",
    href: "#",
  },
  {
    id: "unimed-individual",
    name: "Unimed",
    logo: "/images/unimed.png",
    category: "Individual",
    description: "Conheça as opções disponíveis e descubra quais modalidades podem atender ao seu perfil.",
    href: "#",
  },
  {
    id: "unimed-empresarial",
    name: "Unimed",
    logo: "/images/unimed.png",
    category: "Empresarial",
    description: "Conheça as opções disponíveis e descubra quais modalidades podem atender ao seu perfil.",
    href: "#",
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
      <header className="bg-[#1A353C] px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-360 items-center justify-between gap-4 rounded-[1.25rem] bg-[#1A353C] px-3 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20">
              <Image
                src="/images/logo.png"
                alt="VANESSA TAVARES"
                fill
                className="object-cover p-1"
              />
            </div>
            <div className="leading-none text-white">
              <p className="text-[0.7rem] font-semibold tracking-[0.12em]">VANESSA TAVARES</p>
              <p className="mt-1 text-[0.55rem] uppercase tracking-[0.14em] text-white/70">
                Corretora de seguros
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/85 md:flex">
            {navigation.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <Button href="#" className="min-w-37.5 rounded-full px-5 py-3 text-sm">
            Solicitar cotação
          </Button>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#1A353C]">
        <div className="absolute inset-0 bg-[url('/images/fundo.png')] bg-cover bg-center opacity-95" />
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
              <Button href="#" className="rounded-full px-7 py-4 text-base shadow-[0_18px_40px_rgba(26,53,60,0.28)]">
                Solicitar cotação
              </Button>

              <Button variant="secondary" href="#" className="rounded-full border-white/35 bg-white/8 px-7 py-4 text-base text-white hover:bg-white/15">
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

      <section className="bg-[#E9EEEE] px-4 py-8 sm:px-6 lg:px-8">
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

      <PlanCatalog plans={plans} />
    </main>
  );
}
