import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, Calendar, Clock, MapPin, QrCode, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PrimaryButton } from '../components/PrimaryButton';

export const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { resident, showToast } = useApp();

  const booking = location.state?.booking || {
    id: "BK1024",
    amenityName: "Community Hall",
    date: "18 Sep 2026",
    timeSlot: "6:00 PM – 9:00 PM",
    amountPaid: "₹1,500",
    bookingRef: "REF-2026-8910",
    bookedFor: "Family Get-together"
  };

  return (
    <div className="min-h-full flex flex-col justify-between p-5 bg-surface-canvas">
      <div>
        <div className="pt-6 text-center flex flex-col items-center">
          <div className="w-14 h-14 bg-brand-50 border border-brand-200 rounded-full flex items-center justify-center text-brand-600 mb-3 animate-bounce">
            <CheckCircle2 className="w-8 h-8 stroke-[2]" />
          </div>
          <h2 className="text-xl font-extrabold text-navy-900 tracking-tight">Booking Confirmed!</h2>
          <p className="text-xs text-slate-500 mt-1 max-w-[240px]">
            Your slot for <span className="font-bold text-navy-900">{booking.amenityName}</span> has been reserved.
          </p>
        </div>

        {/* Digital Booking Pass Card */}
        <div className="mt-6 bg-navy-900 text-white rounded-3xl p-5 shadow-soft-md relative overflow-hidden border border-navy-800">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs">
            <span className="text-slate-400 font-medium">Booking Ref</span>
            <span className="font-mono font-bold text-brand-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
              {booking.bookingRef}
            </span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-slate-400 font-medium">Facility</p>
              <h3 className="text-lg font-bold text-white mt-0.5">{booking.amenityName}</h3>
              <p className="text-xs text-brand-300 mt-0.5 font-medium">{booking.bookedFor}</p>
            </div>
            <div className="w-14 h-14 bg-white p-1 rounded-xl shadow-soft flex items-center justify-center shrink-0">
              <QrCode className="w-full h-full text-navy-900" />
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-3 text-xs space-y-2 border border-white/10">
            <div className="flex justify-between">
              <span className="text-slate-400">Resident:</span>
              <span className="font-semibold text-white">{resident.name} ({resident.flat})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Date:</span>
              <span className="font-semibold text-white">{booking.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Slot Time:</span>
              <span className="font-semibold text-white">{booking.timeSlot}</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-white/10">
              <span className="text-slate-400">Fee Paid:</span>
              <span className="font-bold text-brand-300">{booking.amountPaid}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 space-y-3">
        <button
          onClick={() => showToast("Pass saved to photos")}
          className="w-full bg-white hover:bg-slate-50 text-navy-900 font-semibold text-xs py-3 rounded-2xl border border-surface-border shadow-soft flex items-center justify-center space-x-1.5 active-press"
        >
          <Share2 className="w-4 h-4 text-brand-600" />
          <span>Save Booking Pass</span>
        </button>

        <PrimaryButton onClick={() => navigate('/bookings')} className="bg-brand-600 hover:bg-brand-700">
          View My Bookings
        </PrimaryButton>
      </div>
    </div>
  );
};
