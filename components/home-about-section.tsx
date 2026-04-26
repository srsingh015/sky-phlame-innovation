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
      "Focused on fire alarm, surveillance, access control, and AV systems instead of spreading across unrelated work.",
    icon: <ServiceIcon name="fire" className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Local Support",
    description:
      "Coverage across Vadodara, Bharuch, and Ankleshwar keeps surveys, coordination, and follow-through close to the site.",
    icon: <LocationIcon className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Practical Delivery",
    description:
      "System planning stays tied to the building, the operating environment, and what the team actually needs day to day.",
    icon: <CheckIcon className="h-5 w-5" aria-hidden="true" />,
  },
] as const;

const aboutStats = [
  {
    label: "Established",
    value: siteConfig.company.established,
  },
  {
    label: "Coverage",
    value: siteConfig.serviceAreas.length.toString(),
  },
  {
    label: "Workflow",
    value: siteConfig.howWeWork.length.toString(),
  },
] as const;

const aboutOverview = siteConfig.about.overview.slice(0, 2);

export function HomeAboutSection() {
  return (
    <PageSection
      spacing="tight"
      ariaLabelledby="home-about-heading"
      className="section-bridge"
      containerClassName="relative"
    >
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Text & Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pr-8 py-4">
            <SectionHeading
              id="home-about-heading"
              eyebrow="About Us"
              title="Local fire, security, and AV specialists built around dependable site execution"
              description="SKY PHLAME INNOVATION supports industrial, commercial, and residential projects with practical planning, disciplined installation coordination, and support that stays close after handover."
            />

            <div className="mt-6 max-w-[65ch] space-y-4 text-[0.85rem] leading-6 text-brand-muted md:text-[0.95rem] md:leading-7">
              {aboutOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {siteConfig.about.coreValues.map((value) => (
                <span key={value} className="chip">
                  {value}
                </span>
              ))}
              <span className="chip">{siteConfig.company.headOffice}</span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

          {/* Right Column: Main Dark Card */}
          <div className="lg:col-span-5 h-full">
            <article className="surface-card-dark p-5 md:p-6 lg:p-7 h-full flex flex-col justify-center">
              <BrandMark compact tone="dark" />

              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/58">
                Built for operating sites
              </p>
              <h3 className="mt-3 text-2xl sm:text-[1.75rem] font-semibold leading-[1.1] sm:leading-[1.02] tracking-tight text-white">
                Local planning, installation, and support without guesswork.
              </h3>
              <p className="mt-3 max-w-[32rem] text-[0.85rem] leading-6 sm:mt-4 sm:text-[0.9rem] sm:leading-7 text-white/72 md:text-[0.95rem]">
                {siteConfig.about.mission}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {aboutStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.35rem] border border-white/12 bg-white/[0.06] p-4 flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/52">
                        {item.label}
                      </p>
                      <p className="mt-2 text-[1.5rem] font-semibold leading-none tracking-tight text-white">
                        {item.value}
                      </p>
                    </div>
                    <p className="mt-3 text-[0.8rem] leading-snug text-white/62">
                      {item.label === "Coverage"
                        ? "Regional support points"
                        : item.label === "Workflow"
                          ? "Survey to support stages"
                          : "Independent specialist launch year"}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Bottom Row: 3 Feature Cards Spanning Full Width */}
          {aboutHighlights.map((item) => (
            <div key={item.title} className="lg:col-span-4 h-full">
              <article className="feature-card p-5 h-full flex flex-col">
                <IconCircle>{item.icon}</IconCircle>
                <h3 className="mt-4 text-base font-semibold leading-snug text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.85rem] leading-6 text-brand-muted">
                  {item.description}
                </p>
              </article>
            </div>
          ))}

        </div>
      </div>
    </PageSection>
  );
}
