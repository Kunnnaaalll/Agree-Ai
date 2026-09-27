import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Mic,
  Calendar,
  Users,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Lightbulb,
  GitMerge,
  Tag,
  ArrowLeft,
  Share2,
  Download
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Sidebar } from '../components/layout/Sidebar';
import { DecisionCard } from '../components/meeting/DecisionCard';
import { ActionItem } from '../components/meeting/ActionItem';
import { Card, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { mockMeetings } from '../data/mockMeetings';

export function MeetingDetail() {
  const { id } = useParams();
  const meeting = mockMeetings.find(m => m.id === id) || mockMeetings[0];

  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-[#07080D] text-slate-100 flex flex-col selection:bg-indigo-500/30">
      <Navbar />

      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        <Sidebar className="hidden md:flex flex-shrink-0" />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 overflow-y-auto">
          
          {/* Top Back Link & Toolbar */}
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Workspace Dashboard
            </Link>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" icon={Share2} className="text-xs">
                Export Transcript
              </Button>
              <Link to="/diff">
                <Button variant="outline" size="sm" icon={GitMerge} className="text-xs">
                  Compare to #04
                </Button>
              </Link>
            </div>
          </div>

          {/* Meeting Header Banner */}
          <div className="glass-panel p-6 sm:p-8 border-indigo-500/30 space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Badge variant="cyan" className="font-mono text-xs">Meeting #{meeting.number}</Badge>
                  <span className="text-xs font-mono text-slate-400">{meeting.date} • {meeting.time}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {meeting.title}
                </h1>
              </div>

              {/* Confidence Score Pill */}
              <div className="flex items-center gap-3 bg-slate-950 p-4 rounded-2xl border border-emerald-500/30">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg">
                  ✓
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">AI Decision Confidence</span>
                  <span className="text-xl font-extrabold text-emerald-400 font-mono">{meeting.confidence}% Score</span>
                </div>
              </div>
            </div>

            {/* Meta Row: Participants & Audio length */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-300">
                  Participants: <strong className="text-white">{meeting.participants.map(p => p.name).join(', ')}</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mic className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300">
                  Audio Recording: <strong className="text-white">{meeting.audioLength}</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300">
                  Project Context: <strong className="text-white">{meeting.project}</strong>
                </span>
              </div>
            </div>

          </div>

          {/* Section 1: Executive Summary */}
          <div className="glass-panel p-6 border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" /> Executive AI Summary
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              "{meeting.summary}"
            </p>
          </div>

          {/* Section 2: Extracted Decisions vs Action Items */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Confirmed Decisions */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Extracted Decisions ({meeting.decisions.length})
                </h3>
                <Badge variant="success" className="text-[10px]">High Impact</Badge>
              </div>

              <div className="space-y-3">
                {meeting.decisions.map((decision) => (
                  <DecisionCard key={decision.id} decision={decision} />
                ))}
              </div>
            </div>

            {/* Right: Extracted Action Items */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" /> Action Items & Owners ({meeting.actionItems.length})
                </h3>
                <Badge variant="cyan" className="text-[10px]">Multi-Owner Mapped</Badge>
              </div>

              <div className="space-y-3">
                {meeting.actionItems.map((item) => (
                  <ActionItem key={item.id} item={item} />
                ))}
              </div>
            </div>

          </div>

          {/* Section 3: Ideas vs Open Questions vs Risks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Ideas Card (Distinct from decisions!) */}
            <div className="glass-panel p-5 border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400" /> Raw Ideas ({meeting.ideas.length})
                </h4>
                <Badge variant="warning" className="text-[10px]">Non-Binding</Badge>
              </div>
              <div className="space-y-2.5">
                {meeting.ideas.map((idea) => (
                  <div key={idea.id} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                    <p className="text-slate-200 font-medium">"{idea.text}"</p>
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>Proposed by: {idea.proposedBy}</span>
                      <span className="text-amber-400">{idea.feasibility} Feasibility</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Questions */}
            <div className="glass-panel p-5 border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400" /> Open Questions ({meeting.openQuestions.length})
                </h4>
                <Badge variant="cyan" className="text-[10px]">Unresolved</Badge>
              </div>
              <div className="space-y-2.5">
                {meeting.openQuestions.map((q) => (
                  <div key={q.id} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                    <p className="text-slate-200 font-medium">"{q.question}"</p>
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>Assigned to: {q.assignedTo}</span>
                      <span className="text-cyan-400">{q.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risks */}
            <div className="glass-panel p-5 border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" /> Identified Risks ({meeting.risks.length})
                </h4>
                <Badge variant="danger" className="text-[10px]">High Alert</Badge>
              </div>
              <div className="space-y-2.5">
                {meeting.risks.map((r) => (
                  <div key={r.id} className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/30 text-xs space-y-1">
                    <p className="text-rose-200 font-medium">"{r.risk}"</p>
                    <p className="text-[10px] text-slate-400">Mitigation: {r.mitigation}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Section 4: Themes Intelligence */}
          <div className="glass-panel p-5 border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Tag className="w-4 h-4 text-purple-400" /> Topic & Theme Clusters
            </h3>
            <div className="flex flex-wrap gap-2">
              {meeting.themes.map((t, idx) => (
                <div key={idx} className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-medium flex items-center gap-2 ${t.color}`}>
                  <span>{t.name}</span>
                  <span className="w-4 h-4 rounded-full bg-black/40 flex items-center justify-center text-[10px] font-bold">
                    {t.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
