import React from 'react';
import { cn } from '../../lib/utils';

export function MetricCard({ title, value, change, changeType = "positive", icon: Icon, color = "indigo" }) {
  const accentColors = {
    indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    rose: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  };

  return (
    <div className="glass-panel p-5 border-slate-800/90 space-y-3 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">{title}</span>
        {Icon && (
          <div className={cn("w-8 h-8 rounded-lg border flex items-center justify-center", accentColors[color])}>
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-extrabold text-white font-mono">{value}</span>
        {change && (
          <span className={cn("text-[11px] font-mono px-2 py-0.5 rounded border font-semibold", changeType === "positive" ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" : "text-rose-400 bg-rose-500/10 border-rose-500/20")}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
