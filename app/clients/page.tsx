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
import { Reveal } from "@/components/reveal";
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
        className="relative isolate overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(9,16,26,0.98)_0%,rgba(15,23,41,0.92)_52%,rgba(9,16,26,0.95)_100%)] after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.06),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(239,68,68,0.1),transparent_26%),radial-gradient(circle_at_70%_72%,rgba(59,130,246,0.04),transparent_22%)]"
        containerClassName="relative pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24"
      >
        <div className="pointer-events-none absolute inset-0 hidden opacity-[0.08] md:block md:opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.06)_0.75px,transparent_0.75px)] [background-size:18px_18px]" />
        <Reveal y={30} duration={0.8}>
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_minmax(auto,26rem)] lg:items-start">
            <div className="max-w-2xl flex flex-col">
              <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-3">Clients</p>
              <h1
                id="clients-hero-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                Trusted across manufacturing, commercial, and residential
                projects.
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-brand-muted-strong">
                {siteConfig.clientsIntro}
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <ButtonLink
                    href={clientsWhatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    variant="whatsapp"
                    size="lg"
                    block
                    className="sm:w-auto"
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
                    className="sm:w-auto"
                    aria-label="Call SKY PHLAME INNOVATION"
                  >
                    <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    Call Now
                  </ButtonLink>
              </div>
            </div>

            <aside className="w-full relative mt-4 lg:mt-0">
              <div className="absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 blur-sm pointer-events-none" />
              <div className="relative rounded-[1.4rem] border border-white/10 bg-[#0a111a]/80 backdrop-blur-xl p-5 sm:p-6 lg:p-7 shadow-2xl">
                <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-3">Proof</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white text-balance">
                  Built for live operating environments
                </h2>

                <ul className="mt-4 grid gap-2.5 text-sm leading-6 text-brand-muted">
                  {heroProofBullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-[0.9rem] bg-white/[0.04] p-3 border border-white/[0.08] shadow-sm transition-all hover:-translate-y-0.5">
                      <CheckIcon
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                        aria-hidden="true"
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-3">Coverage</p>
                  <div className="flex flex-wrap gap-1.5">
                    {siteConfig.serviceAreas.map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.75rem] font-medium text-white/80 shadow-soft backdrop-blur-md"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Reveal>
      </PageSection>

      <PageSection
        spacing="tight"
        ariaLabelledby="client-grid-heading"
        containerClassName="relative"
      >
        <Reveal y={30} duration={0.7}>
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

            <div className="section-stack relative flex overflow-hidden hover-pause [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
              <div className="flex min-w-full shrink-0 animate-marquee items-stretch gap-4 pr-4">
                {clients.map((client, index) => (
                  <div key={`${client.name}-${index}`} className="w-[320px] shrink-0">
                    <ClientLogoCard
                      client={{
                        ...client,
                        descriptor: clientDescriptors[client.name],
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex min-w-full shrink-0 animate-marquee items-stretch gap-4 pr-4" aria-hidden="true">
                {clients.map((client, index) => (
                  <div key={`${client.name}-duplicate-${index}`} className="w-[320px] shrink-0">
                    <ClientLogoCard
                      client={{
                        ...client,
                        descriptor: clientDescriptors[client.name],
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </PageSection>

      <PageSection
        spacing="tight"
        ariaLabelledby="case-snapshots-heading"
        containerClassName="relative"
      >
        <Reveal y={30} duration={0.7}>
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
        </Reveal>
      </PageSection>

      <PageSection
        spacing="tight"
        ariaLabelledby="project-sectors-heading"
        containerClassName="relative"
      >
        <Reveal y={30} duration={0.7}>
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
        </Reveal>
      </PageSection>

      <PageSection spacing="tight" containerClassName="relative">
        <Reveal y={30} duration={0.7}>
          <div className="cta-panel">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.15),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.06),transparent_24%)]" />
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
                  aria-label="Call SKY PHLAME INNOVATION now"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </PageSection>
    </div>
  );
}
