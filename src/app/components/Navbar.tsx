"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/our-model", label: "Our Model" },
  { href: "/properties", label: "Properties" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? "rgba(10,10,10,0.85)" : "rgba(10,10,10,0.0)",
            boxShadow: scrolled ? "0 2px 16px 0 rgba(0,0,0,0.10)" : "none",
          }}
          className="transition-all duration-300 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold tracking-tight">Hillpointe</Link>
            <ul className="hidden md:flex gap-8 text-base font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-orange-500 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
            {/* TODO: Add mobile nav toggle */}
          </div>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  );
} 