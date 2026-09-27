import React from 'react';
import { cn } from '../../lib/utils';

export function ProgressBar({ value, max = 100, color = "indigo", showLabel = false, height = "h-2", className }) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  const colorVariants = {
    indigo: "bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]",
    cyan: "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]",
    emerald: "bg-gradient-to-r from-emerald-400 to-teal-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]",
    amber: "bg-gradient-to-r from-amber-400 to-orange-500",
    rose: "bg-gradient-to-r from-rose-500 to-red-500",
  };

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-400 font-medium">Progress</span>
          <span className="text-white font-mono font-bold">{Math.round(percent)}%</span>
        </div>
      )}
      <div className={cn("w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/50", height)}>
        <div
          className={cn("h-full rounded-full transition-all duration-500 ease-out", colorVariants[color] || colorVariants.indigo)}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
