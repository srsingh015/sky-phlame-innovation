"use client";

import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-content";

export function HomeServicesSection() {
  return (
    <section className="relative w-full pb-12 pt-10 bg-transparent overflow-hidden sm:pb-24 sm:pt-14">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-[100rem]">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-16 flex flex-col items-center">
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="Core systems designed to protect, monitor, and communicate"
            description="Practical fire, security, surveillance, and AV solutions for factories, offices, institutions, and residential properties."
            align="center"
          />
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mx-auto auto-rows-fr">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.slug}
              service={service} 
              revealIndex={index}
              enableHoverBg={true} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
