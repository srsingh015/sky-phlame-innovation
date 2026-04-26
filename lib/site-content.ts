export type ServiceIconName =
  | "fire"
  | "camera"
  | "access"
  | "analytics"
  | "plate"
  | "announcement"
  | "av"
  | "videowall";

export type NavigationItem = {
  href: string;
  label: string;
};

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  highlight: string;
  idealFor: string[];
  whatWeProvide: string[];
  ctaLabel: string;
  icon: ServiceIconName;
  bgHomeSrc?: string;
  bgServicesSrc?: string;
};

export type Client = {
  name: string;
  assetPath?: string;
};

export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://skyphlame.example.com",
  assets: {
    logo: "/brand/main-logo.webp",
    openGraph: "/brand/og-image.png",
  },
  company: {
    name: "SKY PHLAME INNOVATION",
    shortName: "SPI",
    established: "2022",
    tagline: "Leading Security & Fire Protection Services",
    positioning:
      "Fire alarm systems, surveillance, security systems, and AV solutions from an independent specialist based in Vadodara, Gujarat.",
    headOffice: "Manjalpur, Vadodara, Gujarat",
    streetAddress:
      "4F-407, Rama Emperro, Beside Shell Petrol Pump, Akashwani Road, Manjalpur",
    city: "Vadodara",
    region: "Gujarat",
    addressDisplay:
      "4F-407, Rama Emperro, Beside Shell Petrol Pump, Akashwani Road, Manjalpur, Vadodara, Gujarat 390011",
  },
  contact: {
    phoneDisplay: "+91 6353984044",
    phoneE164: "+916353984044",
    email: "sky.innovation11@yahoo.com",
    whatsappNumber: "916353984044",
    defaultCity: "Vadodara",
  },
  lead: {
    defaultMessageTemplate:
      "Hello SKY PHLAME INNOVATION, I’m interested in [Service]. Please contact me for a site visit/quote. City: [City].",
  },
  navigation: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact" },
  ] satisfies NavigationItem[],
  serviceAreas: ["Vadodara", "Bharuch", "Ankleshwar"],
  hero: {
    eyebrow: "Vadodara fire, security & AV specialist",
    title: "Fire, Security & AV Systems for Live Sites",
    subhead:
      "Fire alarm, CCTV, access control, PA/VA, and AV systems with dependable local support.",
  },
  trustBadges: [
    {
      title: "Established since 2022",
      description:
        "Independent specialist support for fire safety, surveillance, security, and AV projects.",
    },
    {
      title: "Local support: Vadodara • Bharuch • Ankleshwar",
      description:
        "Fast regional response for survey, installation, commissioning, and after-sales support.",
    },
    {
      title: "Certified engineers & sales support",
      description:
        "Functional and technical requirements are addressed in line with standards and site needs.",
    },
  ],
  whyChooseUs: [
    {
      title: "Local teams that reach site fast",
      description:
        "Support is built around Vadodara, Bharuch, and Ankleshwar so customers are not waiting on remote service coordination.",
    },
    {
      title: "Consultancy to support in one workflow",
      description:
        "From design advice and equipment selection to installation and maintenance, the same specialist team stays close to the project.",
    },
    {
      title: "Trusted systems with trained execution",
      description:
        "Honeywell-integrated fire and security solutions are delivered with certified trained engineers and sales support.",
    },
  ],
  about: {
    overview: [
      "SKY PHLAME INNOVATION is an independent specialist and solution provider for fire alarm systems, surveillance, security systems, and electronic safety solutions, established in 2022 and headquartered in Vadodara, Gujarat.",
      "The company supports domestic, commercial, licensed-premises, and public-sector sites with consultancy, implementation, and support services tailored to customer requirements and budget.",
      "Its team delivers innovative solutions through strong technical knowledge, dependable service, and world-class technology for safer and better-monitored spaces.",
      "The company also works with Honeywell-integrated fire and security solutions, including CCTV IP surveillance, access control, PA systems, and Morley fire alarm control panels.",
    ],
    vision:
      "To be one of India’s leading suppliers of security and fire protection products and services.",
    mission:
      "To provide premium-quality security and fire protection products and services through carefully selected resources, technical staff excellence, and a commitment to exceed expectations.",
    coreValues: ["Reliable", "Excellence", "Satisfaction"],
  },
  benefits: [
    {
      title: "Local Support",
      description:
        "Teams are based around Vadodara, Bharuch, and Ankleshwar to ensure on-time support whenever service is needed.",
    },
    {
      title: "Certified Trained Engineers / Sales Support",
      description:
        "Professional solutions from certified trained engineers and sales support help cover both technical and functional site needs.",
    },
    {
      title: "Support from Partner - Honeywell",
      description:
        "Trusted Honeywell-backed technologies strengthen connected, safer, and more sustainable building environments.",
    },
  ],
  howWeWork: ["Survey", "Design", "Installation", "Support"],
  clientTrustLine:
    "Reliable products and prompt engineering support for manufacturing, commercial, and residential sites.",
  clientsIntro:
    "SKY PHLAME INNOVATION serves multinational and private companies, including manufacturing factories, commercial projects, and residential sites where dependable fire and security systems matter every day.",
} as const;

export const services: Service[] = [
  {
    slug: "fire-alarm-systems",
    name: "Fire Alarm Systems",
    shortDescription:
      "Addressable fire alarm solutions with dependable detection, control, and lifecycle support, including Morley-IAS by Honeywell.",
    highlight: "Morley-IAS + Honeywell",
    idealFor: [
      "Factories and industrial units",
      "Corporate and public-sector buildings",
      "Licensed premises and occupied commercial sites",
    ],
    whatWeProvide: [
      "System consultation, panel selection, and site-fit planning",
      "Detectors, control panels, commissioning, and integration guidance",
      "Maintenance-focused support for reliable day-to-day operation",
    ],
    ctaLabel: "WhatsApp for Quote",
    icon: "fire",
    bgHomeSrc: "/services/home/fire-alarm.webp",
    bgServicesSrc: "/services/services/fire-alarm.webp",
  },
  {
    slug: "cctv-ip-surveillance",
    name: "CCTV / IP Surveillance",
    shortDescription:
      "High-definition surveillance designed for small and medium businesses plus residential sites that need continuous monitoring.",
    highlight: "SMB + residential coverage",
    idealFor: [
      "Small shops, gyms, schools, and office spaces",
      "Residential homes and apartment entry points",
      "Sites needing continuous monitoring and recording",
    ],
    whatWeProvide: [
      "IP camera planning and recording architecture",
      "Coverage design for entry, perimeter, and shared areas",
      "Monitoring-ready systems focused on image clarity and uptime",
    ],
    ctaLabel: "WhatsApp for Quote",
    icon: "camera",
    bgHomeSrc: "/services/home/cctv.webp",
    bgServicesSrc: "/services/services/cctv.webp",
  },
  {
    slug: "access-control",
    name: "Access Control",
    shortDescription:
      "Scalable access control solutions built around robust identity management that can start small and grow with the site.",
    highlight: "Scalable identity-based control",
    idealFor: [
      "Growing organizations adding controlled entry points",
      "Sites that need role-based access and auditability",
      "Buildings where door control alone is not enough",
    ],
    whatWeProvide: [
      "Entry control planning tied to identity management",
      "Expandable architecture for future doors and users",
      "Specialized functions added as operational needs evolve",
    ],
    ctaLabel: "WhatsApp for Quote",
    icon: "access",
    bgHomeSrc: "/services/home/access-control.webp",
    bgServicesSrc: "/services/services/access-control.webp",
  },
  {
    slug: "face-recognition-analytics",
    name: "Face Recognition Analytics",
    shortDescription:
      "Search-led video analytics to help authorized teams review footage faster for safety, security, and operational efficiency.",
    highlight: "Search-led video analytics",
    idealFor: [
      "Organizations that need faster footage review workflows",
      "Municipal and enterprise environments with controlled access policies",
      "Sites using analytics to support safety and incident response",
    ],
    whatWeProvide: [
      "Face-matching capable analytics setup for lawful, policy-compliant use",
      "Faster footage search workflows for authorized operators",
      "Operational guidance on integrating analytics with surveillance systems",
    ],
    ctaLabel: "WhatsApp for Quote",
    icon: "analytics",
    bgHomeSrc: "/services/home/face-analytics-v2.webp",
    bgServicesSrc: "/services/services/face-analytics.webp",
  },
  {
    slug: "anpr-lpr",
    name: "ANPR / LPR",
    shortDescription:
      "Number-plate recognition for traffic, parking, and entry-exit control with alerting and allow/block list workflows.",
    highlight: "Traffic, parking, gate control",
    idealFor: [
      "Parking areas and campus entry/exit lanes",
      "Traffic-facing surveillance points",
      "Sites using barriers or automated vehicle logging",
    ],
    whatWeProvide: [
      "Real-time plate capture and logging",
      "Allow list and block list driven actions and alerts",
      "Standalone or integrated camera workflows for site access control",
    ],
    ctaLabel: "WhatsApp for Quote",
    icon: "plate",
    bgHomeSrc: "/services/home/anpr-lpr.webp",
    bgServicesSrc: "/services/services/anpr-lpr.webp",
  },
  {
    slug: "pa-va-systems",
    name: "PA / VA Systems",
    shortDescription:
      "Public address and voice alarm systems that support announcements, background audio, and evacuation messaging.",
    highlight: "Fire-linked voice announcements",
    idealFor: [
      "Corporate buildings, hospitals, and shopping complexes",
      "Hotels, transport hubs, and large mixed-use sites",
      "Buildings that need fire-linked evacuation audio",
    ],
    whatWeProvide: [
      "Public announcement and background music planning",
      "Voice alarm workflows integrated with fire detection systems",
      "Coverage design for lobbies, corridors, parking, and shared spaces",
    ],
    ctaLabel: "WhatsApp for Quote",
    icon: "announcement",
    bgHomeSrc: "/services/home/pa-va.webp",
    bgServicesSrc: "/services/services/pa-va.webp",
  },
  {
    slug: "av-solutions",
    name: "AV Solutions",
    shortDescription:
      "Audio visual systems that support communication, collaboration, projection, and modern meeting spaces.",
    highlight: "Meeting and presentation spaces",
    idealFor: [
      "Meeting rooms, boardrooms, and collaboration spaces",
      "Corporate teams that need projection and conferencing support",
      "Spaces designed for strategy, presentation, and training",
    ],
    whatWeProvide: [
      "AV planning aligned with site communication goals",
      "Projection and conferencing-ready room solutions",
      "Audio visual integration for daily business use",
    ],
    ctaLabel: "WhatsApp for Quote",
    icon: "av",
    bgHomeSrc: "/services/home/av-solutions.webp",
    bgServicesSrc: "/services/services/av-solutions.webp",
  },
  {
    slug: "video-wall-solutions",
    name: "Video Wall Solutions",
    shortDescription:
      "Integrated LED video wall solutions with scalable clarity for monitoring, control, and high-visibility communication.",
    highlight: "Monitoring-ready LED walls",
    idealFor: [
      "Monitoring and control environments",
      "Reception, command, and display-focused spaces",
      "Sites that need durable, high-visibility digital display walls",
    ],
    whatWeProvide: [
      "Right-fit LED video wall system planning",
      "Monitoring, control, and interaction support",
      "Professional setup focused on clarity, efficiency, and long-term use",
    ],
    ctaLabel: "WhatsApp for Quote",
    icon: "videowall",
    bgHomeSrc: "/services/home/video-wall.webp",
    bgServicesSrc: "/services/services/video-wall.webp",
  },
];

export const clients: Client[] = [
  {
    name: "Thermax Ltd",
    assetPath: "/clients/logos/thermax.png",
  },
  {
    name: "Nissan Bharat Rasayan Pvt Limited",
    assetPath: "/clients/logos/nissan-bharat-rasayan.jpeg",
  },
  {
    name: "Bloom Seal Containers Pvt Ltd",
    assetPath: "/clients/logos/bloom-seal-containers.png",
  },
  {
    name: "Elantas Beck India Ltd",
    assetPath: "/clients/logos/elantas-beck-india.jpg",
  },
  {
    name: "Pidilite Industries",
    assetPath: "/clients/logos/pidilite-industries.png",
  },
  {
    name: "astTECS",
    assetPath: "/clients/logos/asttecs.png",
  },
];
