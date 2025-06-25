"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-start bg-gradient-to-b from-[#0F0903] to-[#1179EC] overflow-hidden">
      {/* Content: Text & Tabs */}
      <div className="relative z-10 flex flex-col h-full w-full max-w-[1920px] mx-auto px-[72px] pt-0">
        <div className="flex flex-row justify-between">
          {/* Left: Text */}
          <div className="flex flex-col justify-center max-w-[700px] pt-[40px]">
            <h1 className="text-white text-[132px] font-medium leading-[1.05] mb-[12px] whitespace-pre-line">
              {`$750M IN\nWORKFORCE\nHOUSING`}
            </h1>
            <p className="text-[#D5D5D5] text-[28px] font-normal mb-[20px] max-w-[600px]">
              Building modern housing for America&apos;s workforce across the Southeast.
            </p>
          </div>
          {/* Spacer for image on large screens */}
          <div className="hidden lg:block w-[900px]" />
        </div>
        {/* Bottom Row: Tabs and Arrow */}
        <div className="w-full pb-0 mt-[310px] flex flex-row items-end justify-between">
          {/* Tabs */}
          <div className="flex flex-row gap-[64px]">
            <div className="flex flex-col items-start">
              <span className="text-white text-[28px] font-medium mb-[8px]">Team</span>
              <div className="h-[4px] rounded-full w-[120px] bg-[#f97316]" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-white text-[28px] font-medium mb-[8px]">Portfolio</span>
              <div className="h-[4px] rounded-full w-[180px] bg-[#f97316]" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-white text-[28px] font-medium mb-[8px]">Map</span>
              <div className="h-[4px] rounded-full w-[220px] bg-[#f97316]" />
            </div>
          </div>
          {/* Down Arrow only */}
          <div className="flex flex-col items-end justify-end h-full">
            <svg width="64" height="64" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10V30M20 30L10 20M20 30L30 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      {/* Hero Image: Large, lower, and off-screen to the right on large screens; normal on mobile/tablet */}
      <div className="absolute lg:static bottom-[-60px] right-[-550px] lg:right-0 w-full flex justify-end z-0 pointer-events-none">
        <Image
          src="/images/transparent-image1.png"
          alt="3D Apartment Complex"
          width={1200}
          height={700}
          className="object-contain drop-shadow-2xl select-none pointer-events-none lg:w-[1200px] w-[90vw] h-auto"
          priority
          style={{ maxWidth: 'none', height: 'auto' }}
        />
      </div>
    </section>
  );
} 