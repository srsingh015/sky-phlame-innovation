import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CopyButton } from "@/components/copy-button";
import { IconCircle } from "@/components/icon-circle";
import {
  ArrowRightIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { PageSection } from "@/components/page-section";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";
import {
  buildMailHref,
  buildPhoneHref,
  buildWhatsAppTextUrl,
} from "@/lib/site";
import { siteConfig } from "@/lib/site-content";

export const metadata: Metadata = createPageMetadata({
  title:
    "Contact SKY PHLAME INNOVATION | WhatsApp, Call & Site Visit Requests",
  description:
    "Call, WhatsApp, or request a site visit quote from SKY PHLAME INNOVATION in Vadodara for fire, security, and AV systems.",
  path: "/contact",
});

const whatsappHref = buildWhatsAppTextUrl(
  "Hello SKY PHLAME INNOVATION, I'd like to discuss a site requirement.",
);

const mapsEmbedUrl =
  "https://www.google.com/maps?q=4F-407%20Rama%20Emperro%20Beside%20Shell%20Petrol%20Pump%20Akashwani%20Road%20Manjalpur%20Vadodara%20Gujarat%20390011&output=embed";
const mapsOpenUrl =
  "https://maps.app.goo.gl/HyMGA5nVQzYcSK4y7?g_st=aw";

const contactCards = [
  {
    title: "Address",
    value: siteConfig.company.addressDisplay,
    helper: "Head office and support coordination point in Vadodara.",
    actionLabel: "Open in Maps",
    actionHref: mapsOpenUrl,
    copyValue: siteConfig.company.addressDisplay,
    copyLabel: "address",
    icon: LocationIcon,
  },
  {
    title: "Phone",
    value: siteConfig.contact.phoneDisplay,
    helper: "Best for urgent discussions, service calls, and faster routing.",
    actionLabel: "Call now",
    actionHref: buildPhoneHref(),
    copyValue: siteConfig.contact.phoneDisplay,
    copyLabel: "phone number",
    icon: PhoneIcon,
  },
  {
    title: "Email",
    value: siteConfig.contact.email,
    helper: "Useful for drawings, formal requirements, and procurement follow-up.",
    actionLabel: "Send email",
    actionHref: buildMailHref(),
    copyValue: siteConfig.contact.email,
    copyLabel: "email address",
    icon: MailIcon,
  },
] as const;

const serviceAreaChips = [
  ...siteConfig.serviceAreas,
  "Manufacturing",
  "Commercial",
  "Residential",
];

const heroResponseChips = [
  "WhatsApp-first response",
  `Coverage: ${siteConfig.serviceAreas.join(" • ")}`,
  "Quotes & site visits",
] as const;

export default function ContactPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,16,26,0.2)_0%,rgba(9,16,26,0.3)_24%,rgba(9,16,26,0.5)_100%)]" />

      <PageSection
        spacing="none"
        ariaLabelledby="contact-hero-title"
        className="relative isolate overflow-hidden bg-transparent before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(9,16,26,0.95)_0%,rgba(15,23,41,0.9)_44%,rgba(9,16,26,0.92)_100%)] after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_22%_26%,rgba(15,23,41,0.6),transparent_32%),radial-gradient(circle_at_82%_24%,rgba(239,68,68,0.1),transparent_30%),radial-gradient(circle_at_72%_78%,rgba(59,130,246,0.04),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_44%,rgba(255,255,255,0)_100%)]"
        containerClassName="relative inner-hero-wrap"
      >
        <div className="inner-hero-grid">
          <div className="max-w-[39rem] lg:max-w-[40rem]">
            <p className="inner-eyebrow">Contact</p>
            <h1
              id="contact-hero-title"
              className="inner-h1 mt-2"
            >
              Get local support for survey, installation, and urgent follow-up.
            </h1>
            <p className="inner-lead mt-4">
              Use WhatsApp for the fastest route, call directly for urgent
              discussions, or move straight into quotes and site visit planning.
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
                  aria-label="WhatsApp SKY PHLAME INNOVATION now"
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
                  aria-label="Call SKY PHLAME INNOVATION now"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </ButtonLink>
              </div>

              <div className="inner-hero-chips">
                {heroResponseChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-pill border border-white/[0.1] bg-white/[0.06] px-2.75 py-1.25 text-[0.7rem] font-semibold leading-5 text-brand-ink shadow-soft backdrop-blur-sm md:px-3 md:py-1.5 md:text-[0.72rem] lg:px-2.5 lg:py-1.25"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="inner-hero-card">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.08),transparent_34%),linear-gradient(180deg,rgba(15,23,41,0.4),rgba(9,16,26,0.2))]" />
            <div className="relative">
              <p className="inner-eyebrow">Quick contact</p>

              <div className="mt-3.5 grid gap-2.5">
                <div className="feature-card p-3 shadow-none md:p-3.5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">WhatsApp</p>
                      <p className="mt-1 text-sm leading-6 text-brand-muted">
                        Fastest route
                      </p>
                    </div>
                    <ButtonLink
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      variant="whatsapp"
                      size="sm"
                      block
                      className="sm:w-auto"
                    >
                      <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                      WhatsApp
                    </ButtonLink>
                  </div>
                </div>

                <div className="feature-card p-3 shadow-none md:p-3.5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">Call</p>
                      <p className="mt-1 text-sm leading-6 text-brand-muted">
                        Urgent discussions
                      </p>
                    </div>
                    <ButtonLink
                      href={buildPhoneHref()}
                      variant="secondary"
                      size="sm"
                      block
                      className="sm:w-auto"
                    >
                      <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                      Call
                    </ButtonLink>
                  </div>
                </div>

                <div className="feature-card p-3 shadow-none md:p-3.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-brand-navy">Email</p>
                      <a
                        href={buildMailHref()}
                        className="mt-1 inline-flex break-all text-sm leading-6 text-brand-muted transition hover:text-brand-red"
                      >
                        {siteConfig.contact.email}
                      </a>
                      <p className="mt-1 text-sm leading-6 text-brand-muted">
                        Drawings and formal requirements
                      </p>
                    </div>
                    <CopyButton
                      value={siteConfig.contact.email}
                      label="email address"
                      className="shrink-0 border-white/[0.08] bg-white/[0.04] shadow-soft hover:bg-white/[0.08]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3.5 border-t border-white/[0.08] pt-3">
                <p className="proof-line">Service areas</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {siteConfig.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center rounded-pill border border-white/[0.08] bg-white/[0.04] px-2.25 py-1 text-[0.7rem] font-semibold text-brand-ink shadow-soft md:px-2.5 md:text-[0.72rem]"
                    >
                      {area}
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
        ariaLabelledby="contact-details-heading"
        containerClassName="relative"
      >
        <div className="section-shell">
          <SectionHeading
            id="contact-details-heading"
            eyebrow="Contact Details"
            title="Fast access to call, email, address, and map directions"
            description="Use the option that fits the urgency of the requirement. All actions are one tap away."
          />

          <div className="section-stack section-grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
            <div className="section-grid">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="feature-card card-pad flex h-full flex-col"
                  >
                    <div className="flex items-start gap-4">
                      <IconCircle>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </IconCircle>
                      <div className="min-w-0 flex-1">
                        <p className="proof-line">{item.title}</p>
                        <a
                          href={item.actionHref}
                          target={
                            item.title === "Address" ? "_blank" : undefined
                          }
                          rel={
                            item.title === "Address" ? "noreferrer" : undefined
                          }
                          className="mt-2 inline-flex break-all text-base font-semibold text-brand-navy transition hover:text-brand-red"
                        >
                          {item.value}
                        </a>
                        <p className="mt-2 text-sm leading-7 text-brand-muted">
                          {item.helper}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.title !== "Address" ? (
                        <CopyButton
                          value={item.copyValue}
                          label={item.copyLabel}
                          className="border-white/[0.08] bg-white/[0.04] shadow-soft hover:bg-white/[0.08]"
                        />
                      ) : null}
                      <ButtonLink
                        href={item.actionHref}
                        variant="tertiary"
                        size="sm"
                        className="shadow-soft"
                        target={
                          item.title === "Address" ? "_blank" : undefined
                        }
                        rel={
                          item.title === "Address" ? "noreferrer" : undefined
                        }
                      >
                        {item.actionLabel}
                      </ButtonLink>
                    </div>
                  </article>
                );
              })}
            </div>

            <article className="feature-card flex h-full flex-col overflow-hidden p-4 md:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="proof-line">Map</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-navy">
                    Visit or open directions
                  </h2>
                </div>
                  <ButtonLink
                    href={mapsOpenUrl}
                    variant="tertiary"
                    size="sm"
                    className="shadow-soft"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Maps
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
              </div>

              <div className="relative mt-5 aspect-[16/10] max-h-[25rem] overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-white/[0.04] shadow-soft lg:min-h-[22rem] lg:flex-1 lg:aspect-auto">
                <iframe
                  title="Map showing the SKY PHLAME INNOVATION office in Manjalpur, Vadodara"
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </article>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="get-quote"
        spacing="tight"
        ariaLabelledby="quote-whatsapp-heading"
        containerClassName="relative"
      >
        <div className="section-shell">
          <div className="section-grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div className="self-start">
              <SectionHeading
                id="quote-whatsapp-heading"
                eyebrow="Quote via WhatsApp"
                title="Send your requirement as a ready-to-send WhatsApp draft"
                description="Enter the key details once and the website will open WhatsApp with a structured message for faster follow-up."
              />

              <div className="mt-6 flex flex-wrap gap-2">
                {serviceAreaChips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>

              <p className="mt-6 max-w-prose text-sm leading-7 text-brand-muted">
                Use this flow when you want a quote, a site visit, or a quick
                requirements discussion. No data is stored on the website.
              </p>
            </div>

            <QuoteForm
              defaultCity={siteConfig.contact.defaultCity}
              submitLabel="Send on WhatsApp"
              submitSize="md"
              actionNote="Opens WhatsApp with a prefilled message."
              footerNote="No data is stored on this website."
            />
          </div>
        </div>
      </PageSection>
    </div>
  );
}
