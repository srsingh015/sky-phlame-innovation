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
      className={`card-pad group relative isolate flex w-full h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#0f1729] opacity-0 translate-y-6 transition-all duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:min-h-[22rem] md:min-h-[24rem] md:[transition-delay:var(--reveal-delay-tablet)] lg:[transition-delay:var(--reveal-delay-desktop)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none hover:border-white/40 hover:bg-[#131c33] ${isVisible ? "opacity-100 translate-y-0" : ""
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

      <div className="relative z-30 flex items-center gap-3">
        <IconCircle className="h-10 w-10 border-white/14 bg-white/12 text-white shadow-none backdrop-blur-sm md:h-11 md:w-11">
          <ServiceIcon
            name={service.icon}
            className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]"
            aria-hidden="true"
          />
        </IconCircle>
        <span className="rounded-pill border border-white/18 bg-white/12 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white shadow-soft backdrop-blur-sm">
          {categoryByIcon[service.icon]}
        </span>
      </div>

      <h3 className="relative z-30 mt-3.5 text-[1rem] font-semibold leading-snug text-balance text-white sm:text-[1.1rem]">
        {service.name}
      </h3>

      <ul className="relative z-30 mt-2.5 grid gap-1 text-[0.74rem] leading-[1.55] text-white/82">
        {bulletPoints.map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <CheckIcon
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ff8577]"
              aria-hidden="true"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="relative z-30 mt-auto grid grid-cols-1 gap-1.5 pt-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-2">
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
