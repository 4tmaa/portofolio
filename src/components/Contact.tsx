"use client"; // Wajib ada karena kita pakai useState

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

export default function Contact() {
  // 1. State untuk menyimpan apa yang diketik user
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // 2. Fungsi saat user mengetik
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. FUNGSI UTAMA: Kirim ke WhatsApp
  const handleSendMessage = (e: any) => {
    e.preventDefault(); // Mencegah reload halaman
    
    // Validasi sederhana
    if (!formData.name || !formData.message) {
      alert("Mohon isi Nama dan Pesan terlebih dahulu, Baginda.");
      return;
    }

    // Format Pesan WhatsApp
    const phoneNumber = "6288980029156"; // GANTI DENGAN NOMOR WA ASLI ANDA (Format: 628...)
    const text = `Halo Diky, perkenalkan saya ${formData.name} (${formData.email})%0A%0A%0A${formData.message}`;
    
    // Buka WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-10 max-w-7xl mx-auto z-10 relative">
      
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-mono tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"/> Let's Connect
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Get In Touch
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg">
          Punya ide proyek atau ingin berkolaborasi? Mari buat sesuatu yang luar biasa bersama.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* === KOLOM KIRI (Info) === */}
        <div className="space-y-6">
            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-1">Email</h4>
                        <p className="text-gray-400 text-sm font-mono">dikymulyaatmaja@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-1">Phone / WhatsApp</h4>
                        <p className="text-gray-400 text-sm font-mono">+62 889 8002 9156</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-1">Location</h4>
                        <p className="text-gray-400 text-sm">Yogyakarta, Indonesia</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="text-yellow-400" size={20} />
                    <h4 className="text-white font-bold">Available for</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-bold border border-blue-500/20">Freelance</span>
                    <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg text-xs font-bold border border-purple-500/20">Full-time</span>
                </div>
            </div>
        </div>

        {/* === KOLOM KANAN (Form Aktif) === */}
        <div className="lg:col-span-2 bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <form onSubmit={handleSendMessage} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                        <input 
                            name="name" // Penting untuk state
                            value={formData.name}
                            onChange={handleChange}
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-all"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                        <input 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6} 
                        placeholder="Ceritakan detail proyek Anda..." 
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 transition-all resize-none"
                        required
                    />
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group">
                    Send to WhatsApp <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </div>

      </div>
    </section>
  );
}