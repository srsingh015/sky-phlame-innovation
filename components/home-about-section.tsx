"use client";

import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { IconCircle } from "@/components/icon-circle";
import {
  ArrowRightIcon,
  CheckIcon,
  LocationIcon,
  ServiceIcon,
} from "@/components/icons";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-content";

const aboutHighlights = [
  {
    title: "Independent Specialist",
    description:
      "Focused on fire alarm, surveillance, access control, and AV systems.",
    icon: <ServiceIcon name="fire" className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Local Support",
    description:
      "Coverage across Vadodara, Bharuch, and Ankleshwar with fast response.",
    icon: <LocationIcon className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Practical Delivery",
    description:
      "System planning tied to the building and what the team actually needs.",
    icon: <CheckIcon className="h-4 w-4" aria-hidden="true" />,
  },
] as const;

const aboutStats = [
  {
    label: "Established",
    value: siteConfig.company.established,
    sub: "Launch year",
  },
  {
    label: "Coverage",
    value: siteConfig.serviceAreas.length.toString(),
    sub: "Service areas",
  },
  {
    label: "Workflow",
    value: siteConfig.howWeWork.length.toString(),
    sub: "Project stages",
  },
] as const;

const aboutOverview = siteConfig.about.overview.slice(0, 2);

export function HomeAboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <PageSection
      spacing="tight"
      ariaLabelledby="home-about-heading"
      className="section-bridge"
      containerClassName="relative"
    >
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-stretch">

          {/* Left Column: Text & Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pr-8 py-2 lg:py-4">
            <SectionHeading
              id="home-about-heading"
              eyebrow="About Us"
              title="Trusted fire detection system, security system, and AV solutions for operating environments"
              description="SKY PHLAME INNOVATION supports industrial, commercial, and residential projects with practical planning, disciplined installation coordination, and support that stays close after handover."
            />

            {/* Collapsible overview on mobile, always visible on lg+ */}
            <div className="mt-4 max-w-[65ch] text-[0.8rem] leading-[1.65] text-brand-muted sm:text-[0.85rem] sm:leading-6 md:text-[0.9rem] md:leading-7">
              {/* First paragraph — always visible */}
              <p>{aboutOverview[0]}</p>

              {/* Second paragraph — hidden on mobile unless expanded, always visible on lg+ */}
              {aboutOverview[1] && (
                <p className={`mt-3 ${expanded ? "block" : "hidden"} lg:block`}>
                  {aboutOverview[1]}
                </p>
              )}

              {/* Read more / Read less toggle — mobile only */}
              {aboutOverview[1] && (
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  className="mt-2 inline-flex items-center gap-1 text-[0.78rem] font-semibold text-brand-red transition-colors hover:text-brand-red-strong lg:hidden"
                >
                  {expanded ? "Read less" : "Read more"}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                  >
                    <path d="M3 5l3 3 3-3" />
                  </svg>
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {siteConfig.about.coreValues.map((value) => (
                <span key={value} className="chip">
                  {value}
                </span>
              ))}

            </div>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/about" variant="primary" size="lg" className="w-full sm:w-auto">
                Learn About Us
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="/contact#get-quote"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Start a Project
              </ButtonLink>
            </div>
          </div>

          {/* Right Column: Compact Dark Card */}
          <div className="lg:col-span-5 h-full">
            <article className="surface-card-dark p-4 sm:p-5 lg:p-6 h-full flex flex-col justify-center">
              <BrandMark compact tone="dark" />

              <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/55 sm:mt-5">
                Built for operating sites
              </p>
              <h3 className="mt-2 text-[1.2rem] sm:text-[1.4rem] font-semibold leading-[1.12] tracking-tight text-white">
                Local planning, installation, and support without guesswork.
              </h3>
              <p className="mt-2 max-w-[32rem] text-[0.78rem] leading-[1.6] text-white/68 sm:mt-3 sm:text-[0.84rem] sm:leading-6">
                {siteConfig.about.mission}
              </p>

              {/* Stats — always 3-col grid */}
              <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-2.5">
                {aboutStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1rem] border border-white/10 bg-white/[0.05] p-3 sm:p-3.5"
                  >
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/48 sm:text-[0.65rem]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[1.2rem] font-semibold leading-none tracking-tight text-white sm:text-[1.35rem]">
                      {item.value}
                    </p>
                    <p className="mt-1.5 text-[0.68rem] leading-snug text-white/55 sm:text-[0.72rem]">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Bottom Row: 3 Feature Cards — Horizontal layout on mobile */}
          {aboutHighlights.map((item) => (
            <div key={item.title} className="lg:col-span-4 h-full">
              <article className="feature-card p-3.5 sm:p-4 h-full flex items-start gap-3 sm:flex-col sm:gap-0">
                <IconCircle className="shrink-0 h-9 w-9 sm:h-10 sm:w-10">
                  {item.icon}
                </IconCircle>
                <div className="min-w-0">
                  <h3 className="sm:mt-3 text-[0.88rem] font-semibold leading-snug text-brand-navy sm:text-[0.92rem]">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-1.5 text-[0.78rem] leading-[1.55] text-brand-muted sm:text-[0.82rem]">
                    {item.description}
                  </p>
                </div>
              </article>
            </div>
          ))}

        </div>
      </div>
    </PageSection>
  );
}
