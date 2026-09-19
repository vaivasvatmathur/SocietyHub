import React from 'react';

export const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  fullWidth = true,
  icon: Icon,
  className = ''
}) => {
  const baseClasses = "relative flex items-center justify-center font-semibold text-sm px-4 py-3 rounded-xl transition-all duration-150 active-press disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow active:bg-blue-800",
    secondary: "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 active:bg-slate-100",
    outline: "bg-transparent text-blue-600 border border-blue-600/40 hover:bg-blue-50 active:bg-blue-100",
    danger: "bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 active:bg-rose-200"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      <span>{children}</span>
    </button>
  );
};
