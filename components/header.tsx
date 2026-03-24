"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import {
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { buildPhoneHref, buildWhatsAppUrl } from "@/lib/site";
import { siteConfig } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const whatsappHref = buildWhatsAppUrl({
  service: "a fire, security or AV solution",
});

const callHref = buildPhoneHref();
const DRAWER_ID = "mobile-navigation";
const DRAWER_TRANSITION_MS = 240;

function isActiveLink(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerMounted, setIsDrawerMounted] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const bodyOverflowRef = useRef<string | null>(null);

  function openMenu() {
    setIsDrawerMounted(true);
    window.requestAnimationFrame(() => {
      setIsMenuOpen(true);
    });
  }

  function closeMenu(restoreFocus = false) {
    setIsMenuOpen(false);

    if (restoreFocus) {
      window.setTimeout(() => {
        menuButtonRef.current?.focus();
      }, DRAWER_TRANSITION_MS);
    }
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable?.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    closeButtonRef.current?.focus();

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isDrawerMounted) {
      return;
    }

    bodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("mobile-menu-open");

    return () => {
      document.body.style.overflow = bodyOverflowRef.current ?? "";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isDrawerMounted]);

  useEffect(() => {
    if (!isDrawerMounted || isMenuOpen) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsDrawerMounted(false);
    }, DRAWER_TRANSITION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [isDrawerMounted, isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-border/70 bg-white/95 supports-[backdrop-filter]:bg-white/[0.84] supports-[backdrop-filter]:backdrop-blur-md">
      <Container>
        <div className="flex min-h-[var(--header-h)] min-w-0 items-center gap-2 py-2.5 sm:gap-3 sm:py-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
          <BrandMark className="min-w-0 flex-1 lg:min-w-[18.5rem] lg:flex-none lg:justify-self-start" compact />

          <nav
            aria-label="Primary"
            className="hidden items-center justify-center gap-2 lg:flex lg:justify-self-center"
          >
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActiveLink(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "rounded-pill px-3.5 py-2 text-sm font-medium transition",
                  isActiveLink(pathname, item.href)
                    ? "bg-brand-accent text-brand-navy"
                    : "text-brand-muted hover:bg-white hover:text-brand-navy",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 md:flex lg:justify-self-end">
            <ButtonLink
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="whatsapp"
              size="sm"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </ButtonLink>
            <ButtonLink href={callHref} variant="secondary" size="sm">
              <PhoneIcon className="h-4 w-4" />
              Call
            </ButtonLink>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 md:hidden">
            <ButtonLink
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="whatsapp"
              size="sm"
              className="h-10 w-10 min-w-0 rounded-[1rem] px-0"
              aria-label="WhatsApp SKY PHLAME INNOVATION"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={callHref}
              variant="secondary"
              size="sm"
              className="h-10 w-10 min-w-0 rounded-[1rem] px-0"
              aria-label="Call SKY PHLAME INNOVATION"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={openMenu}
            aria-expanded={isMenuOpen}
            aria-controls={DRAWER_ID}
            className="btn btn-tertiary btn-sm h-10 w-10 shrink-0 px-0 sm:w-auto sm:px-3 lg:hidden"
          >
            <span className="sr-only">Open navigation menu</span>
            <MenuIcon className="h-4 w-4" aria-hidden="true" />
            <span className="hidden md:inline">Menu</span>
          </button>
        </div>
      </Container>
      </header>

      {typeof document !== "undefined" && isDrawerMounted
        ? createPortal(
            <div className="fixed inset-0 z-[70] lg:hidden">
              <button
                type="button"
                aria-label="Close navigation overlay"
                className={[
                  "fixed inset-0 bg-brand-navy/32 transition-opacity duration-200 ease-out",
                  isMenuOpen ? "opacity-100" : "opacity-0",
                ].join(" ")}
                onClick={() => closeMenu(true)}
              />
              <div
                id={DRAWER_ID}
                ref={drawerRef}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className={[
                  "fixed right-0 top-0 flex h-dvh w-[min(88vw,360px)] max-w-none flex-col border-l border-brand-border/70 bg-white shadow-[0_24px_56px_-30px_rgba(15,33,59,0.34)] transition-transform duration-300 ease-out",
                  isMenuOpen ? "translate-x-0" : "translate-x-full",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3 border-b border-brand-border/80 px-4 pb-4 pt-[calc(env(safe-area-inset-top)+1rem)]">
                  <BrandMark className="min-w-0 flex-1" compact />
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => closeMenu(true)}
                    className="btn btn-tertiary btn-sm h-10 w-10 px-0"
                  >
                    <span className="sr-only">Close navigation menu</span>
                    <CloseIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
  
                <nav
                  aria-label="Mobile"
                  className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5"
                >
                  {siteConfig.navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => closeMenu()}
                      aria-current={
                        isActiveLink(pathname, item.href) ? "page" : undefined
                      }
                      className={cn(
                        "rounded-card px-4 py-3 text-base font-semibold transition",
                        isActiveLink(pathname, item.href)
                          ? "bg-brand-accent text-brand-navy"
                          : "text-brand-navy hover:bg-brand-surface-soft",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
  
                <div className="border-t border-brand-border/80 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4">
                  <div className="flex flex-col gap-3">
                    <ButtonLink
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => closeMenu()}
                      variant="whatsapp"
                      block
                      size="lg"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp Now
                    </ButtonLink>
                    <ButtonLink
                      href={callHref}
                      variant="secondary"
                      block
                      size="lg"
                      onClick={() => closeMenu()}
                    >
                      <PhoneIcon className="h-4 w-4" />
                      Call Now
                    </ButtonLink>
                    <ButtonLink
                      href="/contact#get-quote"
                      variant="tertiary"
                      block
                      size="lg"
                      onClick={() => closeMenu()}
                    >
                      Get Quote
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
