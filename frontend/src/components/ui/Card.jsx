import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ children, className, hover = true, glow = false, ...props }) {
  return (
    <div
      className={cn(
        "glass-panel p-6 relative overflow-hidden",
        hover && "glass-panel-hover",
        glow && "shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)] border-indigo-500/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-1 mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3 className={cn("text-lg font-semibold text-white tracking-tight flex items-center gap-2", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={cn("text-xs text-slate-400 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {children}
    </div>
  );
}
