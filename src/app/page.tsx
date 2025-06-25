"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#0F0903] to-[#1179EC] flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Fixed Navigation - always at the top */}
      <Navigation />
      
      {/* Hero Section with top padding for header */}
      <section id="hero" className="relative w-full min-h-screen flex items-center pt-[72px]">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full min-h-screen bg-white">
        <AboutSection />
      </section>

      {/* Properties Section - Placeholder for future development */}
      <section id="properties" className="relative w-full min-h-screen bg-[#0F0903]">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-white text-6xl font-medium mb-8">Properties</h2>
            <p className="text-[#D5D5D5] text-xl">Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Investors Section - Placeholder for future development */}
      <section id="investors" className="relative w-full min-h-screen bg-[#1179EC]">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-white text-6xl font-medium mb-8">Investors</h2>
            <p className="text-[#D5D5D5] text-xl">Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Contact Section - Placeholder for future development */}
      <section id="contact" className="relative w-full min-h-screen bg-[#0F0903]">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-white text-6xl font-medium mb-8">Contact</h2>
            <p className="text-[#D5D5D5] text-xl">Coming soon...</p>
          </div>
        </div>
      </section>
    </main>
  );
}
