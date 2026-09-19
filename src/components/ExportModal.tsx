import React, { useState } from 'react';
import { X, Copy, Download, Printer, Check, Share2, Sparkles } from 'lucide-react';
import { Blueprint } from '../types';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  blueprint: Blueprint;
  onToast: (msg: string) => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  blueprint,
  onToast
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateMarkdownSummary = () => {
    return `# ${blueprint.title}
**Type:** ${blueprint.eventType} | **Location:** ${blueprint.location} | **Guests:** ${blueprint.guests} Pax | **Budget:** ৳ ${blueprint.budget.toLocaleString()}

## Concept & Creative Direction
"${blueprint.tagline}"
${blueprint.description}

- **Creative Direction:** ${blueprint.creativeDirectionTitle} - ${blueprint.creativeDirectionDesc}
- **Theme Palette:** ${blueprint.themePaletteName} (${blueprint.themeColors.map(c => c.label).join(', ')})
- **Narrative Story:** ${blueprint.narrativeStory}

## Budget Breakdown
- **Total Target Budget:** ৳ ${blueprint.targetBudget.toLocaleString()}
- **Estimated Total Cost:** ৳ ${blueprint.estimatedCost.toLocaleString()}
- **Contingency Buffer:** ৳ ${blueprint.contingencyAmount.toLocaleString()} (${blueprint.contingencyPercent}%)

### Line-Items:
${blueprint.budgetCategories.map(b => `- **${b.name}:** ৳ ${b.amount.toLocaleString()} (${b.percent}%) — ${b.desc}`).join('\n')}

## Curated Guest Journey
${blueprint.journey.map(j => `1. **${j.phase} (${j.title}):** ${j.desc}`).join('\n')}

## Timelines
### Pre-Event Milestones
${blueprint.preEventTimeline.map(p => `- **${p.time}:** ${p.title} — ${p.desc}`).join('\n')}

### Event-Day Schedule
${blueprint.dayFlowTimeline.map(d => `- **${d.time}:** ${d.title} [${d.tag || 'Flow'}]`).join('\n')}

---
Generated with EventAI — From Imagination to Celebration`;
  };

  const handleCopyMarkdown = () => {
    const text = generateMarkdownSummary();
    navigator.clipboard.writeText(text);
    setCopied(true);
    onToast('Blueprint copied to clipboard in Markdown format!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(blueprint, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${blueprint.title.replace(/[^a-zA-Z0-9]/g, '_')}_blueprint.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    onToast('Blueprint JSON exported successfully!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#08090C]/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.09]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D9FF65]" />
            <h3 className="font-display font-bold text-xl text-[#F5F5F0]">Export & Share Blueprint</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#15171D] text-[#9B9DA7] hover:text-[#F5F5F0] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Blueprint Overview in modal */}
        <div className="bg-[#101217] rounded-2xl p-4 border border-white/[0.09] mb-6 font-mono text-xs">
          <div className="text-[#D9FF65] font-bold text-sm font-display mb-1">{blueprint.title}</div>
          <div className="text-[#9B9DA7] flex flex-wrap gap-3 mt-1">
            <span>{blueprint.eventType}</span>
            <span>•</span>
            <span>{blueprint.location}</span>
            <span>•</span>
            <span>{blueprint.guests} Pax</span>
            <span>•</span>
            <span className="text-[#D9FF65]">৳ {blueprint.budget.toLocaleString()}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <button
            onClick={handleCopyMarkdown}
            className="p-4 rounded-2xl bg-[#15171D] border border-white/[0.09] hover:border-[#D9FF65]/40 text-left transition group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-[#9B9DA7]">Copy Summary</span>
              {copied ? <Check className="w-4 h-4 text-[#D9FF65]" /> : <Copy className="w-4 h-4 text-[#B8C6FF] group-hover:text-[#D9FF65]" />}
            </div>
            <div className="text-sm font-bold text-[#F5F5F0]">Markdown Text</div>
            <div className="text-[11px] text-[#9B9DA7] mt-0.5">Ready for docs & emails</div>
          </button>

          <button
            onClick={handleDownloadJSON}
            className="p-4 rounded-2xl bg-[#15171D] border border-white/[0.09] hover:border-[#D9FF65]/40 text-left transition group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-[#9B9DA7]">Download Data</span>
              <Download className="w-4 h-4 text-[#B8C6FF] group-hover:text-[#D9FF65]" />
            </div>
            <div className="text-sm font-bold text-[#F5F5F0]">JSON Matrix</div>
            <div className="text-[11px] text-[#9B9DA7] mt-0.5">Full programmatic schema</div>
          </button>

          <button
            onClick={handlePrint}
            className="p-4 rounded-2xl bg-[#15171D] border border-white/[0.09] hover:border-[#D9FF65]/40 text-left transition group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-[#9B9DA7]">Print or PDF</span>
              <Printer className="w-4 h-4 text-[#B8C6FF] group-hover:text-[#D9FF65]" />
            </div>
            <div className="text-sm font-bold text-[#F5F5F0]">Printable Sheet</div>
            <div className="text-[11px] text-[#9B9DA7] mt-0.5">Client & vendor handout</div>
          </button>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#15171D] text-[#F5F5F0] hover:bg-[#1C1F27] text-xs font-semibold cursor-pointer border border-white/10"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
