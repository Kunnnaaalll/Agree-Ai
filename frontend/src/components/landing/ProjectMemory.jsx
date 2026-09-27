import React from 'react';
import { Link } from 'react-router-dom';
import { GitCompare, PlusCircle, RefreshCw, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function ProjectMemory() {
  return (
    <section className="py-20 bg-[#07080D] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="cyan" className="font-mono text-xs uppercase tracking-widest px-3 py-1">
            PROJECT MEMORY ENGINE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Never ask "What did we agree on last week?"
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Automatically track cross-meeting diffs, shifted deadlines, and newly identified risks across calls.
          </p>
        </div>

        {/* Dashboard Preview Card */}
        <div className="glass-panel p-6 sm:p-8 max-w-5xl mx-auto border-purple-500/30 shadow-[0_0_50px_-10px_rgba(168,85,247,0.15)] space-y-6">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <GitCompare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Project Memory</h3>
                <p className="text-xs text-slate-400 font-mono">Cross-Meeting Intelligence Synthesis</p>
              </div>
            </div>

            {/* Meeting selector indicator */}
            <div className="flex items-center gap-2 bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-800 font-mono text-xs">
              <span className="text-slate-400">Meeting #04</span>
              <span className="text-purple-400 font-bold">→</span>
              <span className="text-white font-bold bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">Meeting #05</span>
            </div>
          </div>

          {/* Diff Grid: ADDED, CHANGED, COMPLETED, AT RISK */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* ADDED */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <PlusCircle className="w-3.5 h-3.5 text-indigo-400" /> ADDED
                </span>
                <span className="text-[10px] font-mono text-slate-500">1 item</span>
              </div>
              <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/30 text-xs space-y-1">
                <span className="font-semibold text-white block">Supabase migration</span>
                <p className="text-[11px] text-slate-400">Assigned to Kunal Shah</p>
              </div>
            </div>

            {/* CHANGED */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-amber-400" /> CHANGED
                </span>
                <span className="text-[10px] font-mono text-slate-500">1 shift</span>
              </div>
              <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 text-xs space-y-1">
                <span className="font-semibold text-white block">Launch Date</span>
                <div className="flex items-center gap-1.5 text-[11px] font-mono">
                  <span className="line-through text-slate-500">Sep 30</span>
                  <span className="text-amber-400 font-bold">→ Oct 7</span>
                </div>
              </div>
            </div>

            {/* COMPLETED */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> COMPLETED
                </span>
                <span className="text-[10px] font-mono text-slate-500">1 done</span>
              </div>
              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs space-y-1">
                <span className="font-semibold text-white flex items-center gap-1">
                  ✓ Landing page
                </span>
                <p className="text-[11px] text-slate-400">Completed by Priya</p>
              </div>
            </div>

            {/* AT RISK */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" /> AT RISK
                </span>
                <span className="text-[10px] font-mono text-slate-500">1 alert</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-500/30 text-xs space-y-1">
                <span className="font-semibold text-rose-300 block">⚠ Backend integration</span>
                <p className="text-[11px] text-slate-400">Delayed by cluster setup</p>
              </div>
            </div>

          </div>

          {/* Bottom link CTA */}
          <div className="pt-2 text-center">
            <Link to="/diff">
              <Button variant="outline" size="sm" icon={ArrowRight}>
                Open Full Project Diff Matrix
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
