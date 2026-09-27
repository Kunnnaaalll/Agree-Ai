import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Zap, Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#05060A] text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">Agree<span className="text-indigo-400">AI</span></span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              From Conversation to Completion. Turn messy meetings into clear decisions, accountable tasks, and measurable progress.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-500">
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <ShieldCheck className="w-3 h-3" /> SOC2 Compliant AI
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/analyze" className="hover:text-white transition-colors">Audio Analysis</Link></li>
              <li><Link to="/diff" className="hover:text-white transition-colors">Project Memory</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Team Dashboard</Link></li>
              <li><Link to="/progress" className="hover:text-white transition-colors">Accountability Matrix</Link></li>
            </ul>
          </div>

          {/* Workflow */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-3">Workflow</h4>
            <ul className="space-y-2">
              <li className="text-slate-500">01. Capture Audio / Notes</li>
              <li className="text-slate-500">02. AI Extraction & Confidence</li>
              <li className="text-slate-500">03. Automated Calendar & Email</li>
              <li className="text-slate-500">04. Cross-Meeting Diff</li>
            </ul>
          </div>

          {/* SaaS Guarantee */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">Security & Privacy</h4>
            <p className="text-slate-500 leading-relaxed text-[11px]">
              End-to-end encrypted audio transcription with local AI processing capability. Zero retention without explicitly approved project memory sync.
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 AgreeAI Inc. All rights reserved. Premium AI SaaS Execution Platform.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Security Architecture</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
