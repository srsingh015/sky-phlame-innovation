import type { ReactNode } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import {
  LockIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Container } from "@/components/container";
import {
  buildMailHref,
  buildPhoneHref,
  buildWhatsAppUrl,
} from "@/lib/site";
import { siteConfig } from "@/lib/site-content";

const whatsappHref = buildWhatsAppUrl({
  service: "a fire, security or AV solution",
});

const footerLinks = [...siteConfig.navigation];
const currentYear = new Date().getFullYear();

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
      {children}
    </h3>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-brand-navy-deep pb-[calc(var(--mobile-bar-h)+env(safe-area-inset-bottom))] text-white md:pb-0">
      {/* Glowing top accent line */}
      <div className="pointer-events-none absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,48,44,0.14),transparent_28%),radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_50%_80%,rgba(15,33,59,0.3),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

      <h2 className="sr-only">Footer</h2>

      <Container className="relative grid gap-8 py-10 md:gap-10 md:py-12 lg:grid-cols-[1.2fr_0.82fr_1fr_0.85fr] lg:gap-10 xl:gap-12">
        <div>
          <BrandMark tone="dark" compact className="w-fit" />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
            Fire protection, CCTV, access control, PA/VA, and AV solutions
            delivered with local support for industrial, commercial, and
            residential environments.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="whatsapp"
              size="md"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
              WhatsApp Now
            </ButtonLink>
            <ButtonLink href={buildPhoneHref()} variant="secondary" size="md">
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              Call Now
            </ButtonLink>
          </div>
        </div>

        <div>
          <FooterHeading>Explore</FooterHeading>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex py-0.5 text-sm font-medium text-white/82 transition hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Contact</FooterHeading>
          <address className="mt-4 space-y-4 text-sm not-italic text-white/76">
            <div className="flex items-start gap-3">
              <LocationIcon
                className="mt-0.5 h-4 w-4 shrink-0 text-white/78"
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-white/88">Address</p>
                <p className="mt-1 leading-6">
                  {siteConfig.company.addressDisplay}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon
                className="mt-0.5 h-4 w-4 shrink-0 text-white/78"
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-white/88">Phone</p>
                <a
                  href={buildPhoneHref()}
                  className="mt-1 inline-flex leading-6 transition hover:text-white hover:underline"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MailIcon
                className="mt-0.5 h-4 w-4 shrink-0 text-white/78"
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-white/88">Email</p>
                <a
                  href={buildMailHref()}
                  className="mt-1 inline-flex break-all leading-6 transition hover:text-white hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </address>
        </div>

        <div>
          <FooterHeading>Local Support</FooterHeading>
          <p className="mt-4 text-sm leading-7 text-white/76">
            {siteConfig.serviceAreas.join(" • ")}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/52">
            Site environments
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["INDUSTRIAL", "Commercial", "Residential"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-xs font-semibold text-white/78"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="py-4">
          <div className="flex flex-col gap-3 rounded-[1.2rem] border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-white/76 md:flex-row md:items-center">
            <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white">
              <LockIcon className="h-4 w-4" aria-hidden="true" />
            </div>
            <p className="max-w-4xl leading-6">
              <span className="font-semibold text-white">
                Secure & privacy-friendly:
              </span>{" "}
              No data is stored on this website. Enquiries open WhatsApp with a
              prefilled message.
            </p>
          </div>
        </Container>
      </div>

      <div className="relative border-t border-white/10">
        <Container className="grid gap-3 py-4 text-xs leading-6 text-white/72 md:text-sm lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <p className="lg:justify-self-start">
            © {currentYear} SKY PHLAME INNOVATION. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 lg:justify-self-center">
            <Link
              href="/privacy"
              className="transition hover:text-white hover:underline"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/38">
              |
            </span>
            <Link
              href="/terms"
              className="transition hover:text-white hover:underline"
            >
              Terms
            </Link>
          </div>

          <p className="flex flex-wrap items-center gap-y-1 lg:justify-self-end">
            <span>Powered by </span>
            <a
              href="https://ready2up.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white hover:underline"
            >
              Ready2UP
            </a>
            <span className="px-2 text-white/38" aria-hidden="true">
              |
            </span>
            <span>Designed by </span>
            <a
              href="https://dragosaurabh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white hover:underline"
            >
              Dragosaurabh
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
