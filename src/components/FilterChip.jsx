import React from 'react';

export const FilterChip = ({ label, active, onClick, count }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 active-press shrink-0 flex items-center gap-1.5 ${
        active
          ? 'bg-blue-600 text-white shadow-sm font-semibold'
          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
      }`}
    >
      <span>{label}</span>
      {count !== undefined && count !== null && (
        <span
          className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
};
