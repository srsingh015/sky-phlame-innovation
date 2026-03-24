import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ClientLogoCard } from "@/components/client-logo-card";
import { IconCircle } from "@/components/icon-circle";
import {
  CheckIcon,
  PhoneIcon,
  ServiceIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";
import { clients, siteConfig } from "@/lib/site-content";
import { buildPhoneHref } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Clients & Project Sectors | SKY PHLAME INNOVATION",
  description:
    "Trusted by Thermax, Nissan Bharat Rasayan, Bloom Seal Containers, Elantas Beck India, and Pidilite across manufacturing, commercial, and residential work.",
  path: "/clients",
});

const clientsWhatsappHref = `https://wa.me/${
  siteConfig.contact.whatsappNumber
}?text=${encodeURIComponent(
  "Hello SKY PHLAME INNOVATION, I'd like to discuss a site requirement.",
)}`;

const heroProofBullets = [
  "Local coordination built around live site timelines and support needs.",
  "Certified trained engineers and sales support from discussion to follow-through.",
  "Multi-site support across industrial, commercial, and residential environments.",
];

const clientDescriptors: Record<string, string> = {
  "Thermax Ltd": "Industrial / Manufacturing",
  "Nissan Bharat Rasayan Pvt Limited": "Industrial / Chemical",
  "Bloom Seal Containers Pvt Ltd": "Industrial / Packaging",
  "Elantas Beck India Ltd": "Manufacturing / Process",
  "Pidilite Industries": "Manufacturing / Commercial",
};

const caseSnapshots = [
  {
    title: "Fire safety compliance & monitoring",
    description:
      "Projects often need dependable alarm coverage, practical monitoring layouts, and support that fits live operations.",
    icon: "fire" as const,
  },
  {
    title: "Entry control & surveillance coverage",
    description:
      "Sites typically require clearer perimeter visibility, entry management, and reliable review capability.",
    icon: "camera" as const,
  },
  {
    title: "Reliable communication and AV support",
    description:
      "Corporate and mixed-use spaces look for dependable PA / VA, meeting support, and day-to-day communication systems.",
    icon: "av" as const,
  },
];

const sectorCards = [
  {
    title: "Manufacturing",
    description:
      "Reliable fire and security systems for factories and industrial operations where uptime, safety, and response discipline matter.",
    chips: ["Factories", "Warehouses", "Process plants"],
    icon: "fire" as const,
  },
  {
    title: "Commercial",
    description:
      "Surveillance, access, PA / VA, and AV systems for offices, retail, hospitality, and shared commercial facilities.",
    chips: ["Offices", "Retail", "Hospitality"],
    icon: "av" as const,
  },
  {
    title: "Residential",
    description:
      "Security and monitoring support for homes, apartment entry points, and managed residential properties.",
    chips: ["Homes", "Apartments", "Entry points"],
    icon: "camera" as const,
  },
];

export default function ClientsPage() {
  return (
    <div className="relative">
      <PageSection
        spacing="none"
        ariaLabelledby="clients-hero-title"
        className="relative isolate overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(251,245,246,0.92)_52%,rgba(255,255,255,0.95)_100%)] after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_18%_20%,rgba(15,33,59,0.11),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(199,48,44,0.12),transparent_26%),radial-gradient(circle_at_70%_72%,rgba(15,33,59,0.05),transparent_22%)]"
        containerClassName="relative inner-hero-wrap"
      >
        <div className="pointer-events-none absolute inset-0 hidden opacity-[0.08] md:block md:opacity-[0.12] [background-image:radial-gradient(rgba(15,33,59,0.08)_0.75px,transparent_0.75px)] [background-size:18px_18px]" />
        <div className="inner-hero-grid">
          <div className="max-w-[40rem]">
            <p className="inner-eyebrow">Clients</p>
            <h1
              id="clients-hero-title"
              className="inner-h1 mt-2"
            >
              Trusted across manufacturing, commercial, and residential
              projects.
            </h1>
            <p className="inner-lead mt-4">
              {siteConfig.clientsIntro}
            </p>

            <div className="inner-hero-actions">
              <div className="inner-hero-actions-row">
                <ButtonLink
                  href={clientsWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  variant="whatsapp"
                  size="lg"
                  block
                  className="min-h-11 sm:min-h-12 sm:w-auto"
                  aria-label="WhatsApp SKY PHLAME INNOVATION to discuss a site requirement"
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
            </div>
          </div>

          <aside className="inner-hero-card">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,48,44,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.56),rgba(255,255,255,0.18))]" />
            <div className="relative">
              <p className="inner-eyebrow">Proof</p>
              <h2 className="inner-h2 mt-3.5 text-balance">
                Built for live operating environments
              </h2>

              <ul className="mt-3.5 grid gap-2.5 text-sm leading-6 text-brand-muted">
                {heroProofBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon
                      className="mt-1 h-4 w-4 shrink-0 text-brand-red"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3.5">
                <p className="proof-line">Coverage</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {siteConfig.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center rounded-pill border border-white/80 bg-white/[0.72] px-2.25 py-1.25 text-[0.7rem] font-semibold text-brand-navy shadow-soft md:px-2.5 md:py-1.5 md:text-[0.72rem]"
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
        ariaLabelledby="client-grid-heading"
        containerClassName="relative"
      >
        <div className="section-shell">
          <SectionHeading
            id="client-grid-heading"
            eyebrow="Trusted By"
            title="Client relationships shaped by dependable site support"
            description="Trusted by operating teams that need practical fire, security, and AV support without losing time on slow coordination."
          />

          <p className="mt-4 proof-line">
            Trusted by industrial, commercial, and residential environments that
            need reliable follow-through.
          </p>

          <div className="section-stack grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {clients.map((client) => (
              <ClientLogoCard
                key={client.name}
                client={{
                  ...client,
                  descriptor: clientDescriptors[client.name],
                }}
              />
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection
        spacing="tight"
        ariaLabelledby="case-snapshots-heading"
        containerClassName="relative"
      >
        <div className="section-shell">
          <SectionHeading
            id="case-snapshots-heading"
            eyebrow="What Clients Typically Need"
            title="Common requirement patterns across live projects"
            description="The most frequent requests center on protection coverage, clearer control of movement, and dependable communication systems."
          />

          <div className="section-stack section-grid md:grid-cols-3 md:[grid-auto-rows:1fr]">
            {caseSnapshots.map((item) => (
              <article
                key={item.title}
                className="feature-card card-pad flex h-full flex-col transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lift"
              >
                <IconCircle className="h-11 w-11 md:h-12 md:w-12">
                  <ServiceIcon
                    name={item.icon}
                    className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]"
                    aria-hidden="true"
                  />
                </IconCircle>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection
        spacing="tight"
        ariaLabelledby="project-sectors-heading"
        containerClassName="relative"
      >
        <div className="section-shell">
          <SectionHeading
            id="project-sectors-heading"
            eyebrow="Project Sectors"
            title="Delivery experience shaped by how each site actually operates"
            description="Customer work spans manufacturing, commercial, and residential environments where uptime, visibility, and practical support all matter."
          />

          <div className="section-stack section-grid md:grid-cols-2 md:[grid-auto-rows:1fr] xl:grid-cols-3">
            {sectorCards.map((sector) => (
              <article
                key={sector.title}
                className="feature-card card-pad flex h-full flex-col transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lift"
              >
                <IconCircle className="h-11 w-11 md:h-12 md:w-12">
                  <ServiceIcon
                    name={sector.icon}
                    className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]"
                    aria-hidden="true"
                  />
                </IconCircle>
                <h3 className="mt-5 text-xl font-semibold text-brand-navy">
                  {sector.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">
                  {sector.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {sector.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection spacing="tight" containerClassName="relative">
        <div className="cta-panel">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,48,44,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_24%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-brand-red-strong">
                Start the conversation
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Discuss your site requirements on WhatsApp
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/76 sm:text-base">
                Local support across {siteConfig.serviceAreas.join(", ")}.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={clientsWhatsappHref}
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
