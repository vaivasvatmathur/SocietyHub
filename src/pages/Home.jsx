import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  AlertCircle,
  Users,
  CreditCard,
  Dumbbell,
  Calendar,
  Building2,
  PhoneCall,
  Megaphone,
  ReceiptText,
  Clock,
  MapPin,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BottomNavigation } from '../components/BottomNavigation';
import { ResidentialBanner } from '../components/ResidentialBanner';

export const Home = () => {
  const navigate = useNavigate();
  const { notices, payments, events } = useApp();

  // Highlight notice
  const importantNotice = notices.find(n => n.isImportant) || notices[0];

  // Pending payment count
  const pendingBill = payments.find(p => p.status === 'Pending');

  // Service module icons central registry using Lucide icons
  const serviceModules = [
    { title: "Notices", icon: FileText, path: "/notices", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { title: "Complaints", icon: AlertCircle, path: "/complaints", color: "bg-amber-50 text-amber-700 border-amber-200" },
    { title: "Visitors", icon: Users, path: "/visitors", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { title: "Payments", icon: CreditCard, path: "/payments", color: "bg-purple-50 text-purple-700 border-purple-200", badge: pendingBill ? "Due" : null },
    { title: "Amenities", icon: Dumbbell, path: "/amenities", color: "bg-teal-50 text-teal-700 border-teal-200" },
    { title: "Events", icon: Calendar, path: "/events", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    { title: "Society Info", icon: Building2, path: "/society-info", color: "bg-slate-100 text-slate-800 border-slate-200" },
    { title: "Emergency", icon: PhoneCall, path: "/emergency", color: "bg-rose-50 text-rose-700 border-rose-200" }
  ];

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        {/* Top Header Banner */}
        <ResidentialBanner />

        <div className="p-4 space-y-4 pb-6">
          {/* Pending Maintenance Bill Alert Strip */}
          {pendingBill && (
            <div
              onClick={() => navigate('/payments')}
              className="bg-amber-500/10 border border-amber-400/40 rounded-2xl p-3.5 flex items-center justify-between cursor-pointer hover:bg-amber-500/15 transition-all active-press"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-soft-sm">
                  <ReceiptText className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">
                    Maintenance Bill Due • ₹{pendingBill.amount.toLocaleString('en-IN')}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    Due by {pendingBill.dueDate} ({pendingBill.month})
                  </p>
                </div>
              </div>
              <div className="flex items-center text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-xl">
                <span>Pay Now</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </div>
            </div>
          )}

          {/* Highlighted Announcement / Notice Card */}
          {importantNotice && (
            <div className="bg-navy-900 text-white rounded-2xl p-4 shadow-soft-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-500/20 text-brand-300 border border-brand-500/30 px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                  <Megaphone className="w-3 h-3 text-brand-400 shrink-0" />
                  <span>Important Announcement</span>
                </span>
                <span className="text-[11px] text-slate-300 font-medium">Block A & B</span>
              </div>

              <h3 className="font-bold text-base text-white mt-2 tracking-tight">
                {importantNotice.title}
              </h3>

              <p className="text-xs text-slate-300 mt-1 font-medium flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{importantNotice.date} • {importantNotice.timestamp}</span>
              </p>

              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-300 truncate max-w-[200px]">
                  {importantNotice.summary}
                </span>
                <button
                  onClick={() => navigate(`/notices/${importantNotice.id}`)}
                  className="text-xs font-bold text-brand-400 flex items-center space-x-0.5 hover:text-brand-300 active-press shrink-0"
                >
                  <span>View Notice</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* 4 x 2 Services & Modules Grid */}
          <div>
            <div className="flex items-center justify-between mb-2.5 px-0.5">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Services & Modules
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {serviceModules.map((action, idx) => {
                const Icon = action.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => navigate(action.path)}
                    className="relative bg-white p-2.5 rounded-2xl border border-surface-border shadow-soft hover:shadow-soft-md flex flex-col items-center justify-center text-center transition-all active-press"
                  >
                    {action.badge && (
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full" />
                    )}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1.5 border ${action.color}`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-semibold text-navy-900 tracking-tight leading-snug">
                      {action.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Upcoming Society Event */}
          <div>
            <div className="flex items-center justify-between mb-2.5 px-0.5">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Upcoming Event</span>
              </h2>
              <button
                onClick={() => navigate('/events')}
                className="text-xs font-semibold text-brand-600 hover:underline flex items-center space-x-0.5"
              >
                <span>View Calendar</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {events && events.length > 0 && (
              <div
                onClick={() => navigate(`/events/${events[0].id}`)}
                className="bg-white rounded-2xl p-3.5 border border-surface-border shadow-soft flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all active-press"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-200 text-brand-700 flex flex-col items-center justify-center shrink-0 font-bold">
                    <Calendar className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy-900 truncate max-w-[190px]">
                      {events[0].title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 flex items-center space-x-2">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{events[0].time}</span>
                      </span>
                      <span className="flex items-center space-x-1 truncate max-w-[90px]">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate">{events[0].venue}</span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {events[0].isRSVPed ? 'Going ✓' : 'RSVP'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Society Security Helpline Strip */}
          <div className="bg-surface-subtle p-3 rounded-2xl border border-surface-border flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center">
                <PhoneCall className="w-4 h-4 text-navy-900 stroke-[2]" />
              </div>
              <div>
                <p className="text-xs font-bold text-navy-900">Gate Security Desk Intercom: #204</p>
                <p className="text-[11px] text-slate-500 font-medium">Main Gate: +91 22 2780 1200</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/emergency')}
              className="text-xs text-brand-600 font-bold hover:underline"
            >
              Helplines
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};
