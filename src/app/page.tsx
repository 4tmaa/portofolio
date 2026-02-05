"use client";

import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"; // <--- Import ini

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-white selection:bg-purple-500/30 relative">
      <Background />
      <Navbar />

      <div className="relative z-10 flex flex-col gap-0">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact /> {/* <--- Letakkan di sini */}
          
          <footer className="py-8 text-center text-gray-600 text-xs border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <p>© 2026 Diky Mulya Atmaja. Built with Next.js & Tailwind.</p>
          </footer>
      </div>
    </main>
  );
}