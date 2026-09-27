import React from 'react';
import { cn } from '../../lib/utils';

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon: Icon,
  disabled,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl active:scale-[0.98]";

  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-400 hover:to-purple-500 border border-indigo-400/30",
    secondary: "bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 shadow-sm",
    outline: "bg-transparent hover:bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:border-indigo-500/60",
    ghost: "bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white",
    cyan: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 border border-cyan-400/30",
    danger: "bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5 font-semibold",
    icon: "p-2 text-sm"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className={cn("w-4 h-4", size === "lg" && "w-5 h-5", size === "sm" && "w-3.5 h-3.5")} />}
      {children}
    </button>
  );
}
