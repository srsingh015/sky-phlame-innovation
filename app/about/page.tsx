import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { IconCircle } from "@/components/icon-circle";
import {
  ArrowRightIcon,
  CheckIcon,
  LocationIcon,
  PhoneIcon,
  ServiceIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-content";
import { buildPhoneHref, buildWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About | SKY PHLAME INNOVATION",
  description:
    "Learn about SKY PHLAME INNOVATION, a Vadodara-based specialist for fire alarm, CCTV, access control, PA/VA, and AV solutions with local support across Bharuch and Ankleshwar.",
  path: "/about",
});

const aboutTrustChips = [
  `Established ${siteConfig.company.established}`,
  `Vadodara HQ`,
  `Support: ${siteConfig.serviceAreas.join(" • ")}`,
];

const aboutGlance = [
  "Independent specialist for fire, security, and AV systems",
  "Local support across Vadodara, Bharuch, and Ankleshwar",
  "Certified trained engineers and sales support",
  "Honeywell-integrated technology capability where required",
];

const companyStory = [
  "SKY PHLAME INNOVATION was established in 2022 in Vadodara as an independent specialist for fire alarm systems, surveillance, security systems, and electronic safety solutions.",
  "The team supports domestic, commercial, licensed-premises, and public-sector sites with consultancy, implementation, and ongoing support tailored to the site, the application, and the customer’s working requirements.",
];

const whatWeDo = [
  "Fire safety and fire alarm systems",
  "CCTV / IP surveillance",
  "Access control solutions",
  "PA / VA systems",
  "AV solutions",
];

const capabilityChips = [
  "Site survey",
  "System design input",
  "Installation coordination",
  "Commissioning support",
  "Maintenance follow-through",
];

const benefitCards = [
  {
    title: "Local Support",
    description:
      "Teams around Vadodara, Bharuch, and Ankleshwar help keep survey, installation, and service coordination close to the site.",
    proof: "Vadodara • Bharuch • Ankleshwar",
    icon: <LocationIcon className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Certified Trained Engineers / Sales Support",
    description:
      "Technical and commercial requirements stay aligned from the early discussion through installation and follow-up support.",
    proof: "Consult → Coordinate → Support",
    icon: <CheckIcon className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Partner Technology Support",
    description:
      "Honeywell-integrated technologies strengthen solution reliability and fit where the project scope calls for them.",
    proof: "Trusted technology • Practical delivery",
    icon: <ServiceIcon name="fire" className="h-5 w-5" aria-hidden="true" />,
  },
];

const processDescriptions = [
  "Understand site conditions, risk areas, and operational needs.",
  "Shape a practical system approach around coverage and standards.",
  "Coordinate installation and commissioning with site realities in mind.",
  "Stay available for follow-through support after handover.",
];

const whatsappHref = buildWhatsAppUrl({
  service: "a fire, security or AV solution",
});

export default function AboutPage() {
  return (
    <div className="relative">
      <PageSection
        spacing="none"
        ariaLabelledby="about-hero-title"
        className="relative isolate overflow-hidden bg-transparent before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(251,246,247,0.88)_44%,rgba(242,246,250,0.74)_100%)] after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_22%_26%,rgba(255,255,255,0.72),transparent_32%),radial-gradient(circle_at_82%_24%,rgba(199,48,44,0.12),transparent_30%),radial-gradient(circle_at_72%_78%,rgba(15,33,59,0.04),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.03)_44%,rgba(255,255,255,0)_100%)]"
        containerClassName="relative inner-hero-wrap"
      >
        <div className="inner-hero-grid">
          <div className="max-w-[39rem] lg:max-w-[41rem]">
            <p className="inner-eyebrow">About SKY PHLAME INNOVATION</p>
            <h1
              id="about-hero-title"
              className="inner-h1 mt-2"
            >
              Independent specialists focused on dependable protection and support.
            </h1>
            <p className="inner-lead mt-4">
              Vadodara-based support for fire alarm, surveillance, access
              control, PA / VA, and AV systems, delivered with practical
              planning and local follow-through.
            </p>

            <div className="inner-hero-actions">
              <div className="inner-hero-actions-row">
                <ButtonLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  variant="whatsapp"
                  size="lg"
                  block
                  className="min-h-11 sm:min-h-12 sm:w-auto"
                  aria-label="WhatsApp SKY PHLAME INNOVATION about your requirement"
                >
                  <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Now
                </ButtonLink>
                <ButtonLink
                  href={buildPhoneHref()}
                  variant="secondary"
                  size="lg"
                  block
                  className="min-h-11 sm:min-h-12 sm:w-auto"
                  aria-label="Call SKY PHLAME INNOVATION"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </ButtonLink>
              </div>

              <div className="inner-hero-chips">
                {aboutTrustChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-pill border border-white/85 bg-white/70 px-2.75 py-1.25 text-[0.7rem] font-semibold leading-5 text-brand-navy shadow-soft backdrop-blur-sm md:px-3 md:py-1.5 md:text-[0.72rem] lg:px-2.5 lg:py-1.25"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="inner-hero-card">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,48,44,0.1),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.58),rgba(250,244,245,0.32))]" />
            <div className="relative">
              <p className="inner-eyebrow">At a glance</p>
              <ul className="mt-3.5 grid gap-2.5 text-sm leading-6 text-brand-navy/72">
                {aboutGlance.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon
                      className="mt-1 h-4 w-4 shrink-0 text-brand-red"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3.5 border-t border-white/75 pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {siteConfig.about.coreValues.map((value) => (
                    <span
                      key={value}
                      className="inline-flex items-center rounded-pill border border-white/82 bg-white/[0.76] px-2.25 py-1 text-[0.7rem] font-semibold text-brand-navy shadow-soft md:px-2.5 md:text-[0.72rem]"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </PageSection>

      <PageSection
        spacing="tight"
        ariaLabelledby="company-story-heading"
        containerClassName="relative"
      >
        <div className="section-shell">
          <div className="section-grid lg:grid-cols-[minmax(0,1fr)_minmax(19rem,23rem)] lg:gap-10">
            <div>
              <SectionHeading
                id="company-story-heading"
                eyebrow="Company Story"
                title="Built around practical delivery for live operating sites"
                description="The focus stays on dependable systems, site-fit planning, and support that remains close after installation."
              />

              <div className="mt-6 max-w-[65ch] space-y-4 text-sm leading-7 text-brand-muted md:text-base md:leading-8">
                {companyStory.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="feature-card p-5 md:p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-navy">
                What we do
              </h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-brand-muted">
                {whatWeDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRightIcon
                      className="mt-1 h-4 w-4 shrink-0 text-brand-red"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <p className="proof-line">Capabilities</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {capabilityChips.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </PageSection>

      <PageSection
        spacing="tight"
        ariaLabelledby="vision-mission-heading"
        containerClassName="relative"
      >
        <div className="section-shell">
          <SectionHeading
            id="vision-mission-heading"
            eyebrow="Vision & Mission"
            title="Clear direction backed by disciplined technical delivery"
            description="The vision and mission remain focused on long-term reliability, quality execution, and customer confidence."
          />

          <div className="section-stack section-grid lg:grid-cols-2 lg:[grid-auto-rows:1fr]">
            <article className="feature-card h-full p-5 transition motion-safe:hover:shadow-lift md:p-6">
              <p className="eyebrow">Vision</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-navy">
                Aiming to be a leading supplier in India
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted md:text-base">
                {siteConfig.about.vision}
              </p>
            </article>

            <article className="feature-card h-full p-5 transition motion-safe:hover:shadow-lift md:p-6">
              <p className="eyebrow">Mission</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-navy">
                Quality systems delivered through strong technical execution
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted md:text-base">
                {siteConfig.about.mission}
              </p>
            </article>
          </div>
        </div>
      </PageSection>

      <PageSection
        spacing="tight"
        ariaLabelledby="about-benefits-heading"
        className="section-bridge"
        containerClassName="relative"
      >
        <div className="section-shell">
          <SectionHeading
            id="about-benefits-heading"
            eyebrow="Why It Matters"
            title="Trust built through local reach, trained execution, and practical support"
            description="The strongest differentiators are response speed, technical clarity, and technology choices that fit the actual project."
          />

          <div className="section-stack section-grid md:grid-cols-2 md:[grid-auto-rows:1fr] xl:grid-cols-3">
            {benefitCards.map((item) => (
              <article
                key={item.title}
                className="feature-card card-pad group flex h-full flex-col transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lift"
              >
                <IconCircle>{item.icon}</IconCircle>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">
                  {item.description}
                </p>
                <p className="proof-line mt-auto pt-5">{item.proof}</p>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection
        spacing="tight"
        ariaLabelledby="how-we-work-heading"
        containerClassName="relative"
      >
        <div className="section-shell">
          <SectionHeading
            id="how-we-work-heading"
            eyebrow="How We Work"
            title="A compact process from first site survey to ongoing support"
            description="Each stage stays visible so customers know how the project will move from requirement to handover."
          />

          <ol className="section-stack relative grid gap-4 md:gap-6 xl:grid-cols-4 xl:before:pointer-events-none xl:before:absolute xl:before:left-[2.25rem] xl:before:right-[2.25rem] xl:before:top-5 xl:before:h-px xl:before:bg-brand-border xl:before:content-['']">
            {siteConfig.howWeWork.map((step, index) => (
              <li
                key={step}
                className="relative flex items-start gap-4 xl:flex-col xl:gap-4"
              >
                <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white shadow-soft">
                  {index + 1}
                </span>
                <div className="flex-1 rounded-[1.2rem] border border-white/80 bg-white/[0.78] px-4 py-4 shadow-soft backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-brand-navy">
                    {step}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">
                    {processDescriptions[index]}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </PageSection>

      <PageSection spacing="tight" containerClassName="relative">
        <div className="cta-panel">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,48,44,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_24%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-brand-red-strong">Start the conversation</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Discuss your requirement on WhatsApp.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/76 sm:text-base">
                Local support is available across {siteConfig.serviceAreas.join(
                  ", ",
                )} for survey planning, system discussions, and next-step coordination.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                variant="whatsapp"
                size="lg"
                aria-label="WhatsApp SKY PHLAME INNOVATION now"
              >
                <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                WhatsApp Now
              </ButtonLink>
              <ButtonLink
                href={buildPhoneHref()}
                variant="secondary"
                size="lg"
                className="border-white/18 bg-white/8 text-white hover:border-white/34 hover:bg-white/14"
                aria-label="Call SKY PHLAME INNOVATION now"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                Call Now
              </ButtonLink>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
