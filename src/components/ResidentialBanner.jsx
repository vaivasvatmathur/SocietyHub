import React, { useState } from 'react';
import { Building2, Bell, ChevronRight, Home as HouseIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const ResidentialBanner = () => {
  const { resident, unreadNotificationsCount } = useApp();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  // Path to the society photograph asset
  const societyImagePath = "/assets/society.jpg";

  return (
    <div className="bg-navy-950 text-white pt-4 pb-4 px-4 rounded-b-3xl shadow-soft-md space-y-3 border-b border-navy-800">
      {/* Top Header: App Branding & Notification Bell */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm shadow-soft-sm">
            <Building2 className="w-4.5 h-4.5" />
          </div>
          <div>
            <h1 className="text-base font-extrabold text-white tracking-tight leading-none">
              SocietyHub
            </h1>
            <p className="text-[11px] text-brand-300 font-semibold mt-0.5">
              {resident.society}
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate('/notifications')}
          className="relative p-2.5 bg-white/10 hover:bg-white/20 active:bg-white/25 rounded-2xl transition-all duration-150 active-press border border-white/10"
          aria-label="View Notifications"
        >
          <Bell className="w-4 h-4 text-slate-100" />
          {unreadNotificationsCount > 0 && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-500 rounded-full ring-2 ring-navy-950 animate-pulse" />
          )}
        </button>
      </div>

      {/* Integrated "My Home" Property Card */}
      <div
        onClick={() => navigate('/profile/flat')}
        className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 cursor-pointer hover:bg-white/15 transition-all active-press group shadow-soft-sm space-y-2"
      >
        {/* Top Card Bar: Context Label & Details CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <HouseIcon className="w-3.5 h-3.5 text-brand-400 shrink-0" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-300">
              MY HOME
            </span>
          </div>

          <div className="flex items-center space-x-0.5 text-xs font-semibold text-brand-300 group-hover:text-white transition-colors">
            <span>Details</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Main Flat Identity & Info Row */}
        <div className="flex items-center space-x-3">
          {/* Integrated Flat Badge */}
          <div className="bg-brand-500/20 text-brand-300 border border-brand-500/35 px-3 py-1.5 rounded-xl shadow-soft-sm shrink-0 flex items-center justify-center">
            <span className="text-base font-black text-white tracking-wider font-mono leading-none">
              {resident.flat}
            </span>
          </div>

          {/* Property Hierarchy Details */}
          <div className="min-w-0 flex-1">
            <h2 className="text-xs font-bold text-white tracking-tight leading-snug truncate">
              {resident.block} • {resident.floor}
            </h2>
            <p className="text-[11px] text-slate-300 font-normal mt-0.5 truncate">
              {resident.type}
            </p>
          </div>
        </div>
      </div>

      {/* Real Residential Society Photograph Area */}
      <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-soft border border-white/10 bg-slate-800">
        {!imgError ? (
          <img
            src={societyImagePath}
            alt="Green Valley Residency Campus"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover rounded-2xl transition-opacity duration-200"
          />
        ) : (
          <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center text-slate-400 p-4 text-center space-y-1">
            <Building2 className="w-8 h-8 text-brand-400" />
            <p className="text-xs font-bold text-slate-200">Green Valley Residency</p>
            <p className="text-[10px] text-slate-400">Add residential photo at /public/assets/society.jpg</p>
          </div>
        )}

        {/* Subtle Bottom Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />

        {/* Caption Overlay badge */}
        <div className="absolute bottom-2.5 left-3 bg-navy-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-semibold text-slate-200 flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          <span>Green Valley Residency Campus</span>
        </div>
      </div>
    </div>
  );
};
