import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, CheckCircle, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';

export const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, toggleRSVP, showToast } = useApp();

  const event = events.find(e => e.id === id) || events[0];

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Event Details" showBack />

        <div className="p-4 space-y-4 pb-6">
          {/* Main Event Header Card */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                {event.category}
              </span>
              {event.isRSVPed && (
                <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200 flex items-center space-x-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>RSVP Confirmed</span>
                </span>
              )}
            </div>

            <h1 className="text-lg font-bold text-navy-900 tracking-tight leading-snug">{event.title}</h1>

            <div className="bg-surface-canvas rounded-xl p-3 border border-surface-border space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center space-x-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-brand-600" />
                  <span>Date:</span>
                </span>
                <span className="font-bold text-navy-900">{event.date}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center space-x-1.5 text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Time:</span>
                </span>
                <span className="font-semibold text-navy-900">{event.time}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center space-x-1.5 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Venue:</span>
                </span>
                <span className="font-semibold text-navy-900">{event.venue}</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-600 leading-relaxed space-y-2 font-normal">
              <p>{event.description}</p>
              <p className="text-slate-400 text-[11px] font-medium">Organized by {event.organizer}</p>
            </div>
          </div>

          {/* Event Highlights List */}
          {event.highlights && (
            <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Event Highlights & Agenda
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {event.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Attendee Count */}
          <div className="bg-surface-subtle p-3.5 rounded-2xl border border-surface-border flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-brand-600" />
              <span className="font-bold text-navy-900">{event.attendeesCount} Residents Confirmed</span>
            </div>
            <button
              onClick={() => showToast("Event link copied to share with flatmates")}
              className="text-brand-600 font-bold hover:underline flex items-center space-x-1"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Invite</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action */}
      <div className="p-4 bg-white border-t border-surface-border sticky bottom-0">
        <button
          onClick={() => toggleRSVP(event.id)}
          className={`w-full font-bold text-xs py-3.5 rounded-xl shadow-soft-sm active-press transition ${
            event.isRSVPed
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              : 'bg-brand-600 text-white hover:bg-brand-700'
          }`}
        >
          {event.isRSVPed ? 'Cancel My RSVP' : 'Confirm RSVP & Add to Calendar'}
        </button>
      </div>
    </div>
  );
};
