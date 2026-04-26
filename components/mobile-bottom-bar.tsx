"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(pathname !== "/" && pathname !== "/services");
  const quoteHref =
    pathname === "/" || pathname === "/contact"
      ? "#get-quote"
      : "/contact#get-quote";

  useEffect(() => {
    const threshold = pathname === "/" ? 560 : pathname === "/services" ? 360 : 0;
    const frame = window.requestAnimationFrame(() => {
      setIsVisible(threshold === 0 || window.scrollY > threshold);
    });

    if (threshold === 0) {
      return () => window.cancelAnimationFrame(frame);
    }

    const updateVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
    };
  }, [pathname]);

  return (
    <aside
      className={[
        "mobile-bottom-bar pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      ].join(" ")}
    >
      <div className="pointer-events-auto mx-auto w-full max-w-[30rem] overflow-hidden rounded-t-[1.15rem] border border-b-0 border-white/[0.08] bg-[#0f1729]/[0.78] shadow-[0_-14px_40px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl backdrop-saturate-[1.4]">
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
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-[0.95rem] border border-white/[0.1] bg-white/[0.06] px-2 text-[0.78rem] font-semibold whitespace-nowrap text-brand-navy"
          >
            <PhoneIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            Call
          </a>
          <Link
            href={quoteHref}
            aria-label="Jump to quote form"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-[0.95rem] border border-white/[0.1] bg-white/[0.04] px-2 text-[0.78rem] font-semibold whitespace-nowrap text-brand-navy"
          >
            <ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            Quote
          </Link>
        </div>
      </div>
    </aside>
  );
}
