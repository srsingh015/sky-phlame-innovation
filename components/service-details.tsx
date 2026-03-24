"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { useRevealOnce } from "@/components/use-reveal-once";
import {
  ArrowRightIcon,
  CheckIcon,
  ServiceIcon,
  WhatsAppIcon,
} from "@/components/icons";
import type { Service } from "@/lib/site-content";
import { buildServiceQuoteLink } from "@/lib/site";

type ServiceDetailsProps = {
  service: Service;
  defaultOpen?: boolean;
};

export function ServiceDetails({
  service,
  defaultOpen = false,
}: ServiceDetailsProps) {
  const imageSrc = service.bgServicesSrc;
  const [imageFailed, setImageFailed] = useState(false);
  const [imageReady, setImageReady] = useState(false);
  const showHoverBg = Boolean(imageSrc) && !imageFailed;
  const canUseLightText = showHoverBg && imageReady;
  const { ref, isVisible } = useRevealOnce<HTMLDetailsElement>();

  useEffect(() => {
    if (!imageSrc && process.env.NODE_ENV !== "production") {
      console.warn(`[ServiceDetails] Missing bg image for ${service.slug}`);
    }
  }, [imageSrc, service.slug]);

  return (
    <details
      ref={ref}
      id={service.slug}
      open={defaultOpen}
      className={`panel group relative isolate overflow-hidden rounded-3xl border border-brand-border/80 bg-white/95 p-4 opacity-0 translate-y-6 transition-[opacity,transform] duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:p-5 md:p-6 md:group-open:bg-transparent lg:p-8 group-open:bg-transparent group-open:shadow-[0_4px_28px_rgba(0,0,0,0.2)] ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      {showHoverBg && imageSrc ? (
        <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block">
          <Image
            src={imageSrc}
            alt=""
            aria-hidden="true"
            fill
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1100px"
            quality={68}
            className="h-full w-full object-cover object-center opacity-0 transition-opacity duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] [will-change:opacity] [transform:translateZ(0)] [backface-visibility:hidden] motion-reduce:transition-none group-open:opacity-[0.88]"
            onLoad={() => setImageReady(true)}
            onError={() => {
              if (process.env.NODE_ENV !== "production") {
                console.warn(
                  `[ServiceDetails] Failed to load bg image for ${service.slug}: ${imageSrc}`,
                );
              }
              setImageReady(false);
              setImageFailed(true);
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(10,10,10,0.72)_0%,rgba(10,10,10,0.30)_55%,rgba(10,10,10,0.05)_100%)] opacity-0 transition-opacity duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none group-open:opacity-100" />
        </div>
      ) : null}

      <summary className="relative z-20 cursor-pointer list-none rounded-card">
        <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="icon-shell h-12 w-12 md:h-[3.25rem] md:w-[3.25rem]">
              <ServiceIcon
                name={service.icon}
                className="h-6 w-6 md:h-[1.45rem] md:w-[1.45rem]"
              />
            </div>
            <div>
              <p
                className={`eyebrow ${
                  canUseLightText
                    ? "group-open:text-white/70"
                    : ""
                }`}
              >
                Expandable service details
              </p>
              <h3
                className={`mt-3 text-[1.85rem] font-semibold leading-tight text-brand-navy transition-colors duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:text-2xl ${
                  canUseLightText
                    ? "group-open:text-white"
                    : ""
                }`}
              >
                {service.name}
              </h3>
              <p
                className={`mt-3 max-w-3xl text-sm leading-7 text-brand-muted transition-colors duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:text-base ${
                  canUseLightText
                    ? "group-open:text-white/88"
                    : ""
                }`}
              >
                {service.shortDescription}
              </p>
            </div>
          </div>
          <span
            className={`inline-flex items-center gap-2 self-start rounded-pill border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-navy md:self-center ${
              canUseLightText
                ? "group-open:border-white/35 group-open:bg-white/10 group-open:text-white"
                : ""
            }`}
          >
            View scope
            <ArrowRightIcon className="h-4 w-4 transition group-open:rotate-90" />
          </span>
        </div>
      </summary>

      <div className="relative z-20 section-stack section-grid lg:grid-cols-2">
        <div
          className={`feature-card border-white/80 bg-brand-accent/[0.4] p-5 shadow-none md:p-6 ${
            canUseLightText
              ? "group-open:border-white/15 group-open:bg-white/12"
              : ""
          }`}
        >
          <p
            className={`text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted transition-colors duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              canUseLightText
                ? "group-open:text-white/72"
                : ""
            }`}
          >
            Ideal for
          </p>
          <ul className="mt-4 space-y-3">
            {service.idealFor.map((item) => (
              <li
                key={item}
                className={`flex items-start gap-3 text-sm leading-7 text-brand-navy transition-colors duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  canUseLightText
                    ? "group-open:text-white/90"
                    : ""
                }`}
              >
                <CheckIcon className="mt-1 h-4 w-4 text-brand-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`feature-card border-white/80 p-5 shadow-none md:p-6 ${
            canUseLightText
              ? "group-open:border-white/15 group-open:bg-white/12"
              : ""
          }`}
        >
          <p
            className={`text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted transition-colors duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              canUseLightText
                ? "group-open:text-white/72"
                : ""
            }`}
          >
            What we provide
          </p>
          <ul className="mt-4 space-y-3">
            {service.whatWeProvide.map((item) => (
              <li
                key={item}
                className={`flex items-start gap-3 text-sm leading-7 text-brand-navy transition-colors duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  canUseLightText
                    ? "group-open:text-white/90"
                    : ""
                }`}
              >
                <CheckIcon className="mt-1 h-4 w-4 text-brand-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-20 section-stack flex flex-col gap-3 sm:flex-row [&>*]:w-full sm:[&>*]:w-auto">
        <ButtonLink
          href={buildServiceQuoteLink(service.name)}
          target="_blank"
          rel="noreferrer"
          variant="whatsapp"
          block
          aria-label={`WhatsApp for a quote about ${service.name}`}
        >
          <WhatsAppIcon className="h-4 w-4" />
          {service.ctaLabel}
        </ButtonLink>
        <ButtonLink href="/contact#get-quote" variant="tertiary" block>
          Get Quote
          <ArrowRightIcon className="h-4 w-4" />
        </ButtonLink>
      </div>
    </details>
  );
}
