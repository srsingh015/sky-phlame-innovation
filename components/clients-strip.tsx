import { ClientLogoCard } from "@/components/client-logo-card";
import { clients } from "@/lib/site-content";

export function ClientsStrip() {
  return (
    <div className="section-grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {clients.map((client) => (
        <ClientLogoCard key={client.name} client={client} compact />
      ))}
    </div>
  );
}
