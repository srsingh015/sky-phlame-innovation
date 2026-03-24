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
  const desktopLocation = "VADODARA, GUJARAT";
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
        {!compact ? (
          <p
            className={cn(
              "text-[0.68rem] font-semibold uppercase tracking-[0.24em]",
              isDark ? "text-white/70" : "text-brand-red",
            )}
          >
            Vadodara, Gujarat
          </p>
        ) : null}
        {compact ? (
          <>
            <div
              className={cn(
                "flex flex-col justify-center leading-[1.05] lg:hidden",
                isDark ? "text-white" : "text-brand-navy",
              )}
            >
              <span className="whitespace-nowrap text-sm font-semibold">
                {compactLineOne}
              </span>
              <span
                className={cn(
                  "mt-0.5 whitespace-nowrap text-[0.78rem] font-medium sm:text-[0.82rem]",
                  isDark ? "text-white/78" : "text-brand-muted",
                )}
              >
                {compactLineTwo}
              </span>
            </div>
            <div className="hidden lg:block">
              <p
                className={cn(
                  "text-[0.66rem] font-semibold uppercase tracking-[0.24em]",
                  isDark ? "text-white/70" : "text-brand-red",
                )}
              >
                {desktopLocation}
              </p>
              <p
                className={cn(
                  "whitespace-nowrap text-[0.95rem] font-semibold tracking-[0.06em]",
                  isDark ? "text-white" : "text-brand-navy",
                )}
              >
                {desktopName}
              </p>
            </div>
          </>
        ) : (
          <p
            className={cn(
              "truncate text-sm font-semibold sm:text-base",
              isDark ? "text-white" : "text-brand-navy",
            )}
          >
            {siteConfig.company.name}
          </p>
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
