import React from 'react';
import { Calendar, Clock, MapPin, Users, CheckCircle } from 'lucide-react';

export const EventCard = ({ event, onClick, onRSVP }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-surface-border rounded-2xl p-4 shadow-soft hover:shadow-soft-md transition-all duration-150 cursor-pointer"
    >
      <div className="flex items-start justify-between">
        <span className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
          {event.category}
        </span>
        {event.isRSVPed && (
          <span className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Going</span>
          </span>
        )}
      </div>

      <h3 className="text-base font-bold text-navy-900 tracking-tight mt-2 mb-1">
        {event.title}
      </h3>

      <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-slate-600 bg-surface-canvas p-2.5 rounded-xl border border-surface-border">
        <div className="flex items-center space-x-1.5">
          <Calendar className="w-3.5 h-3.5 text-brand-600 shrink-0" />
          <span className="font-medium text-navy-900">{event.date}</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{event.time}</span>
        </div>
        <div className="col-span-2 flex items-center space-x-1.5">
          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{event.venue}</span>
        </div>
      </div>

      <div className="mt-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-1 text-xs text-slate-500 font-medium">
          <Users className="w-3.5 h-3.5 text-slate-400" />
          <span>{event.attendeesCount} Residents attending</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onRSVP && onRSVP(event.id);
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all active-press ${
            event.isRSVPed
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              : 'bg-brand-600 text-white hover:bg-brand-700 shadow-soft-sm'
          }`}
        >
          {event.isRSVPed ? 'Change RSVP' : 'RSVP Now'}
        </button>
      </div>
    </div>
  );
};
