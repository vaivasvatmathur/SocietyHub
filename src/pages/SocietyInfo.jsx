import React from 'react';
import { Building, ShieldCheck, Clock, Phone, MapPin, Users } from 'lucide-react';
import { societyInformation } from '../data/mockData';
import { AppHeader } from '../components/AppHeader';
import { BottomNavigation } from '../components/BottomNavigation';

export const SocietyInfo = () => {
  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Society Information" showBack />

        <div className="p-4 space-y-4 pb-6">
          {/* Main Hero Overview Card */}
          <div className="bg-navy-900 text-white rounded-3xl p-5 shadow-soft-md relative overflow-hidden border border-navy-800">
            <div className="inline-flex items-center space-x-1.5 bg-white/10 px-2.5 py-0.5 rounded-full text-brand-300 text-[11px] font-medium mb-2 border border-white/10">
              <Building className="w-3.5 h-3.5 text-brand-400" />
              <span>{societyInformation.tagline}</span>
            </div>
            
            <h1 className="text-xl font-extrabold text-white tracking-tight">
              {societyInformation.name}
            </h1>

            <p className="text-xs text-slate-300 mt-1 font-medium flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{societyInformation.address}</span>
            </p>

            <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px]">Registration No</span>
                <span className="font-mono font-bold text-white text-[11px]">{societyInformation.registrationNo}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">RERA Registration</span>
                <span className="font-mono font-bold text-brand-300 text-[11px]">{societyInformation.reraNo}</span>
              </div>
            </div>
          </div>

          {/* Infrastructure Metrics */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Campus & Infrastructure Overview
            </h3>

            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="bg-surface-canvas p-3 rounded-xl border border-surface-border">
                <span className="text-slate-400 block text-[11px]">Towers</span>
                <span className="font-bold text-navy-900 text-sm">{societyInformation.overview.totalTowers} Residential Towers</span>
              </div>
              <div className="bg-surface-canvas p-3 rounded-xl border border-surface-border">
                <span className="text-slate-400 block text-[11px]">Total Flats</span>
                <span className="font-bold text-navy-900 text-sm">{societyInformation.overview.totalFlats} Apartments</span>
              </div>
              <div className="bg-surface-canvas p-3 rounded-xl border border-surface-border col-span-2">
                <span className="text-slate-400 block text-[11px]">Campus Size</span>
                <span className="font-bold text-navy-900 text-xs">{societyInformation.overview.campusArea}</span>
              </div>
            </div>
          </div>

          {/* Office Timings */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-2.5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-brand-600" />
              <span>Society Estate Office Timings</span>
            </h3>

            <div className="divide-y divide-slate-100 text-xs">
              {societyInformation.officeTimings.map((t, idx) => (
                <div key={idx} className="py-2 flex items-center justify-between">
                  <span className="text-slate-600 font-medium">{t.days}</span>
                  <span className="font-bold text-navy-900">{t.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Managing Committee Directory */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Users className="w-4 h-4 text-brand-600" />
              <span>Managing Committee Members</span>
            </h3>

            <div className="divide-y divide-slate-100">
              {societyInformation.committee.map((member, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">
                      {member.role}
                    </span>
                    <h4 className="font-bold text-navy-900 text-xs mt-1">{member.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Flat {member.flat}</p>
                  </div>

                  <a
                    href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center space-x-1 bg-surface-canvas hover:bg-slate-100 text-navy-900 font-bold text-xs px-3 py-1.5 rounded-xl border border-surface-border active-press"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-600" />
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
