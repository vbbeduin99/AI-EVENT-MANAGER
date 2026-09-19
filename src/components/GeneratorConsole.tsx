import React from 'react';
import { Terminal, ChevronDown, MapPin, Sparkle, Sparkles, ArrowRight, Info } from 'lucide-react';
import { EventInputState, EventType } from '../types';

interface GeneratorConsoleProps {
  inputState: EventInputState;
  onChange: (updates: Partial<EventInputState>) => void;
  onSubmit: () => void;
  isGenerating: boolean;
}

export const GeneratorConsole: React.FC<GeneratorConsoleProps> = ({
  inputState,
  onChange,
  onSubmit,
  isGenerating
}) => {
  const eventTypes: EventType[] = [
    "Wedding",
    "Birthday",
    "Corporate Event",
    "Product Launch",
    "Conference",
    "Anniversary",
    "Graduation",
    "Baby Shower",
    "Party",
    "Other"
  ];

  const handlePreset = (prompt: string, type: EventType, guests: number, budget: number, loc: string) => {
    onChange({
      prompt,
      eventType: type,
      guests,
      budget,
      location: loc
    });
  };

  return (
    <section id="generator-section" className="relative pb-24 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Console Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-white/[0.12]">
          
          {/* Top subtle accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9FF65]/60 to-transparent" />
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.09]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#D9FF65]" />
              <span className="text-xs uppercase tracking-widest font-mono text-[#9B9DA7] font-semibold">Event Specification Engine</span>
            </div>
            <div className="text-xs text-[#9B9DA7] flex items-center gap-1.5 font-mono">
              <Terminal className="w-3.5 h-3.5 text-[#D9FF65]" />
              <span>Conversational AI Ready</span>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-6">
            
            {/* Context Parameters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Event Type */}
              <div className="bg-[#15171D]/80 rounded-2xl p-3.5 border border-white/[0.09] hover:border-[#D9FF65]/30 transition-colors">
                <label htmlFor="event-type-select" className="block text-xs font-mono text-[#9B9DA7] uppercase tracking-wider mb-1">Event Type</label>
                <div className="relative">
                  <select
                    id="event-type-select"
                    value={inputState.eventType}
                    onChange={(e) => onChange({ eventType: e.target.value as EventType })}
                    className="w-full bg-transparent text-[#F5F5F0] font-medium text-sm focus:outline-none cursor-pointer appearance-none pr-6"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#15171D] text-[#F5F5F0]">
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#9B9DA7] absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Guest Count */}
              <div className="bg-[#15171D]/80 rounded-2xl p-3.5 border border-white/[0.09] hover:border-[#D9FF65]/30 transition-colors">
                <label htmlFor="guest-count-input" className="block text-xs font-mono text-[#9B9DA7] uppercase tracking-wider mb-1">Guests</label>
                <div className="flex items-center justify-between">
                  <input
                    id="guest-count-input"
                    type="number"
                    value={inputState.guests}
                    min={10}
                    max={10000}
                    step={10}
                    onChange={(e) => onChange({ guests: parseInt(e.target.value) || 10 })}
                    className="w-full bg-transparent text-[#F5F5F0] font-semibold text-sm focus:outline-none"
                  />
                  <span className="text-xs text-[#9B9DA7] font-mono ml-1">Pax</span>
                </div>
              </div>

              {/* Budget (BDT) */}
              <div className="bg-[#15171D]/80 rounded-2xl p-3.5 border border-white/[0.09] hover:border-[#D9FF65]/30 transition-colors">
                <label htmlFor="budget-input" className="block text-xs font-mono text-[#9B9DA7] uppercase tracking-wider mb-1">Budget (BDT)</label>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#D9FF65] mr-1">৳</span>
                  <input
                    id="budget-input"
                    type="number"
                    value={inputState.budget}
                    min={20000}
                    step={25000}
                    onChange={(e) => onChange({ budget: parseInt(e.target.value) || 20000 })}
                    className="w-full bg-transparent text-[#F5F5F0] font-semibold text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="bg-[#15171D]/80 rounded-2xl p-3.5 border border-white/[0.09] hover:border-[#D9FF65]/30 transition-colors">
                <label htmlFor="location-input" className="block text-xs font-mono text-[#9B9DA7] uppercase tracking-wider mb-1">Location</label>
                <div className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-[#B8C6FF] mr-1.5 shrink-0" />
                  <input
                    id="location-input"
                    type="text"
                    value={inputState.location}
                    onChange={(e) => onChange({ location: e.target.value })}
                    className="w-full bg-transparent text-[#F5F5F0] font-medium text-sm focus:outline-none"
                    placeholder="e.g. Dhaka"
                  />
                </div>
              </div>

            </div>

            {/* Natural Language Dream Description Prompt */}
            <div className="bg-[#15171D]/90 rounded-2xl p-5 border border-white/[0.09] focus-within:border-[#D9FF65]/60 focus-within:ring-1 focus-within:ring-[#D9FF65]/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="input-prompt" className="text-xs uppercase font-mono tracking-wider text-[#9B9DA7] font-semibold flex items-center gap-1.5">
                  <Sparkle className="w-3.5 h-3.5 text-[#D9FF65]" />
                  Describe your dream event vision
                </label>
                <span className="text-[11px] text-[#9B9DA7] font-mono">Natural Language Synthesis</span>
              </div>
              <textarea
                id="input-prompt"
                rows={3}
                value={inputState.prompt}
                onChange={(e) => onChange({ prompt: e.target.value })}
                className="w-full bg-transparent text-[#F5F5F0] text-sm sm:text-base leading-relaxed placeholder:text-[#9B9DA7]/50 focus:outline-none resize-none"
                placeholder="A premium celebration with floral installations, warm ambient pendant lighting, live acoustic musicians, and a signature gourmet buffet..."
              />
              
              {/* Prompt Presets / Inspiration Pills */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#9B9DA7] font-mono mr-1">Quick ideas:</span>
                <button
                  type="button"
                  onClick={() => handlePreset(
                    'Cyberpunk minimalist rooftop product launch with neon cyan lasers, tech investor demo booths, and ambient synthwave soundscape.',
                    'Product Launch',
                    250,
                    650000,
                    'Gulshan, Dhaka'
                  )}
                  className="text-[11px] bg-[#1C1F27]/80 hover:bg-[#1C1F27] px-2.5 py-1 rounded-lg text-[#9B9DA7] hover:text-[#F5F5F0] border border-white/[0.09] transition cursor-pointer"
                >
                  🚀 Neon Rooftop Launch
                </button>
                <button
                  type="button"
                  onClick={() => handlePreset(
                    'Luxurious Royal Emerald & Gold banquet with scented jasmine arches, grand classical sitar fusion, and royal Mughal culinary feast.',
                    'Wedding',
                    450,
                    1200000,
                    'Banani, Dhaka'
                  )}
                  className="text-[11px] bg-[#1C1F27]/80 hover:bg-[#1C1F27] px-2.5 py-1 rounded-lg text-[#9B9DA7] hover:text-[#F5F5F0] border border-white/[0.09] transition cursor-pointer"
                >
                  👑 Royal Emerald Wedding
                </button>
                <button
                  type="button"
                  onClick={() => handlePreset(
                    'Cozy retro 90s vinyl listening party with craft espresso bar, polaroid wall, acoustic jam circle, and midnight dessert buffet.',
                    'Birthday',
                    80,
                    180000,
                    'Dhanmondi, Dhaka'
                  )}
                  className="text-[11px] bg-[#1C1F27]/80 hover:bg-[#1C1F27] px-2.5 py-1 rounded-lg text-[#9B9DA7] hover:text-[#F5F5F0] border border-white/[0.09] transition cursor-pointer"
                >
                  🎵 Vinyl Birthday Gathering
                </button>
              </div>
            </div>

            {/* Submit Action & Supporting text */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#9B9DA7] flex items-center gap-1.5 order-2 sm:order-1">
                <Info className="w-3.5 h-3.5 text-[#B8C6FF] shrink-0" />
                <span>No perfect prompt needed. Describe the mood, we synthesize the blueprint.</span>
              </p>

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#D9FF65] text-[#08090C] font-bold text-base hover:bg-[#e7ff8e] active:scale-95 transition-all shadow-[0_0_30px_rgba(217,255,101,0.35)] order-1 sm:order-2 group cursor-pointer disabled:opacity-50"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform text-[#08090C]" />
                <span>{isGenerating ? 'Synthesizing...' : 'Create My Event'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
