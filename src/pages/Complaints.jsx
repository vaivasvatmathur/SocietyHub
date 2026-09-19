import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, AlertCircle, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';
import { FilterChip } from '../components/FilterChip';
import { ComplaintCard } from '../components/ComplaintCard';
import { BottomNavigation } from '../components/BottomNavigation';

export const Complaints = () => {
  const navigate = useNavigate();
  const { complaints } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const filters = ['All', 'Open', 'In Progress', 'Resolved'];

  const filteredComplaints = complaints.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.status.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader
          title="My Complaints"
          subtitle={`${complaints.length} registered tickets`}
          rightAction={
            <button
              onClick={() => navigate('/complaints/new')}
              className="flex items-center gap-1 bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-xl font-semibold text-xs transition active-press shadow-soft-sm"
            >
              <Plus className="w-4 h-4 stroke-[2]" />
              <span>Raise</span>
            </button>
          }
        />

        <div className="p-4 space-y-3.5">
          {/* Horizontal Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {filters.map((filter) => {
              const count =
                filter === 'All'
                  ? complaints.length
                  : complaints.filter((c) => c.status.toLowerCase() === filter.toLowerCase()).length;
              return (
                <FilterChip
                  key={filter}
                  label={filter}
                  count={count}
                  active={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              );
            })}
          </div>

          {/* Complaints List Container */}
          {filteredComplaints.length > 0 ? (
            <div className="space-y-3">
              {filteredComplaints.map((complaint) => (
                <ComplaintCard
                  key={complaint.id}
                  complaint={complaint}
                  onClick={() => setSelectedComplaint(complaint)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 bg-white rounded-2xl border border-surface-border my-4 shadow-soft">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-2">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-navy-900 text-xs">No complaints found</h3>
              <p className="text-[11px] text-slate-400 mt-1 max-w-[200px] mx-auto">
                No tickets matching status "{activeFilter}".
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Ticket Detail Sheet */}
      {selectedComplaint && (
        <div className="fixed inset-0 bg-navy-950/60 backdrop-blur-xs z-50 flex items-end justify-center p-0">
          <div className="bg-white w-full max-w-[390px] rounded-t-3xl p-5 shadow-2xl space-y-4 animate-in slide-in-from-bottom">
            <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-1"></div>
            
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-md">
                  {selectedComplaint.id}
                </span>
                <h3 className="font-bold text-navy-900 text-base mt-2 tracking-tight">
                  {selectedComplaint.title}
                </h3>
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-navy-800 border border-slate-200">
                {selectedComplaint.status}
              </span>
            </div>

            <div className="bg-surface-canvas p-3.5 rounded-xl border border-surface-border space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Category:</span>
                <span className="font-semibold text-navy-900">{selectedComplaint.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date Raised:</span>
                <span className="font-semibold text-navy-900">{selectedComplaint.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold text-navy-900">{selectedComplaint.location}</span>
              </div>
              {selectedComplaint.priority && (
                <div className="flex justify-between pt-1 border-t border-slate-200">
                  <span className="text-slate-500">Priority Level:</span>
                  <span className="font-bold text-amber-700">{selectedComplaint.priority}</span>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Issue Description</h4>
              <p className="text-xs text-slate-700 leading-relaxed bg-surface-canvas p-3 rounded-xl border border-surface-border">
                {selectedComplaint.description || "No additional description provided."}
              </p>
            </div>

            <button
              onClick={() => setSelectedComplaint(null)}
              className="w-full bg-navy-900 text-white font-semibold text-xs py-3 rounded-xl hover:bg-navy-800 transition active-press"
            >
              Close Ticket View
            </button>
          </div>
        </div>
      )}

      <BottomNavigation />
    </div>
  );
};
