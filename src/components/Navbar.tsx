"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  // 1. State untuk menyimpan status apakah navbar harus sembunyi atau tidak
  const [isHidden, setIsHidden] = useState(false);
  
  // 2. Hook untuk mengambil nilai scroll posisi Y saat ini
  const { scrollY } = useScroll();

  // 3. Event Listener khusus Framer Motion untuk memantau perubahan scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Logika:
    // Jika scroll terbaru lebih besar dari sebelumnya (berarti sedang turun)
    // DAN sudah scroll lebih dari 150px dari atas (biar gak sensitif banget di awal)
    if (latest > previous && latest > 150) {
      setIsHidden(true); // Sembunyikan
    } else {
      setIsHidden(false); // Munculkan (saat naik atau di paling atas)
    }
  });

  return (
    <motion.div
      // Animasi pergerakan Y (Vertikal)
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-150%", opacity: 0 }, // Geser ke atas sampai hilang
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }} // Durasi animasi mulus
      
      // Class tetap di tengah (justify-center)
      className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4"
    >
      <nav className="flex items-center gap-6 px-6 py-3 bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-full shadow-lg shadow-black/20">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
              <a href="#hero" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          </div>
          <a href="#contact" className="ml-2 px-4 py-1.5 text-xs font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-all">
              Let's Talk
          </a>
      </nav>
    </motion.div>
  );
}