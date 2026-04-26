"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { HeroRotator } from "@/components/hero-rotator";
import {
  CheckIcon,
  LocationIcon,
  PhoneIcon,
  ServiceIcon,
  WhatsAppIcon,
} from "@/components/icons";
import {
  createRevealVariants,
  motionHoverSpring,
} from "@/lib/motion";
import { buildPhoneHref, buildWhatsAppUrl } from "@/lib/site";
import { services, siteConfig } from "@/lib/site-content";

const whatsappHref = buildWhatsAppUrl({
  service: "a fire, security or AV solution",
});

const callHref = buildPhoneHref();

const proofMetrics = [
  {
    label: "Established",
    value: siteConfig.company.established,
    detail: "Independent specialist support",
    icon: <CheckIcon className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Coverage",
    value: `${siteConfig.serviceAreas.length} cities`,
    detail: siteConfig.serviceAreas.join(" • "),
    icon: <LocationIcon className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Core Solutions",
    value: String(services.length),
    detail: "Fire, security, communication, and AV",
    icon: <ServiceIcon name="av" className="h-4 w-4" aria-hidden="true" />,
  },
];

const heroFocusItems = [
  "Fire Safety",
  "Security Systems",
  "Communication",
  "AV Solutions",
];

const heroVisualService =
  services.find((service) => service.slug === "fire-alarm-systems") ?? services[0];

const heroSupportBadges = [
  siteConfig.trustBadges[2]?.title,
  siteConfig.howWeWork.join(" • "),
  heroVisualService.highlight,
].filter(Boolean);

const mediaPoints = heroVisualService.whatWeProvide.slice(0, 2);

const heroTitleGroups = splitHeroTitle(siteConfig.hero.title);

const heroMotion = {
  eyebrow: { delay: 0.08, y: 12, duration: 0.52, blur: 4 },
  focusBadge: { delay: 0.18, y: 12, duration: 0.56, blur: 4 },
  titleBaseDelay: 0.32,
  titleStagger: 0.14,
  title: { y: 24, duration: 0.72, blur: 6 },
  paragraph: { delay: 0.78, y: 18, duration: 0.62, blur: 4 },
  ctaBaseDelay: 0.94,
  ctaStagger: 0.1,
  cta: { y: 16, scale: 0.965, duration: 0.56, blur: 4 },
  supportLabel: { delay: 1.14, y: 14, duration: 0.5, blur: 4 },
  supportChipBaseDelay: 1.24,
  supportChipStagger: 0.08,
  supportChip: { y: 14, duration: 0.48, blur: 4 },
  supportText: { delay: 1.44, y: 12, duration: 0.5, blur: 4 },
  mediaPanel: { delay: 0.42, x: 32, y: 10, scale: 1.04, duration: 0.9, blur: 8 },
  mediaChipBaseDelay: 1.02,
  mediaChipStagger: 0.08,
  mediaChip: { y: 14, duration: 0.5, blur: 4 },
  mediaCopy: { delay: 1.18, y: 18, duration: 0.58, blur: 4 },
  mediaPointBaseDelay: 1.3,
  mediaPointStagger: 0.08,
  mediaPoint: { y: 14, duration: 0.48, blur: 4 },
  proofBand: { delay: 1.58, y: 28, duration: 0.84, blur: 6 },
} as const;

const ctaHoverShadow = "0 26px 48px -24px rgba(9, 21, 37, 0.28)";
const ctaTapShadow = "0 12px 24px -20px rgba(9, 21, 37, 0.18)";
const mediaHoverShadow = "0 40px 72px -36px rgba(9, 21, 37, 0.46)";
const proofHoverShadow = "0 22px 40px -28px rgba(4, 12, 24, 0.38)";

type ProofMetricProps = {
  label: string;
  value: string;
  detail: string;
  icon: ReactNode;
};

function splitHeroTitle(title: string) {
  const compactTitle = title.replace(/\s+/g, " ").trim();

  if (compactTitle.includes(" for ")) {
    const [beforeFor, afterFor] = compactTitle.split(" for ");

    if (beforeFor.includes(" & ")) {
      const [first, second] = beforeFor.split(" & ");
      return [first, `& ${second}`, `for ${afterFor}`];
    }

    return [beforeFor, `for ${afterFor}`];
  }

  const words = compactTitle.split(" ");

  if (words.length <= 4) {
    return [compactTitle];
  }

  const firstBreak = Math.ceil(words.length / 2);
  return [words.slice(0, firstBreak).join(" "), words.slice(firstBreak).join(" ")];
}

function ProofMetric({ label, value, detail, icon }: ProofMetricProps) {
  return (
    <div className="hero-proof-metric">
      <div className="hero-proof-metric-icon">{icon}</div>
      <div className="hero-proof-metric-copy">
        <p className="hero-proof-metric-label">{label}</p>
        <p className="hero-proof-metric-value">{value}</p>
        <p className="hero-proof-metric-detail">{detail}</p>
      </div>
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const initial = prefersReducedMotion ? false : "hidden";

  const reveal = ({
    delay = 0,
    x = 0,
    y = 18,
    scale = 1,
    duration = 0.64,
    blur = 6,
  }: {
    delay?: number;
    x?: number;
    y?: number;
    scale?: number;
    duration?: number;
    blur?: number;
  }) =>
    createRevealVariants({
      reduced: prefersReducedMotion,
      x,
      y,
      scale,
      delay,
      duration,
      blur,
    });

  return (
    <LazyMotion features={domAnimation}>
      <section className="hero-home-section">
        <Container className="hero-home-wrap">
          <m.div className="hero-home-main" initial={initial} animate="show">
            <div className="hero-home-content">
              <div className="hero-home-copy">
                <m.p
                  className="eyebrow hero-home-eyebrow"
                  variants={reveal(heroMotion.eyebrow)}
                >
                  {siteConfig.hero.eyebrow}
                </m.p>

                <m.div variants={reveal(heroMotion.focusBadge)}>
                  <HeroRotator items={heroFocusItems} />
                </m.div>

                <h1 className="hero-home-title">
                  {heroTitleGroups.map((group, index) => (
                    <span className="hero-home-title-line" key={group}>
                      <m.span
                        className="hero-home-title-text"
                        variants={reveal({
                          delay:
                            heroMotion.titleBaseDelay + index * heroMotion.titleStagger,
                          y: heroMotion.title.y,
                          duration: heroMotion.title.duration,
                          blur: heroMotion.title.blur,
                        })}
                      >
                        {group}
                      </m.span>
                    </span>
                  ))}
                </h1>

                <m.p className="hero-home-lead" variants={reveal(heroMotion.paragraph)}>
                  {siteConfig.hero.subhead}
                </m.p>

                <div className="hero-home-actions">
                  <m.div
                    className="hero-home-action-shell"
                    variants={reveal({
                      delay: heroMotion.ctaBaseDelay,
                      y: heroMotion.cta.y,
                      scale: heroMotion.cta.scale,
                      duration: heroMotion.cta.duration,
                      blur: heroMotion.cta.blur,
                    })}
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : { y: -6, scale: 1.02, boxShadow: ctaHoverShadow }
                    }
                    whileTap={
                      prefersReducedMotion
                        ? undefined
                        : { y: -1, scale: 0.985, boxShadow: ctaTapShadow }
                    }
                    transition={motionHoverSpring}
                    style={{ willChange: "transform, box-shadow" }}
                  >
                    <ButtonLink
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      variant="whatsapp"
                      size="lg"
                      className="min-h-12 sm:min-h-12"
                      aria-label="WhatsApp SKY PHLAME INNOVATION for a quote"
                    >
                      <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
                      WhatsApp Now
                    </ButtonLink>
                  </m.div>

                  <m.div
                    className="hero-home-action-shell"
                    variants={reveal({
                      delay: heroMotion.ctaBaseDelay + heroMotion.ctaStagger,
                      y: heroMotion.cta.y,
                      scale: heroMotion.cta.scale,
                      duration: heroMotion.cta.duration,
                      blur: heroMotion.cta.blur,
                    })}
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : { y: -5, scale: 1.016, boxShadow: ctaHoverShadow }
                    }
                    whileTap={
                      prefersReducedMotion
                        ? undefined
                        : { y: -1, scale: 0.985, boxShadow: ctaTapShadow }
                    }
                    transition={motionHoverSpring}
                    style={{ willChange: "transform, box-shadow" }}
                  >
                    <ButtonLink
                      href={callHref}
                      variant="secondary"
                      size="lg"
                      className="min-h-12 sm:min-h-12"
                      aria-label="Call SKY PHLAME INNOVATION"
                    >
                      <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                      Call Now
                    </ButtonLink>
                  </m.div>

                  <m.div
                    className="hero-home-action-shell"
                    variants={reveal({
                      delay: heroMotion.ctaBaseDelay + heroMotion.ctaStagger * 2,
                      y: heroMotion.cta.y,
                      scale: heroMotion.cta.scale,
                      duration: heroMotion.cta.duration,
                      blur: heroMotion.cta.blur,
                    })}
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : { y: -4, scale: 1.014, boxShadow: ctaHoverShadow }
                    }
                    whileTap={
                      prefersReducedMotion
                        ? undefined
                        : { y: -1, scale: 0.985, boxShadow: ctaTapShadow }
                    }
                    transition={motionHoverSpring}
                    style={{ willChange: "transform, box-shadow" }}
                  >
                    <ButtonLink
                      href="/contact#get-quote"
                      variant="tertiary"
                      size="lg"
                      className="min-h-12 sm:min-h-12"
                    >
                      Get Quote
                    </ButtonLink>
                  </m.div>
                </div>

                <div className="hero-home-meta">
                  <div className="hero-home-coverage">
                    <m.div
                      className="hero-home-coverage-label"
                      variants={reveal(heroMotion.supportLabel)}
                    >
                      <LocationIcon className="h-4 w-4" aria-hidden="true" />
                      <span>Local support</span>
                    </m.div>

                    <div className="hero-home-coverage-cities">
                      {siteConfig.serviceAreas.map((area, index) => (
                        <m.span
                          key={area}
                          className="hero-home-city-chip"
                          variants={reveal({
                            delay:
                              heroMotion.supportChipBaseDelay +
                              index * heroMotion.supportChipStagger,
                            y: heroMotion.supportChip.y,
                            duration: heroMotion.supportChip.duration,
                            blur: heroMotion.supportChip.blur,
                          })}
                          whileHover={
                            prefersReducedMotion
                              ? undefined
                              : { y: -2, scale: 1.01 }
                          }
                          transition={motionHoverSpring}
                          style={{ willChange: "transform" }}
                        >
                          {area}
                        </m.span>
                      ))}
                    </div>
                  </div>

                  <m.p
                    className="hero-home-support-note"
                    variants={reveal(heroMotion.supportText)}
                  >
                    Survey, design, installation, and support through one local
                    workflow.
                  </m.p>
                </div>
              </div>
            </div>

            <m.div
              className="hero-home-media"
              variants={reveal(heroMotion.mediaPanel)}
            >
              <m.div
                className="hero-home-media-stage"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -7,
                        scale: 1.016,
                        boxShadow: mediaHoverShadow,
                      }
                }
                transition={motionHoverSpring}
                style={{ willChange: "transform, box-shadow" }}
              >
                <m.div
                  className="hero-home-media-image"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: [1.02, 1.055, 1.02],
                          x: [0, -6, 0],
                          y: [0, 4, 0],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 18,
                          repeat: Infinity,
                          repeatType: "mirror",
                          ease: "easeInOut",
                        }
                  }
                  style={{ willChange: "transform" }}
                >
                  <Image
                    src={heroVisualService.bgHomeSrc ?? siteConfig.assets.openGraph}
                    alt=""
                    aria-hidden="true"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 54vw"
                    className="object-cover object-center"
                  />
                </m.div>

                <m.div
                  className="hero-home-media-glow hero-home-media-glow-a"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          x: [0, 12, 0],
                          y: [0, -10, 0],
                          scale: [1, 1.08, 1],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 12,
                          repeat: Infinity,
                          repeatType: "mirror",
                          ease: "easeInOut",
                        }
                  }
                />

                <m.div
                  className="hero-home-media-glow hero-home-media-glow-b"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          x: [0, -10, 0],
                          y: [0, 8, 0],
                          scale: [1, 1.06, 1],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : {
                          duration: 14,
                          delay: 0.6,
                          repeat: Infinity,
                          repeatType: "mirror",
                          ease: "easeInOut",
                        }
                  }
                />

                <m.div
                  className="hero-home-media-top"
                >
                  <m.span
                    className="hero-home-media-chip hero-home-media-chip-dark"
                    variants={reveal({
                      delay: heroMotion.mediaChipBaseDelay,
                      y: heroMotion.mediaChip.y,
                      duration: heroMotion.mediaChip.duration,
                      blur: heroMotion.mediaChip.blur,
                    })}
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : { y: [0, -4, 0], x: [0, 3, 0] }
                    }
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : {
                            duration: 7.5,
                            delay: 0.8,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                          }
                    }
                    style={{ willChange: "transform" }}
                  >
                    Fire, Security & AV
                  </m.span>

                  <m.span
                    className="hero-home-media-chip"
                    variants={reveal({
                      delay:
                        heroMotion.mediaChipBaseDelay + heroMotion.mediaChipStagger,
                      y: heroMotion.mediaChip.y,
                      duration: heroMotion.mediaChip.duration,
                      blur: heroMotion.mediaChip.blur,
                    })}
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : { y: [0, -3, 0], x: [0, -2, 0] }
                    }
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : {
                            duration: 8.2,
                            delay: 1.1,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                          }
                    }
                    style={{ willChange: "transform" }}
                  >
                    Site-ready execution
                  </m.span>
                </m.div>

                <m.div
                  className="hero-home-media-bottom"
                >
                  <m.div
                    className="hero-home-media-copy"
                    variants={reveal(heroMotion.mediaCopy)}
                  >
                    <p className="hero-home-media-kicker">
                      {heroVisualService.highlight}
                    </p>
                    <h2>{heroVisualService.name}</h2>
                    <p>{heroVisualService.shortDescription}</p>
                  </m.div>

                  <m.ul
                    className="hero-home-media-points"
                  >
                    {mediaPoints.map((point, index) => (
                      <m.li
                        key={point}
                        variants={reveal({
                          delay:
                            heroMotion.mediaPointBaseDelay +
                            index * heroMotion.mediaPointStagger,
                          y: heroMotion.mediaPoint.y,
                          duration: heroMotion.mediaPoint.duration,
                          blur: heroMotion.mediaPoint.blur,
                        })}
                        whileHover={
                          prefersReducedMotion
                            ? undefined
                            : {
                                x: 3,
                              }
                        }
                        transition={motionHoverSpring}
                      >
                        <CheckIcon
                          className="h-4 w-4 shrink-0 text-[#ff8f7a]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </m.li>
                    ))}
                  </m.ul>
                </m.div>
              </m.div>
            </m.div>
          </m.div>

          <m.div
            className="hero-proof-band"
            initial={initial}
            animate="show"
            variants={reveal(heroMotion.proofBand)}
          >
            <div className="hero-proof-metrics">
              {proofMetrics.map((metric) => (
                <m.div
                  key={metric.label}
                  className="hero-proof-metric-shell"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: -4,
                          scale: 1.01,
                          boxShadow: proofHoverShadow,
                        }
                  }
                  transition={motionHoverSpring}
                  style={{ willChange: "transform, box-shadow" }}
                >
                  <ProofMetric
                    label={metric.label}
                    value={metric.value}
                    detail={metric.detail}
                    icon={metric.icon}
                  />
                </m.div>
              ))}
            </div>

            <div className="hero-proof-support">
              <p className="hero-proof-support-label">
                Support model
              </p>

              <div className="hero-proof-area-row">
                {siteConfig.serviceAreas.map((area) => (
                  <m.span
                    key={area}
                    className="hero-proof-area-chip"
                    whileHover={
                      prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }
                    }
                    transition={motionHoverSpring}
                    style={{ willChange: "transform" }}
                  >
                    {area}
                  </m.span>
                ))}
              </div>

              <div className="hero-proof-tag-row">
                {heroSupportBadges.map((item) => (
                  <m.span
                    key={item}
                    className="hero-proof-tag"
                    whileHover={
                      prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }
                    }
                    transition={motionHoverSpring}
                    style={{ willChange: "transform" }}
                  >
                    {item}
                  </m.span>
                ))}
              </div>
            </div>
          </m.div>
        </Container>
      </section>
    </LazyMotion>
  );
}
