"use client";

import Image from "next/image";
import { useState } from "react";

const plans = [
  { name: "Amil", src: "/images/amil-logo.png", width: 160, height: 64 },
  { name: "Bradesco", src: "/images/logo-bradesco-hero%201.png", width: 210, height: 64 },
  { name: "SulAmérica", src: "/images/sul_america-logo.png", width: 240, height: 64 },
  { name: "Unimed", src: "/images/unimed.png", width: 170, height: 64 },
  { name: "Amil", src: "/images/amil-logo.png", width: 160, height: 64 },
  { name: "Bradesco", src: "/images/logo-bradesco-hero%201.png", width: 210, height: 64 },
  { name: "SulAmérica", src: "/images/sul_america-logo.png", width: 240, height: 64 },
  { name: "Unimed", src: "/images/unimed.png", width: 170, height: 64 },
];

export function PlanCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visiblePlans = Array.from({ length: 4 }, (_, index) => {
    const planIndex = (currentIndex + index) % plans.length;
    return plans[planIndex];
  });

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };

  return (
    <div className="mt-8 flex items-center gap-3 sm:gap-5">
      <button
        type="button"
        aria-label="Operadoras anteriores"
        onClick={previous}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-2xl text-white transition hover:bg-white/10"
      >
        ‹
      </button>

      <div className="flex flex-1 items-center justify-center gap-4 overflow-hidden">
        {visiblePlans.map((plan, index) => (
          <div
            key={`${plan.name}-${index}`}
            className="flex h-24 min-w-0 flex-1 items-center justify-center px-4"
          >
            <Image
              src={plan.src}
              alt={plan.name}
              width={plan.width}
              height={plan.height}
              className="h-14 w-auto object-contain brightness-110 drop-shadow-[0_6px_18px_rgba(255,255,255,0.12)] sm:h-16"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Próximas operadoras"
        onClick={next}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-2xl text-white transition hover:bg-white/10"
      >
        ›
      </button>
    </div>
  );
}
