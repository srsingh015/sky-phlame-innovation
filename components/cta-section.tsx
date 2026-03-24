import { Container } from "@/components/container";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
  defaultService?: string;
  compact?: boolean;
  className?: string;
};

export function CTASection({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  defaultService,
  compact = false,
  className,
}: CTASectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      className={cn(
        "section",
        isDark ? "bg-brand-navy text-white" : "bg-transparent",
        className,
      )}
    >
      <Container className="grid gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="self-center">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            size="page"
            className={
              isDark
                ? "[&>h2]:text-white [&>p:last-child]:text-white/[0.72] [&>p:first-child]:text-brand-red-strong"
                : undefined
            }
          />
        </div>
        <QuoteForm
          tone={tone}
          compact={compact}
          defaultService={defaultService}
          submitLabel="Send on WhatsApp"
        />
      </Container>
    </section>
  );
}
