"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";

const navLinks = ["About", "Our Model", "Properties", "Investors", "Contact"];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#0F0903] to-[#1179EC] flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header/Nav */}
      <header className="grid grid-cols-3 px-[72px] pt-[48px] w-full h-[56px] items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
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
      <HeroSection />
      {/* Tabs and CTA Row */}
      <section className="flex flex-row items-center justify-between px-[72px] w-full max-w-[1920px] mx-auto">
        {/* Tabs */}
        <div className="flex -mt-[192px]">
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
        {/* Down Arrow right-aligned, moved up with same margin */}
        <div className="flex flex-col items-end -mt-[192px]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10V30M20 30L10 20M20 30L30 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
    </main>
  );
}
