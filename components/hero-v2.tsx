"use client";

import { startTransition, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons";
import { buildWhatsAppUrl } from "@/lib/site";
import { siteConfig, services } from "@/lib/site-content";
import { cn } from "@/lib/utils";

// Extract the 4 main services for the hero slider
const heroServices = [
  services.find((s) => s.slug === "fire-alarm-systems")!,
  services.find((s) => s.slug === "cctv-ip-surveillance")!,
  services.find((s) => s.slug === "access-control")!,
  services.find((s) => s.slug === "av-solutions")!,
];

const heroSlides = heroServices.map((service) => ({
  id: service.slug,
  src: service.bgHomeSrc!,
  title: service.name,
  description: service.shortDescription,
  ctaLabel: service.ctaLabel,
}));

export function HeroV2() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      startTransition(() => {
        setActiveIndex((current) => (current + 1) % heroSlides.length);
      });
    }, 5800);

    return () => window.clearInterval(intervalId);
  }, []);

  function shiftSlide(direction: number) {
    startTransition(() => {
      setActiveIndex((current) => {
        const next = current + direction;

        if (next < 0) {
          return heroSlides.length - 1;
        }

        return next % heroSlides.length;
      });
    });
  }

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy-deep text-white">
      {/* Background Images Layer */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
            aria-hidden={index !== activeIndex}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060c14]/95 via-[#060c14]/70 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060c14] via-[#060c14]/50 to-transparent z-10" />
            <Image
              src={slide.src}
              alt={`Background for ${slide.title}`}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={85}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Content UI Layer */}
      <Container className="relative z-20 flex min-h-[calc(100svh-var(--header-h))] flex-col justify-between py-12 sm:py-16 lg:py-24">
        
        {/* Dynamic HTML Text Layer */}
        <div className="relative w-full max-w-2xl mt-auto grid">
          {heroSlides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`content-${slide.id}`}
                className={cn(
                  "col-start-1 row-start-1 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-end",
                  isActive
                    ? "translate-y-0 opacity-100 pointer-events-auto z-10"
                    : "translate-y-8 opacity-0 pointer-events-none z-0",
                )}
              >
                <h1 className="text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/80 sm:text-xl lg:mt-6">
                  {slide.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-10">
                  <ButtonLink
                    href={buildWhatsAppUrl({ service: slide.title })}
                    target="_blank"
                    rel="noreferrer"
                    variant="whatsapp"
                    size="lg"
                    className="shadow-xl"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    {slide.ctaLabel}
                  </ButtonLink>
                  <ButtonLink
                    href={`/services#${slide.id}`}
                    variant="secondary"
                    size="lg"
                    className="shadow-xl backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20"
                  >
                    Explore scope
                    <ArrowRightIcon className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation buttons fixed to bottom */}
        <div className="flex items-center justify-end gap-3 mt-16 sm:mt-24 w-full pointer-events-auto">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => shiftSlide(-1)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/60 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
              aria-label="Previous hero slide"
            >
              <ArrowRightIcon
                className="h-5 w-5 rotate-180"
                aria-hidden="true"
              />
            </button>
            <span className="inline-flex min-w-[4rem] items-center justify-center rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[0.9rem] font-bold text-white backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              {activeIndex + 1} / {heroSlides.length}
            </span>
            <button
              type="button"
              onClick={() => shiftSlide(1)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/60 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
              aria-label="Next hero slide"
            >
              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        
        {/* Empty space filler for accessibility structure */}
        <p className="sr-only" aria-live="polite">
          Active hero slide: {activeIndex + 1}
        </p>
      </Container>
    </section>
  );
}
