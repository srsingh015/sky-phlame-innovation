import { IconCircle } from "@/components/icon-circle";
import { CheckIcon, LocationIcon, PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const icons = [CheckIcon, LocationIcon, PhoneIcon];

type TrustBadgesProps = {
  className?: string;
  compactDesktop?: boolean;
};

export function TrustBadges({
  className,
  compactDesktop = false,
}: TrustBadgesProps) {
  return (
    <div
      className={cn(
        "section-grid md:grid-cols-3 md:[grid-auto-rows:1fr]",
        className,
      )}
    >
      {siteConfig.trustBadges.map((badge, index) => {
        const Icon = icons[index] ?? CheckIcon;

        return (
          <article
            key={badge.title}
            className={cn(
              "feature-card card-pad flex h-full gap-4",
              compactDesktop && "lg:gap-3.5 lg:p-5",
            )}
          >
            <IconCircle className="shrink-0">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </IconCircle>
            <div className="min-w-0">
              <p className="text-base font-semibold leading-6 text-brand-navy sm:text-lg">
                {badge.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                {badge.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
