"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { useReducedMotion } from "motion/react";
import { createRevealVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: "some" | "all" | number;
}

export function Reveal({
  children,
  y = 24,
  x = 0,
  scale = 1,
  blur = 8,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className,
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = createRevealVariants({
    reduced: prefersReducedMotion ?? false,
    y,
    x,
    scale,
    blur,
    delay,
    duration,
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
