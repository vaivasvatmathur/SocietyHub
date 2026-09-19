import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AppHeader = ({ title, showBack = false, onBack, rightAction, subtitle }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-4 py-3 z-30 flex items-center justify-between min-h-[52px]">
      <div className="flex items-center space-x-3">
        {showBack && (
          <button
            onClick={handleBackClick}
            className="p-1.5 -ml-1.5 text-slate-600 hover:text-slate-900 active:bg-slate-100 rounded-full transition-colors active-press"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <div>
          <h1 className="font-bold text-slate-800 text-lg tracking-tight leading-none">{title}</h1>
          {subtitle && <p className="text-xs text-slate-500 mt-0.5 font-normal">{subtitle}</p>}
        </div>
      </div>

      {rightAction && (
        <div className="flex items-center space-x-2">
          {rightAction}
        </div>
      )}
    </header>
  );
};
