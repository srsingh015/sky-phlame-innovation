"use client";


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
import { cn } from "@/lib/utils";

type ServiceDetailsProps = {
  service: Service;
  defaultOpen?: boolean;
};

export function ServiceDetails({
  service,
  defaultOpen = false,
}: ServiceDetailsProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const imageSrc = service.bgServicesSrc;
  const [imageFailed, setImageFailed] = useState(false);
  const [imageReady, setImageReady] = useState(false);
  const showHoverBg = Boolean(imageSrc) && !imageFailed;
  const hasExpandedMedia = showHoverBg && imageReady;
  const { ref, isVisible } = useRevealOnce<HTMLDetailsElement>();

  useEffect(() => {
    if (!imageSrc && process.env.NODE_ENV !== "production") {
      console.warn(`[ServiceDetails] Missing bg image for ${service.slug}`);
    }
  }, [imageSrc, service.slug]);

  useEffect(() => {
    if (!imageSrc || imageFailed || !isVisible) {
      return;
    }

    let isCancelled = false;
    const preloadImage = new window.Image();

    const handleLoad = () => {
      if (!isCancelled) {
        setImageReady(true);
      }
    };

    const handleError = () => {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `[ServiceDetails] Failed to preload bg image for ${service.slug}: ${imageSrc}`,
        );
      }

      if (!isCancelled) {
        setImageReady(false);
        setImageFailed(true);
      }
    };

    preloadImage.src = imageSrc;

    if (preloadImage.complete) {
      handleLoad();
      return;
    }

    preloadImage.onload = handleLoad;
    preloadImage.onerror = handleError;

    return () => {
      isCancelled = true;
      preloadImage.onload = null;
      preloadImage.onerror = null;
    };
  }, [imageFailed, imageSrc, isVisible, service.slug]);

  return (
    <details
      ref={ref}
      id={service.slug}
      open={isOpen}
      onToggle={(event) => {
        setIsOpen(event.currentTarget.open);
      }}
      className={cn(
        "service-details panel group relative isolate overflow-hidden rounded-3xl p-3.5 opacity-0 translate-y-6 transition-[opacity,transform,background,border-color,box-shadow] duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:p-4 md:p-5 lg:p-6",
        isVisible && "opacity-100 translate-y-0",
        hasExpandedMedia && "service-details--media-ready",
      )}
    >
      {showHoverBg && imageSrc ? (
        <div className="service-details-media pointer-events-none absolute inset-0 z-0 overflow-hidden [clip-path:inset(0_round_1.5rem)]">
          <div
            aria-hidden="true"
            className="service-details-media-image fixed inset-0 w-screen h-[100dvh] bg-cover bg-center bg-no-repeat transition-[transform,filter] duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] [will-change:transform] motion-reduce:transition-none"
            style={{ backgroundImage: `url('${imageSrc}')` }}
          />
        </div>
      ) : null}

      <summary
        aria-expanded={isOpen}
        aria-controls={`${service.slug}-scope`}
        className="service-details-summary relative z-20 cursor-pointer list-none rounded-card"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-3.5 sm:gap-4">
            <div className="service-details-icon icon-shell h-12 w-12 shrink-0 sm:h-[3.15rem] sm:w-[3.15rem]">
              <ServiceIcon
                name={service.icon}
                className="h-6 w-6 sm:h-[1.45rem] sm:w-[1.45rem]"
              />
            </div>
            <div className="min-w-0">
              <p className="service-details-eyebrow">
                Expandable service details
              </p>
              <h3 className="service-details-title mt-2.5 text-[1.75rem] font-semibold leading-[0.98] tracking-[-0.03em] sm:text-[2rem] lg:text-[2.15rem]">
                {service.name}
              </h3>
              <p className="service-details-copy mt-3 max-w-3xl text-sm leading-7 sm:text-base">
                {service.shortDescription}
              </p>
            </div>
          </div>
          <span className="service-details-toggle inline-flex w-full items-center justify-between gap-2 self-start rounded-pill px-4 py-2.5 text-sm font-semibold md:w-auto md:self-center">
            View scope
            <ArrowRightIcon className="h-4 w-4 transition group-open:rotate-90" />
          </span>
        </div>
      </summary>

      <div
        id={`${service.slug}-scope`}
        className="service-details-body relative z-20 section-stack section-grid lg:grid-cols-2"
      >
        <div className="service-details-pane service-details-pane--warm p-5 sm:p-5 md:p-6">
          <p className="service-details-pane-label text-sm font-semibold uppercase tracking-[0.2em]">
            Ideal for
          </p>
          <ul className="mt-4 space-y-3">
            {service.idealFor.map((item) => (
              <li
                key={item}
                className="service-details-list-item flex items-start gap-3 text-sm leading-7"
              >
                <CheckIcon className="service-details-check mt-1 h-4 w-4 shrink-0 text-brand-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="service-details-pane p-5 sm:p-5 md:p-6">
          <p className="service-details-pane-label text-sm font-semibold uppercase tracking-[0.2em]">
            What we provide
          </p>
          <ul className="mt-4 space-y-3">
            {service.whatWeProvide.map((item) => (
              <li
                key={item}
                className="service-details-list-item flex items-start gap-3 text-sm leading-7"
              >
                <CheckIcon className="service-details-check mt-1 h-4 w-4 shrink-0 text-brand-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="service-details-actions relative z-20 section-stack flex flex-col gap-3 sm:flex-row [&>*]:w-full sm:[&>*]:w-auto">
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
        <ButtonLink
          href="/contact#get-quote"
          variant="tertiary"
          block
          className="service-details-secondary-action"
        >
          Get Quote
          <ArrowRightIcon className="h-4 w-4" />
        </ButtonLink>
      </div>
    </details>
  );
}
