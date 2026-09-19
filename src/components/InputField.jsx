import React from 'react';

export const InputField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  options = [],
  rows = 3,
  icon: Icon,
  helperText
}) => {
  const isSelect = type === 'select';
  const isTextarea = type === 'textarea';

  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label className="block text-xs font-semibold text-slate-700">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}

      <div className="relative rounded-xl">
        {Icon && !isTextarea && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Icon className="w-4 h-4" />
          </div>
        )}

        {isSelect ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full bg-white text-slate-800 text-sm rounded-xl border px-3.5 py-2.5 outline-none transition-colors appearance-none ${
              Icon ? 'pl-10' : ''
            } ${
              error
                ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
          >
            {options.map((opt) => {
              const val = typeof opt === 'string' ? opt : opt.value;
              const lbl = typeof opt === 'string' ? opt : opt.label;
              return (
                <option key={val} value={val}>
                  {lbl}
                </option>
              );
            })}
          </select>
        ) : isTextarea ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className={`w-full bg-white text-slate-800 text-sm rounded-xl border p-3.5 outline-none transition-colors ${
              error
                ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full bg-white text-slate-800 text-sm rounded-xl border px-3.5 py-2.5 outline-none transition-colors ${
              Icon ? 'pl-10' : ''
            } ${
              error
                ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
          />
        )}

        {isSelect && (
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        )}
      </div>

      {error ? (
        <p className="text-xs text-rose-500 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-slate-400">{helperText}</p>
      ) : null}
    </div>
  );
};
