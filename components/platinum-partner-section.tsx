"use client";

import { PageSection } from "@/components/page-section";
import { Reveal } from "@/components/reveal";
import { IconCircle } from "@/components/icon-circle";
import { CheckIcon, ServiceIcon } from "@/components/icons";

import Image from "next/image";

export function PlatinumPartnerSection() {
  return (
    <PageSection
      spacing="tight"
      ariaLabelledby="platinum-partner-heading"
      containerClassName="relative"
    >
      <Reveal y={30} duration={0.8}>
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/[0.12] bg-[#0c131f] p-6 sm:p-10 lg:p-12 shadow-dark">
          
          {/* Platinum / Silver glowing animated background effects */}
          <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
            <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(226,232,240,0.15),transparent_70%)] blur-3xl mix-blend-screen" />
            <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.1),transparent_70%)] blur-3xl mix-blend-screen" />
            
            {/* Subtle platinum grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
          </div>

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_minmax(auto,28rem)] lg:gap-16">
            
            {/* Left Content Area */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1]/30 bg-[#f8fafc]/10 px-3 py-1.5 backdrop-blur-md">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-[#94a3b8] to-[#f1f5f9] shadow-[0_0_10px_rgba(241,245,249,0.5)]">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="text-[#0f172a]">
                    <path d="M6 1L7.5 4.5L11 5.5L8.5 8.5L9.5 12L6 10L2.5 12L3.5 8.5L1 5.5L4.5 4.5L6 1Z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#f1f5f9]">
                  Authorized Platinum Partner
                </span>
              </div>

              <h2
                id="platinum-partner-heading"
                className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.1]"
              >
                Official astTECS Platinum Partner for Gujarat
              </h2>
              
              <p className="mt-5 text-base leading-relaxed text-[#94a3b8] sm:text-lg">
                SKY PHLAME INNOVATION is proud to be the exclusive Platinum Partner for astTECS IP PA systems and security solutions across the state of Gujarat. 
              </p>
              
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Direct manufacturer access",
                  "Factory-certified installations",
                  "Priority technical support",
                  "Exclusive partner pricing"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#cbd5e1]/10 border border-[#cbd5e1]/20 text-[#e2e8f0]">
                      <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium text-[#cbd5e1]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card / Logo Showcase */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-[#f8fafc]/20 via-[#cbd5e1]/10 to-transparent blur-md" />
              <div className="relative flex min-h-[16rem] flex-col items-center justify-center rounded-[2rem] border border-[#f8fafc]/10 bg-[#060c14]/80 p-8 shadow-2xl backdrop-blur-xl">
                
                {/* astTECS Logo */}
                <div className="flex h-24 w-full max-w-[14rem] items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                  <Image
                    src="/clients/logos/asttecs.png"
                    alt="astTECS Logo"
                    width={180}
                    height={80}
                    className="h-full w-auto object-contain drop-shadow-md brightness-110 contrast-125"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#94a3b8]">
                    IP PA Systems & Security
                  </p>
                  <p className="mt-1.5 text-[0.8rem] text-[#64748b]">
                    Delivering state-of-the-art communication and safety technology to your site.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Reveal>
    </PageSection>
  );
}
