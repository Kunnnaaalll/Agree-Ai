import React, { useState } from 'react';
import { CheckCircle2, Clock, AlertTriangle, AlertCircle, Filter, ChevronDown } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { mockTasks } from '../../data/mockTasks';

export function TaskTable() {
  const [filter, setFilter] = useState('all');

  const filteredTasks = mockTasks.filter(t => {
    if (filter === 'blocked') return t.isBlocked;
    if (filter === 'urgent') return t.urgency === 'Urgent';
    if (filter === 'in_progress') return t.status === 'In Progress';
    return true;
  });

  return (
    <div className="glass-panel p-5 border-slate-800 space-y-4">
      
      {/* Table Header & Filter controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-base font-bold text-white tracking-tight">Priority Task Execution Matrix</h3>
          <p className="text-xs text-slate-400">Extracted action items mapped with priority & blocker state</p>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg transition-all ${filter === 'all' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'}`}
          >
            All ({mockTasks.length})
          </button>
          <button
            onClick={() => setFilter('blocked')}
            className={`px-3 py-1 rounded-lg transition-all ${filter === 'blocked' ? 'bg-rose-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Blocked (1)
          </button>
          <button
            onClick={() => setFilter('urgent')}
            className={`px-3 py-1 rounded-lg transition-all ${filter === 'urgent' ? 'bg-purple-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Urgent (2)
          </button>
        </div>
      </div>

      {/* Task Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
              <th className="py-3 px-3">Task Title</th>
              <th className="py-3 px-3">Owner(s)</th>
              <th className="py-3 px-3">Priority</th>
              <th className="py-3 px-3">Urgency</th>
              <th className="py-3 px-3">Deadline</th>
              <th className="py-3 px-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {filteredTasks.map((task) => (
              <tr key={task.id} className="hover:bg-slate-900/50 transition-colors group">
                <td className="py-3.5 px-3 max-w-xs font-medium text-white">
                  <div className="space-y-1">
                    <span className="group-hover:text-indigo-300 transition-colors">{task.title}</span>
                    {task.isBlocked && (
                      <div className="flex items-center gap-1 text-[10px] text-rose-400 font-mono">
                        <AlertTriangle className="w-3 h-3" /> Blocked by: {task.blockedBy}
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-3.5 px-3 font-semibold text-slate-200">
                  {task.owner}
                </td>
                <td className="py-3.5 px-3">
                  <Badge variant={task.priority.toLowerCase()}>{task.priority}</Badge>
                </td>
                <td className="py-3.5 px-3">
                  <Badge variant={task.urgency === 'Urgent' ? 'urgent' : task.urgency === 'High' ? 'warning' : 'outline'}>
                    {task.urgency}
                  </Badge>
                </td>
                <td className="py-3.5 px-3 font-mono text-slate-400">
                  {task.deadline}
                </td>
                <td className="py-3.5 px-3">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-mono text-[10px] font-semibold border ${
                    task.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : task.status === 'Blocked'
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                  }`}>
                    {task.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
