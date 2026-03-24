import Image from "next/image";
import type { Client } from "@/lib/site-content";

type ClientLogoCardProps = {
  client: Client & {
    descriptor?: string;
  };
  compact?: boolean;
};

function getMonogram(name: string) {
  return name
    .replace(/\b(Pvt|Limited|Ltd|India)\b/gi, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function ClientLogoCard({
  client,
  compact = false,
}: ClientLogoCardProps) {
  return (
    <article
      className={`client-card group flex h-full flex-col text-center transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lift ${
        compact ? "min-h-[7.2rem] px-4 py-4 md:px-5 md:py-5" : "p-4 md:p-5"
      }`}
    >
      <div
        className={`flex items-center justify-center ${
          compact ? "h-[4.35rem]" : "h-[5rem]"
        }`}
      >
        <div
          className={`flex items-center justify-center rounded-[1rem] border border-brand-border/55 bg-white ${
            compact
              ? "h-[3.35rem] min-w-[9.75rem] px-4"
              : "h-[3.75rem] min-w-[11rem] px-5"
          }`}
        >
          {client.assetPath ? (
            <Image
              src={client.assetPath}
              alt={`${client.name} logo`}
              width={compact ? 158 : 184}
              height={compact ? 68 : 78}
              className={`w-auto object-contain transition ${
                compact
                  ? "max-h-10 sm:max-h-11"
                  : "max-h-11 sm:max-h-12 md:max-h-[3.1rem]"
              }`}
              sizes={
                compact
                  ? "(max-width: 640px) 44vw, (max-width: 1280px) 22vw, 12vw"
                  : "(max-width: 640px) 42vw, (max-width: 1024px) 28vw, (max-width: 1536px) 18vw, 12vw"
              }
            />
          ) : (
            <span
              aria-hidden="true"
              className="text-lg font-semibold tracking-[0.22em] text-brand-navy"
            >
              {getMonogram(client.name)}
            </span>
          )}
        </div>
      </div>

      <h3
        className={`font-semibold leading-6 text-brand-navy ${
          compact ? "mt-3 text-sm" : "mt-4 text-sm sm:text-base"
        }`}
      >
        {client.name}
      </h3>

      {!compact && client.descriptor ? (
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-brand-muted">
          {client.descriptor}
        </p>
      ) : null}
    </article>
  );
}
