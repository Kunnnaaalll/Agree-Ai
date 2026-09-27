import React, { useState } from 'react';
import { GitCompare, PlusCircle, RefreshCw, CheckCircle2, AlertTriangle, HelpCircle, Trash2, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Sidebar } from '../components/layout/Sidebar';
import { Footer } from '../components/layout/Footer';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { mockDiff } from '../data/mockDiff';

export function Diff() {
  const [prevMeeting, setPrevMeeting] = useState('m-104');
  const [currMeeting, setCurrMeeting] = useState('m-105');

  const { diffs } = mockDiff;

  return (
    <div className="min-h-screen bg-[#07080D] text-slate-100 flex flex-col selection:bg-indigo-500/30">
      <Navbar />

      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        <Sidebar className="hidden md:flex flex-shrink-0" />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 overflow-y-auto">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Project Memory Engine
                </h1>
                <Badge variant="cyan" className="font-mono text-[10px]">Cross-Meeting Synthesis</Badge>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Compare decisions, shifted deadlines, resolved tasks, and new risks across consecutive calls.
              </p>
            </div>

            {/* Meeting Selectors */}
            <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800 text-xs">
              <select
                value={prevMeeting}
                onChange={(e) => setPrevMeeting(e.target.value)}
                className="bg-slate-900 text-slate-200 px-3 py-1.5 rounded-xl border border-slate-800 focus:outline-none text-xs font-mono"
              >
                <option value="m-104">Meeting #04 (Sep 20)</option>
                <option value="m-103">Meeting #03 (Sep 15)</option>
              </select>

              <span className="text-purple-400 font-bold font-mono">VS</span>

              <select
                value={currMeeting}
                onChange={(e) => setCurrMeeting(e.target.value)}
                className="bg-slate-900 text-white font-semibold px-3 py-1.5 rounded-xl border border-indigo-500/40 focus:outline-none text-xs font-mono"
              >
                <option value="m-105">Meeting #05 (Sep 26)</option>
                <option value="m-104">Meeting #04 (Sep 20)</option>
              </select>
            </div>
          </div>

          {/* AI Executive Summary Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/30 via-slate-950 to-indigo-950/30 border border-purple-500/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-300">
              <GitCompare className="w-4 h-4 text-purple-400" /> CROSS-MEETING DIFF SUMMARY
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              "{mockDiff.summary}"
            </p>
          </div>

          {/* Diff Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* ADDED */}
            <div className="glass-panel p-5 border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <PlusCircle className="w-4 h-4 text-indigo-400" /> Newly Added Decisions & Tasks ({diffs.added.length})
                </h3>
                <Badge variant="p1" className="text-[10px]">New in #05</Badge>
              </div>

              <div className="space-y-3">
                {diffs.added.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-xl bg-slate-950/90 border border-indigo-500/30 text-xs space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-white">{item.title}</span>
                      <Badge variant="cyan">{item.category}</Badge>
                    </div>
                    {item.details && <p className="text-[11px] text-slate-400">{item.details}</p>}
                    <span className="text-[10px] text-indigo-300 font-mono block pt-1">Owner: {item.owner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CHANGED */}
            <div className="glass-panel p-5 border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-amber-400" /> Shifted Deadlines & Scope ({diffs.changed.length})
                </h3>
                <Badge variant="warning" className="text-[10px]">Shifted</Badge>
              </div>

              <div className="space-y-3">
                {diffs.changed.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white">{item.field}</span>
                      <span className="text-[10px] text-amber-400 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {item.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="line-through text-slate-500">{item.from}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-400 font-bold">{item.to}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 italic">Reason: {item.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* COMPLETED */}
            <div className="glass-panel p-5 border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Completed Since Last Sync ({diffs.completed.length})
                </h3>
                <Badge variant="success" className="text-[10px]">Done</Badge>
              </div>

              <div className="space-y-3">
                {diffs.completed.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs space-y-1">
                    <span className="font-semibold text-white flex items-center gap-2">
                      ✓ {item.title}
                    </span>
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono pt-1">
                      <span>Owner: {item.owner}</span>
                      <span className="text-emerald-400">Done on {item.completedOn}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AT RISK */}
            <div className="glass-panel p-5 border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" /> Newly Flagged Risks ({diffs.atRisk.length})
                </h3>
                <Badge variant="danger" className="text-[10px]">High Severity</Badge>
              </div>

              <div className="space-y-3">
                {diffs.atRisk.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30 text-xs space-y-2">
                    <span className="font-bold text-rose-300 block">⚠ {item.title}</span>
                    <p className="text-[11px] text-slate-400">Blocker: {item.blocker}</p>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-rose-300 font-mono">
                      Action Required: {item.actionRequired}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
