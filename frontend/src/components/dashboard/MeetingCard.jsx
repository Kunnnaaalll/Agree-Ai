import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Clock, Users, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function MeetingCard({ meeting }) {
  return (
    <div className="glass-panel p-5 border-slate-800/80 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-4 group">
      <div className="space-y-3">
        
        {/* Top Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              Meeting #{meeting.number}
            </span>
            <span className="text-slate-700">•</span>
            <span className="text-xs text-slate-400 font-mono">{meeting.date}</span>
          </div>

          <Badge variant="success" className="font-mono text-[10px]">
            {meeting.confidence}% AI Confidence
          </Badge>
        </div>

        {/* Title */}
        <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
          {meeting.title}
        </h4>

        {/* Summary Snippet */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {meeting.summary}
        </p>

        {/* Extracted Stats */}
        <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
            <span className="text-slate-400">Decisions</span>
            <span className="font-bold text-emerald-400">{meeting.decisions.length}</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
            <span className="text-slate-400">Tasks</span>
            <span className="font-bold text-indigo-400">{meeting.actionItems.length}</span>
          </div>
        </div>

        {/* Participants avatars */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex -space-x-2">
            {meeting.participants.map((p, idx) => (
              <div
                key={idx}
                title={`${p.name} (${p.role})`}
                className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 border-2 border-[#090A11] flex items-center justify-center text-[10px] font-bold text-white"
              >
                {p.avatar}
              </div>
            ))}
          </div>
          <span className="text-[10px] text-slate-500 font-mono">{meeting.duration}</span>
        </div>

      </div>

      <div className="pt-3 border-t border-slate-800/60">
        <Link to={`/meeting/${meeting.id}`}>
          <Button variant="outline" size="sm" icon={ArrowRight} className="w-full text-xs">
            Inspect Intelligence Detail
          </Button>
        </Link>
      </div>
    </div>
  );
}
