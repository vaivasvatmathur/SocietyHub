import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, MapPin, Users, ShieldAlert, Calendar, Check, ChevronRight } from 'lucide-react';
import { initialAmenities } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';

export const AmenityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBooking, resident } = useApp();

  const amenity = initialAmenities.find(a => a.id === id) || initialAmenities[0];

  const [selectedDate, setSelectedDate] = useState('Tomorrow (18 Sep)');
  const [selectedSlot, setSelectedSlot] = useState(amenity.availableSlots[0] || '6:00 PM – 9:00 PM');
  const [bookingPurpose, setBookingPurpose] = useState('Family Get-together');

  const handleConfirmBooking = () => {
    const booking = addBooking({
      amenityId: amenity.id,
      amenityName: amenity.name,
      date: selectedDate,
      timeSlot: selectedSlot,
      bookedFor: bookingPurpose,
      amountPaid: amenity.bookingFee
    });

    navigate('/amenities/confirmation', { state: { booking, amenity } });
  };

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title={amenity.name} showBack />

        <div className="p-4 space-y-4 pb-6">
          {/* Main Info Card */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full">
                {amenity.category}
              </span>
              <span className="text-xs font-bold text-navy-900 bg-surface-subtle border border-surface-border px-2.5 py-0.5 rounded-md">
                {amenity.bookingFee}
              </span>
            </div>

            <h1 className="text-lg font-bold text-navy-900 tracking-tight">{amenity.name}</h1>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">{amenity.description}</p>

            <div className="bg-surface-canvas rounded-xl p-3 border border-surface-border space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center space-x-1.5 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Location:</span>
                </span>
                <span className="font-semibold text-navy-900">{amenity.location}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center space-x-1.5 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Timings:</span>
                </span>
                <span className="font-semibold text-navy-900">{amenity.timings}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center space-x-1.5 text-slate-500">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>Capacity:</span>
                </span>
                <span className="font-semibold text-navy-900">{amenity.capacity}</span>
              </div>
            </div>
          </div>

          {/* Guidelines Box */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Usage Rules & Guidelines</span>
            </h3>

            <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside pt-1">
              {amenity.rules.map((rule, idx) => (
                <li key={idx} className="leading-snug">{rule}</li>
              ))}
            </ul>
          </div>

          {/* Slot Selection Form */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3.5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Select Booking Slot
            </h3>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Booking Date
              </label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-surface-canvas text-navy-900 text-xs rounded-xl border border-surface-border p-2.5 outline-none font-medium"
              >
                <option value="Today (17 Sep)">Today (17 Sep)</option>
                <option value="Tomorrow (18 Sep)">Tomorrow (18 Sep)</option>
                <option value="19 Sep 2026">Saturday (19 Sep)</option>
                <option value="20 Sep 2026">Sunday (20 Sep)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Available Time Slots
              </label>
              <div className="space-y-2">
                {amenity.availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`w-full p-2.5 rounded-xl text-xs font-semibold border flex items-center justify-between transition-all ${
                      selectedSlot === slot
                        ? 'border-brand-600 bg-brand-50 text-brand-800'
                        : 'border-surface-border bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{slot}</span>
                    {selectedSlot === slot && <Check className="w-4 h-4 text-brand-600" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Event / Booking Note
              </label>
              <input
                type="text"
                value={bookingPurpose}
                onChange={(e) => setBookingPurpose(e.target.value)}
                placeholder="e.g. Birthday Party, Badminton Match"
                className="w-full bg-surface-canvas text-navy-900 text-xs rounded-xl border border-surface-border p-2.5 outline-none font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="p-4 bg-white border-t border-surface-border sticky bottom-0">
        <button
          onClick={handleConfirmBooking}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-3.5 rounded-xl shadow-soft-sm active-press transition"
        >
          Confirm & Reserve {amenity.name} Slot
        </button>
      </div>
    </div>
  );
};
