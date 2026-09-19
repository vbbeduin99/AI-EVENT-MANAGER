import React, { useState } from 'react';
import {
  FileCheck,
  Lightbulb,
  Palette,
  PieChart,
  Navigation,
  Calendar,
  CheckSquare,
  Sparkles,
  Send
} from 'lucide-react';
import { Blueprint } from '../types';
import { ConceptTab } from './tabs/ConceptTab';
import { VisualsTab } from './tabs/VisualsTab';
import { BudgetTab } from './tabs/BudgetTab';
import { ExperienceTab } from './tabs/ExperienceTab';
import { TimelineTab } from './tabs/TimelineTab';
import { RequirementsTab } from './tabs/RequirementsTab';

interface BlueprintSectionProps {
  blueprint: Blueprint;
  onApplyRefinement: (action: string) => void;
}

export const BlueprintSection: React.FC<BlueprintSectionProps> = ({
  blueprint,
  onApplyRefinement
}) => {
  const [activeTab, setActiveTab] = useState<'concept' | 'visuals' | 'budget' | 'experience' | 'timeline' | 'requirements'>('concept');
  const [customRefinement, setCustomRefinement] = useState('');

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customRefinement.trim()) return;
    onApplyRefinement(customRefinement);
    setCustomRefinement('');
  };

  return (
    <section id="blueprint-section" className="relative pb-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15171D] border border-white/[0.09] text-xs font-mono text-[#D9FF65] mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            <span>LIVING ARCHITECTURE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight mb-3">
            Your Event, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9FF65] to-[#B8C6FF]">Built.</span>
          </h2>
          <p className="text-[#9B9DA7] text-sm sm:text-base">
            One living blueprint that evolves in real-time as your idea matures. Click AI prompts below to modify parameters instantly.
          </p>
        </div>

        {/* Master Blueprint Container */}
        <div className="glass-card rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl">
          
          {/* Blueprint Meta Bar (Dynamic Header) */}
          <div className="p-6 sm:p-8 bg-[#15171D]/70 border-b border-white/[0.09] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#D9FF65] font-bold bg-[#D9FF65]/10 px-2.5 py-0.5 rounded-full border border-[#D9FF65]/20">
                  AI EVENT BLUEPRINT
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Concept Ready
                </span>
                <span className="text-[11px] font-mono text-[#9B9DA7]">Updated {blueprint.timestamp}</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F5F0] tracking-tight">
                {blueprint.title}
              </h3>
            </div>

            {/* Meta Quick Stats */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
              <div className="bg-[#101217]/80 px-3.5 py-2 rounded-xl border border-white/[0.09]">
                <span className="text-[#9B9DA7] block text-[10px] uppercase">Type</span>
                <span className="text-[#F5F5F0] font-semibold">{blueprint.eventType}</span>
              </div>
              <div className="bg-[#101217]/80 px-3.5 py-2 rounded-xl border border-white/[0.09]">
                <span className="text-[#9B9DA7] block text-[10px] uppercase">Location</span>
                <span className="text-[#B8C6FF] font-semibold">{blueprint.location}</span>
              </div>
              <div className="bg-[#101217]/80 px-3.5 py-2 rounded-xl border border-white/[0.09]">
                <span className="text-[#9B9DA7] block text-[10px] uppercase">Guests</span>
                <span className="text-[#F5F5F0] font-semibold">{blueprint.guests} Pax</span>
              </div>
              <div className="bg-[#101217]/80 px-3.5 py-2 rounded-xl border border-[#D9FF65]/30">
                <span className="text-[#9B9DA7] block text-[10px] uppercase">Est. Budget</span>
                <span className="text-[#D9FF65] font-bold">৳ {blueprint.budget.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-white/[0.09] bg-[#101217]/50 px-4 sm:px-8 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('concept')}
              className={`py-4 px-4 text-sm font-medium flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                activeTab === 'concept'
                  ? 'text-[#D9FF65] border-[#D9FF65]'
                  : 'text-[#9B9DA7] hover:text-[#F5F5F0] border-transparent'
              }`}
            >
              <Lightbulb className="w-4 h-4" /> Concept
            </button>
            <button
              onClick={() => setActiveTab('visuals')}
              className={`py-4 px-4 text-sm font-medium flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                activeTab === 'visuals'
                  ? 'text-[#D9FF65] border-[#D9FF65]'
                  : 'text-[#9B9DA7] hover:text-[#F5F5F0] border-transparent'
              }`}
            >
              <Palette className="w-4 h-4" /> Visuals & Mood
            </button>
            <button
              onClick={() => setActiveTab('budget')}
              className={`py-4 px-4 text-sm font-medium flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                activeTab === 'budget'
                  ? 'text-[#D9FF65] border-[#D9FF65]'
                  : 'text-[#9B9DA7] hover:text-[#F5F5F0] border-transparent'
              }`}
            >
              <PieChart className="w-4 h-4" /> Budget Engine
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`py-4 px-4 text-sm font-medium flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                activeTab === 'experience'
                  ? 'text-[#D9FF65] border-[#D9FF65]'
                  : 'text-[#9B9DA7] hover:text-[#F5F5F0] border-transparent'
              }`}
            >
              <Navigation className="w-4 h-4" /> Guest Journey
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`py-4 px-4 text-sm font-medium flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                activeTab === 'timeline'
                  ? 'text-[#D9FF65] border-[#D9FF65]'
                  : 'text-[#9B9DA7] hover:text-[#F5F5F0] border-transparent'
              }`}
            >
              <Calendar className="w-4 h-4" /> Timeline
            </button>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`py-4 px-4 text-sm font-medium flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                activeTab === 'requirements'
                  ? 'text-[#D9FF65] border-[#D9FF65]'
                  : 'text-[#9B9DA7] hover:text-[#F5F5F0] border-transparent'
              }`}
            >
              <CheckSquare className="w-4 h-4" /> Requirements
            </button>
          </div>

          {/* Tab Content Area */}
          <div className="p-6 sm:p-10 min-h-[420px]">
            {activeTab === 'concept' && <ConceptTab blueprint={blueprint} />}
            {activeTab === 'visuals' && <VisualsTab visuals={blueprint.visuals} />}
            {activeTab === 'budget' && (
              <BudgetTab
                targetBudget={blueprint.targetBudget}
                estimatedCost={blueprint.estimatedCost}
                contingencyAmount={blueprint.contingencyAmount}
                contingencyPercent={blueprint.contingencyPercent}
                budgetCategories={blueprint.budgetCategories}
              />
            )}
            {activeTab === 'experience' && <ExperienceTab journey={blueprint.journey} />}
            {activeTab === 'timeline' && (
              <TimelineTab
                preEventTimeline={blueprint.preEventTimeline}
                dayFlowTimeline={blueprint.dayFlowTimeline}
              />
            )}
            {activeTab === 'requirements' && (
              <RequirementsTab requirements={blueprint.requirements} />
            )}
          </div>

          {/* AI BLUEPRINT REFINEMENT CONSOLE (Dynamic Action Bar) */}
          <div className="p-6 sm:p-8 bg-[#15171D] border-t border-white/[0.09]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D9FF65]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Live Neural Refinement</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#F5F5F0]">What would you like to change?</h4>
                <p className="text-xs text-[#9B9DA7]">Let the AI evolve this blueprint instead of starting over from scratch.</p>
              </div>
              <div className="text-xs font-mono text-[#9B9DA7]">
                Instant Parametric Mutation
              </div>
            </div>

            {/* Quick Action Chips */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <button
                onClick={() => onApplyRefinement('Make it more luxurious')}
                className="px-3.5 py-2 rounded-xl bg-[#1C1F27]/80 border border-white/[0.09] text-xs text-[#9B9DA7] hover:text-[#F5F5F0] hover:border-[#D9FF65] hover:bg-[#D9FF65]/10 flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>💎</span> <span>Make it more luxurious</span>
              </button>
              <button
                onClick={() => onApplyRefinement('Reduce the budget')}
                className="px-3.5 py-2 rounded-xl bg-[#1C1F27]/80 border border-white/[0.09] text-xs text-[#9B9DA7] hover:text-[#F5F5F0] hover:border-[#D9FF65] hover:bg-[#D9FF65]/10 flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>📉</span> <span>Reduce the budget</span>
              </button>
              <button
                onClick={() => onApplyRefinement('Make it more intimate')}
                className="px-3.5 py-2 rounded-xl bg-[#1C1F27]/80 border border-white/[0.09] text-xs text-[#9B9DA7] hover:text-[#F5F5F0] hover:border-[#D9FF65] hover:bg-[#D9FF65]/10 flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>🕯️</span> <span>Make it more intimate</span>
              </button>
              <button
                onClick={() => onApplyRefinement('Add 100 guests')}
                className="px-3.5 py-2 rounded-xl bg-[#1C1F27]/80 border border-white/[0.09] text-xs text-[#9B9DA7] hover:text-[#F5F5F0] hover:border-[#D9FF65] hover:bg-[#D9FF65]/10 flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>👥</span> <span>Add 100 guests</span>
              </button>
              <button
                onClick={() => onApplyRefinement('Make it more modern')}
                className="px-3.5 py-2 rounded-xl bg-[#1C1F27]/80 border border-white/[0.09] text-xs text-[#9B9DA7] hover:text-[#F5F5F0] hover:border-[#D9FF65] hover:bg-[#D9FF65]/10 flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>⚡</span> <span>Make it more modern</span>
              </button>
              <button
                onClick={() => onApplyRefinement('Change the theme')}
                className="px-3.5 py-2 rounded-xl bg-[#1C1F27]/80 border border-white/[0.09] text-xs text-[#9B9DA7] hover:text-[#F5F5F0] hover:border-[#D9FF65] hover:bg-[#D9FF65]/10 flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>🎭</span> <span>Change the theme</span>
              </button>
              <button
                onClick={() => onApplyRefinement('Make it corporate')}
                className="px-3.5 py-2 rounded-xl bg-[#1C1F27]/80 border border-white/[0.09] text-xs text-[#9B9DA7] hover:text-[#F5F5F0] hover:border-[#D9FF65] hover:bg-[#D9FF65]/10 flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>💼</span> <span>Make it corporate</span>
              </button>
              <button
                onClick={() => onApplyRefinement('Make it more traditional')}
                className="px-3.5 py-2 rounded-xl bg-[#1C1F27]/80 border border-white/[0.09] text-xs text-[#9B9DA7] hover:text-[#F5F5F0] hover:border-[#D9FF65] hover:bg-[#D9FF65]/10 flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>🏺</span> <span>Make it more traditional</span>
              </button>
            </div>

            {/* Custom refinement input */}
            <form onSubmit={handleCustomSubmit} className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2">
              <input
                type="text"
                value={customRefinement}
                onChange={(e) => setCustomRefinement(e.target.value)}
                placeholder="Or type a custom modification (e.g. 'Shift dinner to an outdoor terrace with fairy lights')..."
                className="flex-1 bg-[#101217] border border-white/[0.09] rounded-xl px-4 py-2.5 text-xs text-[#F5F5F0] placeholder:text-[#9B9DA7]/60 focus:outline-none focus:border-[#D9FF65]/50"
              />
              <button
                type="submit"
                disabled={!customRefinement.trim()}
                className="px-4 py-2.5 rounded-xl bg-[#D9FF65] text-[#08090C] font-semibold text-xs flex items-center gap-1.5 hover:bg-[#e4ff88] transition cursor-pointer disabled:opacity-40"
              >
                <span>Mutate</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
