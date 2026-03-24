import type { Metadata } from "next";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | SKY PHLAME INNOVATION",
  description:
    "Read how SKY PHLAME INNOVATION handles contact enquiries and WhatsApp-based quote requests.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageSection spacing="tight" className="relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy Policy"
          description="This website is designed to help visitors contact SKY PHLAME INNOVATION quickly through WhatsApp, phone, or email."
          as="h1"
          size="page"
          titleClassName="max-w-none text-[clamp(2.2rem,4vw,3.4rem)]"
        />

        <div className="section-stack max-w-[68ch] space-y-6 text-sm leading-7 text-brand-muted sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-brand-navy">
              How enquiries work
            </h2>
            <p className="mt-2">
              Quote and contact forms on this website do not store submitted
              information on the website. They open WhatsApp with a prefilled
              message so you can review and send the enquiry yourself.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">
              What contact details are shown
            </h2>
            <p className="mt-2">
              This website displays the company phone number, email address, and
              address to help visitors reach the team directly for surveys,
              installations, support, and quote discussions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">
              Third-party services
            </h2>
            <p className="mt-2">
              When you choose to use WhatsApp, phone, email, or map links, you
              leave this website and continue through the relevant third-party
              service. Their privacy practices apply to those interactions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">
              Contact
            </h2>
            <p className="mt-2">
              For privacy-related questions, contact SKY PHLAME INNOVATION at
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
