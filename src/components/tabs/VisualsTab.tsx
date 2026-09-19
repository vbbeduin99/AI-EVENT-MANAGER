import React from 'react';
import { VisualCard } from '../../types';

interface VisualsTabProps {
  visuals: VisualCard[];
}

export const VisualsTab: React.FC<VisualsTabProps> = ({ visuals }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-display font-bold text-xl text-[#F5F5F0]">AI Visual Direction & Spatial Staging</h4>
          <p className="text-xs text-[#9B9DA7] mt-0.5">Procedurally conceptualized spatial blueprints and aesthetic anchors.</p>
        </div>
        <span className="text-xs font-mono text-[#D9FF65] bg-[#D9FF65]/10 px-3 py-1 rounded-full border border-[#D9FF65]/30">
          Moodboard Gen v4.1
        </span>
      </div>

      {/* Visual Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visuals.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#15171D]/80 rounded-2xl p-5 border border-white/[0.09] hover:border-[#D9FF65]/35 transition-all group hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5),0_0_20px_-5px_rgba(217,255,101,0.12)]"
          >
            <div className={`h-40 rounded-xl bg-gradient-to-br ${card.bgGradient} border border-white/[0.09] flex flex-col justify-end p-4 relative overflow-hidden mb-4`}>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(${card.dotPatternColor} 1px, transparent 1px)`,
                  backgroundSize: '16px 16px'
                }}
              />
              <div className="relative z-10">
                <span className={`text-[10px] font-mono uppercase bg-[#08090C]/80 px-2 py-0.5 rounded border border-white/10 ${card.badgeColor}`}>
                  {card.zone}
                </span>
                <h5 className="font-bold text-[#F5F5F0] text-base mt-1.5">{card.title}</h5>
              </div>
            </div>
            <p className="text-xs text-[#9B9DA7] leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
