"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = ["About", "Our Model", "Properties", "Investors", "Contact"];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navigation */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-[#0F0903]/95 backdrop-blur-sm border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="grid grid-cols-3 px-[72px] py-4 w-full h-[56px] items-center">
          {/* Logo left */}
          <div className="flex items-center h-full">
            <span className="text-white text-[34px] font-medium leading-none">Hillpointe</span>
          </div>
          {/* Nav centered */}
          <nav className="flex flex-row items-center justify-center gap-[40px] h-full whitespace-nowrap min-w-0">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-white visited:text-white text-[17px] font-medium transition-colors no-underline hover:no-underline focus:no-underline flex items-center h-full whitespace-nowrap min-w-0"
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
        </div>
      </motion.header>

      {/* Initial Navigation (visible when not scrolled) */}
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
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-white text-[17px] font-medium transition-colors no-underline flex items-center h-full whitespace-nowrap min-w-0"
              style={{ fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
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
    </>
  );
} 