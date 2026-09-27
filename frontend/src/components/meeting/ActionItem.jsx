import React, { useState } from 'react';
import { CheckSquare, Calendar, Mail, Clock, Users, Send, Check } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function ActionItem({ item }) {
  const [scheduled, setScheduled] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
      
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-white">
              {item.title}
            </h4>
          </div>
          <p className="text-xs text-slate-400">
            Owners: <span className="text-slate-200 font-semibold">{item.owners.join(', ')}</span>
          </p>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <Badge variant={item.priority.toLowerCase()}>{item.priority}</Badge>
          <Badge variant={item.urgency === 'Urgent' ? 'urgent' : 'warning'}>{item.urgency}</Badge>
        </div>
      </div>

      {/* Details Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono pt-1">
        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
          <span className="text-[10px] text-slate-500 block">Deadline</span>
          <span className="text-slate-200 font-semibold">{item.deadline}</span>
        </div>

        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
          <span className="text-[10px] text-slate-500 block">Confidence</span>
          <span className="text-emerald-400 font-bold">{item.confidence}%</span>
        </div>

        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
          <span className="text-[10px] text-slate-500 block">Status</span>
          <span className="text-indigo-400 font-semibold">{item.status}</span>
        </div>

        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
          <span className="text-[10px] text-slate-500 block">Calendar Slot</span>
          <span className="text-cyan-300 font-semibold truncate block">{item.calendarSlot || "Pending"}</span>
        </div>
      </div>

      {/* Email / Calendar Action Toolbar */}
      <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
        {item.emailDraft && (
          <div className="text-[11px] text-slate-400 italic line-clamp-1 flex-1">
            "{item.emailDraft}"
          </div>
        )}

        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant={scheduled ? "secondary" : "outline"}
            size="sm"
            onClick={() => setScheduled(!scheduled)}
            className="text-[11px] py-1"
          >
            {scheduled ? <Check className="w-3 h-3 text-emerald-400 mr-1 inline" /> : <Calendar className="w-3 h-3 mr-1 inline" />}
            {scheduled ? "Scheduled" : "Sync Calendar"}
          </Button>

          <Button
            variant={emailSent ? "secondary" : "cyan"}
            size="sm"
            onClick={() => setEmailSent(!emailSent)}
            className="text-[11px] py-1"
          >
            {emailSent ? <Check className="w-3 h-3 text-emerald-400 mr-1 inline" /> : <Mail className="w-3 h-3 mr-1 inline" />}
            {emailSent ? "Email Drafted" : "Draft Followup"}
          </Button>
        </div>
      </div>

    </div>
  );
}
