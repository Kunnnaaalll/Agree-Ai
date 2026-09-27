import React from 'react';
import { cn } from '../../lib/utils';

export function Badge({ children, variant = "default", className, ...props }) {
  const variants = {
    default: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    danger: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    outline: "bg-transparent text-slate-300 border-slate-700",
    urgent: "bg-rose-500/20 text-rose-300 border-rose-500/40 font-semibold animate-pulse",
    p0: "bg-purple-500/20 text-purple-300 border-purple-500/40 font-bold",
    p1: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    p2: "bg-slate-800 text-slate-400 border-slate-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
