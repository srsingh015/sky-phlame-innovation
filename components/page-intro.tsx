import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const noiseTexture =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='%230f213b' fill-opacity='.045'%3E%3Ccircle cx='12' cy='14' r='1'/%3E%3Ccircle cx='72' cy='28' r='1'/%3E%3Ccircle cx='112' cy='18' r='1'/%3E%3Ccircle cx='30' cy='62' r='1'/%3E%3Ccircle cx='92' cy='78' r='1'/%3E%3Ccircle cx='126' cy='110' r='1'/%3E%3Ccircle cx='54' cy='120' r='1'/%3E%3Ccircle cx='18' cy='104' r='1'/%3E%3C/g%3E%3C/svg%3E\")";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  highlights?: string[];
  aside?: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
  highlights,
  aside,
  className,
  contentClassName,
}: PageIntroProps) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-transparent", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(251,246,247,0.88)_44%,rgba(242,246,250,0.74)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_26%,rgba(255,255,255,0.72),transparent_32%),radial-gradient(circle_at_80%_28%,rgba(199,48,44,0.13),transparent_30%),radial-gradient(circle_at_72%_78%,rgba(15,33,59,0.045),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.9),transparent_34%),radial-gradient(circle_at_84%_28%,rgba(199,48,44,0.14),transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.02)_44%,rgba(255,255,255,0)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.08] md:block md:opacity-[0.12] lg:opacity-[0.07]"
        style={{ backgroundImage: noiseTexture, backgroundSize: "160px 160px" }}
      />

      <Container className="relative inner-hero-wrap">
        <div
          className={cn(
            "inner-hero-grid",
            !aside && "lg:grid-cols-1",
          )}
        >
          <div className={cn("max-w-copy", contentClassName)}>
            <SectionHeading
              as="h1"
              size="page"
              eyebrow={eyebrow}
              eyebrowClassName="inner-eyebrow"
              title={title}
              description={description}
              titleClassName="inner-h1 mt-2"
              descriptionClassName="inner-lead mt-4"
            />

            {actions ? (
              <div className="inner-hero-actions">
                <div className="inner-hero-actions-row [&>*]:w-full sm:[&>*]:w-auto">
                  {actions}
                </div>
              </div>
            ) : null}

            {highlights?.length ? (
              <ul className="mt-4 flex flex-wrap gap-1.5 md:mt-5 md:gap-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center rounded-pill border border-white/85 bg-white/70 px-2.75 py-1.25 text-[0.7rem] font-semibold leading-5 text-brand-navy shadow-soft backdrop-blur-sm md:px-3 md:py-1.5 md:text-[0.72rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {aside ? <div className="w-full lg:justify-self-end">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
