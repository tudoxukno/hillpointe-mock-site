"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white" style={{ background: 'white' }}>
      <div className="flex w-full max-w-[1920px] mx-auto min-h-[900px]" style={{minHeight: '800px', background: 'white'}}>
        {/* Left Column */}
        <div className="flex flex-col justify-center w-1/2 pl-[72px] pr-12 py-20 bg-white z-10">
          <span
            className="block tracking-wide uppercase mb-6"
            style={{ color: '#000', fontWeight: 600, fontSize: '40px' }}
          >
            / WHO WE ARE
          </span>
          <h2 className="text-[#0F0903] text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 max-w-2xl leading-tight">Hillpointe is a fully integrated real estate development and investment management firm focused on the development of market rate workforce housing across the Sun Belt.</h2>
          <p className="text-[#222] text-base max-w-2xl mb-10 leading-relaxed">
            Hillpointe's principals have decades of collective experience in developing, constructing, financing, and managing multifamily assets. The firm's fully integrated approach and ability to deliver real estate assets at a highly attractive cost basis provide a unique competitive advantage versus other real estate investments.
          </p>
        </div>
        {/* Right Column: Image fills right half, edge-to-edge, top-to-bottom */}
        <div className="w-1/2 h-full flex items-stretch">
          <Image
            src="/images/marketing-image1.png"
            alt="Hillpointe Marketing"
            width={1200}
            height={900}
            className="object-cover w-full h-full rounded-none"
            priority
            style={{ borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem' }}
          />
        </div>
      </div>
    </section>
  );
} 