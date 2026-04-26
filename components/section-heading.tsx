import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  size?: "section" | "page";
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  eyebrowClassName,
  title,
  description,
  align = "left",
  className,
  as = "h2",
  size = "section",
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const HeadingTag = as;
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        isCentered ? "mx-auto max-w-4xl text-center" : "max-w-none",
        className,
      )}
    >
      {eyebrow ? <p className={cn("eyebrow", eyebrowClassName)}>{eyebrow}</p> : null}
      <HeadingTag
        id={id}
        className={cn(
          "mt-2 text-balance font-semibold tracking-tight text-brand-ink",
          size === "page"
            ? "text-display-xs"
            : "text-[clamp(1.35rem,4vw,2.75rem)] leading-[1.1] sm:leading-[1.05] tracking-tight",
          isCentered && "mx-auto",
          titleClassName,
        )}
      >
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-2 sm:mt-4 text-[0.8rem] leading-[1.65] text-brand-muted sm:text-[0.85rem] sm:leading-6 md:text-[0.95rem] md:leading-7",
            isCentered ? "mx-auto max-w-[52rem]" : "max-w-[48rem]",
            size === "page" && "max-w-prose",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
