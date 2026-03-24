import { services, siteConfig } from "@/lib/site-content";

export type LeadRequest = {
  service?: string;
  city?: string;
  name?: string;
  phone?: string;
  message?: string;
};

function buildWhatsAppTextUrl(text: string) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    text,
  )}`;
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.siteUrl).toString();
}

export function buildDefaultLeadMessage(
  service = "[Service]",
  city = "[City]",
) {
  return siteConfig.lead.defaultMessageTemplate
    .replace("[Service]", service)
    .replace("[City]", city);
}

export function buildWhatsAppUrl(lead: LeadRequest = {}) {
  const service = lead.service?.trim() || "[Service]";
  const city = lead.city?.trim() || "[City]";
  const details: string[] = [];

  if (lead.name?.trim()) {
    details.push(`Name: ${lead.name.trim()}`);
  }

  if (lead.phone?.trim()) {
    details.push(`Phone: ${lead.phone.trim()}`);
  }

  if (lead.message?.trim()) {
    details.push(`Message: ${lead.message.trim()}`);
  }

  const text = [
    buildDefaultLeadMessage(service, city),
    details.length ? details.join("\n") : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  return buildWhatsAppTextUrl(text);
}

export function buildServiceQuoteLink(serviceName: string) {
  return buildWhatsAppUrl({ service: serviceName });
}

export function buildContactFormWhatsAppUrl(lead: LeadRequest = {}) {
  const name = lead.name?.trim() || "";
  const phone = lead.phone?.trim() || "";
  const city = lead.city?.trim() || siteConfig.contact.defaultCity;
  const service = lead.service?.trim() || "";
  const message = lead.message?.trim();

  const lines = [
    "Hello SKY PHLAME INNOVATION,",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `City: ${city}`,
    `Service: ${service}`,
    message ? `Message: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return buildWhatsAppTextUrl(lines);
}

export { buildWhatsAppTextUrl };

export function buildPhoneHref() {
  return `tel:${siteConfig.contact.phoneE164}`;
}

export function buildMailHref() {
  return `mailto:${siteConfig.contact.email}`;
}

export const serviceOptions = services.map((service) => service.name);

const organizationId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");
const localBusinessId = absoluteUrl("/#local-business");
const logoUrl = absoluteUrl(siteConfig.assets.logo);

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.company.name,
      alternateName: "Sky Phlame Innovation",
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
        width: 512,
        height: 512,
      },
      image: logoUrl,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phoneE164,
      foundingDate: siteConfig.company.established,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.company.streetAddress,
        addressLocality: siteConfig.company.city,
        addressRegion: siteConfig.company.region,
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: siteConfig.contact.phoneE164,
          email: siteConfig.contact.email,
          areaServed: siteConfig.serviceAreas,
          availableLanguage: ["en", "hi", "gu"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.siteUrl,
      name: siteConfig.company.name,
      description: siteConfig.company.positioning,
      inLanguage: "en-IN",
      publisher: {
        "@id": organizationId,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": localBusinessId,
      name: siteConfig.company.name,
      description: siteConfig.company.positioning,
      url: siteConfig.siteUrl,
      telephone: siteConfig.contact.phoneE164,
      email: siteConfig.contact.email,
      foundingDate: siteConfig.company.established,
      image: logoUrl,
      logo: logoUrl,
      parentOrganization: {
        "@id": organizationId,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.company.streetAddress,
        addressLocality: siteConfig.company.city,
        addressRegion: siteConfig.company.region,
        addressCountry: "IN",
      },
      areaServed: siteConfig.serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
      })),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales and support",
        telephone: siteConfig.contact.phoneE164,
        email: siteConfig.contact.email,
        areaServed: siteConfig.serviceAreas,
        availableLanguage: ["en", "hi", "gu"],
      },
    },
  ],
};
