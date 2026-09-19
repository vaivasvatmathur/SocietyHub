import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Plus, Trash2, ChevronRight, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';
import { BottomNavigation } from '../components/BottomNavigation';

export const MyBookings = () => {
  const navigate = useNavigate();
  const { bookings, cancelBooking } = useApp();

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader
          title="My Bookings"
          subtitle={`${bookings.length} reserved slots`}
          showBack
          rightAction={
            <button
              onClick={() => navigate('/amenities')}
              className="flex items-center gap-1 bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-xl font-semibold text-xs transition active-press shadow-soft-sm"
            >
              <Plus className="w-4 h-4 stroke-[2]" />
              <span>Book</span>
            </button>
          }
        />

        <div className="p-4 space-y-4 pb-6">
          {bookings.length > 0 ? (
            <div className="space-y-3">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-md">
                      {b.bookingRef || b.id}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      b.isPast
                        ? 'bg-slate-100 text-slate-600 border border-slate-200'
                        : 'bg-brand-50 text-brand-700 border border-brand-200'
                    }`}>
                      {b.isPast ? 'Completed' : b.status || 'Confirmed'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-navy-900 tracking-tight">{b.amenityName}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">{b.bookedFor}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-surface-canvas p-2.5 rounded-xl border border-surface-border">
                    <div className="flex items-center space-x-1.5 text-slate-600">
                      <Calendar className="w-3.5 h-3.5 text-brand-600" />
                      <span className="font-semibold text-navy-900">{b.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span className="truncate">{b.timeSlot}</span>
                    </div>
                  </div>

                  {!b.isPast && (
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">Fee: {b.amountPaid}</span>
                      <button
                        onClick={() => cancelBooking(b.id)}
                        className="text-xs text-rose-600 font-semibold hover:underline flex items-center space-x-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Cancel Slot</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 bg-white rounded-2xl border border-surface-border my-4 shadow-soft">
              <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <h3 className="font-bold text-navy-900 text-xs">No facility bookings</h3>
              <p className="text-[11px] text-slate-400 mt-1">You haven't reserved any amenities yet.</p>
              <button
                onClick={() => navigate('/amenities')}
                className="mt-3 bg-brand-600 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-soft-sm"
              >
                Browse Facilities
              </button>
            </div>
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
