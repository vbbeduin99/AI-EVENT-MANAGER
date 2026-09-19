import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none glass-card px-4 py-3 rounded-2xl border border-[#D9FF65]/40 flex items-center gap-3 shadow-2xl animate-in slide-in-from-bottom-5 fade-in">
      <div className="w-2 h-2 rounded-full bg-[#D9FF65] animate-ping" />
      <span className="text-xs font-medium text-[#F5F5F0]">{message}</span>
    </div>
  );
};
