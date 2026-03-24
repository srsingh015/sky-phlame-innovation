import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      maxWidth: {
        site: "78rem",
        copy: "42rem",
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
      },
      fontSize: {
        eyebrow: [
          "0.72rem",
          {
            lineHeight: "1",
            letterSpacing: "0.28em",
            fontWeight: "700",
          },
        ],
        "display-sm": [
          "clamp(3rem, 6vw, 4.75rem)",
          {
            lineHeight: "0.96",
            letterSpacing: "-0.04em",
            fontWeight: "700",
          },
        ],
        "display-xs": [
          "clamp(2.3rem, 4vw, 3.7rem)",
          {
            lineHeight: "1",
            letterSpacing: "-0.035em",
            fontWeight: "700",
          },
        ],
        lead: [
          "1.125rem",
          {
            lineHeight: "1.9",
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
