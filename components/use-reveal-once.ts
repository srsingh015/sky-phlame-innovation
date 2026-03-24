"use client";

import { useEffect, useRef, useState } from "react";

type UseRevealOnceOptions = {
  threshold?: number;
};

export function useRevealOnce<T extends HTMLElement>({
  threshold = 0.12,
}: UseRevealOnceOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.IntersectionObserver === "undefined",
  );

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, threshold]);

  return { ref, isVisible };
}
