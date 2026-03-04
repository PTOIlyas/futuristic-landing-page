import Link from "next/link";
import { IconRenderer } from "@/ui/icon";

export const metadata = {
  title: '404 - Страница не найдена',
  description: 'Ошибка 404 - запрашиваемый ресурс перемещен или не существует',
};

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-black overflow-hidden px-6">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center">
        <h1 className="text-[150px] md:text-[220px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 opacity-20">
          404
        </h1>

        <div className="mt-[-40px] md:mt-[-60px]">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Lost in <span className="text-purple-500">Space?</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
            Страница, которую вы ищете, была перемещена в другую галактику или никогда не существовала в нашей системе.
          </p>

          <Link 
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-10 active:scale-95"
          >
            <span className="relative z-10">Вернуться на главную</span>
            <IconRenderer 
              name="Zap" 
              size={18} 
              className="relative z-10 transition-transform group-hover:translate-x-1" 
            />
            
        
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
        <div className="h-px w-40 bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
    </main>
  );
}