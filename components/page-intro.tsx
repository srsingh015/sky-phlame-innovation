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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(9,16,26,0.95)_0%,rgba(15,23,41,0.9)_44%,rgba(9,16,26,0.92)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_26%,rgba(15,23,41,0.6),transparent_32%),radial-gradient(circle_at_80%_28%,rgba(239,68,68,0.1),transparent_30%),radial-gradient(circle_at_72%_78%,rgba(59,130,246,0.05),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block bg-[radial-gradient(circle_at_18%_24%,rgba(15,23,41,0.5),transparent_34%),radial-gradient(circle_at_84%_28%,rgba(239,68,68,0.12),transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_44%,rgba(255,255,255,0)_100%)]" />
      <div className="pointer-events-none absolute inset-0 hidden opacity-[0.08] md:block md:opacity-[0.12] lg:opacity-[0.07]"
        style={{ backgroundImage: noiseTexture, backgroundSize: "160px 160px" }}
      />

      <Container className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24">
        <div
          className={cn(
            "grid gap-10 lg:gap-16",
            aside ? "lg:grid-cols-[1fr_minmax(auto,26rem)] lg:items-start" : "lg:grid-cols-1",
          )}
        >
          <div className={cn("max-w-2xl flex flex-col", contentClassName)}>
            {eyebrow && (
              <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-3">
                {eyebrow}
              </p>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              {title}
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-brand-muted-strong">
              {description}
            </p>

            {actions ? (
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {actions}
              </div>
            ) : null}

            {highlights?.length ? (
              <ul className="mt-8 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.75rem] font-medium text-white/80 shadow-soft backdrop-blur-md"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {aside ? (
            <div className="w-full relative mt-4 lg:mt-0">
              <div className="absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 blur-sm pointer-events-none" />
              <div className="relative rounded-[1.4rem] border border-white/10 bg-[#0a111a]/80 backdrop-blur-xl p-5 sm:p-6 lg:p-7 shadow-2xl">
                {aside}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
