import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { siteConfig } from "@/lib/site-content";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

const keywords = [
  "Fire alarm systems Vadodara",
  "CCTV installation Vadodara",
  "Access control Vadodara",
  "PA VA systems Gujarat",
  "AV solutions Vadodara",
  "Security systems Bharuch",
  "Fire protection Ankleshwar",
];

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    applicationName: siteConfig.company.name,
    title,
    description,
    keywords,
    authors: [{ name: siteConfig.company.name }],
    creator: siteConfig.company.name,
    publisher: siteConfig.company.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: absoluteUrl(path),
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
      shortcut: ["/favicon.ico"],
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.company.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.assets.openGraph),
          width: 1200,
          height: 630,
          alt: `${siteConfig.company.name} marketing preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.assets.openGraph)],
    },
    category: "business",
  };
}

export const homeMetadata = createPageMetadata({
  title:
    "SKY PHLAME INNOVATION | Security & Fire Protection Services in Vadodara",
  description:
    "Fire alarm systems, CCTV surveillance, access control, PA/VA, and AV solutions in Vadodara with local support across Bharuch and Ankleshwar.",
  path: "/",
});
