"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TransitionEvent,
} from "react";

const plans = [
  { name: "MedSênior", src: "/images/medSenior.png", width: 220, height: 80 },
  { name: "Hapvida", src: "/images/hapvida.png", width: 220, height: 80 },
  { name: "Doctor Clin", src: "/images/doctorclin.png", width: 220, height: 80 },
  { name: "Amil", src: "/images/amil-logo.png", width: 220, height: 80 },
  { name: "Bradesco Saúde", src: "/images/logo-bradesco-hero%201.png", width: 220, height: 80 },
  { name: "SulAmérica", src: "/images/sul_america-logo.png", width: 240, height: 80 },
  { name: "Humana Saúde", src: "/images/humana.png", width: 220, height: 80 },
  { name: "Sulmed", src: "/images/sulmed.png", width: 220, height: 80 },
  { name: "Unimed Porto Alegre", src: "/images/unimed.png", width: 220, height: 80 },
];

const visiblePlanCount = 4;

export function PlanCarousel() {
  const [currentIndex, setCurrentIndex] = useState(visiblePlanCount);
  const [slideStep, setSlideStep] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isKeyboardFocused, setIsKeyboardFocused] = useState(false);
  const [isPointerInteracting, setIsPointerInteracting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const extendedPlans = [
    ...plans.slice(-visiblePlanCount),
    ...plans,
    ...plans.slice(0, visiblePlanCount),
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const firstSlide = track?.firstElementChild;
    if (!viewport || !track || !(firstSlide instanceof HTMLElement)) return;

    const measureSlideStep = () => {
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
      setSlideStep(firstSlide.getBoundingClientRect().width + gap);
    };

    const observer = new ResizeObserver(measureSlideStep);
    observer.observe(viewport);
    observer.observe(firstSlide);
    measureSlideStep();
    return () => observer.disconnect();
  }, []);

  const move = useCallback(
    (direction: -1 | 1) => {
      setCurrentIndex((index) => {
        if (prefersReducedMotion) {
          if (
            direction === 1 &&
            index >= plans.length + visiblePlanCount - 1
          ) {
            return visiblePlanCount;
          }
          if (direction === -1 && index <= visiblePlanCount) {
            return plans.length + visiblePlanCount - 1;
          }
        }
        return index + direction;
      });
    },
    [prefersReducedMotion],
  );

  const previous = useCallback(() => move(-1), [move]);
  const next = useCallback(() => move(1), [move]);

  useEffect(() => {
    if (
      prefersReducedMotion ||
      isHovered ||
      isKeyboardFocused ||
      isPointerInteracting
    ) {
      return;
    }

    const interval = window.setInterval(next, 4500);
    return () => window.clearInterval(interval);
  }, [
    isHovered,
    isKeyboardFocused,
    isPointerInteracting,
    next,
    prefersReducedMotion,
  ]);

  function handleTransitionEnd(event: TransitionEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;

    if (currentIndex >= plans.length + visiblePlanCount) {
      setIsTransitionEnabled(false);
      setCurrentIndex(visiblePlanCount);
    } else if (currentIndex < visiblePlanCount) {
      setIsTransitionEnabled(false);
      setCurrentIndex(plans.length + visiblePlanCount - 1);
    } else {
      return;
    }

    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
        animationFrameRef.current = null;
      });
    });
  }

  useEffect(
    () => () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    },
    [],
  );

  return (
    <div
      className="mt-8 flex items-center gap-3 sm:gap-5"
      role="region"
      aria-label="Operadoras de planos de saúde"
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          previous();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          next();
        }
      }}
      onFocusCapture={(event) => {
        if (
          event.target instanceof HTMLElement &&
          event.target.matches(":focus-visible")
        ) {
          setIsKeyboardFocused(true);
        }
      }}
      onBlurCapture={(event) => {
        if (
          event.relatedTarget instanceof Node &&
          event.currentTarget.contains(event.relatedTarget)
        ) {
          return;
        }
        setIsKeyboardFocused(false);
      }}
      onPointerDown={() => setIsPointerInteracting(true)}
      onPointerUp={() => setIsPointerInteracting(false)}
      onPointerCancel={() => setIsPointerInteracting(false)}
    >
      <div
        ref={viewportRef}
        className="flex flex-1 justify-center overflow-hidden"
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className={[
            "flex w-full",
            isTransitionEnabled && !prefersReducedMotion
              ? "transition-transform duration-700 ease-in-out motion-reduce:transition-none"
              : "",
          ].join(" ")}
          style={{
            gap: "1rem",
            transform: `translate3d(-${currentIndex * slideStep}px, 0, 0)`,
          }}
        >
          {extendedPlans.map((plan, index) => {
            const isClone =
              index < visiblePlanCount ||
              index >= visiblePlanCount + plans.length;

            return (
              <div
                key={`${plan.name}-${index}`}
                aria-hidden={isClone}
                className="flex h-24 shrink-0 basis-[calc((100%_-_1rem)/2)] items-center justify-center px-1 sm:basis-[calc((100%_-_3rem)/4)] sm:px-4"
              >
                <Image
                  src={plan.src}
                  alt={plan.name}
                  width={plan.width}
                  height={plan.height}
                  className="h-[4.25rem] w-auto object-contain brightness-110 drop-shadow-[0_6px_18px_rgba(255,255,255,0.12)] sm:h-[4.75rem]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
