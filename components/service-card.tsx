"use client";


import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
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
  const showCardImage = enableHoverBg && Boolean(imageSrc) && !imageFailed;
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
      className={`card-pad group relative isolate flex h-full min-h-[23.5rem] flex-col overflow-hidden rounded-3xl border border-white/12 bg-[#0f1729] opacity-0 translate-y-6 transition-all duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:min-h-[24rem] md:[transition-delay:var(--reveal-delay-tablet)] lg:[transition-delay:var(--reveal-delay-desktop)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none hover:border-white/40 hover:bg-[#131c33] ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      {showCardImage && imageSrc ? (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt={service.name}
            fill
            className="object-cover opacity-30 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-50"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="service-card-overlay service-card-overlay-home absolute inset-0" />
        </div>
      ) : null}

      <div className="relative z-30 flex items-center gap-3.5">
        <IconCircle className="h-11 w-11 border-white/14 bg-white/12 text-white shadow-none backdrop-blur-sm md:h-12 md:w-12">
          <ServiceIcon
            name={service.icon}
            className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]"
            aria-hidden="true"
          />
        </IconCircle>
        <span className="rounded-pill border border-white/18 bg-white/12 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white shadow-soft backdrop-blur-sm">
          {categoryByIcon[service.icon]}
        </span>
      </div>

      <h3 className="relative z-30 mt-5 text-xl font-semibold leading-snug text-balance text-white sm:text-[1.35rem]">
        {service.name}
      </h3>

      <ul className="relative z-30 mt-4 grid gap-2 text-sm leading-6 text-white/86">
        {bulletPoints.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <CheckIcon
              className="mt-1 h-4 w-4 shrink-0 text-[#ff8577]"
              aria-hidden="true"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="relative z-30 mt-auto grid grid-cols-1 gap-2 pt-6 sm:grid-cols-[minmax(0,1fr)_auto]">
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
          className="border-white/18 bg-white/10 px-4 text-white hover:border-white/28 hover:bg-white/16 sm:justify-self-start"
          aria-label={`${detailLabel} for ${service.name}`}
        >
          Explore
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </article>
  );
}
