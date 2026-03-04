import { Advantage } from "@/types/advantages-card";
import { IconRenderer } from "@/ui/icon";



export default function AdvantageCard({ icon, title, description }: Advantage) {
  return (
    <div className="group relative flex flex-col items-center text-center p-8 bg-[#0d0d0f]/80 backdrop-blur-xl border border-white/5 rounded-3xl transition-all duration-500 hover:border-purple-500/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(168,85,247,0.1)] overflow-hidden">
      
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 blur-[50px] rounded-full group-hover:bg-purple-600/20 transition-colors duration-500" />

      <div className="relative z-10 flex flex-col items-center h-full">
        
        <div className="relative mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
          <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <IconRenderer 
            name={icon} 
            size={40} 
            strokeWidth={1.5}
            className="relative z-10 text-gray-400 group-hover:text-purple-400 transition-colors duration-500"
          />
        </div>
        
        <h3 className="text-white text-2xl font-bold mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all">
          {title}
        </h3>
        
        <p className="text-gray-500 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
          {description}
        </p>


        <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>
      </div>
    </div>
  );
}