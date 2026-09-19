import React from 'react';
import { Home, Utensils, Flower2, Video, Volume2, ShieldAlert } from 'lucide-react';
import { RequirementCategory } from '../../types';

interface RequirementsTabProps {
  requirements: RequirementCategory[];
}

export const RequirementsTab: React.FC<RequirementsTabProps> = ({ requirements }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-4 h-4" />;
      case 'utensils':
        return <Utensils className="w-4 h-4" />;
      case 'flower':
        return <Flower2 className="w-4 h-4" />;
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'volume':
        return <Volume2 className="w-4 h-4" />;
      case 'shield':
      default:
        return <ShieldAlert className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <h4 className="font-display font-bold text-xl text-[#F5F5F0]">Production & Vendor Requirements</h4>
        <p className="text-xs text-[#9B9DA7] mt-0.5">Technical specifications, vendor briefs, and venue readiness parameters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requirements.map((req, idx) => (
          <div
            key={idx}
            className="bg-[#15171D]/60 rounded-2xl p-5 border border-white/[0.09] flex flex-col justify-between hover:border-[#D9FF65]/30 transition"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D9FF65] mb-3 font-semibold">
                {getIcon(req.icon)}
                <span>{req.title}</span>
              </div>
              <ul className="space-y-2 text-xs text-[#9B9DA7]">
                {req.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <span className="text-[#D9FF65] mt-0.5 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
