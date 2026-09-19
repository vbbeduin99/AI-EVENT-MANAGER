import React from 'react';
import { Check } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-16 pb-14 md:pt-24 md:pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#15171D]/90 border border-white/[0.09] text-xs sm:text-sm font-medium text-[#9B9DA7] mb-6 backdrop-blur-md">
          <span className="inline-block w-2 h-2 rounded-full bg-[#D9FF65]" />
          <span className="text-[#F5F5F0] font-semibold">AI-Powered Event Creation</span>
          <span className="text-[#9B9DA7]/60">•</span>
          <span className="text-[#D9FF65] font-mono">Real-time Blueprinting</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-[#F5F5F0] mb-6">
          What are you <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9FF65] via-[#F5F5F0] to-[#B8C6FF] italic">imagining?</span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-base sm:text-xl text-[#9B9DA7] max-w-2xl mx-auto leading-relaxed mb-8">
          Describe your dream event. EventAI turns your wildest idea into a complete experience — creative concept, visual moodboards, budget breakdown, timeline, and an airtight execution plan.
        </p>

        {/* Quick Proof Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9B9DA7]">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#D9FF65]" />
            <span>Instant BDT Budgeting</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#D9FF65]" />
            <span>Interactive Visual Direction</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#D9FF65]" />
            <span>Living Dynamic Refinements</span>
          </div>
        </div>

      </div>
    </section>
  );
};
