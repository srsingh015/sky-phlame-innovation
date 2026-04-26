"use client";

import { useState } from "react";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-content";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question:
      "What services does SKY PHLAME INNOVATION actually provide?",
    answer:
      "We specialise in fire alarm systems (including Morley-IAS by Honeywell), CCTV and IP surveillance, access control, face recognition analytics, ANPR/LPR, PA/VA systems, AV solutions, and LED video wall setups. Each project starts with a site survey so we can recommend what genuinely fits — we don't push products that aren't needed.",
  },
  {
    question:
      "Which areas do you cover? Can you come to my site for a survey?",
    answer:
      "Our team is based in Vadodara and we actively cover Vadodara, Bharuch, and Ankleshwar. Because we're local, we can usually schedule a site survey within a few working days instead of waiting on teams travelling from another city. If your site is nearby but outside these three areas, reach out anyway — we'll let you know if we can help.",
  },
  {
    question:
      "Do you work with residential properties, or only commercial and industrial?",
    answer:
      "We work across all three — manufacturing and industrial units, commercial buildings like offices and retail, and residential properties including apartments and individual homes. A villa that needs CCTV coverage gets the same level of planning as a factory that needs a full fire alarm system. The scale changes, the attention doesn't.",
  },
  {
    question:
      "What brands and equipment do you use for fire alarm systems?",
    answer:
      "We are experienced with Honeywell-integrated fire and security solutions, including Morley-IAS addressable fire alarm control panels. That said, we pick the technology that fits the project and the budget — we're an independent specialist, not locked into one supplier for everything.",
  },
  {
    question:
      "How does your process work from start to finish?",
    answer:
      "It's a straightforward four-stage workflow: Survey, Design, Installation, and Support. We start with a site visit to understand the building layout and what you actually need, then put together a system design. Once approved, we coordinate installation and commissioning around your site's schedule. After handover, we stay available for maintenance, adjustments, and service support — we don't disappear once the job's done.",
  },
  {
    question:
      "Can you install a CCTV system for a small shop or gym?",
    answer:
      "Absolutely. We handle everything from single-site shops, gyms, schools, and clinics through to multi-floor commercial setups. For smaller spaces, we'll plan camera positions around entry points and high-value areas so you get useful footage without overcomplicating the install.",
  },
  {
    question:
      "What is the best way to get a quote or discuss a requirement?",
    answer: `The fastest way is WhatsApp — message us at ${siteConfig.contact.phoneDisplay} with your site location, the service you're looking at, and a brief description. You can also call us directly on the same number or send an email to ${siteConfig.contact.email}. We try to respond the same day during working hours.`,
  },
  {
    question:
      "Do you offer maintenance and after-sales support?",
    answer:
      "Yes, ongoing support is a core part of what we do. We don't believe in a one-time install with no follow-up. Our team stays available for scheduled maintenance, troubleshooting, system adjustments, and any issues that come up after handover. Since we're local, response is faster compared to companies based out of a distant city.",
  },
  {
    question:
      "How is SKY PHLAME INNOVATION different from larger national security companies?",
    answer:
      "We're an independent specialist, which means you work directly with the people who survey, design, and support your system — not through layers of middlemen. Being based locally in Vadodara means faster site visits, quicker response on service calls, and a team that actually knows the region. We combine that local agility with Honeywell-backed technology, so you're not choosing between responsiveness and quality.",
  },
  {
    question:
      "Can you set up an integrated system — say, fire alarm plus CCTV plus access control — all at once?",
    answer:
      "Yes, and that's where working with a single specialist pays off. Instead of coordinating between three different vendors, we plan the entire system together so cabling, placement, and control points work as a unit from day one. It also means one point of contact for support afterwards.",
  },
];

/* ─── JSON-LD for SEO (FAQPage structured data) ─── */
function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

/* ─── Single accordion item ─── */
function FAQAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.35rem] border transition-all duration-300 ease-out ${
        isOpen
          ? "border-white/[0.16] bg-white/[0.06] shadow-lift"
          : "border-white/[0.08] bg-white/[0.03] shadow-soft hover:border-white/[0.12] hover:bg-white/[0.05]"
      }`}
    >
      {/* Subtle glow on open */}
      {isOpen && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.06),transparent_40%)]" />
      )}

      <button
        type="button"
        id={`faq-trigger-${index}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        onClick={onToggle}
        className="relative z-10 flex w-full items-start gap-4 px-5 py-5 text-left transition-colors md:px-6 md:py-6"
      >
        {/* Question number */}
        <span
          className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-bold transition-all duration-300 ${
            isOpen
              ? "bg-brand-red text-white shadow-[0_8px_20px_-8px_rgba(239,68,68,0.5)]"
              : "border border-white/[0.12] bg-white/[0.06] text-brand-muted"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question text */}
        <span
          className={`flex-1 text-[0.95rem] font-semibold leading-snug transition-colors duration-200 sm:text-base md:text-[1.05rem] ${
            isOpen ? "text-brand-ink" : "text-brand-navy"
          }`}
        >
          {item.question}
        </span>

        {/* Toggle icon */}
        <span
          className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "rotate-45 border-brand-red/30 bg-brand-red/10 text-brand-red"
              : "border-white/[0.1] bg-white/[0.04] text-brand-muted"
          }`}
          aria-hidden="true"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="6" y1="1" x2="6" y2="11" />
            <line x1="1" y1="6" x2="11" y2="6" />
          </svg>
        </span>
      </button>

      {/* Answer panel */}
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
        className={`relative z-10 overflow-hidden transition-all duration-400 ease-out ${
          isOpen ? "max-h-[40rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transitionProperty: "max-height, opacity",
        }}
      >
        <div className="px-5 pb-5 pl-16 md:px-6 md:pb-6 md:pl-[4.5rem]">
          <div className="h-px w-full bg-gradient-to-r from-white/[0.08] via-white/[0.12] to-white/[0.04]" />
          <p className="mt-4 text-[0.9rem] leading-7 text-brand-muted sm:text-sm sm:leading-7 md:text-[0.95rem] md:leading-8">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main FAQ section ─── */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function handleToggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  /* Split FAQs into two columns on large screens */
  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midpoint);
  const rightColumn = faqs.slice(midpoint);

  return (
    <PageSection
      spacing="tight"
      ariaLabelledby="faq-heading"
      containerClassName="relative"
    >
      <FAQJsonLd items={faqs} />

      <div className="section-shell">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQs"
          title="Common questions from site owners and project teams"
          description="Straight answers about our services, how we work, and what to expect when you start a conversation with SKY PHLAME INNOVATION."
          align="center"
          titleClassName="mx-auto"
          descriptionClassName="max-w-[48rem] mx-auto"
        />

        {/* Mobile: single column / Desktop: two columns */}
        <div className="section-stack">
          {/* Single column on smaller screens */}
          <div className="flex flex-col gap-3 lg:hidden">
            {faqs.map((item, index) => (
              <FAQAccordionItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* Two columns on large screens */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="flex flex-col gap-3">
              {leftColumn.map((item, index) => (
                <FAQAccordionItem
                  key={index}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {rightColumn.map((item, index) => {
                const realIndex = index + midpoint;
                return (
                  <FAQAccordionItem
                    key={realIndex}
                    item={item}
                    index={realIndex}
                    isOpen={openIndex === realIndex}
                    onToggle={() => handleToggle(realIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust line at bottom */}
        <div className="mt-6 flex flex-col items-center gap-3 text-center md:mt-8">
          <p className="text-sm leading-6 text-brand-muted">
            Still have a question?{" "}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                "Hello SKY PHLAME INNOVATION, I have a question about your services."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-red transition-colors hover:text-brand-red-strong"
            >
              Message us on WhatsApp
            </a>{" "}
            — we typically reply the same day.
          </p>
        </div>
      </div>
    </PageSection>
  );
}
