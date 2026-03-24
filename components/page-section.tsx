import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  spacing?: "default" | "tight" | "comfort" | "hero" | "none";
  tone?: "default" | "band";
  id?: string;
  ariaLabelledby?: string;
};

export function PageSection({
  children,
  className,
  containerClassName,
  spacing = "default",
  tone = "default",
  id,
  ariaLabelledby,
}: PageSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        spacing === "default" && "section",
        spacing === "tight" && "section-tight",
        spacing === "comfort" && "section-comfort",
        spacing === "hero" && "section-hero",
        tone === "band" && "section-band",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
