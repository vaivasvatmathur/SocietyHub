import React from 'react';

export const StatusBadge = ({ type, text }) => {
  let styleClasses = "bg-slate-100 text-slate-700 border-slate-200";

  const lower = (text || type || '').toLowerCase();

  if (lower.includes('in progress')) {
    styleClasses = "bg-amber-50 text-amber-700 border-amber-200/80";
  } else if (lower.includes('resolved') || lower.includes('completed')) {
    styleClasses = "bg-emerald-50 text-emerald-700 border-emerald-200/80";
  } else if (lower.includes('open') || lower.includes('expected')) {
    styleClasses = "bg-blue-50 text-blue-700 border-blue-200/80";
  } else if (lower.includes('important') || lower.includes('high')) {
    styleClasses = "bg-rose-50 text-rose-700 border-rose-200/80";
  } else if (lower.includes('maintenance')) {
    styleClasses = "bg-indigo-50 text-indigo-700 border-indigo-200/80";
  } else if (lower.includes('events')) {
    styleClasses = "bg-purple-50 text-purple-700 border-purple-200/80";
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${styleClasses}`}>
      {text || type}
    </span>
  );
};
