import React from 'react';
import { StatusBadge } from './StatusBadge';
import { MapPin, CalendarDays, ChevronRight } from 'lucide-react';

export const ComplaintCard = ({ complaint, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft hover:shadow-soft-md transition-all duration-150 cursor-pointer active-press"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">{complaint.id}</span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs font-medium text-slate-600">{complaint.category}</span>
        </div>
        <StatusBadge text={complaint.status} />
      </div>

      <h3 className="font-bold text-navy-900 text-sm mb-1.5 leading-snug tracking-tight">
        {complaint.title}
      </h3>

      {complaint.description && (
        <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed font-normal">
          {complaint.description}
        </p>
      )}

      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
        <div className="flex items-center gap-1 text-slate-500 truncate max-w-[200px]">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
          <span className="truncate">{complaint.location || 'Block B - Flat B-204'}</span>
        </div>

        <div className="flex items-center gap-1 shrink-0 text-slate-400">
          <CalendarDays className="w-3.5 h-3.5" />
          <span>{complaint.date}</span>
        </div>
      </div>
    </div>
  );
};
