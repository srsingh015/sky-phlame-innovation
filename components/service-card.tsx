"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { ButtonLink } from "@/components/button-link";
import { IconCircle } from "@/components/icon-circle";
import { ArrowRightIcon, ServiceIcon, WhatsAppIcon } from "@/components/icons";
import { CheckIcon } from "@/components/icons";
import { useRevealOnce } from "@/components/use-reveal-once";
import type { Service, ServiceIconName } from "@/lib/site-content";
import { buildServiceQuoteLink } from "@/lib/site";

type ServiceCardProps = {
  service: Service;
  detailHref?: string;
  detailLabel?: string;
  bgImageSrc?: string;
  enableHoverBg?: boolean;
  revealIndex?: number;
};

export function ServiceCard({
  service,
  detailHref = `/services#${service.slug}`,
  detailLabel = "Explore service",
  bgImageSrc,
  enableHoverBg = true,
  revealIndex = 0,
}: ServiceCardProps) {
  const categoryByIcon: Record<ServiceIconName, string> = {
    fire: "Fire Safety",
    camera: "Security",
    access: "Security",
    analytics: "Security",
    plate: "Security",
    announcement: "Communication",
    av: "AV",
    videowall: "AV",
  };

  const bulletPoints = service.whatWeProvide.slice(0, 2);
  const imageSrc = bgImageSrc ?? service.bgHomeSrc;
  const [imageFailed, setImageFailed] = useState(false);
  const showHoverBg = enableHoverBg && Boolean(imageSrc) && !imageFailed;
  const { ref, isVisible } = useRevealOnce<HTMLElement>();
  const revealStyle = {
    "--reveal-delay-tablet": `${(revealIndex % 2) * 80}ms`,
    "--reveal-delay-desktop": `${(revealIndex % 4) * 80}ms`,
  } as CSSProperties;

  useEffect(() => {
    if (!imageSrc && process.env.NODE_ENV !== "production") {
      console.warn(`[ServiceCard] Missing bg image for ${service.slug}`);
    }
  }, [imageSrc, service.slug]);

  return (
    <article
      ref={ref}
      style={revealStyle}
      className={`feature-card card-pad group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-white/85 bg-white shadow-soft backdrop-blur-none opacity-0 translate-y-6 transition-[opacity,transform] duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:[transition-delay:var(--reveal-delay-tablet)] lg:[transition-delay:var(--reveal-delay-desktop)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        isVisible ? "opacity-100 translate-y-0" : ""
      } md:group-focus-within:bg-transparent lg:group-hover:bg-transparent lg:group-focus-within:bg-transparent lg:group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.22)] lg:group-focus-within:shadow-[0_8px_32px_rgba(0,0,0,0.22)]`}
    >
      {showHoverBg && imageSrc ? (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt=""
            aria-hidden="true"
            fill
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            quality={70}
            className="h-full w-full object-cover object-center opacity-[0.10] transition-opacity duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] [will-change:opacity] [transform:translateZ(0)] [backface-visibility:hidden] motion-reduce:transition-none md:opacity-[0.10] lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100"
            onError={() => {
              if (process.env.NODE_ENV !== "production") {
                console.warn(
                  `[ServiceCard] Failed to load bg image for ${service.slug}: ${imageSrc}`,
                );
              }
              setImageFailed(true);
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.75)_100%)] opacity-100 lg:opacity-0" />
          <div className="pointer-events-none absolute inset-0 z-10 hidden bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.45)_50%,rgba(0,0,0,0.15)_100%)] opacity-0 transition-opacity duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none lg:block lg:group-hover:opacity-100 lg:group-focus-within:opacity-100" />
        </div>
      ) : null}

      <div className="relative z-20 flex items-center gap-3.5">
        <IconCircle className="h-11 w-11 md:h-12 md:w-12">
          <ServiceIcon
            name={service.icon}
            className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]"
            aria-hidden="true"
          />
        </IconCircle>
        <span className="rounded-pill border border-white/85 bg-brand-accent/85 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-brand-navy shadow-soft">
          {categoryByIcon[service.icon]}
        </span>
      </div>

      <h3 className="relative z-20 mt-5 text-xl font-semibold leading-snug text-balance text-brand-navy transition-colors duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:text-[1.35rem] lg:group-hover:text-white lg:group-focus-within:text-white">
        {service.name}
      </h3>

      <ul className="relative z-20 mt-4 grid gap-2 text-sm leading-6 text-brand-muted">
        {bulletPoints.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <CheckIcon
              className="mt-1 h-4 w-4 shrink-0 text-brand-red"
              aria-hidden="true"
            />
            <span className="transition-colors duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] lg:group-hover:text-white/88 lg:group-focus-within:text-white/88">
              {point}
            </span>
          </li>
        ))}
      </ul>

      <div className="relative z-20 mt-auto grid grid-cols-1 gap-2 pt-6 sm:grid-cols-[minmax(0,1fr)_auto]">
        <ButtonLink
          href={buildServiceQuoteLink(service.name)}
          target="_blank"
          rel="noreferrer"
          variant="whatsapp"
          block
          size="md"
          aria-label={`WhatsApp for a quote about ${service.name}`}
        >
          <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
          Quote
        </ButtonLink>
        <ButtonLink
          href={detailHref}
          variant="tertiary"
          size="sm"
          className="px-4 sm:justify-self-start"
          aria-label={`${detailLabel} for ${service.name}`}
        >
          Explore
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </article>
  );
}
