import React from 'react';
import { Home, Car, Phone, ShieldCheck, KeyRound } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';

export const FlatDetails = () => {
  const { resident } = useApp();

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Flat & Parking Details" showBack />

        <div className="p-4 space-y-4 pb-6">
          {/* Main Flat Spec Card */}
          <div className="bg-navy-900 text-white rounded-3xl p-5 shadow-soft-md relative overflow-hidden border border-navy-800">
            <div className="inline-flex items-center space-x-1.5 bg-brand-500/20 text-brand-300 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 border border-brand-500/30">
              <Home className="w-3.5 h-3.5 text-brand-400" />
              <span>{resident.block}</span>
            </div>

            <h1 className="text-3xl font-extrabold text-white tracking-tight">Flat {resident.flat}</h1>
            <p className="text-xs text-slate-300 mt-1 font-medium">{resident.type}</p>

            <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px]">Society</span>
                <span className="font-semibold text-white">{resident.society}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">Floor Position</span>
                <span className="font-semibold text-white">{resident.floor}</span>
              </div>
            </div>
          </div>

          {/* Parking & Utility Cards */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Allocated Assets & Utility Extensions
            </h3>

            <div className="space-y-3 text-xs">
              <div className="bg-surface-canvas p-3 rounded-xl border border-surface-border flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center border border-brand-200">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-xs">Allocated Parking Slot</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{resident.parkingSlot}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-brand-50 text-brand-700 px-2 py-0.5 rounded-md border border-brand-200">
                  Reserved
                </span>
              </div>

              <div className="bg-surface-canvas p-3 rounded-xl border border-surface-border flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-xs">Security Intercom Extension</h4>
                    <p className="text-[11px] text-slate-500 font-medium">Ext: #{resident.intercomExt}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
                  Active Line
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
