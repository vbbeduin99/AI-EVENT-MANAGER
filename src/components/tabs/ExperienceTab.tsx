import React from 'react';
import { JourneyStep } from '../../types';

interface ExperienceTabProps {
  journey: JourneyStep[];
}

export const ExperienceTab: React.FC<ExperienceTabProps> = ({ journey }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h4 className="font-display font-bold text-xl text-[#F5F5F0]">Curated Guest Journey</h4>
        <p className="text-xs text-[#9B9DA7] mt-0.5">End-to-end emotional choreography from arrival to farewell.</p>
      </div>

      {/* Journey Step Grid */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-white/[0.09] space-y-8 my-6 ml-2">
        {journey.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Glowing timeline dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#101217] border-2 border-[#D9FF65] group-hover:scale-125 transition-transform group-hover:shadow-[0_0_10px_#D9FF65]" />
            
            <div className="bg-[#15171D]/60 rounded-2xl p-5 border border-white/[0.09] hover:border-[#D9FF65]/30 transition group-hover:bg-[#15171D]/80">
              <span className="text-[10px] font-mono text-[#D9FF65] uppercase font-bold tracking-wider">
                {item.phase}
              </span>
              <h5 className="text-base font-bold text-[#F5F5F0] mt-0.5">{item.title}</h5>
              <p className="text-xs text-[#9B9DA7] mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
