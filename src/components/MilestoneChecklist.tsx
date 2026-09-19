import React from 'react';
import { ListChecks, Plus, Check } from 'lucide-react';
import { ChecklistMilestone } from '../types';

interface MilestoneChecklistProps {
  milestones: ChecklistMilestone[];
  onToggleTask: (milestoneId: string, taskId: string) => void;
  onMarkAll: (done: boolean) => void;
  onAddTask?: (milestoneId: string, text: string) => void;
}

export const MilestoneChecklist: React.FC<MilestoneChecklistProps> = ({
  milestones,
  onToggleTask,
  onMarkAll
}) => {
  const allCompleted = milestones.every((col) => col.tasks.every((t) => t.done));

  return (
    <section className="pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase text-[#B8C6FF] mb-1 flex items-center gap-1.5 font-semibold">
              <ListChecks className="w-3.5 h-3.5" />
              <span>Execution Safeguard</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F5F0]">
              Production Milestone Checklist
            </h3>
          </div>

          <button
            onClick={() => onMarkAll(!allCompleted)}
            className="text-xs font-mono text-[#D9FF65] hover:underline cursor-pointer flex items-center gap-1.5 bg-[#15171D] px-3.5 py-1.5 rounded-full border border-white/[0.09]"
          >
            <Check className="w-3.5 h-3.5" />
            <span>{allCompleted ? 'Reset all tasks' : 'Mark all verified'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {milestones.map((col) => {
            const completedCount = col.tasks.filter((t) => t.done).length;
            const totalCount = col.tasks.length;
            const isColumnDone = completedCount === totalCount && totalCount > 0;

            return (
              <div
                key={col.id}
                className="bg-[#15171D]/60 rounded-2xl p-4 border border-white/[0.09] flex flex-col justify-between hover:border-white/[0.18] transition"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#F5F5F0] uppercase pb-2 mb-3 border-b border-white/[0.09] flex items-center justify-between">
                    <span className="truncate mr-2">{col.category}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        isColumnDone
                          ? 'bg-[#D9FF65]/20 text-[#D9FF65] border border-[#D9FF65]/30'
                          : 'text-[#D9FF65]'
                      }`}
                    >
                      {completedCount}/{totalCount}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {col.tasks.map((task) => (
                      <label
                        key={task.id}
                        className="flex items-start gap-2 text-xs text-[#9B9DA7] hover:text-[#F5F5F0] cursor-pointer group select-none"
                      >
                        <input
                          type="checkbox"
                          checked={task.done}
                          onChange={() => onToggleTask(col.id, task.id)}
                          className="mt-0.5 rounded bg-[#1C1F27] border-white/20 text-[#D9FF65] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#D9FF65]"
                        />
                        <span className={`leading-tight transition-colors ${task.done ? 'line-through text-[#9B9DA7]/60' : ''}`}>
                          {task.text}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
