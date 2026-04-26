"use client";

import { startTransition, useEffect, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import {
  ArrowRightIcon,
  ServiceIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { buildWhatsAppUrl } from "@/lib/site";
import { services, siteConfig, type Service } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type HeroSlide = {
  id: string;
  label: string;
  title: string;
  description: string;
  navCopy: string;
  objectPosition: string;
  service: Service;
};

function getService(slug: string) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Missing hero service for slider: ${slug}`);
  }

  return service;
}

const heroSlides = [
  {
    id: "fire",
    label: "Fire Alarm Systems",
    title: "Fire protection planned for live sites.",
    description:
      "Addressable fire alarm systems for factories, commercial buildings, and occupied premises that need dependable detection, control, and ongoing support.",
    navCopy: "Factories, occupied buildings, and public-sector environments.",
    objectPosition: "76% center",
    service: getService("fire-alarm-systems"),
  },
  {
    id: "cctv",
    label: "CCTV / IP Surveillance",
    title: "Surveillance that holds up in daily use.",
    description:
      "Camera coverage and recording workflows structured around entry points, perimeter watch, and day-to-day monitoring for active sites.",
    navCopy: "Shops, offices, schools, and monitored residential properties.",
    objectPosition: "78% 28%",
    service: getService("cctv-ip-surveillance"),
  },
  {
    id: "access",
    label: "Access Control",
    title: "Access control built to scale cleanly.",
    description:
      "Identity-led door control for offices, apartments, and managed facilities that need clearer permissions now and room to expand later.",
    navCopy: "Offices, apartments, and facilities growing into role-based access.",
    objectPosition: "62% center",
    service: getService("access-control"),
  },
  {
    id: "av",
    label: "AV Solutions",
    title: "AV spaces that feel ready on day one.",
    description:
      "Conference, display, and presentation systems designed so meeting rooms work reliably instead of feeling patched together.",
    navCopy: "Boardrooms, meeting rooms, and training spaces that need dependable AV.",
    objectPosition: "72% center",
    service: getService("av-solutions"),
  },
] satisfies readonly HeroSlide[];

const serviceAreasLabel = siteConfig.serviceAreas.join(" • ");

export function HeroV2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex] ?? heroSlides[0];
  const whatsappHref = buildWhatsAppUrl({ service: activeSlide.service.name });

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

  function goToSlide(index: number) {
    startTransition(() => {
      setActiveIndex(index);
    });
  }

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy-deep text-white">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-out",
              index === activeIndex ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.service.bgHomeSrc ?? "/services/home/fire-alarm.webp"}
              alt=""
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={72}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: slide.objectPosition }}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,12,24,0.9)_0%,rgba(5,12,24,0.72)_44%,rgba(5,12,24,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,12,24,0.26)_0%,rgba(5,12,24,0.08)_30%,rgba(5,12,24,0.68)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_14%_36%,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_74%_24%,rgba(224,71,63,0.12),transparent_20%)]" />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100svh-var(--header-h))] flex-col">
        <div className="flex items-center justify-between gap-4 pt-5 sm:pt-6 lg:pt-8">
          <p className="max-w-[18rem] text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/72 sm:max-w-none sm:text-[0.72rem]">
            {siteConfig.hero.eyebrow}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => shiftSlide(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-black/12 text-white transition hover:bg-black/22"
              aria-label="Previous hero slide"
            >
              <ArrowRightIcon
                className="h-4 w-4 rotate-180"
                aria-hidden="true"
              />
            </button>
            <span className="inline-flex min-w-[3.6rem] items-center justify-center rounded-full border border-white/14 bg-black/12 px-3 py-2 text-sm font-medium text-white/88">
              {activeIndex + 1} / {heroSlides.length}
            </span>
            <button
              type="button"
              onClick={() => shiftSlide(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-black/12 text-white transition hover:bg-black/22"
              aria-label="Next hero slide"
            >
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid flex-1 items-center gap-10 py-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:gap-12 lg:py-10">
          <div className="max-w-[40rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/72">
              {activeSlide.label}
            </p>

            <h1 className="mt-4 max-w-[11ch] text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1] sm:leading-[0.9] tracking-[-0.06em] text-balance text-white">
              {activeSlide.title}
            </h1>

            <p className="mt-4 max-w-[36rem] text-[0.85rem] leading-6 text-white/78 sm:mt-5 sm:text-[0.95rem] sm:leading-7">
              {activeSlide.description}
            </p>

            <div className="mt-6 flex flex-row flex-wrap gap-3 sm:mt-7">
              <ButtonLink
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                variant="whatsapp"
                size="md"
                className="flex-1 sm:flex-none"
              >
                <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </ButtonLink>
              <ButtonLink
                href={`/services#${activeSlide.service.slug}`}
                variant="secondary"
                size="md"
                className="flex-1 sm:flex-none"
              >
                View Scope
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <div className="mt-6 flex flex-col gap-2 text-[0.8rem] text-white/66 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:text-sm">
              <span>{serviceAreasLabel}</span>
              <span className="hidden text-white/34 sm:inline">•</span>
              <span>Survey to support</span>
              <span className="hidden text-white/34 sm:inline">•</span>
              <span>Since {siteConfig.company.established}</span>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            {heroSlides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-full rounded-[1.75rem] border p-5 text-left transition",
                    isActive
                      ? "border-white/30 bg-white/[0.1] text-white shadow-[0_24px_56px_-34px_rgba(0,0,0,0.6)] backdrop-blur-md"
                      : "border-white/14 bg-black/12 text-white hover:bg-black/18",
                  )}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={cn(
                          "text-[0.72rem] font-semibold uppercase tracking-[0.22em]",
                          isActive ? "text-brand-red" : "text-white/56",
                        )}
                      >
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-lg font-semibold leading-snug">
                        {slide.label}
                      </p>
                    </div>
                    <ServiceIcon
                      name={slide.service.icon}
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0",
                        isActive ? "text-brand-red" : "text-white/72",
                      )}
                      aria-hidden="true"
                    />
                  </div>

                  <p
                    className={cn(
                      "mt-3 text-sm leading-6",
                      isActive ? "text-white/80" : "text-white/70",
                    )}
                  >
                    {slide.navCopy}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="pb-6 sm:pb-8 lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {heroSlides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition",
                    isActive
                      ? "border-white/30 bg-white/[0.12] text-white backdrop-blur-md"
                      : "border-white/16 bg-black/10 text-white/78",
                  )}
                  aria-pressed={isActive}
                >
                  {slide.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Active hero slide: {activeSlide.label}
        </p>
      </Container>
    </section>
  );
}
