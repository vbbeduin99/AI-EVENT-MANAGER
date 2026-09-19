import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 border-t border-white/[0.09] bg-[#101217]/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D9FF65] font-semibold">Next-Gen Architecture</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F0] mt-2">
            You imagine it. AI builds it.
          </h2>
          <p className="text-[#9B9DA7] text-sm mt-3">
            EventAI replaces chaotic spreadsheets and disjointed moodboards with a coherent, real-time creative operating system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card rounded-2xl p-8 border border-white/[0.09] relative hover:border-[#D9FF65]/30 transition group">
            <div className="w-12 h-12 rounded-xl bg-[#D9FF65]/10 border border-[#D9FF65]/30 flex items-center justify-center text-[#D9FF65] mb-6 font-display font-bold text-lg group-hover:scale-105 transition-transform">
              01
            </div>
            <h4 className="font-bold text-lg text-[#F5F5F0] mb-2">Natural Intent Synthesis</h4>
            <p className="text-xs text-[#9B9DA7] leading-relaxed">
              Simply explain your vibe or specific traditions. Our language models parse budget parameters, guest densities, and spatial aesthetics automatically.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/[0.09] relative hover:border-[#B8C6FF]/30 transition group">
            <div className="w-12 h-12 rounded-xl bg-[#B8C6FF]/10 border border-[#B8C6FF]/30 flex items-center justify-center text-[#B8C6FF] mb-6 font-display font-bold text-lg group-hover:scale-105 transition-transform">
              02
            </div>
            <h4 className="font-bold text-lg text-[#F5F5F0] mb-2">Living Blueprint Matrix</h4>
            <p className="text-xs text-[#9B9DA7] leading-relaxed">
              Generates a unified 6-dimensional plan: spatial staging, exact BDT line-item financial algorithms, minute-by-minute timeline, and vendor briefs.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/[0.09] relative hover:border-emerald-400/30 transition group">
            <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-6 font-display font-bold text-lg group-hover:scale-105 transition-transform">
              03
            </div>
            <h4 className="font-bold text-lg text-[#F5F5F0] mb-2">Dynamic Mutation</h4>
            <p className="text-xs text-[#9B9DA7] leading-relaxed">
              Want 100 extra guests or a more traditional ceremonial flair? Click refinement chips or adjust budget sliders to recompute the entire event instantly.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
