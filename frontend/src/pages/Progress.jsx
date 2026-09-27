import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, LineChart, Line } from 'recharts';
import { Users, TrendingUp, CheckCircle2, Clock, AlertTriangle, Filter, CheckSquare } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Sidebar } from '../components/layout/Sidebar';
import { Footer } from '../components/layout/Footer';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { mockTeam } from '../data/mockTeam';
import { mockTasks } from '../data/mockTasks';

export function Progress() {
  const [selectedMember, setSelectedMember] = useState('all');

  const selectedPerson = selectedMember === 'all'
    ? null
    : mockTeam.find(m => m.id === selectedMember);

  const filteredTasks = selectedMember === 'all'
    ? mockTasks
    : mockTasks.filter(t => t.owner.includes(selectedPerson?.name.split(' ')[0]));

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
                  Team & Individual Accountability Matrix
                </h1>
                <Badge variant="cyan" className="font-mono text-[10px]">Real-Time Velocity</Badge>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Monitor task completion percentages, active blockers, and sprint momentum per member.
              </p>
            </div>
          </div>

          {/* Member Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800">
            <button
              onClick={() => setSelectedMember('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                selectedMember === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Users className="w-3.5 h-3.5" /> Entire Team Overview
            </button>
            {mockTeam.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMember(m.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  selectedMember === m.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-white">
                  {m.avatar}
                </div>
                <span>{m.name}</span>
              </button>
            ))}
          </div>

          {/* Team Overview vs Individual Stats */}
          {selectedMember === 'all' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockTeam.map((m) => (
                <div key={m.id} className="glass-panel p-5 border-slate-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      {m.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{m.name}</h4>
                      <p className="text-[11px] text-slate-400 font-mono">{m.role}</p>
                    </div>
                  </div>

                  <ProgressBar value={m.progress} color={m.progress === 100 ? 'emerald' : m.progress > 75 ? 'indigo' : 'cyan'} showLabel />

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-slate-500 block">Completed</span>
                      <span className="text-emerald-400 font-bold">{m.tasksCompleted} tasks</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <span className="text-slate-500 block">Blocked</span>
                      <span className={m.tasksBlocked > 0 ? "text-rose-400 font-bold" : "text-slate-400"}>{m.tasksBlocked} items</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Detailed Individual Card */
            <div className="glass-panel p-6 sm:p-8 border-indigo-500/30 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
                    {selectedPerson?.avatar}
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-white">{selectedPerson?.name}</h2>
                    <p className="text-xs text-indigo-300 font-mono">{selectedPerson?.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">Completion</span>
                    <span className="text-2xl font-extrabold text-emerald-400 font-mono">{selectedPerson?.progress}%</span>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Completion %</span>
                  <span className="text-lg font-bold text-emerald-400">{selectedPerson?.progress}%</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Tasks Completed</span>
                  <span className="text-lg font-bold text-white">{selectedPerson?.tasksCompleted}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Tasks Pending</span>
                  <span className="text-lg font-bold text-indigo-400">{selectedPerson?.tasksPending}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Overdue</span>
                  <span className="text-lg font-bold text-slate-400">{selectedPerson?.tasksOverdue}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Blocked</span>
                  <span className={`text-lg font-bold ${selectedPerson?.tasksBlocked > 0 ? "text-rose-400" : "text-slate-400"}`}>{selectedPerson?.tasksBlocked}</span>
                </div>
              </div>

              {/* Weekly Output chart */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-semibold text-white">Weekly Execution Momentum</h4>
                <div className="h-44 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={selectedPerson?.weeklyOutput}>
                      <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }} />
                      <Line type="monotone" dataKey="tasks" stroke="#818cf8" strokeWidth={3} dot={{ fill: '#818cf8', r: 5 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Assigned Tasks List */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-indigo-400" /> Active Task List ({filteredTasks.length})
            </h3>

            <div className="space-y-3">
              {filteredTasks.map((t) => (
                <div key={t.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm">{t.title}</span>
                      <Badge variant={t.priority.toLowerCase()}>{t.priority}</Badge>
                    </div>
                    <p className="text-xs text-slate-400">Owner: {t.owner} • Deadline: {t.deadline}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-emerald-400">{t.confidence}% AI Confidence</span>
                    <Badge variant={t.status === 'Completed' ? 'success' : t.status === 'Blocked' ? 'danger' : 'p1'}>
                      {t.status}
                    </Badge>
                  </div>
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
