import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, UserCheck, Clock3 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';
import { VisitorCard } from '../components/VisitorCard';
import { BottomNavigation } from '../components/BottomNavigation';

export const Visitors = () => {
  const navigate = useNavigate();
  const { visitors } = useApp();

  const upcomingVisitors = visitors.filter((v) => v.status === 'Expected');
  const recentVisitors = visitors.filter((v) => v.status !== 'Expected');

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader
          title="Visitors"
          subtitle={`${visitors.length} total entries recorded`}
          rightAction={
            <button
              onClick={() => navigate('/visitors/new')}
              className="flex items-center gap-1 bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-xl font-semibold text-xs transition active-press shadow-soft-sm"
            >
              <Plus className="w-4 h-4 stroke-[2]" />
              <span>Add</span>
            </button>
          }
        />

        <div className="p-4 space-y-4">
          {/* Quick Pre-Approve Action Row */}
          <div className="bg-white p-3.5 rounded-2xl border border-surface-border shadow-soft flex items-center justify-between">
            <div>
              <h3 className="font-bold text-navy-900 text-xs">Expecting guest or delivery?</h3>
              <p className="text-[11px] text-slate-500 font-medium">Pre-approve entry for instant security gate pass.</p>
            </div>
            <button
              onClick={() => navigate('/visitors/new')}
              className="bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold px-3 py-2 rounded-xl shrink-0 active-press ml-2 shadow-soft-sm flex items-center space-x-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Visitor</span>
            </button>
          </div>

          {/* Upcoming Visitors Section */}
          <div>
            <div className="flex items-center justify-between mb-2 px-0.5">
              <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock3 className="w-3.5 h-3.5 text-brand-600" />
                <span>Upcoming ({upcomingVisitors.length})</span>
              </h2>
            </div>

            {upcomingVisitors.length > 0 ? (
              <div className="space-y-3">
                {upcomingVisitors.map((visitor) => (
                  <VisitorCard key={visitor.id} visitor={visitor} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-4 rounded-2xl border border-surface-border text-center shadow-soft">
                <p className="text-xs text-slate-500 font-medium">No upcoming visitors pre-approved.</p>
              </div>
            )}
          </div>

          {/* Recent Visitors Section */}
          <div>
            <div className="flex items-center justify-between mb-2 px-0.5">
              <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-slate-500" />
                <span>Recent Visitor History</span>
              </h2>
            </div>

            {recentVisitors.length > 0 ? (
              <div className="space-y-3">
                {recentVisitors.map((visitor) => (
                  <VisitorCard key={visitor.id} visitor={visitor} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-4 rounded-2xl border border-surface-border text-center shadow-soft">
                <p className="text-xs text-slate-500 font-medium">No recent visitor logs recorded.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
