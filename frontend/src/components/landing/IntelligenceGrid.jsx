import React from 'react';
import {
  ShieldAlert,
  Sliders,
  Users,
  GitMerge,
  GitCompare,
  Tag,
  CheckCircle2,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function IntelligenceGrid() {
  return (
    <section id="intelligence" className="py-20 bg-[#090A11] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="cyan" className="font-mono text-xs uppercase tracking-widest px-3 py-1">
            AI INTELLIGENCE ENGINE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            More than a meeting summary.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Understand what was said, what was decided, and what needs to happen next.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Confidence Scores */}
          <Card className="flex flex-col justify-between border-indigo-500/20 hover:border-indigo-500/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Confidence Scores</CardTitle>
                <CardDescription className="mt-1">
                  AI flags how definitive a statement was, distinguishing solid decisions from casual opinions.
                </CardDescription>
              </div>

              {/* Mock UI snippet */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-medium">Launch Target Date</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    96% confidence
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[96%]" />
                </div>
                <span className="text-[10px] text-slate-500 block">AI Verified from 3 speaker confirmations</span>
              </div>
            </div>
          </Card>

          {/* Card 2: Priority & Urgency */}
          <Card className="flex flex-col justify-between border-purple-500/20 hover:border-purple-500/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Priority & Urgency</CardTitle>
                <CardDescription className="mt-1">
                  Automatically classify action items based on critical path dependencies and launch timelines.
                </CardDescription>
              </div>

              {/* Mock UI snippet */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">Database Migration</span>
                  <div className="flex items-center gap-1.5">
                    <Badge variant="p0">P0</Badge>
                    <Badge variant="urgent">URGENT</Badge>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400">Assigned to Kunal • Due in 2 days</p>
              </div>
            </div>
          </Card>

          {/* Card 3: Multi-Owner Detection */}
          <Card className="flex flex-col justify-between border-cyan-500/20 hover:border-cyan-500/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Multi-Owner Detection</CardTitle>
                <CardDescription className="mt-1">
                  Detect collaborative responsibilities when tasks require cross-functional handoffs.
                </CardDescription>
              </div>

              {/* Mock UI snippet */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Task: UI Development</span>
                  <span className="text-cyan-400 font-mono font-semibold">Shared</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-indigo-600 border-2 border-[#090A11] flex items-center justify-center text-[10px] font-bold text-white">K</div>
                    <div className="w-7 h-7 rounded-full bg-cyan-600 border-2 border-[#090A11] flex items-center justify-center text-[10px] font-bold text-white">V</div>
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Kunal + Vansh</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 4: Dependency Detection */}
          <Card className="flex flex-col justify-between border-amber-500/20 hover:border-amber-500/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <GitMerge className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Dependency Detection</CardTitle>
                <CardDescription className="mt-1">
                  Identify implicit bottlenecks where one task blocks another before it causes sprint delays.
                </CardDescription>
              </div>

              {/* Mock UI snippet */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded border border-slate-800">
                  <span className="text-slate-300">UI completion</span>
                  <span className="text-amber-400 font-bold">↓</span>
                  <span className="text-indigo-400">Deployment</span>
                </div>
                <span className="text-[10px] text-amber-400/90 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> Blocker active until Friday
                </span>
              </div>
            </div>
          </Card>

          {/* Card 5: Meeting Diff */}
          <Card className="flex flex-col justify-between border-emerald-500/20 hover:border-emerald-500/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <GitCompare className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Meeting Diff & Memory</CardTitle>
                <CardDescription className="mt-1">
                  Compare meeting #04 vs #05 to highlight changed deadlines, new risks, and completed tasks.
                </CardDescription>
              </div>

              {/* Mock UI snippet */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5 text-[11px]">
                <div className="flex justify-between items-center text-emerald-400">
                  <span>✓ Completed: Landing page</span>
                  <span className="text-[9px] font-mono">Done</span>
                </div>
                <div className="flex justify-between items-center text-amber-400">
                  <span>Δ Deadline: Sep 30 → Oct 7</span>
                  <span className="text-[9px] font-mono">Shifted</span>
                </div>
                <div className="flex justify-between items-center text-rose-400">
                  <span>⚠ Risk: Backend integration</span>
                  <span className="text-[9px] font-mono">High</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 6: Theme Intelligence */}
          <Card className="flex flex-col justify-between border-indigo-500/20 hover:border-indigo-500/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <CardTitle>Theme Intelligence</CardTitle>
                <CardDescription className="mt-1">
                  Automatically categorize discussion topics into domain clusters for clear team visibility.
                </CardDescription>
              </div>

              {/* Mock UI snippet */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-wrap gap-1.5">
                <span className="px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-medium border border-indigo-500/30">
                  Design (4)
                </span>
                <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 text-[10px] font-mono font-medium border border-purple-500/30">
                  Development (8)
                </span>
                <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-medium border border-cyan-500/30">
                  Marketing (3)
                </span>
                <span className="px-2 py-1 rounded bg-rose-500/20 text-rose-300 text-[10px] font-mono font-medium border border-rose-500/30">
                  Risks (2)
                </span>
              </div>
            </div>
          </Card>

        </div>

      </div>
    </section>
  );
}
