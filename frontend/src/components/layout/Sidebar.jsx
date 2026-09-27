import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Mic,
  CheckSquare,
  Users,
  TrendingUp,
  GitCompare,
  Sparkles,
  ChevronRight,
  FolderKanban
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/Badge';

export function Sidebar({ className }) {
  const location = useLocation();

  const navItems = [
    { label: "Overview", path: "/dashboard", icon: LayoutDashboard },
    { label: "Meetings", path: "/meeting/m-105", icon: Mic, badge: "3 active" },
    { label: "Tasks", path: "/progress", icon: CheckSquare },
    { label: "Team", path: "/progress", icon: Users },
    { label: "Progress", path: "/progress", icon: TrendingUp },
    { label: "Project Memory", path: "/diff", icon: GitCompare, badge: "Diff" },
  ];

  return (
    <aside className={cn("w-64 bg-[#090A10]/90 backdrop-blur-xl border-r border-slate-800/80 flex flex-col justify-between p-4 min-h-[calc(100vh-5rem)]", className)}>
      <div className="space-y-6">
        
        {/* Project Selector dropdown simulation */}
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer group">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Active Workspace</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FolderKanban className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold text-white tracking-tight">Q4 SaaS Platform</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Action button */}
        <Link to="/analyze" className="block">
          <button className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Analyze New Meeting</span>
          </button>
        </Link>

        {/* Nav List */}
        <div className="space-y-1">
          <div className="px-3 pb-2 text-[10px] font-mono tracking-wider text-slate-500 uppercase">
            Navigation
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all group",
                  active
                    ? "bg-indigo-600/20 text-white border border-indigo-500/30 shadow-inner"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn("w-4 h-4 transition-colors", active ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300")} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <Badge variant={active ? "cyan" : "outline"} className="text-[10px] py-0 px-1.5">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer / Account status */}
      <div className="pt-4 border-t border-slate-800/80 space-y-3">
        <div className="glass-card p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
            KS
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-medium text-white truncate">Kunal Shah</span>
            <span className="text-[10px] text-slate-400 truncate">kunal@agreeai.io</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
