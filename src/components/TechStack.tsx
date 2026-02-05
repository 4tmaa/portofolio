import { 
  Terminal, Cpu, Globe, Database, 
  Code, Layers, Box, Wifi 
} from "lucide-react";

const TECH_STACK = [
  { name: "Flutter", icon: <SmartphoneIcon />, color: "text-blue-400", bg: "group-hover:bg-blue-400/10", border: "group-hover:border-blue-400/50" },
  { name: "Next.js", icon: <Globe />, color: "text-white", bg: "group-hover:bg-white/10", border: "group-hover:border-white/50" },
  { name: "Python", icon: <Terminal />, color: "text-yellow-400", bg: "group-hover:bg-yellow-400/10", border: "group-hover:border-yellow-400/50" },
  { name: "ESP32", icon: <Cpu />, color: "text-red-500", bg: "group-hover:bg-red-500/10", border: "group-hover:border-red-500/50" },
  { name: "Firebase", icon: <Database />, color: "text-orange-400", bg: "group-hover:bg-orange-400/10", border: "group-hover:border-orange-400/50" },
  { name: "TensorFlow", icon: <Layers />, color: "text-orange-500", bg: "group-hover:bg-orange-500/10", border: "group-hover:border-orange-500/50" },
  { name: "C++", icon: <Code />, color: "text-blue-600", bg: "group-hover:bg-blue-600/10", border: "group-hover:border-blue-600/50" },
  { name: "MQTT", icon: <Wifi />, color: "text-green-400", bg: "group-hover:bg-green-400/10", border: "group-hover:border-green-400/50" },
];

// Helper Icon Sederhana (Bisa diganti SVG logo asli nanti)
function SmartphoneIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>; }

export default function TechStack() {
  return (
    <section id="tech" className="py-10 px-4 md:px-10 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Tech Stack</h2>
        <p className="text-gray-400 text-sm">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {TECH_STACK.map((tech, idx) => (
          <div 
            key={idx} 
            className={`group flex items-center gap-4 p-4 bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${tech.border}`}
          >
            {/* Icon Box */}
            <div className={`p-3 rounded-xl bg-white/5 ${tech.color} ${tech.bg} transition-colors`}>
              {tech.icon}
            </div>
            
            {/* Tech Name */}
            <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}