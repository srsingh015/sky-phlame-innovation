import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { ClientsStrip } from "@/components/clients-strip";
import { HeroV2 } from "@/components/hero-v2";
import { HomeAboutSection } from "@/components/home-about-section";
import { HomeServicesSection } from "@/components/home-services-section";
import { IconCircle } from "@/components/icon-circle";
import {
  CheckIcon,
  LocationIcon,
  PhoneIcon,
} from "@/components/icons";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { TrustBadges } from "@/components/trust-badges";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-content";

const whyChooseMeta = [
  {
    proof: "Local response • Faster site support",
    icon: <LocationIcon className="h-5 w-5" aria-hidden="true" />,
  },
  {
    proof: "Survey to service • One workflow",
    icon: <PhoneIcon className="h-5 w-5" aria-hidden="true" />,
  },
  {
    proof: "Honeywell-backed • Trained execution",
    icon: <CheckIcon className="h-5 w-5" aria-hidden="true" />,
  },
];

const industriesServed = ["INDUSTRIAL", "Commercial", "Residential"];

export default function Home() {
  return (
    <div className="home-flow">
      <HeroV2 />

      <Reveal duration={0.8} y={40}>
        <HomeAboutSection />
      </Reveal>

      <PageSection
        spacing="none"
        className="section-bridge lg:hidden"
        containerClassName="relative"
      >
        <Reveal y={20} delay={0.1}>
          <div className="section-shell-compact">
            <TrustBadges />
          </div>
        </Reveal>
      </PageSection>

      <Reveal duration={0.8} y={40} amount="some">
        <HomeServicesSection />
      </Reveal>

      <PageSection
        spacing="tight"
        ariaLabelledby="why-choose-heading"
        containerClassName="relative"
      >
        <Reveal y={30} duration={0.7}>
          <div className="section-shell">
            <SectionHeading
              id="why-choose-heading"
              eyebrow="Why Choose Us"
              title="Local execution backed by trained technical support"
              description="Dependable delivery comes from faster response, practical design decisions, and a team that stays close from survey through service."
            />

            <div className="section-stack section-grid md:grid-cols-2 md:[grid-auto-rows:1fr] xl:grid-cols-3">
              {siteConfig.whyChooseUs.map((item, index) => (
                <article
                  key={item.title}
                  className="feature-card card-pad group flex h-full flex-col transition motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lift"
                >
                  <IconCircle>
                    {whyChooseMeta[index]?.icon ?? (
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </IconCircle>
                  <h3 className="mt-3.5 text-[1.02rem] font-semibold leading-snug text-brand-navy sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.78rem] leading-[1.6] text-brand-muted sm:text-[0.84rem] sm:leading-6">
                    {item.description}
                  </p>
                  <p className="proof-line mt-auto pt-3.5">
                    {whyChooseMeta[index]?.proof}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </PageSection>

      <PageSection
        spacing="tight"
        ariaLabelledby="trusted-by-heading"
        className="section-bridge"
        containerClassName="relative"
      >
        <Reveal y={30} duration={0.7}>
          <div className="section-shell">
            <SectionHeading
              id="trusted-by-heading"
              eyebrow="Trusted By"
              title="OUR HAPPY CLIENTS"
              description="Supported by ongoing client relationships across INDUSTRIAL, commercial, and residential environments where response and reliability matter."
            />

            <div className="section-stack">
              <ClientsStrip />
            </div>

            <div className="mt-4 flex flex-col gap-2.5 md:mt-5 md:gap-3 lg:flex-row lg:items-center lg:justify-between">
              <p className="flex-1 min-w-0 text-[0.76rem] sm:text-[0.82rem] leading-5 text-brand-muted md:leading-6 truncate">
                {siteConfig.clientTrustLine}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                  Industries served
                </span>
                {industriesServed.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex items-center rounded-pill border border-white/[0.1] bg-white/[0.06] px-2.75 py-1.25 text-[0.7rem] font-semibold leading-5 text-brand-ink shadow-soft backdrop-blur-sm md:px-3 md:py-1.5 md:text-[0.72rem]"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </PageSection>

      <Reveal duration={0.8} y={40} amount="some">
        <FAQSection />
      </Reveal>

      <Reveal y={30} duration={0.7}>
        <CTASection
          id="get-quote"
          eyebrow="Get Quote"
          title="Plan a site visit or discuss your requirement on WhatsApp"
          description="Share your site details, city, and required service. The form opens WhatsApp with a ready-to-send message so your team can move quickly."
          tone="dark"
          compact
        />
      </Reveal>
    </div>
  );
}
