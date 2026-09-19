import React from 'react';
import { PhoneCall, Phone, ShieldAlert, Wrench, AlertTriangle } from 'lucide-react';
import { emergencyContactsList } from '../data/mockData';
import { AppHeader } from '../components/AppHeader';
import { BottomNavigation } from '../components/BottomNavigation';

export const EmergencyContacts = () => {
  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Emergency Contacts" showBack />

        <div className="p-4 space-y-4 pb-6">
          {/* Top Quick Dial Banner */}
          <div className="bg-rose-900 text-white rounded-3xl p-4 shadow-soft-md flex items-center justify-between border border-rose-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">24x7 Society Gate Desk</h3>
                <p className="text-xs text-rose-200 mt-0.5">+91 22 2780 1200</p>
              </div>
            </div>

            <a
              href="tel:02227801200"
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-soft-sm active-press flex items-center space-x-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Dial Gate</span>
            </a>
          </div>

          {/* Directory List */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-0.5">
              1-Tap Helplines & On-Call Technicians
            </h3>

            <div className="space-y-2.5">
              {emergencyContactsList.map((contact) => (
                <div
                  key={contact.id}
                  className="bg-white rounded-2xl p-3.5 border border-surface-border shadow-soft flex items-center justify-between hover:shadow-soft-md transition-all"
                >
                  <div className="flex-1 pr-2">
                    <div className="flex items-center space-x-2">
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                        contact.tag === 'Emergency' || contact.tag === 'Lift Rescue'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : contact.tag === 'Urgent'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-brand-50 text-brand-700 border border-brand-200'
                      }`}>
                        {contact.tag}
                      </span>
                    </div>

                    <h4 className="font-bold text-navy-900 text-xs mt-1.5">{contact.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-medium">{contact.subtitle}</p>
                    <p className="text-xs font-mono font-bold text-navy-800 mt-0.5">{contact.number}</p>
                  </div>

                  <a
                    href={`tel:${contact.number.replace(/[^0-9+]/g, '')}`}
                    className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-soft-sm active-press flex items-center space-x-1 shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
