"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

const navLinks = ["About", "Our Model", "Properties", "Investors", "Contact"];
const tabs = ["Team", "Portfolio", "Map"];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#0F0903] to-[#1179EC] flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header/Nav */}
      <header className="grid grid-cols-3 px-[72px] pt-[48px] w-full h-[56px] items-center max-w-[1440px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Logo left */}
        <div className="flex items-center h-full">
          <span className="text-white text-[34px] font-medium leading-none">Hillpointe</span>
        </div>
        {/* Nav centered */}
        <nav className="flex flex-row items-center justify-center gap-[40px] h-full whitespace-nowrap min-w-0">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white !text-white text-[17px] font-medium hover:text-[#f97316] transition-colors no-underline flex items-center h-full whitespace-nowrap min-w-0"
              style={{ fontFamily: 'Inter, sans-serif', textDecoration: 'none', color: '#fff' }}
            >
              {item}
            </a>
          ))}
        </nav>
        {/* CTA right */}
        <div className="flex items-center justify-end h-full">
          <button className="text-white text-[17px] font-medium border border-white rounded-full px-[32px] py-[10px] hover:bg-white/10 transition-colors bg-transparent">
            Learn More
          </button>
        </div>
      </header>
      {/* Hero Content */}
      <section className="flex flex-row items-center justify-between px-[72px] pt-[32px] w-full flex-1 max-w-[1920px] mx-auto">
        {/* Left: Text */}
        <div className="flex flex-col justify-center max-w-[700px]">
          <h1 className="text-white text-[100px] font-medium leading-[1.05] mb-[32px] whitespace-pre-line">
            {`$750M IN\nWORKFORCE\nHOUSING`}
          </h1>
          <p className="text-[#D5D5D5] text-[28px] font-normal mb-[56px] max-w-[600px]">
            Building modern housing for America's workforce across the Southeast.
          </p>
        </div>
        {/* Right: Image */}
        <div className="relative flex-1 flex justify-end items-center min-w-[500px] max-w-[700px]">
          <Image
            src="/images/transparent-image1.png"
            alt="3D Apartment Complex"
            width={600}
            height={340}
            className="object-contain drop-shadow-2xl select-none pointer-events-none"
            priority
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>
      {/* Tabs and CTA Row */}
      <section className="flex items-center justify-between px-[72px] w-full max-w-[1920px] mx-auto">
        {/* Tabs */}
        <div className="flex -mt-[128px]">
          <div className="flex flex-col items-start mr-[64px]">
            <span className="text-white text-[28px] font-medium mb-[8px]">Team</span>
            <motion.div layout className="h-[4px] rounded-full w-[120px] bg-[#f97316]" />
          </div>
          <div className="flex flex-col items-start mr-[64px]">
            <span className="text-white text-[28px] font-medium mb-[8px]">Portfolio</span>
            <motion.div layout className="h-[4px] rounded-full w-[180px] bg-[#f97316]" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-white text-[28px] font-medium mb-[8px]">Map</span>
            <motion.div layout className="h-[4px] rounded-full w-[520px] bg-gradient-to-r from-[#f97316] to-[#fbbf24]" />
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col items-end">
          {/* Down Arrow only */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10V30M20 30L10 20M20 30L30 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
    </main>
  );
}
