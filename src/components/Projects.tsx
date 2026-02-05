"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Cpu, Smartphone, Globe, Eye, Layers } from "lucide-react";
import { projectsData } from "@/data/projects"; // KITA AMBIL DATA DARI SINI

// Helper: Ikon Default
function DefaultProjectIcon({ type }: { type: string }) {
    if (type.includes("Python") || type.includes("AI")) return <Eye size={40} className="text-emerald-400" />;
    if (type.includes("ESP") || type.includes("Hardware")) return <Cpu size={40} className="text-purple-400" />;
    if (type.includes("Flutter") || type.includes("Mobile")) return <Smartphone size={40} className="text-blue-400" />;
    if (type.includes("Next") || type.includes("Web")) return <Globe size={40} className="text-indigo-400" />;
    return <Layers size={40} className="text-white" />;
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-10 max-w-7xl mx-auto z-10 relative">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2 block">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
                    Featured Projects
                </h2>
                <p className="text-gray-400 mt-2 max-w-lg">
                    Karya terpilih yang menggabungkan hardware, software, dan AI.
                </p>
            </div>
            <a href="https://github.com/4tmaa" target="_blank" className="hidden md:flex items-center gap-2 text-sm font-medium text-white/80 hover:text-purple-400 transition-colors group">
                View GitHub Profile <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </a>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, idx) => (
                <div key={idx} className="group bg-[#0a0a0a] border border-white/5 rounded-[24px] overflow-hidden hover:border-purple-500/30 transition-all duration-300 flex flex-col hover:-translate-y-2">
                    
                    {/* 1. PROJECT THUMBNAIL AREA */}
                    {/* Perhatikan: project.bg sekarang diambil dari data pusat */}
                    <div className={`h-56 bg-gradient-to-br ${project.bg} flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] opacity-20" />
                        
                        {/* ICON BULAT */}
                        <div className="w-24 h-24 rounded-full bg-[#0a0a0a]/40 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl relative z-10 group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-500">
                            {project.logo ? (
                                <div className="relative w-full h-full rounded-full overflow-hidden p-1">
                                    <Image 
                                        src={project.logo} 
                                        alt={project.title} 
                                        fill 
                                        className="object-cover rounded-full" 
                                    />
                                </div>
                            ) : (
                                <DefaultProjectIcon type={project.tech[0]} />
                            )}
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* 2. CONTENT AREA */}
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                            {project.shortDesc} 
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                            {project.tech.map((tag) => (
                                <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/5 rounded-lg group-hover:border-white/10 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                            {/* TOMBOL LINK KE DETAIL */}
                            <Link 
                                href={`/projects/${project.slug}`} 
                                className="flex-1 py-3 px-4 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                            >
                                View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                            
                            {project.github !== "#" ? (
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all" 
                                    aria-label="View Source Code"
                                >
                                    <Github size={20} />
                                </a>
                            ) : (
                                <span className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-600 cursor-not-allowed" title="Private Repository">
                                    <Github size={20} />
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}