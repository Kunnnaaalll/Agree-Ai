import React from 'react';
import { GitMerge, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function DependencyGraph() {
  const dependencies = [
    {
      id: "dep-1",
      upstream: "Provision AWS ECS Cluster (Kunal)",
      downstream: "Stress test 1,000 sockets (Kunal)",
      status: "Blocked",
      criticality: "High Criticality",
      dueDate: "Oct 2 → Oct 5"
    },
    {
      id: "dep-2",
      upstream: "UI Component Polish (Priya)",
      downstream: "WebSocket Frontend Integration (Vansh)",
      status: "On Track",
      criticality: "Normal",
      dueDate: "Oct 1 → Oct 4"
    },
    {
      id: "dep-3",
      upstream: "Supabase Schema Migration (Kunal)",
      downstream: "Public Release Cutover",
      status: "On Track",
      criticality: "High Criticality",
      dueDate: "Oct 2 → Oct 7"
    }
  ];

  return (
    <div className="glass-panel p-5 border-slate-800 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <GitMerge className="w-4 h-4 text-cyan-400" /> Critical Task Dependency Graph
          </h3>
          <p className="text-xs text-slate-400">Automated AI blocker detection across cross-functional tasks</p>
        </div>
        <Badge variant="cyan" className="font-mono text-[10px]">3 Mapped Paths</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dependencies.map((dep) => (
          <div
            key={dep.id}
            className={`p-4 rounded-xl border text-xs space-y-3 relative ${
              dep.status === 'Blocked'
                ? 'bg-rose-950/20 border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.1)]'
                : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <Badge variant={dep.status === 'Blocked' ? 'danger' : 'success'} className="text-[10px]">
                {dep.status}
              </Badge>
              <span className="text-[10px] font-mono text-slate-400">{dep.dueDate}</span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-medium text-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Prerequisite (Upstream)</span>
                {dep.upstream}
              </div>

              <div className="flex justify-center -my-1">
                <ArrowRight className="w-4 h-4 text-cyan-400 rotate-90" />
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-medium text-slate-200">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Dependent Task (Downstream)</span>
                {dep.downstream}
              </div>
            </div>

            {dep.status === 'Blocked' && (
              <div className="pt-2 border-t border-rose-500/20 flex items-center gap-1.5 text-[11px] text-rose-300 font-mono">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                <span>Requires ECS cluster finish first</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
