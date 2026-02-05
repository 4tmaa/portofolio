// src/app/projects/[slug]/page.tsx
"use client";

import { useParams, useRouter, notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Calendar, User, Layers, CheckCircle2 } from "lucide-react";
import { projectsData } from "@/data/projects"; // Import data yang tadi dibuat
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Image from "next/image"; // Jangan lupa import ini di paling atas

export default function ProjectDetail() {
  const { slug } = useParams();
  const router = useRouter();

  // 1. Cari data proyek berdasarkan slug URL
  const project = projectsData.find((p) => p.slug === slug);

  // Jika tidak ketemu, lempar ke 404 (atau return null)
  if (!project) return <div className="text-white text-center pt-40">Project not found</div>;

  return (
    <main className="min-h-screen font-sans text-white selection:bg-purple-500/30">
      <Background />
      <Navbar />

      <article className="relative z-10 pt-32 pb-20 px-4 md:px-10 max-w-6xl mx-auto">
        
        {/* === 1. NAVIGATION BACK === */}
        <button 
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors"
        >
            <div className="p-2 rounded-full bg-white/5 border border-white/5 group-hover:border-purple-500/50 transition-colors">
                <ArrowLeft size={16} />
            </div>
            Back to Projects
        </button>

        {/* === 2. HERO HEADER === */}
        <div className="mb-16">
            <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider rounded-full">
                    {project.category}
                </span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-2">
                    <Calendar size={12} /> {project.date}
                </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                {project.title}
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                {project.description}
            </p>
        </div>

        {/* === 3. MAIN CONTENT GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* KOLOM KIRI (Konten Utama) */}
            <div className="lg:col-span-2 space-y-12">
                
                <div className="w-full aspect-video bg-[#0a0a0a] rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl">
                
                    {/* LOGIKA: Cek apakah ada Video? */}
                    {project.video ? (
                        <video 
                            controls 
                            autoPlay 
                            muted 
                            loop 
                            className="w-full h-full object-cover"
                        >
                            <source src={project.video} type="video/mp4" />
                            Browser Anda tidak mendukung tag video.
                        </video>
                    ) : (
                        /* JIKA TIDAK ADA VIDEO, TAMPILKAN GAMBAR */
                        <div className="relative w-full h-full">
                            <Image 
                                src={project.image} 
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            
                            {/* Overlay Gradient Halus biar teks diatasnya terbaca (opsional) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        </div>
                    )}
                </div>

                {/* Problem & Solution (Case Study Format) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-red-500 rounded-full"/> The Challenge
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {project.problem}
                        </p>
                    </div>
                    <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-green-500 rounded-full"/> The Solution
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {project.solution}
                        </p>
                    </div>
                </div>

                {/* Key Features */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                                <CheckCircle2 className="text-purple-400 shrink-0 mt-0.5" size={20} />
                                <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* KOLOM KANAN (Sidebar Info) */}
            <div className="space-y-8">
                
                {/* Project Info Card */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 sticky top-24">
                    <h3 className="font-bold text-white mb-6 border-b border-white/10 pb-4">Project Details</h3>
                    
                    <div className="space-y-6">
                        <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Role</span>
                            <div className="flex items-center gap-2 mt-2 text-gray-200">
                                <User size={16} className="text-purple-400" />
                                {project.role}
                            </div>
                        </div>

                        <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Tech Stack</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-xs text-gray-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 flex flex-col gap-3">
                            {project.github !== "#" && (
                                <a 
                                    href={project.github} 
                                    target="_blank"
                                    className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all"
                                >
                                    <Github size={18} /> View Source Code
                                </a>
                            )}
                            
                            {project.demo !== "#" && (
                                <a 
                                    href={project.demo}
                                    target="_blank"
                                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/20"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </article>
    </main>
  );
}