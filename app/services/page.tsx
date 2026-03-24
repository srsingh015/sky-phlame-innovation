import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { PageIntro } from "@/components/page-intro";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceDetails } from "@/components/service-details";
import { createPageMetadata } from "@/lib/seo";
import { services } from "@/lib/site-content";
import { buildPhoneHref, buildWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title:
    "CCTV, Fire Alarm, Access Control, PA/VA & AV Solutions | SKY PHLAME INNOVATION",
  description:
    "Explore fire alarm systems, CCTV surveillance, access control, ANPR/LPR, PA/VA, AV solutions, and video wall support in Vadodara.",
  path: "/services",
});

const whatsappHref = buildWhatsAppUrl({
  service: "a fire, security or AV solution",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Fire, security, and AV systems designed around operational reality"
        description="Each solution is structured around site conditions, coverage needs, scalability, and long-term serviceability rather than one-size-fits-all hardware lists."
        highlights={[
          "Fire protection",
          "Surveillance",
          "Access control",
          "PA / VA + AV systems",
        ]}
        actions={
          <>
            <ButtonLink
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="whatsapp"
              size="lg"
              className="min-h-11 sm:min-h-12"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Now
            </ButtonLink>
            <ButtonLink
              href={buildPhoneHref()}
              variant="secondary"
              size="lg"
              className="min-h-11 sm:min-h-12"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </ButtonLink>
          </>
        }
        aside={
          <aside className="inner-hero-card">
            <p className="inner-eyebrow">Quick action</p>
            <h2 className="inner-h2 mt-3.5 text-balance">
              Prefer a fast quote route?
            </h2>
            <p className="mt-2.5 text-sm leading-6 text-brand-muted">
              Use WhatsApp for a service-specific request or call directly for a
              quick discussion about site scope, urgency, or a visit.
            </p>
            <div className="mt-4 grid gap-2.5">
              <div className="feature-card p-3.5">
                <p className="text-sm font-semibold text-brand-navy">
                  Best for:
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Faster lead capture, service-specific questions, and site
                  visit requests from mobile visitors.
                </p>
              </div>
            </div>
          </aside>
        }
      />

      <PageSection spacing="tight" className="section-bridge">
        <SectionHeading
          eyebrow="Core services"
          title="Systems we install and support"
          description="Open each service to review the typical fit, delivery scope, and the fastest route to a WhatsApp quote or site discussion."
        />

        <div className="section-stack space-y-4 md:space-y-6">
          {services.map((service) => (
            <ServiceDetails key={service.slug} service={service} />
          ))}
        </div>
      </PageSection>

      <PageSection spacing="tight">
        <div className="panel flex flex-col gap-6 p-5 md:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
          <div className="max-w-copy">
            <p className="eyebrow">Need help choosing the right system?</p>
            <h2 className="mt-4 text-3xl font-semibold text-brand-navy sm:text-4xl">
              Start with a site conversation, then move to design and quote.
            </h2>
            <p className="mt-4 text-sm leading-7 text-brand-muted sm:text-base">
              The team can help narrow down the correct fire, surveillance,
              access, or AV scope before procurement decisions are made.
            </p>
          </div>
          <ButtonLink href="/contact#get-quote" variant="dark" size="lg">
            Go to Contact & Quote
            <ArrowRightIcon className="h-4 w-4" />
          </ButtonLink>
        </div>
      </PageSection>
    </>
  );
}
