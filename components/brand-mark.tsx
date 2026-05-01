import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
  tone?: "light" | "dark";
};

export function BrandMark({
  className,
  compact = false,
  tone = "light",
}: BrandMarkProps) {
  const isDark = tone === "dark";
  const logoSize = compact ? 40 : 48;
  const compactLineOne = "Sky Phlame";
  const compactLineTwo = "Innovation";
  const desktopLocation = "ENGINEERING & SOLUTIONS";
  const desktopName = "SKY PHLAME INNOVATION";

  return (
    <Link
      href="/"
      aria-label="Sky Phlame Innovation home"
      className={cn(
        "flex items-center",
        compact ? "gap-2.5 sm:gap-3" : "gap-3",
        className,
      )}
    >
      <Image
        src={siteConfig.assets.logo}
        alt={`${siteConfig.company.name} logo`}
        width={logoSize}
        height={logoSize}
        className={cn(
          "rounded-2xl object-contain shadow-soft",
          compact ? "h-10 w-10 sm:h-11 sm:w-11" : "h-12 w-12",
        )}
      />
      <div className="min-w-0">
        {compact ? (
          <div className="flex flex-col justify-center min-w-0">
            <p
              className={cn(
                "text-[0.9rem] sm:text-[1.05rem] font-extrabold tracking-tight leading-tight whitespace-nowrap",
                isDark ? "text-white" : "text-brand-navy",
              )}
            >
              {desktopName}
            </p>
            <div
              className={cn(
                "flex w-full items-center justify-between mt-0.5",
                "text-[0.45rem] sm:text-[0.55rem] font-bold uppercase leading-tight",
                isDark ? "text-white/70" : "text-brand-red",
              )}
              aria-hidden="true"
            >
              {desktopLocation.split("").map((char, i) => (
                <span key={i}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </div>
            <span className="sr-only">{desktopLocation}</span>
          </div>
        ) : (
          <>
            <p
              className={cn(
                "truncate text-lg font-bold tracking-tight sm:text-xl",
                isDark ? "text-white" : "text-brand-navy",
              )}
            >
              {siteConfig.company.name}
            </p>
            <div
              className={cn(
                "flex w-full items-center justify-between mt-0.5",
                "text-[0.55rem] font-bold uppercase leading-tight",
                isDark ? "text-white/70" : "text-brand-red",
              )}
              aria-hidden="true"
            >
              {desktopLocation.split("").map((char, i) => (
                <span key={i}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </div>
            <span className="sr-only">{desktopLocation}</span>
          </>
        )}
        {!compact ? (
          <p
            className={cn(
              "max-w-[22rem] text-xs",
              isDark ? "text-white/70" : "text-brand-muted",
            )}
          >
            Fire protection, surveillance, security and AV solutions
          </p>
        ) : null}
      </div>
    </Link>
  );
}
