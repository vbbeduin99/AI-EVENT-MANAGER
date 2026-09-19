import React from 'react';
import { Sparkles } from 'lucide-react';

interface CtaFooterProps {
  onCreateAnother: () => void;
}

export const CtaFooter: React.FC<CtaFooterProps> = ({ onCreateAnother }) => {
  return (
    <>
      {/* FINAL CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#15171D] border border-[#D9FF65]/30 text-[#D9FF65] text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EventAI — From Imagination to Celebration</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#F5F5F0] tracking-tight mb-6">
            Your idea is ready.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9FF65] via-[#F5F5F0] to-[#B8C6FF]">
              Now make it real.
            </span>
          </h2>

          <p className="text-[#9B9DA7] text-base sm:text-lg max-w-xl mx-auto mb-10">
            Step into the future of celebration design. No templates, no generic planners — purely tailored intelligence.
          </p>

          <button
            onClick={onCreateAnother}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#D9FF65] text-[#08090C] font-bold text-base hover:bg-[#e7ff8e] active:scale-95 transition-all shadow-[0_0_35px_rgba(217,255,101,0.4)] cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            <span>Create Another Event</span>
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.09] py-10 bg-[#08090C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9B9DA7]">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-[#F5F5F0] text-sm">EventAI</span>
            <span>© 2026 EventAI Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#D9FF65] font-semibold">From Imagination to Celebration</span>
            <span>•</span>
            <span className="hover:text-[#F5F5F0] transition">Dhaka & Global</span>
          </div>
        </div>
      </footer>
    </>
  );
};
