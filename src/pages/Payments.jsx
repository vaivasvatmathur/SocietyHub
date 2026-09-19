import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle, Clock, ChevronRight, Download, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';
import { BottomNavigation } from '../components/BottomNavigation';

export const Payments = () => {
  const navigate = useNavigate();
  const { payments, payBill } = useApp();

  const pendingBill = payments.find(p => p.status === 'Pending');
  const pastPayments = payments.filter(p => p.status === 'Paid');

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Maintenance & Payments" showBack />

        <div className="p-4 space-y-4 pb-6">
          {/* Active Dues Card */}
          {pendingBill ? (
            <div className="bg-navy-900 text-white rounded-3xl p-5 shadow-soft-md relative overflow-hidden border border-navy-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                  Pending Due
                </span>
                <span className="text-xs text-slate-300 font-medium">Due: {pendingBill.dueDate}</span>
              </div>

              <p className="text-xs text-slate-300 mt-2 font-medium">{pendingBill.month} Maintenance</p>
              <h2 className="text-3xl font-extrabold text-white mt-0.5 tracking-tight">
                ₹{pendingBill.amount.toLocaleString('en-IN')}
              </h2>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => navigate(`/payments/${pendingBill.id}`)}
                  className="text-xs text-brand-300 font-semibold hover:underline"
                >
                  View Invoice Breakdown
                </button>
                <button
                  onClick={() => navigate(`/payments/${pendingBill.id}`)}
                  className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-soft-sm active-press transition"
                >
                  Pay Now
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-brand-900 text-white rounded-3xl p-5 shadow-soft-md flex items-center space-x-3.5 border border-brand-800">
              <div className="w-10 h-10 rounded-2xl bg-brand-500/20 text-brand-300 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">All Maintenance Bills Paid!</h3>
                <p className="text-xs text-brand-200 mt-0.5">No pending dues for Flat B-204.</p>
              </div>
            </div>
          )}

          {/* Payment History Section */}
          <div>
            <div className="flex items-center justify-between mb-2.5 px-0.5">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Payment History
              </h2>
            </div>

            <div className="space-y-3">
              {payments.map((payment) => (
                <div
                  key={payment.id}
                  onClick={() => navigate(`/payments/${payment.id}`)}
                  className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft hover:shadow-soft-md transition-all duration-150 cursor-pointer active-press flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                      payment.status === 'Paid'
                        ? 'bg-brand-50 text-brand-700 border border-brand-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-sm tracking-tight">{payment.month}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">
                        {payment.status === 'Paid' ? `Paid on ${payment.paidDate}` : `Due by ${payment.dueDate}`}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-extrabold text-navy-900 text-sm">
                      ₹{payment.amount.toLocaleString('en-IN')}
                    </p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mt-0.5 ${
                      payment.status === 'Paid'
                        ? 'bg-brand-50 text-brand-700 border border-brand-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {payment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
