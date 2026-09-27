import React from 'react';
import { Calendar as CalendarIcon, Mail, TrendingUp, CheckCircle, Send, Clock, UserCheck } from 'lucide-react';
import { Card, CardTitle, CardDescription } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from '../ui/ProgressBar';

export function ExecutionSection() {
  return (
    <section className="py-20 bg-[#090A11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
            AUTOMATED EXECUTION PIPELINE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meetings shouldn't end when the call ends.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Connect AI extractions directly into calendar blocks, draft emails, and live accountability meters.
          </p>
        </div>

        {/* 3 Connected Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Calendar */}
          <Card className="flex flex-col justify-between border-indigo-500/20 hover:border-indigo-500/50">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Google Calendar Ready
                </span>
              </div>

              <div>
                <CardTitle>Calendar Sync</CardTitle>
                <CardDescription className="mt-1">
                  Turn extracted deadlines into scheduled focus blocks automatically on team calendars.
                </CardDescription>
              </div>

              {/* Mock Calendar Widget */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">Add to Calendar</span>
                  <span className="text-[10px] text-slate-500 font-mono">1-Click Reserve</span>
                </div>

                <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/40 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Deploy backend pipeline</span>
                    <span className="text-[10px] font-mono text-indigo-300 font-semibold">P0 • Urgent</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Friday, 4:00 PM - 5:30 PM</span>
                  </div>
                </div>

                <button className="w-full py-2 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 text-xs font-medium border border-indigo-500/30 transition-colors">
                  + Confirm Calendar Slot
                </button>
              </div>
            </div>
          </Card>

          {/* Card 2: Email */}
          <Card className="flex flex-col justify-between border-purple-500/20 hover:border-purple-500/50">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  Gmail / Outlook Draft
                </span>
              </div>

              <div>
                <CardTitle>Email Communication</CardTitle>
                <CardDescription className="mt-1">
                  Turn decisions into polished, targeted communication sent to external stakeholders.
                </CardDescription>
              </div>

              {/* Mock Email Widget */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">Draft Email</span>
                  <span className="text-[10px] text-purple-400 font-mono">AI Generated</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 font-sans text-xs space-y-1 text-slate-300">
                  <span className="text-[10px] text-slate-500 block font-mono">To: Kunal Shah &lt;kunal@agreeai.io&gt;</span>
                  <p className="italic text-[11px] text-slate-300 leading-relaxed">
                    "Hi Kunal, as discussed in today's sync, we confirmed the Supabase deployment for Friday at 4:00 PM..."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="secondary" size="sm" className="text-xs">
                    Review
                  </Button>
                  <Button variant="primary" size="sm" icon={Send} className="text-xs">
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 3: Individual Progress */}
          <Card className="flex flex-col justify-between border-cyan-500/20 hover:border-cyan-500/50">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  Real-Time Accountability
                </span>
              </div>

              <div>
                <CardTitle>Individual Progress</CardTitle>
                <CardDescription className="mt-1">
                  Know exactly who is moving the project forward with live velocity and completion meters.
                </CardDescription>
              </div>

              {/* Mock Progress Bars */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3.5">
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-400" /> Kunal Shah
                    </span>
                    <span className="font-mono text-indigo-400 font-bold">80%</span>
                  </div>
                  <ProgressBar value={80} color="indigo" height="h-2" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" /> Vansh Sharma
                    </span>
                    <span className="font-mono text-cyan-400 font-bold">70%</span>
                  </div>
                  <ProgressBar value={70} color="cyan" height="h-2" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" /> Priya Patel
                    </span>
                    <span className="font-mono text-emerald-400 font-bold">100%</span>
                  </div>
                  <ProgressBar value={100} color="emerald" height="h-2" />
                </div>

              </div>
            </div>
          </Card>

        </div>

      </div>
    </section>
  );
}
