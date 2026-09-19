import React from 'react';
import { Compass, BookOpen } from 'lucide-react';
import { Blueprint } from '../../types';

interface ConceptTabProps {
  blueprint: Blueprint;
}

export const ConceptTab: React.FC<ConceptTabProps> = ({ blueprint }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-6">
          {/* Core Event Concept */}
          <div className="bg-[#15171D]/60 rounded-2xl p-6 border border-white/[0.09]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D9FF65] mb-2 font-semibold">
              <Compass className="w-4 h-4" />
              <span>Core Event Concept</span>
            </div>
            <h4 className="font-display font-bold text-xl text-[#F5F5F0] mb-3">
              "{blueprint.tagline}"
            </h4>
            <p className="text-[#9B9DA7] leading-relaxed text-sm sm:text-base">
              {blueprint.description}
            </p>
          </div>

          {/* Creative Direction & Theme Palette */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#15171D]/40 rounded-2xl p-5 border border-white/[0.09]">
              <div className="text-xs font-mono text-[#B8C6FF] uppercase mb-1 font-semibold">Creative Direction</div>
              <h5 className="text-sm font-semibold text-[#F5F5F0] mb-2">{blueprint.creativeDirectionTitle}</h5>
              <p className="text-xs text-[#9B9DA7] leading-normal">
                {blueprint.creativeDirectionDesc}
              </p>
            </div>

            <div className="bg-[#15171D]/40 rounded-2xl p-5 border border-white/[0.09]">
              <div className="text-xs font-mono text-[#D9FF65] uppercase mb-1 font-semibold">Theme Palette</div>
              <h5 className="text-sm font-semibold text-[#F5F5F0] mb-2">{blueprint.themePaletteName}</h5>
              <div className="flex items-center gap-2 mt-2">
                {blueprint.themeColors.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-6 h-6 rounded-full border border-white/20 shadow-sm transition-transform hover:scale-110"
                    style={{ backgroundColor: item.color }}
                    title={`${item.label} (${item.color})`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Story Sidebar */}
        <div className="bg-[#15171D]/80 rounded-2xl p-6 border border-white/[0.09] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B8C6FF] mb-3 font-semibold">
              <BookOpen className="w-4 h-4" />
              <span>Narrative Story</span>
            </div>
            <h5 className="text-base font-bold text-[#F5F5F0] mb-2">{blueprint.narrativeTitle}</h5>
            <p className="text-xs text-[#9B9DA7] leading-relaxed">
              {blueprint.narrativeStory}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.09] text-xs text-[#9B9DA7]">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span>Atmospheric Rating:</span>
              <span className="text-[#D9FF65] font-bold">{blueprint.atmosphericRating}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
