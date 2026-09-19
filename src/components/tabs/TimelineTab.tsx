import React from 'react';
import { Clock, Activity } from 'lucide-react';
import { TimelineItem } from '../../types';

interface TimelineTabProps {
  preEventTimeline: TimelineItem[];
  dayFlowTimeline: TimelineItem[];
}

export const TimelineTab: React.FC<TimelineTabProps> = ({
  preEventTimeline,
  dayFlowTimeline
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Two columns: Pre-event vs Event Day */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Pre-Event Schedule */}
        <div className="bg-[#15171D]/60 rounded-2xl p-6 border border-white/[0.09]">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.09]">
            <h4 className="font-bold text-base text-[#F5F5F0] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9FF65]" />
              Pre-Event Milestones
            </h4>
            <span className="text-xs font-mono text-[#D9FF65] bg-[#D9FF65]/10 px-2 py-0.5 rounded">Planning Phase</span>
          </div>

          <div className="space-y-3">
            {preEventTimeline.map((p, idx) => (
              <div key={idx} className="flex items-start gap-4 p-3 rounded-xl bg-[#101217]/60 border border-white/[0.06] hover:border-white/[0.15] transition">
                <span className="text-xs font-mono text-[#D9FF65] font-bold whitespace-nowrap pt-0.5">
                  {p.time}
                </span>
                <div>
                  <h6 className="text-xs font-bold text-[#F5F5F0]">{p.title}</h6>
                  {p.desc && <p className="text-[11px] text-[#9B9DA7] mt-0.5">{p.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Day Flow */}
        <div className="bg-[#15171D]/60 rounded-2xl p-6 border border-white/[0.09]">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.09]">
            <h4 className="font-bold text-base text-[#F5F5F0] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#B8C6FF]" />
              Event-Day Program Flow
            </h4>
            <span className="text-xs font-mono text-[#B8C6FF] bg-[#B8C6FF]/10 px-2 py-0.5 rounded">Zero-Hour Schedule</span>
          </div>

          <div className="space-y-2.5">
            {dayFlowTimeline.map((d, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#101217]/60 border border-white/[0.06] hover:border-white/[0.15] transition">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#B8C6FF] font-semibold">{d.time}</span>
                  <span className="text-xs font-medium text-[#F5F5F0]">{d.title}</span>
                </div>
                {d.tag && (
                  <span className="text-[10px] font-mono uppercase bg-[#1C1F27] px-2 py-0.5 rounded text-[#9B9DA7] border border-white/[0.08]">
                    {d.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
