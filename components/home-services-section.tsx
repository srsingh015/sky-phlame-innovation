"use client";

import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-content";

export function HomeServicesSection() {
  return (
    <section className="relative w-full pb-20 pt-16 bg-transparent overflow-hidden sm:pb-32">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-[100rem]">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20 flex flex-col items-center">
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="Core systems designed to protect, monitor, and communicate"
            description="Practical fire, security, surveillance, and AV solutions for factories, offices, institutions, and residential properties."
            align="center"
          />
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mx-auto">
          {services.map((service, index) => (
            <div key={service.slug} className="flex h-full min-h-[420px]">
              <ServiceCard 
                service={service} 
                revealIndex={index}
                enableHoverBg={true} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
