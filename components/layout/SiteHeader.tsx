import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Planos", href: "/#planos" },
  { label: "Atendimento", href: "/#atendimento" },
  { label: "Sobre nós", href: "/#sobre" },
];

type SiteHeaderProps = {
  quoteHref?: string;
};

export function SiteHeader({ quoteHref = "/#planos" }: SiteHeaderProps) {
  return (
    <header className="bg-[#1A353C] px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-360 flex-wrap items-center justify-between gap-4 rounded-[1.25rem] bg-[#1A353C] px-3 py-3 sm:px-5">
        <Link
          href="/#inicio"
          aria-label="Rede Brasil — página inicial"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20">
            <Image
              src="/images/logo.png"
              alt=""
              fill
              sizes="48px"
              className="object-cover p-1"
            />
          </div>
          <div className="leading-none text-white">
            <p className="text-[0.7rem] font-semibold tracking-[0.12em]">
              VANESSA TAVARES
            </p>
            <p className="mt-1 text-[0.55rem] uppercase tracking-[0.14em] text-white/70">
              Corretora de seguros
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/85 md:flex">
          {navigation.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Button
          href={quoteHref}
          className="hidden min-w-37.5 rounded-full px-5 py-3 text-sm md:inline-flex"
        >
          Solicitar cotação
        </Button>

        <details className="group relative md:hidden">
          <summary
            aria-label="Alternar navegação principal"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/30 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white [&::-webkit-details-marker]:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </summary>
          <nav
            aria-label="Navegação principal"
            className="absolute right-0 top-14 z-20 grid w-56 gap-1 rounded-2xl border border-white/15 bg-[#1A353C] p-3 text-sm text-white shadow-xl"
          >
            {navigation.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="rounded-lg px-3 py-2.5 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {label}
              </Link>
            ))}
            <Button
              href={quoteHref}
              className="mt-2 rounded-full px-4 py-3 text-sm"
            >
              Solicitar cotação
            </Button>
          </nav>
        </details>
      </div>
    </header>
  );
}
