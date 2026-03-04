import { Review } from "@/types/review";
import { IconRenderer } from "@/ui/icon";

export default function ReviewCard({ author, rating, content }: Review) {
  return (
    <div className="group relative p-8 bg-[#0d0d0f]/80 backdrop-blur-xl border border-white/5 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)]">


      <IconRenderer
        name="Quote" 
        className="absolute top-6 right-8 text-purple-500/20 w-10 h-10 group-hover:text-purple-500/40 transition-colors" 
      />

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-sm ${i < rating ? 'text-purple-400' : 'text-gray-700'}`}
          >
            ★
          </span>
        ))}
      </div>

      <blockquote className="relative z-10">
        <p className="text-gray-300 text-base md:text-lg italic leading-relaxed mb-6 tracking-wide">
          &quot;{content}&quot;
        </p>

        <footer className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xs font-bold text-white uppercase">
            {author.charAt(0)}
          </div>
          <div>
            <cite className="not-italic text-white font-bold block tracking-tight">
              {author}
            </cite>
            <span className="text-purple-500/80 text-xs uppercase tracking-widest font-medium">
              Verified User
            </span>
          </div>
        </footer>
      </blockquote>

      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
    </div>
  );
}