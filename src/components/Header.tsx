import React from 'react';
import { Sparkles, Wand2, Layers, Cpu, ArrowRight, Share2, Printer } from 'lucide-react';

interface HeaderProps {
  onStartCreating: () => void;
  onOpenExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartCreating, onOpenExport }) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#08090C]/80 border-b border-white/[0.09] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D9FF65]/20 to-[#B8C6FF]/10 border border-[#D9FF65]/40 flex items-center justify-center text-[#D9FF65] shadow-[0_0_15px_rgba(217,255,101,0.25)] group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex items-baseline">
            <span className="font-display font-bold text-2xl tracking-tight text-[#F5F5F0]">Event</span>
            <span className="font-display font-extrabold text-2xl tracking-tight text-[#D9FF65] ml-0.5">AI</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9B9DA7]">
          <a href="#generator-section" className="hover:text-[#D9FF65] transition-colors flex items-center gap-1.5">
            <Wand2 className="w-4 h-4" /> Create
          </a>
          <a href="#blueprint-section" className="hover:text-[#D9FF65] transition-colors flex items-center gap-1.5">
            <Layers className="w-4 h-4" /> Blueprint
          </a>
          <a href="#how-it-works" className="hover:text-[#D9FF65] transition-colors flex items-center gap-1.5">
            <Cpu className="w-4 h-4" /> How it Works
          </a>
        </nav>

        {/* Nav CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenExport}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#15171D] border border-white/[0.09] text-[#B8C6FF] hover:border-[#D9FF65]/40 transition-colors"
            title="Export or Print Blueprint"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share & Export</span>
          </button>

          <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#15171D] border border-white/[0.09] text-[#B8C6FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9FF65] animate-ping" />
            <span>v2.5 Neural Engine</span>
          </div>
          
          <button
            onClick={onStartCreating}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D9FF65] text-[#08090C] font-semibold text-sm hover:bg-[#e4ff88] active:scale-95 transition-all shadow-[0_0_20px_rgba(217,255,101,0.3)] cursor-pointer"
          >
            <span>Start Creating</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
