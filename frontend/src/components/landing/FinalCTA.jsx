import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#07080D] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>START IN 60 SECONDS</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Make every meeting move the project forward.
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Capture the conversation. Understand the decisions. Execute with confidence.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/analyze">
            <Button variant="primary" size="lg" icon={Sparkles} className="px-8 py-4 text-base shadow-glow-md">
              Analyze Your First Meeting
            </Button>
          </Link>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <span>✓ No credit card required</span>
          <span>✓ Instant AI transcription</span>
          <span>✓ Zero backend setup</span>
        </div>

      </div>
    </section>
  );
}
