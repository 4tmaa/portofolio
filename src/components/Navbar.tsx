"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link"; // Import Link
import { usePathname } from "next/navigation"; // Import usePathname

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname(); // Untuk cek posisi halaman saat ini

  // Cek apakah kita sedang berada di halaman utama
  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Fungsi pembantu untuk menentukan link tujuan
  // Jika di detail, arahkan ke "/#id", jika di home cukup ke "#id"
  const getHref = (id: string) => (isHome ? id : `/${id}`);

  return (
    <motion.div
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-150%", opacity: 0 },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4"
    >
      <nav className="flex items-center gap-6 px-6 py-3 bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-full shadow-lg shadow-black/20">
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          {/* Gunakan Link dari Next.js */}
          <Link href={getHref("#hero")} className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href={getHref("#about")} className="hover:text-white transition-colors">
            About
          </Link>
          <Link href={getHref("#projects")} className="hover:text-white transition-colors">
            Projects
          </Link>
        </div>
        
        <Link 
          href={getHref("#contact")} 
          className="ml-2 px-4 py-1.5 text-xs font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-all"
        >
          Let's Talk
        </Link>
      </nav>
    </motion.div>
  );
}