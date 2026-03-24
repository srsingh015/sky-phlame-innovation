import type { Metadata } from "next";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms | SKY PHLAME INNOVATION",
  description:
    "Terms for using the SKY PHLAME INNOVATION website and contacting the company through available enquiry links.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageSection spacing="tight" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Legal"
          title="Terms"
          description="These terms explain the basic use of the SKY PHLAME INNOVATION website and enquiry links."
          as="h1"
          size="page"
          titleClassName="max-w-none text-[clamp(2.2rem,4vw,3.4rem)]"
        />

        <div className="section-stack max-w-[68ch] space-y-6 text-sm leading-7 text-brand-muted sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-brand-navy">
              Website purpose
            </h2>
            <p className="mt-2">
              This website is a marketing and contact platform for SKY PHLAME
              INNOVATION. It provides service information and quick access to
              WhatsApp, phone, email, and map links.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">
              Enquiry links
            </h2>
            <p className="mt-2">
              Submitting a quote or contact request from this website opens a
              prefilled WhatsApp message. Sending that message is your choice,
              and any resulting communication happens through the selected
              service provider.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">
              Information accuracy
            </h2>
            <p className="mt-2">
              SKY PHLAME INNOVATION aims to keep service, contact, and company
              information accurate and current, but website content may be
              updated from time to time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">
              Contact
            </h2>
            <p className="mt-2">
              For questions about these terms, contact SKY PHLAME INNOVATION at
              {" "}
              <a
                href="mailto:sky.innovation11@yahoo.com"
                className="font-medium text-brand-navy underline underline-offset-4"
              >
                sky.innovation11@yahoo.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </PageSection>
  );
}
