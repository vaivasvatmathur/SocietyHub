import React from 'react';
import { ShieldCheck, Calendar, Clock, User, QrCode, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PassCard = ({ visitor }) => {
  const { showToast } = useApp();

  return (
    <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-3xl p-5 shadow-soft-md relative overflow-hidden my-2 border border-navy-800">
      {/* Background Glow */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-brand-500/10 rounded-full blur-xl pointer-events-none"></div>

      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-brand-400" />
          <span className="font-bold text-xs tracking-wider uppercase text-slate-300">Gate Entry Pass</span>
        </div>
        <span className="text-xs font-mono font-bold bg-white/10 px-2.5 py-0.5 rounded-full text-brand-300 border border-white/10">
          {visitor.passCode}
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-slate-400 text-xs font-medium">Visitor Name</p>
          <h3 className="text-xl font-bold text-white mt-0.5 tracking-tight">{visitor.name}</h3>
          <p className="text-xs text-slate-300 mt-0.5">{visitor.phone}</p>
        </div>

        {/* QR Code Graphic */}
        <div className="w-16 h-16 bg-white p-1.5 rounded-2xl shadow-soft flex items-center justify-center shrink-0 border border-slate-200">
          <QrCode className="w-full h-full text-navy-900" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 bg-white/5 rounded-2xl p-3 backdrop-blur-sm text-xs border border-white/10">
        <div>
          <span className="text-slate-400 block text-[11px]">Visit Date</span>
          <span className="font-semibold text-white flex items-center gap-1 mt-0.5">
            <Calendar className="w-3 h-3 text-brand-400" />
            {visitor.date}
          </span>
        </div>
        <div>
          <span className="text-slate-400 block text-[11px]">Arrival Time</span>
          <span className="font-semibold text-white flex items-center gap-1 mt-0.5">
            <Clock className="w-3 h-3 text-brand-400" />
            {visitor.time}
          </span>
        </div>
        <div>
          <span className="text-slate-400 block text-[11px]">Purpose</span>
          <span className="font-semibold text-white flex items-center gap-1 mt-0.5">
            <User className="w-3 h-3 text-brand-400" />
            {visitor.purpose}
          </span>
        </div>
        <div>
          <span className="text-slate-400 block text-[11px]">Flat Destination</span>
          <span className="font-semibold text-white mt-0.5 block">
            Flat B-204
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">Green Valley Residency Gate Security</span>
        <button
          onClick={() => showToast("Visitor pass details copied!")}
          className="flex items-center gap-1 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl shadow-soft-sm active-press transition"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share Pass</span>
        </button>
      </div>
    </div>
  );
};
