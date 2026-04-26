import type { Transition, Variants } from "motion/react";

export const motionEaseStandard = [0.22, 1, 0.36, 1] as const;
export const motionEaseSoft = [0.32, 0.72, 0, 1] as const;

export const motionHoverSpring = {
  type: "spring",
  stiffness: 260,
  damping: 22,
  mass: 0.9,
} satisfies Transition;

type RevealOptions = {
  reduced?: boolean;
  x?: number;
  y?: number;
  scale?: number;
  blur?: number;
  delay?: number;
  duration?: number;
};

type StaggerOptions = {
  reduced?: boolean;
  delayChildren?: number;
  staggerChildren?: number;
};

export function createRevealVariants({
  reduced = false,
  x = 0,
  y = 24,
  scale = 1,
  blur = 10,
  delay = 0,
  duration = 0.72,
}: RevealOptions = {}): Variants {
  if (reduced) {
    return {
      hidden: {
        opacity: 0,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: Math.min(duration, 0.42),
          delay,
          ease: motionEaseSoft,
        },
      },
    };
  }

  return {
    hidden: {
      opacity: 0,
      x,
      y,
      scale,
      filter: `blur(${blur}px)`,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: motionEaseStandard,
      },
    },
  };
}

export function createStaggerContainer({
  reduced = false,
  delayChildren = 0.04,
  staggerChildren = 0.08,
}: StaggerOptions = {}): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        delayChildren,
        staggerChildren: reduced ? Math.min(staggerChildren, 0.05) : staggerChildren,
        ease: motionEaseSoft,
      },
    },
  };
}
