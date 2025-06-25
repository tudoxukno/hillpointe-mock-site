import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Hillpointe Mock Site",
  description: "Modern workforce housing site for Hillpointe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-gradient-to-b from-[#0a0a0a] to-blue-700 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
