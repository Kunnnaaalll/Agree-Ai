import React from 'react';
import { Mic, BrainCircuit, Zap, BarChart3 } from 'lucide-react';
import { Card, CardTitle, CardDescription } from '../ui/Card';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Capture",
      subtitle: "Audio, Notes & Transcripts",
      description: "Upload audio files (MP3, WAV, M4A), paste unformatted notes, or connect your Zoom / Meet live transcripts.",
      icon: Mic,
      color: "from-indigo-500/20 to-purple-500/10",
      accent: "text-indigo-400",
      border: "hover:border-indigo-500/40"
    },
    {
      number: "02",
      title: "Understand",
      subtitle: "AI Semantic Extraction",
      description: "AI separates true decisions from raw ideas, assigns confidence scores, flags risks, and extracts questions.",
      icon: BrainCircuit,
      color: "from-purple-500/20 to-pink-500/10",
      accent: "text-purple-400",
      border: "hover:border-purple-500/40"
    },
    {
      number: "03",
      title: "Execute",
      subtitle: "Accountability & Automation",
      description: "Assign multi-owners, resolve dependency blockers, schedule calendar blocks, and generate draft follow-up emails.",
      icon: Zap,
      color: "from-cyan-500/20 to-blue-500/10",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/40"
    },
    {
      number: "04",
      title: "Track",
      subtitle: "Memory & Progress Diff",
      description: "Monitor individual completion rates and automatically compare past vs current meetings to detect project drift.",
      icon: BarChart3,
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/40"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#07080D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for accountability, not just note-taking.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Four simple steps to transform raw conversation into accountable team progress.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.number}
                className={`group relative flex flex-col justify-between border-slate-800/80 transition-all duration-300 hover:-translate-y-1 ${step.border}`}
              >
                {/* Number watermark */}
                <span className="absolute top-3 right-4 font-mono font-extrabold text-4xl text-slate-800/50 group-hover:text-slate-700/80 transition-colors pointer-events-none">
                  {step.number}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} border border-slate-800 flex items-center justify-center ${step.accent} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Step {step.number}
                    </span>
                    <CardTitle className="text-xl">
                      {step.title}
                    </CardTitle>
                    <span className={`text-xs font-medium block mt-0.5 ${step.accent}`}>
                      {step.subtitle}
                    </span>
                  </div>

                  <CardDescription className="text-slate-400 leading-relaxed text-xs">
                    "{step.description}"
                  </CardDescription>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Pipeline Ready</span>
                  <span className="group-hover:translate-x-1 transition-transform text-slate-400">→</span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
