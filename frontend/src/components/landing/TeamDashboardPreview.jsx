import React from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { Activity, CheckCircle2, ShieldCheck, AlertCircle, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import { Card, CardTitle, CardDescription } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function TeamDashboardPreview() {
  const chartData = [
    { name: 'Kunal', progress: 80, completed: 8, color: '#6366f1' },
    { name: 'Vansh', progress: 70, completed: 7, color: '#06b6d4' },
    { name: 'Priya', progress: 92, completed: 10, color: '#10b981' },
    { name: 'Sarah', progress: 85, completed: 6, color: '#f59e0b' }
  ];

  return (
    <section className="py-20 bg-[#090A11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="default" className="font-mono text-xs uppercase tracking-widest px-3 py-1">
            EXECUTIVE DASHBOARD
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Single Pane of Glass for Project Execution
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Track overall project health, workload distribution, and blocked items in real-time.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="glass-panel p-6 sm:p-8 max-w-6xl mx-auto border-slate-800 space-y-8">
          
          {/* Top Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Decisions Extracted</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-white font-mono">12</span>
                <span className="text-[10px] text-emerald-400 font-mono">100% Confirmed</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Active Tasks</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-indigo-400 font-mono">18</span>
                <span className="text-[10px] text-slate-500 font-mono">3 Sprints</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Blocked Tasks</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-rose-400 font-mono">3</span>
                <span className="text-[10px] text-rose-400 font-mono">Critical Path</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Team Progress</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-emerald-400 font-mono">78%</span>
                <span className="text-[10px] text-emerald-400 font-mono">+12% this week</span>
              </div>
            </div>

          </div>

          {/* Recharts Progress & Health Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Chart: Team Velocity */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">Team Member Execution Progress</h4>
                  <span className="text-xs text-slate-400">Completion percentage across active Q4 tasks</span>
                </div>
                <Badge variant="cyan" className="font-mono text-[10px]">Recharts Analytics</Badge>
              </div>

              <div className="h-56 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} unit="%" domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                      formatter={(val) => [`${val}%`, 'Progress']}
                    />
                    <Bar dataKey="progress" radius={[6, 6, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right: Health Metrics */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
              <h4 className="text-sm font-semibold text-white">Project Health Index</h4>
              
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Decision Stability</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">96% High</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Dependency Risk</span>
                  <span className="text-xs font-mono font-bold text-amber-400">Moderate (ECS Block)</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Sprint On-Time Forecast</span>
                  <span className="text-xs font-mono font-bold text-indigo-400">Oct 7 Target</span>
                </div>
              </div>

              <Link to="/dashboard" className="block pt-2">
                <Button variant="secondary" size="sm" className="w-full text-xs" icon={ArrowUpRight}>
                  Explore Full Dashboard View
                </Button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
