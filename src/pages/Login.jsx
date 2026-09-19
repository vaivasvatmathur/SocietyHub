import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Lock, Phone, ArrowRight, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { InputField } from '../components/InputField';
import { PrimaryButton } from '../components/PrimaryButton';

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useApp();
  const [mobileNumber, setMobileNumber] = useState('9876512345');
  const [password, setPassword] = useState('••••••••');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobileNumber || mobileNumber.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setError('');
    login();
    navigate('/home');
  };

  return (
    <div className="min-h-full flex flex-col justify-between p-6 bg-surface-canvas relative">
      {/* Top Branding Section */}
      <div className="pt-8 text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center text-white shadow-soft-md mb-4 border border-navy-800">
          <Building2 className="w-9 h-9 stroke-[2] text-brand-400" />
        </div>
        <h1 className="text-2xl font-extrabold text-navy-900 tracking-tight">SocietyHub</h1>
        <p className="text-xs text-slate-500 mt-1.5 max-w-[240px] font-medium leading-relaxed">
          "Everything about your society, in one place."
        </p>
      </div>

      {/* Middle Form Section */}
      <div className="my-8 bg-white p-5 rounded-3xl border border-surface-border shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <InputField
              label="Mobile Number"
              type="tel"
              name="mobile"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter 10-digit mobile number"
              icon={Phone}
              error={error}
              required
            />
          </div>

          <div>
            <InputField
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              icon={Lock}
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => alert("Password reset link sent to registered mobile number.")}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 active-press"
            >
              Forgot password?
            </button>
          </div>

          <PrimaryButton type="submit" className="mt-2 bg-brand-600 hover:bg-brand-700">
            <span className="flex items-center justify-center gap-2">
              Login to Society <ArrowRight className="w-4 h-4" />
            </span>
          </PrimaryButton>
        </form>
      </div>

      {/* Bottom Footer Section */}
      <div className="pb-4 text-center space-y-4">
        <p className="text-xs text-slate-500 font-medium">
          Don't have an account?{' '}
          <button
            onClick={() => alert("Please contact Green Valley Residency society office to register your flat.")}
            className="font-bold text-brand-600 hover:underline"
          >
            Sign up
          </button>
        </p>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <Shield className="w-3.5 h-3.5 text-brand-600" />
          <span>Green Valley Residency Official Portal</span>
        </div>
      </div>
    </div>
  );
};
