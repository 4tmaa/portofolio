import type { Metadata, Viewport } from "next"; // 1. Tambahkan import Viewport
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"; 
import "./globals.css";

// 1. Font Utama (Teks biasa)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

// 2. Font Judul (Futuristik)
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space" 
});

// 3. Font Coding (Monospace)
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "Diky Mulya Atmaja | IoT & Mobile Developer",
  description: "Portofolio Profesional Diky Mulya Atmaja - Universitas Amikom Yogyakarta",
};

// === KONFIGURASI VIEWPORT (AGAR TAMPILAN DESKTOP DI HP) ===
export const viewport: Viewport = {
  // Memaksa browser merender lebar 1280px (Ukuran Laptop Standar)
  width: 1280, 
  
  // Skala awal 0.3 (Zoom out) agar seluruh lebar 1280px muat di layar HP yang sempit
  // Anda bisa ubah angka ini (misal 0.25 atau 0.4) sesuai selera
  initialScale: 0.3, 
  
  // Mengizinkan user untuk zoom in (cubit layar) jika teks terlalu kecil
  userScalable: true,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#030303] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}