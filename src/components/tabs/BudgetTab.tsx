import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { BudgetItem } from '../../types';

interface BudgetTabProps {
  targetBudget: number;
  estimatedCost: number;
  contingencyAmount: number;
  contingencyPercent: number;
  budgetCategories: BudgetItem[];
}

export const BudgetTab: React.FC<BudgetTabProps> = ({
  targetBudget,
  estimatedCost,
  contingencyAmount,
  contingencyPercent,
  budgetCategories
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#15171D]/90 rounded-2xl p-5 border border-white/[0.09]">
          <span className="text-xs font-mono text-[#9B9DA7] uppercase">Total Target Budget</span>
          <div className="text-2xl sm:text-3xl font-bold font-display text-[#F5F5F0] mt-1">
            ৳ {targetBudget.toLocaleString()}
          </div>
          <span className="text-[11px] text-[#9B9DA7]">Defined allocation capacity</span>
        </div>

        <div className="bg-[#15171D]/90 rounded-2xl p-5 border border-[#D9FF65]/30">
          <span className="text-xs font-mono text-[#D9FF65] uppercase">Estimated Total Cost</span>
          <div className="text-2xl sm:text-3xl font-bold font-display text-[#D9FF65] mt-1">
            ৳ {estimatedCost.toLocaleString()}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono mt-0.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Optimized within range</span>
          </div>
        </div>

        <div className="bg-[#15171D]/90 rounded-2xl p-5 border border-white/[0.09]">
          <span className="text-xs font-mono text-[#9B9DA7] uppercase">Contingency Reserve</span>
          <div className="text-2xl sm:text-3xl font-bold font-display text-[#B8C6FF] mt-1">
            ৳ {contingencyAmount.toLocaleString()} ({contingencyPercent}%)
          </div>
          <span className="text-[11px] text-[#9B9DA7]">Emergency safety buffer</span>
        </div>
      </div>

      {/* Visual Proportion Bar */}
      <div className="bg-[#15171D]/50 rounded-2xl p-5 border border-white/[0.09]">
        <div className="flex items-center justify-between text-xs font-mono text-[#9B9DA7] mb-2">
          <span>Dynamic Resource Allocation Map</span>
          <span className="text-[#D9FF65] font-bold">100% Allocated</span>
        </div>
        
        <div className="h-3 w-full rounded-full overflow-hidden flex bg-[#1C1F27]">
          {budgetCategories.map((cat, idx) => (
            <div
              key={idx}
              style={{ width: `${cat.percent}%`, backgroundColor: cat.color }}
              title={`${cat.name}: ৳${cat.amount.toLocaleString()} (${cat.percent}%)`}
              className="h-full transition-all duration-500 hover:brightness-110"
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-3 text-[11px] text-[#9B9DA7]">
          {budgetCategories.map((cat, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
              <span>{cat.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Breakdown Table */}
      <div className="bg-[#15171D]/70 rounded-2xl border border-white/[0.09] overflow-hidden">
        <div className="px-6 py-4 border-b border-white/[0.09] flex items-center justify-between">
          <h4 className="font-bold text-sm text-[#F5F5F0] uppercase tracking-wider font-mono">Category Breakdown (BDT)</h4>
          <span className="text-xs text-[#9B9DA7] font-mono">Real-time Quotation Estimate</span>
        </div>
        
        <div className="divide-y divide-white/[0.06]">
          {budgetCategories.map((cat, idx) => (
            <div
              key={idx}
              className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-[#1C1F27]/40 transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                <div>
                  <span className="text-sm font-semibold text-[#F5F5F0]">{cat.name}</span>
                  <p className="text-xs text-[#9B9DA7]">{cat.desc}</p>
                </div>
              </div>
              <div className="text-right sm:ml-auto shrink-0">
                <div className="text-sm font-mono font-bold text-[#F5F5F0]">৳ {cat.amount.toLocaleString()}</div>
                <span className="text-[11px] font-mono text-[#D9FF65] font-semibold">{cat.percent}% of budget</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
