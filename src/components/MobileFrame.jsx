import React, { useState, useEffect } from 'react';
import { Wifi, Signal, Battery } from 'lucide-react';

export const MobileFrame = ({ children }) => {
  const [currentTime, setCurrentTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      hours = hours % 12 || 12;
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-0 sm:p-4 select-none font-sans">
      {/* Main Mobile App Container */}
      <div
        className="relative w-full max-w-[390px] h-[844px] sm:rounded-[48px] border-[10px] border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.1)] ring-1 ring-black/40 bg-slate-50 flex flex-col overflow-hidden"
      >
        {/* Hardware Dynamic Island / Speaker cutout simulation for phone frame */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-800 rounded-b-2xl z-50 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-1 bg-slate-700 rounded-full mb-1"></div>
          <div className="absolute right-4 w-2.5 h-2.5 bg-slate-900 rounded-full ring-1 ring-slate-700"></div>
        </div>

        {/* Mobile Top Status Bar */}
        <div className="w-full bg-slate-50 pt-2.5 px-6 pb-1 flex items-center justify-between z-40 text-slate-800 text-xs font-semibold shrink-0">
          <span className="pl-1 text-[13px] tracking-tight">{currentTime}</span>
          <div className="flex items-center space-x-1.5 text-slate-700">
            <Signal className="w-3.5 h-3.5 fill-current" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4 fill-current text-slate-800" />
          </div>
        </div>

        {/* Scrollable Screen Content */}
        <div className="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col bg-slate-50">
          {children}
        </div>

        {/* Mobile Home Bottom Indicator Bar */}
        <div className="w-full bg-slate-50 py-1.5 flex justify-center shrink-0 z-40">
          <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
