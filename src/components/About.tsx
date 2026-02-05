import Image from "next/image"; 
import { School, Target, Sparkles, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-10 max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col items-center mb-16">
            <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2">My Profile</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* === KARTU 1: PHOTO PROFILE (Tetap) === */}
            <div className="md:col-span-1 bg-[#0a0a0a] border border-white/10 rounded-[32px] relative overflow-hidden group h-[550px]">
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-600/30 blur-[60px] rounded-full z-0" />
                
                <div className="absolute -bottom-1 left-[111%] -translate-x-1/2 w-[230%] max-w-none z-10 transition-all duration-500 ease-out group-hover:scale-105">
                    <Image 
                        src="/3.png" 
                        alt="Diky Mulya Atmaja"
                        width={400} 
                        height={600}
                        className="object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                        priority
                    />
                </div>

                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-24 z-20 flex flex-col justify-end h-full">
                    <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white leading-tight">Diky Mulya Atmaja</h3>
                        <p className="text-purple-400 font-mono text-sm mt-1">@dkymlyaa_</p>
                        <div className="flex flex-wrap gap-2 mt-3 opacity-90">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs border border-white/10 text-gray-200">
                                🇮🇩 Indonesia
                            </span>
                            <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-md rounded-full text-xs border border-purple-500/30 text-purple-300">
                                IoT Engineer
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* === KARTU 2: PROFESSIONAL SUMMARY (Bio Lengkap) === */}
            {/* Menggantikan Education agar bisa cerita lebih banyak */}
            <div className="md:col-span-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-[32px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-purple-500">
                    <Sparkles size={180} />
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-500/20 rounded-xl text-purple-400"><Briefcase size={24} /></div>
                    <h3 className="font-bold text-xl">The Story</h3>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">
                    Menjahit Hubungan <span className="text-purple-400">Hardware</span> dan <span className="text-blue-400">Software</span>.
                </h4>
                
                <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                    Saya gemar bereksperimen menggabungkan perangkat keras (IoT) dengan kemudahan aplikasi mobile. Fokus saya adalah memastikan sensor fisik (seperti ESP32) bisa 'mengobrol' lancar dengan aplikasi Flutter, menciptakan solusi yang praktis dan responsif.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                        <h5 className="text-white font-bold mb-1 flex items-center gap-2">🎯 Current Focus</h5>
                        <p className="text-xs text-gray-400">Mengembangkan solusi <b>Smart City</b> dan Teknologi Asistif.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                        <h5 className="text-white font-bold mb-1 flex items-center gap-2">🚀 Unique Value</h5>
                        <p className="text-xs text-gray-400">Full-Cycle Development: Dari menyolder sirkuit hingga deploy aplikasi ke Cloud.</p>
                    </div>
                </div>
            </div>

            {/* === KARTU 3: MISSION & EDUCATION (Digabung Sebaris) === */}
            {/* Ubah col-span jadi 3 agar memenuhi baris bawah */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. TARGETS (Updated: 3 Poin) */}
                <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/20 backdrop-blur-xl border border-white/[0.1] rounded-[32px] p-8 flex flex-col justify-center hover:scale-[1.01] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-white/10 rounded-lg text-white"><Target size={20} /></div>
                        <h3 className="font-bold text-lg text-white">Next Targets</h3>
                    </div>
                    
                    <ul className="space-y-4">
                        {/* Target 1: Pendanaan */}
                        <li className="flex gap-4 items-start">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-bold text-purple-400">1</span>
                            <div>
                                <h5 className="font-bold text-white text-sm">National Research Funding</h5>
                                <p className="text-xs text-gray-400 mt-1">Mengejar hibah penelitian tingkat nasional untuk merealisasikan inovasi yang berdampak.</p>
                            </div>
                        </li>
                        
                        {/* Target 2: Hiring Profesional */}
                        <li className="flex gap-4 items-start">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-bold text-blue-400">2</span>
                            <div>
                                <h5 className="font-bold text-white text-sm">Professional Industry Debut</h5>
                                <p className="text-xs text-gray-400 mt-1">Meraih kontrak profesional pertama di luar lingkup kampus untuk validasi skill di industri.</p>
                            </div>
                        </li>

                        {/* Target 3: Ide Baru (Incubation) */}
                        <li className="flex gap-4 items-start">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-400">3</span>
                            <div>
                                <h5 className="font-bold text-white text-sm">IoT Product Incubation</h5>
                                <p className="text-xs text-gray-400 mt-1">Mengeksplorasi dan mematangkan ide-ide proyek IoT segar menjadi solusi nyata.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Education */}
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-[32px] p-8 flex flex-col justify-center hover:border-blue-500/30 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-500/20 rounded-xl text-blue-300"><School size={24} /></div>
                        <h3 className="font-bold text-xl text-white">Education</h3>
                    </div>
                    <h4 className="font-bold text-white text-lg">Universitas Amikom Yogyakarta</h4>
                    <p className="text-blue-400 text-sm mb-4">S1 Teknik Komputer • Semester 5</p>
                    <div className="flex justify-between text-sm border-t border-white/10 pt-4">
                        <span className="text-gray-400"> GPA</span>
                        <span className="text-green-400 font-bold">3.59</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}