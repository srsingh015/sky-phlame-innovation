import type { SVGProps } from "react";
import type { ServiceIconName } from "@/lib/site-content";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase(props: IconProps) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    />
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </IconBase>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m5 12 4 4L19 6" />
    </IconBase>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="9" y="9" width="10" height="10" rx="2" />
      <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" />
    </IconBase>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72l.38 2.66a2 2 0 0 1-.58 1.72l-1.35 1.36a16 16 0 0 0 5.95 5.95l1.36-1.35a2 2 0 0 1 1.72-.58l2.66.38A2 2 0 0 1 22 16.9Z" />
    </IconBase>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.02 2a9.86 9.86 0 0 0-8.47 14.9L2 22l5.26-1.5a9.97 9.97 0 0 0 4.75 1.2H12A10 10 0 1 0 12.02 2Zm5.85 14.24c-.24.68-1.41 1.31-1.96 1.39-.5.08-1.13.12-1.82-.1-.42-.13-.96-.31-1.65-.6-2.92-1.26-4.82-4.35-4.97-4.55-.14-.2-1.18-1.57-1.18-3 0-1.44.75-2.14 1.01-2.43.26-.28.57-.35.76-.35h.56c.17 0 .4 0 .58.43l.83 2c.08.19.13.41.02.61-.1.19-.15.31-.3.48l-.44.5c-.14.15-.28.32-.12.56.14.24.64 1.05 1.38 1.7.95.85 1.76 1.11 2 1.23.24.12.38.1.52-.06.14-.16.61-.7.77-.95.16-.24.33-.2.56-.12.23.08 1.47.69 1.72.82.25.12.42.18.48.28.06.11.06.64-.18 1.31Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </IconBase>
  );
}

export function LocationIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </IconBase>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </IconBase>
  );
}

function FireIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3c1.5 2 2.5 3.5 2.5 5.2a2.9 2.9 0 0 1-1.3 2.4c.1-1.7-.7-2.8-1.9-3.9-1 1.1-2.8 2.8-2.8 5A4.5 4.5 0 0 0 13 16a3.3 3.3 0 0 1-1 2.3c-.8-.3-2.5-1.4-2.5-4 0-2.1 1-4.2 2.5-5.7C11.4 7 10.8 5.4 12 3Z" />
      <path d="M12.2 14.5c.9.8 1.3 1.4 1.3 2.2A2.5 2.5 0 0 1 11 19.2a2.7 2.7 0 0 1-2.4-2.9c0-1.2.7-2.1 1.8-3.1.1 1 .7 1.4 1.8 1.3Z" />
    </IconBase>
  );
}

function CameraIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 7h2l1.4-2h7.2L17 7h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
      <circle cx="12" cy="13" r="3.5" />
    </IconBase>
  );
}

function AccessIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 12h6" />
      <path d="m12 9 3 3-3 3" />
    </IconBase>
  );
}

function AnalyticsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.2-4.2" />
      <path d="M8.5 11a2.5 2.5 0 0 1 5 0" />
      <path d="M9.5 14.2c.4-.7 1.2-1.2 2.1-1.2s1.7.5 2.1 1.2" />
    </IconBase>
  );
}

function PlateIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <path d="M7 12h4" />
      <path d="M15 10h2" />
      <path d="M15 14h2" />
    </IconBase>
  );
}

function AnnouncementIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 12h4l8-4v8l-8-4H4Z" />
      <path d="M6 16v3" />
      <path d="M18 10.5a3 3 0 0 1 0 3" />
      <path d="M20 8a6 6 0 0 1 0 8" />
    </IconBase>
  );
}

function AVIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8" />
      <path d="m12 17 2 4" />
      <path d="m12 17-2 4" />
      <path d="m10 10 4 2-4 2Z" />
    </IconBase>
  );
}

function VideoWallIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M9 5v14" />
      <path d="M15 5v14" />
      <path d="M3 12h18" />
    </IconBase>
  );
}

export function ServiceIcon({
  name,
  ...props
}: IconProps & { name: ServiceIconName }) {
  switch (name) {
    case "fire":
      return <FireIcon {...props} />;
    case "camera":
      return <CameraIcon {...props} />;
    case "access":
      return <AccessIcon {...props} />;
    case "analytics":
      return <AnalyticsIcon {...props} />;
    case "plate":
      return <PlateIcon {...props} />;
    case "announcement":
      return <AnnouncementIcon {...props} />;
    case "av":
      return <AVIcon {...props} />;
    case "videowall":
      return <VideoWallIcon {...props} />;
    default:
      return <AVIcon {...props} />;
  }
}
