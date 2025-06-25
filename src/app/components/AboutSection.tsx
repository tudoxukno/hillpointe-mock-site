"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white min-h-screen" style={{ background: 'white', minHeight: '100vh' }}>
      <div className="flex w-full max-w-[1920px] mx-auto h-full" style={{height: '100%', background: 'white'}}>
        {/* Left Column */}
        <div className="flex flex-col justify-start w-1/2 pl-[72px] pr-12 pt-12 pb-6 bg-white z-10">
          <div style={{ height: '120px' }} />
          <span className="block font-bold uppercase mb-6" style={{ color: '#000', fontWeight: 700, fontSize: '28px' }}>/ WHO WE ARE</span>
          <div style={{ height: '80px' }} />
          <h2 className="text-[#0F0903] text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-2xl">
            Hillpointe is a fully integrated real estate development and investment management firm focused on the development of market rate workforce housing across the Sun Belt.
          </h2>
          <p style={{ color: '#222', fontSize: '20px', wordBreak: 'break-word', maxWidth: '40rem', marginBottom: '1rem', lineHeight: 1.6 }}>
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
            style={{ borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem', height: '100%', width: '100%' }}
          />
        </div>
      </div>
    </section>
  );
} 