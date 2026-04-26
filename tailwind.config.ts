import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      maxWidth: {
        site: "78rem",
        copy: "46rem",
        narrow: "34rem",
      },
      borderRadius: {
        panel: "var(--radius-panel)",
        card: "var(--radius-card)",
        pill: "999px",
      },
      boxShadow: {
        panel: "var(--shadow-panel)",
        lift: "var(--shadow-lift)",
        soft: "var(--shadow-soft)",
        dark: "var(--shadow-dark)",
      },
      fontSize: {
        eyebrow: [
          "0.74rem",
          {
            lineHeight: "1",
            letterSpacing: "0.24em",
            fontWeight: "700",
          },
        ],
        "display-sm": [
          "clamp(2.75rem, 7vw, 5rem)",
          {
            lineHeight: "0.92",
            letterSpacing: "-0.05em",
            fontWeight: "700",
          },
        ],
        "display-xs": [
          "clamp(2.25rem, 4.4vw, 4rem)",
          {
            lineHeight: "0.96",
            letterSpacing: "-0.045em",
            fontWeight: "700",
          },
        ],
        "title-lg": [
          "clamp(1.35rem, 2vw, 1.9rem)",
          {
            lineHeight: "1.08",
            letterSpacing: "-0.03em",
            fontWeight: "600",
          },
        ],
        lead: [
          "clamp(1rem, 1.35vw, 1.14rem)",
          {
            lineHeight: "1.8",
          },
        ],
      },
      spacing: {
        "ui-xs": "var(--space-xs)",
        "ui-sm": "var(--space-sm)",
        "ui-md": "var(--space-md)",
        "ui-lg": "var(--space-lg)",
        "ui-xl": "var(--space-xl)",
        "ui-2xl": "var(--space-2xl)",
        "ui-3xl": "var(--space-3xl)",
        section: "var(--section-space)",
        "section-tight": "var(--section-space-tight)",
      },
    },
  },
};

export default config;
