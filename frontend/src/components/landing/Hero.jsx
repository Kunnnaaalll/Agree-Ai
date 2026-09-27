import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Mail,
  Zap,
  Clock,
  UserCheck,
  Play,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background radial glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-cyan-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium shadow-glow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>AI MEETING INTELLIGENCE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              From Conversation to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">Completion.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
              Turn messy meetings into clear decisions, accountable tasks, and measurable progress.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link to="/analyze">
                <Button variant="primary" size="lg" icon={Sparkles} className="w-full sm:w-auto shadow-glow-md">
                  Analyze a Meeting
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="secondary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                  See How It Works
                </Button>
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2 font-mono font-medium bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="text-slate-300">Audio</span>
                <span className="text-indigo-400 font-bold">→</span>
                <span className="text-slate-300">Decisions</span>
                <span className="text-cyan-400 font-bold">→</span>
                <span className="text-emerald-400 font-medium">Execution</span>
              </div>
              <span className="text-slate-500 hidden sm:inline">• Zero generic summaries</span>
            </div>

          </div>

          {/* Right Column: Animated Interactive Visualization */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glowing Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Card */}
              <div className="relative rounded-2xl bg-[#0B0D16]/90 border border-slate-800 p-5 sm:p-6 backdrop-blur-2xl shadow-2xl space-y-4">
                
                {/* Visual Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400">pipeline_runtime.ai</span>
                  </div>
                  <Badge variant="cyan" className="text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping mr-1"></span>
                    Live Streaming Pipeline
                  </Badge>
                </div>

                {/* Step 1: MEETING TRANSCRIPT */}
                <div className={`p-4 rounded-xl transition-all duration-500 border ${activeStep === 0 ? 'bg-indigo-950/40 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.15)]' : 'bg-slate-900/40 border-slate-800/60 opacity-80'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Play className="w-3 h-3 text-indigo-400" /> 1. MEETING TRANSCRIPT
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">00:14 / 45:18</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 font-mono text-xs text-slate-300 border border-slate-800/80 leading-relaxed italic">
                    "We'll launch next Friday. Kunal will handle deployment. Vansh and Priya will finish the UI."
                  </div>
                </div>

                {/* Flow Arrow */}
                <div className="flex justify-center -my-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-glow-sm">
                    <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                  </div>
                </div>

                {/* Step 2: AI ANALYSIS */}
                <div className={`p-4 rounded-xl transition-all duration-500 border ${activeStep === 1 ? 'bg-purple-950/40 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'bg-slate-900/40 border-slate-800/60 opacity-90'}`}>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" /> 2. AI INTELLIGENCE EXTRACTION
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      ✓ Decision — 98% confidence
                    </span>
                  </div>
                  
                  {/* Extracted cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-purple-500/30 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">Kunal Shah</span>
                        <Badge variant="urgent">P0 • Urgent</Badge>
                      </div>
                      <p className="text-slate-400 text-[11px]">ECS Infrastructure & Deployment</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-indigo-500/30 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">Vansh + Priya</span>
                        <Badge variant="p1">P1 • High</Badge>
                      </div>
                      <p className="text-slate-400 text-[11px]">UI Development & Theme Polish</p>
                    </div>
                  </div>
                </div>

                {/* Flow Arrow */}
                <div className="flex justify-center -my-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-glow-sm">
                    <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                  </div>
                </div>

                {/* Step 3: EXECUTION */}
                <div className={`p-4 rounded-xl transition-all duration-500 border ${activeStep === 2 ? 'bg-cyan-950/40 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]' : 'bg-slate-900/40 border-slate-800/60 opacity-90'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" /> 3. AUTOMATED EXECUTION
                    </span>
                    <span className="text-[10px] text-slate-400">Syncing...</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center space-y-1">
                      <Calendar className="w-4 h-4 text-indigo-400 mx-auto" />
                      <span className="text-[10px] block font-medium text-slate-300">Calendar</span>
                      <span className="text-[9px] text-emerald-400 block font-mono">Scheduled</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center space-y-1">
                      <Mail className="w-4 h-4 text-purple-400 mx-auto" />
                      <span className="text-[10px] block font-medium text-slate-300">Email</span>
                      <span className="text-[9px] text-indigo-400 block font-mono">Draft Prepared</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center space-y-1">
                      <UserCheck className="w-4 h-4 text-cyan-400 mx-auto" />
                      <span className="text-[10px] block font-medium text-slate-300">Progress</span>
                      <span className="text-[9px] text-cyan-400 block font-mono">80% Updated</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
