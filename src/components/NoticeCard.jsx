import React from 'react';
import { ChevronRight, CalendarDays } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const NoticeCard = ({ notice, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl p-4 border border-surface-border shadow-soft hover:shadow-soft-md transition-all duration-150 cursor-pointer active-press relative ${
        !notice.read ? 'border-brand-500/40 bg-brand-50/20' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <StatusBadge type={notice.category} />
        <div className="flex items-center text-slate-400 text-xs gap-1">
          <CalendarDays className="w-3.5 h-3.5 text-slate-400" />
          <span>{notice.date}</span>
        </div>
      </div>

      <h3 className="font-bold text-navy-900 text-sm mb-1 line-clamp-1 flex items-center gap-1.5">
        {!notice.read && <span className="w-2 h-2 rounded-full bg-brand-600 inline-block shrink-0" />}
        <span>{notice.title}</span>
      </h3>

      <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed mb-3 font-normal">
        {notice.summary || notice.content}
      </p>

      <div className="flex items-center justify-between text-xs text-brand-600 font-semibold pt-2 border-t border-slate-100">
        <span>Read full notice</span>
        <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  );
};
