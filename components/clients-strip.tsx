import { ClientLogoCard } from "@/components/client-logo-card";
import { clients } from "@/lib/site-content";

export function ClientsStrip() {
  // Duplicate the clients array to create a seamless loop
  const marqueeItems = [...clients, ...clients];

  return (
    <div className="relative flex overflow-hidden hover-pause [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex min-w-full shrink-0 animate-marquee items-stretch gap-4 pr-4">
        {clients.map((client, index) => (
          <div key={`${client.name}-${index}`} className="w-[280px] shrink-0">
            <ClientLogoCard client={client} compact />
          </div>
        ))}
      </div>
      <div className="flex min-w-full shrink-0 animate-marquee items-stretch gap-4 pr-4" aria-hidden="true">
        {clients.map((client, index) => (
          <div key={`${client.name}-duplicate-${index}`} className="w-[280px] shrink-0">
            <ClientLogoCard client={client} compact />
          </div>
        ))}
      </div>
    </div>
  );
}
