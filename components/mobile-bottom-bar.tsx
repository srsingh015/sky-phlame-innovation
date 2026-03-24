"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRightIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { buildPhoneHref, buildWhatsAppUrl } from "@/lib/site";

const whatsappHref = buildWhatsAppUrl({
  service: "a fire, security or AV solution",
});

export function MobileBottomBar() {
  const pathname = usePathname();
  const quoteHref =
    pathname === "/" || pathname === "/contact"
      ? "#get-quote"
      : "/contact#get-quote";

  return (
    <aside className="mobile-bottom-bar pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="pointer-events-auto mx-auto w-full max-w-[30rem] overflow-hidden rounded-t-[1.15rem] border border-b-0 border-brand-border/80 bg-white/[0.98] shadow-[0_-14px_30px_-24px_rgba(15,33,59,0.24)] backdrop-blur-sm">
        <div className="grid grid-cols-3 gap-2 px-3 pt-2 pb-[calc(env(safe-area-inset-bottom)+0.45rem)]">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp SKY PHLAME INNOVATION"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-[0.95rem] border border-[rgba(22,131,72,0.16)] bg-[linear-gradient(180deg,#27d367_0%,#1faa59_100%)] px-2 text-[0.78rem] font-semibold whitespace-nowrap text-white shadow-[0_12px_24px_-22px_rgba(22,131,72,0.48),inset_0_1px_0_rgba(255,255,255,0.16)]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={buildPhoneHref()}
            aria-label="Call SKY PHLAME INNOVATION"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-[0.95rem] border border-brand-border bg-white px-2 text-[0.78rem] font-semibold whitespace-nowrap text-brand-navy"
          >
            <PhoneIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            Call
          </a>
          <Link
            href={quoteHref}
            aria-label="Jump to quote form"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-[0.95rem] border border-brand-border bg-brand-surface-soft px-2 text-[0.78rem] font-semibold whitespace-nowrap text-brand-navy"
          >
            <ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            Quote
          </Link>
        </div>
      </div>
    </aside>
  );
}
