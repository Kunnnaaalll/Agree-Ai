import React, { useState } from 'react';
import { Play, Pause, Mic, Sparkles, CheckCircle2, ArrowRight, Volume2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function AudioPipeline() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulated waveform bar heights
  const bars = [12, 24, 40, 18, 55, 75, 42, 30, 68, 90, 45, 20, 60, 80, 35, 25, 70, 45, 95, 60, 40, 20, 85, 50, 30, 65, 40, 20, 50, 75, 90, 45, 30, 60];

  return (
    <section className="py-20 bg-[#07080D] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            AUDIO TO ACTION PIPELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stop taking manual meeting notes forever.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Drop your meeting recording. Watch raw voice transform into structured tasks and clear owner accountability.
          </p>
        </div>

        {/* Audio Pipeline Container */}
        <div className="glass-panel p-6 sm:p-8 max-w-5xl mx-auto border-indigo-500/30 shadow-[0_0_50px_-10px_rgba(99,102,241,0.15)] space-y-8">
          
          {/* Top Audio Player Simulation */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all flex-shrink-0"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">42:18 Meeting Recording</span>
                  <Badge variant="cyan" className="text-[10px]">HD Waveform</Badge>
                </div>
                <span className="text-xs text-slate-400 font-mono">Q4_Architecture_Alignment.mp3 • 48.2 MB</span>
              </div>
            </div>

            {/* Simulated Audio Waveform */}
            <div className="flex items-end gap-1 h-10 w-full md:w-80 px-2 overflow-hidden">
              {bars.map((h, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 rounded-full transition-all duration-300 ${
                    isPlaying
                      ? 'bg-gradient-to-t from-indigo-500 to-cyan-400 animate-pulse'
                      : idx < 12 ? 'bg-indigo-500' : 'bg-slate-800'
                  }`}
                  style={{ height: `${isPlaying ? Math.max(15, (h * Math.random() + 20) % 100) : h}%` }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Volume2 className="w-4 h-4 text-indigo-400" />
              <span>100% Volume</span>
            </div>
          </div>

          {/* Middle: Split flow view */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left: Transcript Snippet */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-indigo-400" /> TRANSCRIPT STREAM
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">00:14:22</span>
                </div>
                
                <div className="space-y-2 text-xs leading-relaxed text-slate-300 font-sans">
                  <p><span className="font-semibold text-indigo-400">Kunal:</span> "We'll deploy the Supabase database migration script first, but I need Vansh to lock down the frontend socket handler by Thursday."</p>
                  <p><span className="font-semibold text-cyan-400">Priya:</span> "I can finish the dark SaaS component system today so Vansh isn't blocked."</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Whisper v3 Streaming</span>
                <span className="text-emerald-400">99.2% Accuracy</span>
              </div>
            </div>

            {/* Middle arrow indicator */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-glow-sm">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Right: AI Extracted Actions */}
            <div className="lg:col-span-6 p-5 rounded-xl bg-gradient-to-br from-indigo-950/30 via-slate-950 to-purple-950/20 border border-indigo-500/30 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> EXTRACTED EXECUTION ITEMS
                  </span>
                  <Badge variant="success" className="text-[10px]">AI Auto-Parsed</Badge>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start justify-between gap-2">
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="font-semibold text-white">Supabase Migration Deployment</span>
                      </div>
                      <p className="text-[11px] text-slate-400 pl-6">Owner: Kunal Shah • P0 Urgent</p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">98%</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start justify-between gap-2">
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="font-semibold text-white">WebSocket Handler & Dark UI Polish</span>
                      </div>
                      <p className="text-[11px] text-slate-400 pl-6">Multi-Owners: Vansh + Priya • P1 High</p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">95%</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Auto-routed to Jira & Slack</span>
                <span className="text-indigo-400 font-semibold">2 Tasks Created →</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
