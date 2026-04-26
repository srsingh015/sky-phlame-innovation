"use client";

import { useEffect, useState } from "react";

type HeroRotatorProps = {
  items: string[];
};

export function HeroRotator({ items }: HeroRotatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion || items.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [items.length, reducedMotion]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="hero-rotator" aria-hidden="true">
      <span className="hero-rotator-label">Service focus</span>
      <span className="hero-rotator-window">
        {items.map((item, index) => (
          <span
            key={item}
            className={[
              "hero-rotator-item",
              index === activeIndex ? "hero-rotator-item-active" : "",
            ].join(" ")}
          >
            {item}
          </span>
        ))}
      </span>
    </div>
  );
}
