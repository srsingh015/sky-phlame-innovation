"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToCurrentHash() {
  const hash = window.location.hash;
  if (!hash) {
    return;
  }

  const id = decodeURIComponent(hash.slice(1));
  const target =
    document.getElementById(id) ??
    document.querySelector<HTMLElement>(`[id="${CSS.escape(id)}"]`);

  if (!target) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;

    if (window.location.hash) {
      frame = window.requestAnimationFrame(() => {
        scrollToCurrentHash();
      });
    }

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      window.requestAnimationFrame(() => {
        scrollToCurrentHash();
      });
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("load", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("load", handleHashChange);
    };
  }, []);

  return null;
}
