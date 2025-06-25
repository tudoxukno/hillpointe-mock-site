"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-row items-center justify-between px-[72px] pt-[32px] w-full flex-1 max-w-[1920px] mx-auto">
      {/* Left: Text */}
      <div className="flex flex-col justify-center max-w-[700px] -mt-[192px]">
        <h1 className="text-white text-[132px] font-medium leading-[1.05] mb-[32px] whitespace-pre-line">
          {`$750M IN\nWORKFORCE\nHOUSING`}
        </h1>
        <p className="text-[#D5D5D5] text-[28px] font-normal mb-[56px] max-w-[600px]">
          Building modern housing for America&apos;s workforce across the Southeast.
        </p>
      </div>
      {/* Right: Image */}
      <div className="relative flex-1 flex justify-end items-center min-w-[500px] max-w-[700px]">
        <Image
          src="/images/transparent-image1.png"
          alt="3D Apartment Complex"
          width={800}
          height={480}
          className="object-contain drop-shadow-2xl select-none pointer-events-none"
          priority
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
} 