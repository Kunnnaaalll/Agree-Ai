import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckSquare, AlertTriangle, TrendingUp, Mic, Users, Plus, FolderKanban } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Sidebar } from '../components/layout/Sidebar';
import { Footer } from '../components/layout/Footer';
import { MetricCard } from '../components/dashboard/MetricCard';
import { TaskTable } from '../components/dashboard/TaskTable';
import { DependencyGraph } from '../components/dashboard/DependencyGraph';
import { MeetingCard } from '../components/dashboard/MeetingCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { mockMeetings } from '../data/mockMeetings';
import { mockTeam } from '../data/mockTeam';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

export function Dashboard() {
  const chartData = mockTeam.map(m => ({
    name: m.name.split(' ')[0],
    progress: m.progress,
    color: m.name.includes('Kunal') ? '#6366f1' : m.name.includes('Vansh') ? '#06b6d4' : m.name.includes('Priya') ? '#10b981' : '#f59e0b'
  }));

  return (
    <div className="min-h-screen bg-[#07080D] text-slate-100 flex flex-col selection:bg-indigo-500/30">
      <Navbar />

      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <Sidebar className="hidden md:flex flex-shrink-0" />

        {/* Main Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 overflow-y-auto">
          
          {/* Top Welcome Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Good afternoon, Team.
                </h1>
                <Badge variant="cyan" className="font-mono text-[10px]">Sprint Q4 Active</Badge>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Here is your project execution velocity, active blockers, and AI meeting memory.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/analyze">
                <Button variant="primary" size="sm" icon={Sparkles} className="shadow-glow-sm">
                  Analyze New Meeting
                </Button>
              </Link>
            </div>
          </div>

          {/* Top Metrics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              title="Extracted Decisions"
              value="12"
              change="100% Confirmed"
              changeType="positive"
              icon={Sparkles}
              color="indigo"
            />
            <MetricCard
              title="Active Tasks"
              value="18"
              change="+4 this week"
              changeType="positive"
              icon={CheckSquare}
              color="cyan"
            />
            <MetricCard
              title="Blocked Tasks"
              value="3"
              change="Needs Action"
              changeType="negative"
              icon={AlertTriangle}
              color="rose"
            />
            <MetricCard
              title="Team Velocity"
              value="78%"
              change="+12% vs last sync"
              changeType="positive"
              icon={TrendingUp}
              color="emerald"
            />
          </div>

          {/* Priority Task Table */}
          <TaskTable />

          {/* Visual Dependencies Graph */}
          <DependencyGraph />

          {/* Team Progress Chart & Recent Meetings Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Team Progress with Recharts */}
            <div className="lg:col-span-6 glass-panel p-5 border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-400" /> Individual Progress Breakdown
                  </h3>
                  <p className="text-xs text-slate-400">Task completion rates per team member</p>
                </div>
                <Link to="/progress" className="text-xs text-indigo-400 hover:text-indigo-300 font-mono">
                  View Detail →
                </Link>
              </div>

              <div className="h-52 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} unit="%" domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                      formatter={(val) => [`${val}%`, 'Completion Rate']}
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

            {/* Right: Project Memory & Diff Quick Access */}
            <div className="lg:col-span-6 glass-panel p-5 border-slate-800 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                    <FolderKanban className="w-4 h-4 text-purple-400" /> Recent Project Diffs
                  </h3>
                  <Badge variant="cyan" className="font-mono text-[10px]">Memory Active</Badge>
                </div>

                <div className="mt-3 space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-white block">Meeting #04 → Meeting #05</span>
                      <span className="text-[11px] text-amber-400">Launch Date Shifted (Sep 30 → Oct 7)</span>
                    </div>
                    <Link to="/diff">
                      <Button variant="outline" size="sm" className="text-[11px] py-1 px-2.5">
                        Compare
                      </Button>
                    </Link>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-white block">Meeting #03 → Meeting #04</span>
                      <span className="text-[11px] text-emerald-400">AI Confidence threshold benchmarked</span>
                    </div>
                    <Link to="/diff">
                      <Button variant="outline" size="sm" className="text-[11px] py-1 px-2.5">
                        Compare
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-center">
                <Link to="/diff" className="text-xs text-purple-400 hover:text-purple-300 font-mono font-medium">
                  Open Project Memory Diff Engine →
                </Link>
              </div>
            </div>

          </div>

          {/* Recent Meetings Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Mic className="w-4 h-4 text-indigo-400" /> Recent Meeting Intelligence Sessions
              </h3>
              <Link to="/analyze" className="text-xs text-indigo-400 hover:text-indigo-300 font-mono">
                + Upload New Audio
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockMeetings.map((m) => (
                <MeetingCard key={m.id} meeting={m} />
              ))}
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
