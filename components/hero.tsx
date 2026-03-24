import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import {
  CheckIcon,
  LocationIcon,
  PhoneIcon,
  ServiceIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { TrustBadges } from "@/components/trust-badges";
import type { ReactNode } from "react";
import { services, siteConfig } from "@/lib/site-content";
import { buildPhoneHref, buildWhatsAppUrl } from "@/lib/site";

const whatsappHref = buildWhatsAppUrl({
  service: "a fire, security or AV solution",
});

const stats = [
  {
    label: "Established",
    value: siteConfig.company.established,
    icon: <CheckIcon className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Support Areas",
    value: String(siteConfig.serviceAreas.length),
    icon: <LocationIcon className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Core Solutions",
    value: String(services.length),
    icon: <ServiceIcon name="av" className="h-4 w-4" aria-hidden="true" />,
  },
];

const rightPanelBullets = [
  "Local coordination for survey, installation, and support follow-through.",
  "Certified trained engineers and sales support for live sites.",
  "Coverage across Vadodara, Bharuch, and Ankleshwar.",
];

const noiseTexture =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='%230f213b' fill-opacity='.045'%3E%3Ccircle cx='12' cy='14' r='1'/%3E%3Ccircle cx='72' cy='28' r='1'/%3E%3Ccircle cx='112' cy='18' r='1'/%3E%3Ccircle cx='30' cy='62' r='1'/%3E%3Ccircle cx='92' cy='78' r='1'/%3E%3Ccircle cx='126' cy='110' r='1'/%3E%3Ccircle cx='54' cy='120' r='1'/%3E%3Ccircle cx='18' cy='104' r='1'/%3E%3C/g%3E%3C/svg%3E\")";

type HeroStatProps = {
  label: string;
  value: string;
  isWide?: boolean;
  icon: ReactNode;
};

function HeroStat({ label, value, isWide = false, icon }: HeroStatProps) {
  return (
    <div
      className={[
        "flex min-h-[4.3rem] items-center gap-2.5 rounded-[1.05rem] border border-white/80 bg-white/72 px-3.5 py-2.5 shadow-soft backdrop-blur-sm lg:min-h-[4.35rem] lg:gap-2.5 lg:px-4 lg:py-2.5",
        isWide ? "col-span-2 sm:col-span-1" : "",
      ].join(" ")}
    >
      <div className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full border border-brand-border/80 bg-white text-brand-navy lg:h-9 lg:w-9">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-brand-muted">
          {label}
        </p>
        <p className="mt-1 text-lg font-semibold leading-none text-brand-navy">
          {value}
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(251,246,247,0.88)_44%,rgba(242,246,250,0.74)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_26%,rgba(255,255,255,0.72),transparent_32%),radial-gradient(circle_at_80%_28%,rgba(199,48,44,0.13),transparent_30%),radial-gradient(circle_at_72%_78%,rgba(15,33,59,0.045),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.9),transparent_34%),radial-gradient(circle_at_84%_28%,rgba(199,48,44,0.14),transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.02)_44%,rgba(255,255,255,0)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.08] md:block md:opacity-[0.12] lg:opacity-[0.07]"
        style={{ backgroundImage: noiseTexture, backgroundSize: "160px 160px" }}
      />
      <Container className="relative section-hero lg:min-h-[calc(90vh-var(--header-h))]">
        <div className="lg:flex lg:min-h-[calc(90vh-var(--header-h)-2.5rem)] lg:flex-col">
          <div className="grid items-start gap-5 lg:flex-1 lg:grid-cols-[minmax(0,1fr)_minmax(380px,460px)] lg:gap-8 xl:gap-10">
            <div className="max-w-[39rem] lg:max-w-[41rem]">
            <p className="eyebrow max-w-[19rem] leading-[1.15] sm:max-w-[24rem]">
              {siteConfig.hero.eyebrow}
            </p>

            <h1 className="mt-3 max-w-[12.4ch] text-[clamp(2.05rem,8vw,3rem)] font-semibold leading-[1.03] tracking-tight text-balance text-brand-navy md:mt-4 md:max-w-[13ch] md:text-[clamp(2.35rem,4.4vw,3.45rem)] md:leading-[1.02] lg:max-w-[14ch] lg:text-[clamp(2.8rem,3.25vw,3.65rem)] lg:leading-[1]">
              {siteConfig.hero.title}
            </h1>

            <p className="mt-3.5 max-w-[30rem] text-[0.98rem] leading-7 text-brand-muted md:mt-4 md:max-w-[34rem] md:text-lg md:leading-8 lg:max-w-[36rem] lg:text-[1.02rem] lg:leading-7 lg:text-brand-navy/72">
              {siteConfig.hero.subhead}
            </p>

            <div className="mt-5 flex flex-col gap-3 lg:max-w-[38rem]">
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center lg:gap-3.5">
                <ButtonLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  variant="whatsapp"
                  size="lg"
                  block
                  className="min-h-11 sm:min-h-12 sm:w-auto"
                  aria-label="WhatsApp SKY PHLAME INNOVATION for a quote"
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
                <ButtonLink
                  href="/contact#get-quote"
                  variant="tertiary"
                  size="lg"
                  block
                  className="min-h-11 sm:min-h-12 sm:w-auto"
                >
                  Get Quote
                </ButtonLink>
              </div>

              <div className="flex flex-wrap gap-1.5 lg:max-w-[36rem] lg:gap-1.5">
                {siteConfig.trustBadges.map((badge) => (
                  <span
                    key={badge.title}
                    className="inline-flex items-center rounded-full border border-white/85 bg-white/70 px-2.75 py-1.25 text-[0.7rem] font-semibold leading-5 text-brand-navy shadow-soft backdrop-blur-sm md:px-3 md:py-1.5 md:text-[0.72rem] lg:px-2.5 lg:py-1.25"
                  >
                    {badge.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-3 lg:max-w-[38rem] lg:grid-cols-3 lg:gap-4">
              {stats.map((stat, index) => (
                <HeroStat
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  icon={stat.icon}
                  isWide={index === 2}
                />
              ))}
            </div>
            </div>

            <aside className="relative overflow-hidden rounded-[1.55rem] border border-white/80 bg-white/68 p-4 shadow-lift backdrop-blur-md sm:p-5 lg:self-start lg:rounded-[1.8rem] lg:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,48,44,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.58),rgba(250,244,245,0.42))]" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-1.5 lg:gap-1.5">
                  <span className="rounded-pill bg-brand-navy px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-white">
                    Local support
                  </span>
                  <span className="rounded-pill border border-brand-border/80 bg-white/80 px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                    Honeywell-integrated systems
                  </span>
                </div>

                <h2 className="mt-3 max-w-[14ch] text-[1.28rem] font-semibold leading-[1.08] tracking-tight text-balance text-brand-navy sm:text-[1.55rem] lg:mt-3.5 lg:max-w-[13ch] lg:text-[1.55rem]">
                  Fast response for fire, security, and AV requirements.
                </h2>

                <p className="mt-2.5 max-w-prose text-sm leading-6 text-brand-muted lg:mt-2.5 lg:max-w-[25rem]">
                  Consultancy, implementation, and dependable support for
                  industrial, commercial, and residential environments.
                </p>

                <ul className="mt-3.5 grid gap-2 text-sm leading-6 text-brand-muted lg:mt-3 lg:gap-2">
                  {rightPanelBullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon
                        className="mt-1 h-4 w-4 shrink-0 text-brand-red"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3.5 flex flex-wrap gap-1.5 lg:mt-3.5 lg:flex-nowrap lg:gap-1.5">
                  <span className="rounded-full border border-brand-border/80 bg-white/78 px-2.5 py-1.25 text-[0.7rem] font-semibold text-brand-navy md:px-3 md:py-1.5 md:text-[0.72rem]">
                    Industrial
                  </span>
                  <span className="rounded-full border border-brand-border/80 bg-white/78 px-2.5 py-1.25 text-[0.7rem] font-semibold text-brand-navy md:px-3 md:py-1.5 md:text-[0.72rem]">
                    Commercial
                  </span>
                  <span className="rounded-full border border-brand-border/80 bg-white/78 px-2.5 py-1.25 text-[0.7rem] font-semibold text-brand-navy md:px-3 md:py-1.5 md:text-[0.72rem]">
                    Residential
                  </span>
                </div>
              </div>
            </aside>
          </div>

          <div className="hidden lg:block">
            <div className="mt-8 h-px bg-[linear-gradient(90deg,rgba(190,200,214,0),rgba(190,200,214,0.92)_14%,rgba(190,200,214,0.92)_86%,rgba(190,200,214,0))]" />
            <div className="pt-6">
              <TrustBadges compactDesktop />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
