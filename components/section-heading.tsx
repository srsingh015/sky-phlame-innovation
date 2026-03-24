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

  return (
    <div
      className={cn(
        "max-w-copy",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className={cn("eyebrow", eyebrowClassName)}>{eyebrow}</p> : null}
      <HeadingTag
        id={id}
        className={cn(
          "mt-2 text-balance font-semibold tracking-tight text-brand-navy",
          size === "page"
            ? "max-w-[13ch] text-display-xs"
            : "text-[clamp(1.95rem,3vw,3rem)] leading-[1.08]",
          titleClassName,
        )}
      >
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-3 max-w-prose text-sm leading-7 text-brand-muted sm:text-base sm:leading-8",
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
