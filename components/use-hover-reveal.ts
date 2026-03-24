"use client";

import { useSyncExternalStore } from "react";

function subscribeToMediaQuery(query: string, onChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia(query);
  const listener = () => onChange();

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }

  mediaQuery.addListener(listener);
  return () => mediaQuery.removeListener(listener);
}

function getMediaQuerySnapshot(query: string) {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia(query).matches;
}

export function useHoverReveal(enabled = true) {
  const mediaCanHover = useSyncExternalStore(
    (onChange) =>
      subscribeToMediaQuery("(hover: hover) and (pointer: fine)", onChange),
    () => getMediaQuerySnapshot("(hover: hover) and (pointer: fine)"),
    () => false,
  );
  const prefersReducedMotion = useSyncExternalStore(
    (onChange) =>
      subscribeToMediaQuery("(prefers-reduced-motion: reduce)", onChange),
    () => getMediaQuerySnapshot("(prefers-reduced-motion: reduce)"),
    () => false,
  );
  const canHover = enabled && mediaCanHover;

  return {
    canHover,
    prefersReducedMotion,
  };
}
