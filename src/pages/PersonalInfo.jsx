import React from 'react';
import { User, Phone, Mail, Shield, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';

export const PersonalInfo = () => {
  const { resident } = useApp();

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Personal Information" showBack />

        <div className="p-4 space-y-4 pb-6">
          {/* Main User Card */}
          <div className="bg-white rounded-2xl p-5 border border-surface-border shadow-soft flex items-center space-x-4">
            <div className="w-14 h-14 bg-navy-900 text-brand-400 rounded-2xl flex items-center justify-center font-extrabold text-lg border border-navy-800 shadow-soft-sm">
              {resident.avatar}
            </div>
            <div>
              <h2 className="text-base font-extrabold text-navy-900 tracking-tight">{resident.fullTitle}</h2>
              <span className="text-[11px] font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full inline-block mt-1">
                {resident.role}
              </span>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">Member since {resident.memberSince}</p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Contact & Account Info
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500 font-medium flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>Mobile Number:</span>
                </span>
                <span className="font-bold text-navy-900">{resident.phone}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500 font-medium flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Email Address:</span>
                </span>
                <span className="font-bold text-navy-900">{resident.email}</span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 font-medium flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-slate-400" />
                  <span>KYC Status:</span>
                </span>
                <span className="font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-md">
                  Verified Resident
                </span>
              </div>
            </div>
          </div>

          {/* Co-Residents Family Members */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Users className="w-4 h-4 text-brand-600" />
              <span>Registered Co-Residents ({resident.coResidents?.length || 0})</span>
            </h3>

            <div className="divide-y divide-slate-100 text-xs">
              {resident.coResidents?.map((person, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-navy-900">{person.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{person.relation}</p>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">{person.phone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
