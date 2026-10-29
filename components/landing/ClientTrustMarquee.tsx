import Image from "next/image";

type TrustLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

const customerNames: Record<string, string> = {
  "alma-meter.jpeg": "Alma Meter",
  "ccats.jpeg": "CCATS",
  "dacolonia.jpeg": "Dacolônia",
  "dedicare.jpeg": "Dedicare",
  "embrasul.jpeg": "Embrasul",
  "galeteria.jpeg": "Galeria",
  "hs.jpeg": "HS",
  "kasa.jpeg": "Kasa",
  "lar.jpeg": "Lar",
  "mathias.jpeg": "Mathias",
  "panam-imoveis.jpeg": "Panam Imóveis",
  "sao-miguel.jpeg": "São Miguel",
  "vipes.jpeg": "Vipes",
  "vs.jpeg": "VS",
};

const trustLogos: TrustLogo[] = Object.entries(customerNames).map(([fileName, name]) => ({
  name,
  src: `/images/clientes/${fileName}`,
  width: 220,
  height: 90,
}));

const doubledLogos = (logos: TrustLogo[]) => [...logos, ...logos];

export function ClientTrustMarquee() {
  const topRow = doubledLogos(trustLogos);
  const bottomRow = doubledLogos(trustLogos);

  return (
    <section
      id="clientes"
      aria-labelledby="clients-trust-title"
      className="scroll-mt-6 bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-360">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1A353C]/65">
            Confiança
          </p>
          <h2
            id="clients-trust-title"
            className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#1A353C] sm:text-4xl lg:text-5xl"
          >
            Clientes que confiam
          </h2>
          <p className="mt-4 text-base leading-7 text-[#1A353C]/75 sm:text-lg">
            Conectando pessoas e empresas a soluções de saúde.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <div className="customer-marquee" aria-label="Clientes da corretora em destaque">
            <div className="customer-marquee__track customer-marquee__track--right">
              {topRow.map((logo, index) => (
                <div key={`${logo.name}-top-${index}`} className="customer-marquee__item group">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-11 w-auto object-contain opacity-90 grayscale-[0.15] transition duration-300 group-hover:grayscale-0 sm:h-12 lg:h-14"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="customer-marquee" aria-label="Clientes da corretora em destaque na linha inferior">
            <div className="customer-marquee__track customer-marquee__track--left">
              {bottomRow.map((logo, index) => (
                <div key={`${logo.name}-bottom-${index}`} className="customer-marquee__item group">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-11 w-auto object-contain opacity-90 grayscale-[0.15] transition duration-300 group-hover:grayscale-0 sm:h-12 lg:h-14"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
