import type { Metadata } from "next";
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