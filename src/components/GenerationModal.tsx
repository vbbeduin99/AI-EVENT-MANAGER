import React from 'react';
import { Cpu } from 'lucide-react';

interface GenerationModalProps {
  isOpen: boolean;
  statusMessage: string;
  progressPercent: number;
  currentStep: number;
}

export const GenerationModal: React.FC<GenerationModalProps> = ({
  isOpen,
  statusMessage,
  progressPercent,
  currentStep
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#08090C]/90 backdrop-blur-2xl flex items-center justify-center p-4 transition-opacity duration-300">
      <div className="glass-card max-w-md w-full rounded-3xl p-8 text-center relative border border-white/20 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Glowing Orb Animation */}
        <div className="w-20 h-20 mx-auto mb-6 relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#D9FF65]/20 blur-xl animate-pulse" />
          <div className="w-16 h-16 rounded-full border-2 border-[#D9FF65]/30 border-t-[#D9FF65] animate-spin flex items-center justify-center" />
          <Cpu className="w-7 h-7 text-[#D9FF65] absolute" />
        </div>

        <div className="inline-block px-3 py-1 rounded-full bg-[#15171D] text-[#B8C6FF] text-xs font-mono mb-3 border border-white/[0.08]">
          EventAI Neural Pipeline
        </div>

        <h3 className="font-display text-xl font-bold text-[#F5F5F0] mb-4 h-8 flex items-center justify-center transition-all">
          {statusMessage}
        </h3>

        {/* Progress Tracker Line */}
        <div className="w-full bg-[#15171D] rounded-full h-1.5 overflow-hidden mb-5">
          <div
            className="progress-bar-gradient h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-[#9B9DA7] text-left border-t border-white/[0.09] pt-4">
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${currentStep >= 1 ? 'bg-[#D9FF65]' : 'bg-[#1C1F27]'}`} />
            <span className={currentStep >= 1 ? 'text-[#F5F5F0]' : ''}>Concept</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${currentStep >= 2 ? 'bg-[#D9FF65]' : 'bg-[#1C1F27]'}`} />
            <span className={currentStep >= 2 ? 'text-[#F5F5F0]' : ''}>Budgeting</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${currentStep >= 3 ? 'bg-[#D9FF65]' : 'bg-[#1C1F27]'}`} />
            <span className={currentStep >= 3 ? 'text-[#F5F5F0]' : ''}>Execution</span>
          </div>
        </div>

      </div>
    </div>
  );
};
