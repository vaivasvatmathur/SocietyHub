import React from 'react';
import { Clock3, MapPin, UsersRound, ChevronRight } from 'lucide-react';

export const AmenityCard = ({ amenity, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-surface-border rounded-2xl p-4 shadow-soft hover:shadow-soft-md transition-all duration-150 active-press cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between mb-2">
          <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
            {amenity.category}
          </span>
          <span className="text-xs font-medium text-navy-800 bg-surface-subtle px-2 py-0.5 rounded-md border border-surface-border">
            {amenity.bookingFee}
          </span>
        </div>

        <h3 className="text-base font-bold text-navy-900 tracking-tight mb-1">
          {amenity.name}
        </h3>

        <div className="space-y-1 mt-2.5 text-xs text-slate-500">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{amenity.location}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Clock3 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{amenity.timings}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <UsersRound className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Cap: {amenity.capacity}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-brand-600 font-semibold">
        <span>Book Slot</span>
        <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  );
};
