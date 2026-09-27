import React from 'react';
import { Sparkles, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function DecisionCard({ decision }) {
  return (
    <div className="p-4 rounded-xl bg-slate-950/90 border border-indigo-500/20 hover:border-indigo-500/40 transition-all space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white leading-snug">
              {decision.text}
            </h4>
            {decision.rationale && (
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Rationale: {decision.rationale}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <Badge variant={decision.type === 'Confirmed' ? 'success' : 'warning'}>
            {decision.type}
          </Badge>
          <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            {decision.confidence}% confidence
          </span>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Owner: <strong className="text-slate-200">{decision.owner}</strong></span>
        <span>Impact: <strong className="text-indigo-300">{decision.impact || 'High'}</strong></span>
      </div>
    </div>
  );
}
