"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white" style={{ background: 'white' }}>
      <div className="flex w-full max-w-[1920px] mx-auto min-h-[900px]" style={{minHeight: '800px', background: 'white'}}>
        {/* Left Column */}
        <div className="flex flex-col justify-center w-1/2 pl-[72px] pr-12 py-20 bg-white z-10">
          <span className="block text-black text-base font-bold tracking-wide uppercase mb-6">/ WHO WE ARE</span>
          <h2 className="text-[#0F0903] text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 max-w-2xl leading-tight">Hillpointe is a fully integrated real estate development and investment management firm focused on the development of market rate workforce housing across the Sun Belt.</h2>
          <p className="text-[#222] text-base max-w-2xl mb-10 leading-relaxed">
            Hillpointe's principals have decades of collective experience in developing, constructing, financing, and managing multifamily assets. The firm's fully integrated approach and ability to deliver real estate assets at a highly attractive cost basis provide a unique competitive advantage versus other real estate investments.
          </p>
          <span className="block text-black text-base font-bold tracking-wide uppercase mb-4 mt-8">/ OUR PHILOSOPHY</span>
          {/* Philosophy Cards Grid */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-xl">
            {/* Card 1 */}
            <div className="rounded-lg shadow bg-[#2563eb] p-5 min-h-[120px] flex flex-col">
              <span className="text-white text-base font-bold mb-1 uppercase">Vertically Integrated.</span>
              <span className="text-white text-xs">We control every phase of the project pipeline to ensure best-in-class execution.</span>
            </div>
            {/* Card 2 */}
            <div className="rounded-lg shadow bg-[#f97316] p-5 min-h-[120px] flex flex-col">
              <span className="text-white text-base font-bold mb-1 uppercase">Cost Basis Focused.</span>
              <span className="text-white text-xs">We manufacture a "margin of safety" through disciplined acquisition and efficient construction.</span>
            </div>
            {/* Card 3 */}
            <div className="rounded-lg shadow bg-[#111827] p-5 min-h-[120px] flex flex-col">
              <span className="text-white text-base font-bold mb-1 uppercase">Rapid Delivery.</span>
              <span className="text-white text-xs">Our internal pipeline enables faster time-to-market, reducing delays and accelerating lease-up timelines.</span>
            </div>
            {/* Card 4 */}
            <div className="rounded-lg shadow bg-[#6b7280] p-5 min-h-[120px] flex flex-col">
              <span className="text-white text-base font-bold mb-1 uppercase">Southeastern Focus.</span>
              <span className="text-white text-xs">Decades of experience in Sun Belt markets provide us with unmatched local knowledge and access.</span>
            </div>
          </div>
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