"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-[72px] max-w-[1920px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-[#0F0903] text-6xl font-medium mb-8">About Hillpointe</h2>
        <p className="text-[#666] text-xl max-w-2xl mx-auto">
          Building modern housing for America&apos;s workforce across the Southeast with a focus on quality, affordability, and community.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full max-w-6xl">
        {/* Team Section */}
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-24 bg-[#f97316] rounded-full flex items-center justify-center mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-[#0F0903] text-2xl font-medium mb-4">Our Team</h3>
          <p className="text-[#666] leading-relaxed">
            Experienced professionals dedicated to creating exceptional workforce housing solutions across the Southeast.
          </p>
          <motion.div 
            className="h-1 rounded-full w-24 bg-[#f97316] mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Portfolio Section */}
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-24 bg-[#1179EC] rounded-full flex items-center justify-center mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-[#0F0903] text-2xl font-medium mb-4">Portfolio</h3>
          <p className="text-[#666] leading-relaxed">
            A diverse portfolio of properties designed to meet the housing needs of working families and professionals.
          </p>
          <motion.div 
            className="h-1 rounded-full w-32 bg-[#1179EC] mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-[#f97316] to-[#fbbf24] rounded-full flex items-center justify-center mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-[#0F0903] text-2xl font-medium mb-4">Southeast Focus</h3>
          <p className="text-[#666] leading-relaxed">
            Strategic locations across the Southeast, serving growing communities and workforce housing needs.
          </p>
          <motion.div 
            className="h-1 rounded-full w-48 bg-gradient-to-r from-[#f97316] to-[#fbbf24] mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 192 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        <button className="bg-[#0F0903] text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-[#1179EC] transition-colors duration-300">
          Learn More About Our Mission
        </button>
      </motion.div>
    </div>
  );
} 