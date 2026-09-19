import React from 'react';
import { StatusBadge } from './StatusBadge';
import { Clock3, UserRound, Package, Wrench, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const VisitorCard = ({ visitor }) => {
  const { showToast } = useApp();

  const getPurposeIcon = (purpose) => {
    const p = (purpose || '').toLowerCase();
    if (p.includes('delivery')) return Package;
    if (p.includes('service')) return Wrench;
    return UserRound;
  };

  const Icon = getPurposeIcon(visitor.purpose);

  const handleSharePass = (e) => {
    e.stopPropagation();
    showToast(`Visitor Pass ${visitor.passCode} link copied to clipboard`);
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft hover:shadow-soft-md transition-all duration-150">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-surface-canvas flex items-center justify-center text-navy-800 font-semibold text-sm shrink-0 border border-surface-border">
            <Icon className="w-5 h-5 text-navy-800" />
          </div>
          <div>
            <h4 className="font-bold text-navy-900 text-sm">{visitor.name}</h4>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5 font-medium">
              <span className="text-slate-700">{visitor.purpose}</span>
              {visitor.company && <span className="text-slate-400">• {visitor.company}</span>}
            </div>
          </div>
        </div>

        <StatusBadge text={visitor.status} />
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
        <div className="flex items-center text-slate-500 gap-1.5 font-medium">
          <Clock3 className="w-3.5 h-3.5 text-slate-400" />
          <span>{visitor.date} • {visitor.time}</span>
        </div>

        {visitor.status === 'Expected' && visitor.passCode && (
          <button
            onClick={handleSharePass}
            className="flex items-center gap-1 text-brand-600 hover:text-brand-700 font-semibold text-xs active-press"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Pass</span>
          </button>
        )}
      </div>
    </div>
  );
};
