"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const ROLES = ["IoT Engineer", "Mobile Dev", "AI Enthusiast", "Full Stack"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // === LOGIC TYPEWRITER (BARU) ===
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % ROLES.length;
      const fullText = ROLES[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Kecepatan mengetik dinamis
      setTypingSpeed(isDeleting ? 50 : 150);

      // Logika pindah kata
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Tahan 2 detik sebelum hapus
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Logic Mouse Follow (Tetap Sama)
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 text-center relative overflow-hidden group"
    >

      {/* === CONTENT === */}
      <div className="relative z-10 flex flex-col items-center">
      
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/50 bg-purple-900/20 text-purple-200 text-xs font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Open for Work
        </motion.div>
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 font-display">
          <span className="block text-white mb-2">Hi, I'm</span>
          <span className="block bg-clip-text text-transparent bg-[linear-gradient(110deg,#9333ea,45%,#ffffff,55%,#9333ea)] bg-[length:250%_100%] animate-shimmer pb-4 filter drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]">
            Diky Mulya Atmaja
          </span>
        </h1>

        {/* === ANIMASI BARU: TYPEWRITER EFFECT === */}
        <div className="h-[60px] md:h-[80px] relative w-full flex justify-center items-center overflow-hidden mb-8">
            <div className="font-mono text-2xl md:text-4xl font-bold text-white flex items-center gap-2 drop-shadow-2xl">
                {/* Syntax Code Style */}
                <span className="text-purple-400 opacity-70">&lt;</span>
                
                {/* Teks yang diketik */}
                <span>{text}</span>
                
                {/* Kursor Berkedip */}
                <span className="w-[3px] h-8 md:h-10 bg-purple-400 animate-pulse ml-1 shadow-[0_0_10px_#a855f7]"></span>
                
                <span className="text-purple-400 opacity-70">/&gt;</span>
            </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 max-w-xl mx-auto mb-10 text-base leading-relaxed font-light">
          Menggabungkan logika <strong className="text-white">Code</strong> dan kekuatan <strong className="text-white">Hardware</strong>. 
          Seorang <strong className="text-white">Tech Enthusiast</strong> yang gemar menghidupkan benda mati menjadi perangkat pintar melalui baris kode dan eksperimen IoT.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#projects" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden">
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:animate-shine skew-x-12" />
            <span className="relative flex items-center gap-2">View Projects <ArrowRight size={18} /></span>
          </a>

          <a
            href="/CV.pdf"
            download="CV_Diky_Mulya_Atmaja.pdf"
            className="px-8 py-4 border border-white/30 rounded-full font-bold hover:bg-white/10 hover:border-white transition-all text-white flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download size={18} /> Download CV
          </a>
        </div>

      </div>
    </section>
  );
}