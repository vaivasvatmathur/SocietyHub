import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle, ShieldCheck, Download, ArrowLeft, QrCode } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';

export const PaymentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { payments, payBill, resident, showToast } = useApp();

  const [paymentMethod, setPaymentMethod] = useState('UPI (HDFC Bank)');
  const [isProcessing, setIsProcessing] = useState(false);

  const payment = payments.find(p => p.id === id) || payments[0];

  const handlePayNow = () => {
    setIsProcessing(true);
    setTimeout(() => {
      payBill(payment.id, paymentMethod);
      setIsProcessing(false);
    }, 800);
  };

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Invoice Details" showBack />

        <div className="p-4 space-y-4 pb-6">
          {/* Header Invoice Summary */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Invoice No.</span>
                <p className="font-mono font-bold text-navy-900 text-xs mt-0.5">{payment.invoiceNumber}</p>
              </div>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                payment.status === 'Paid'
                  ? 'bg-brand-50 text-brand-700 border border-brand-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}>
                {payment.status}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 font-medium">{payment.month} Maintenance</p>
                <h2 className="text-2xl font-extrabold text-navy-900 tracking-tight mt-0.5">
                  ₹{payment.amount.toLocaleString('en-IN')}
                </h2>
              </div>
              <div className="text-right text-xs text-slate-500">
                <p>Flat {resident.flat}</p>
                <p className="font-medium text-navy-900">{resident.society}</p>
              </div>
            </div>

            {payment.status === 'Paid' && (
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-3 text-xs space-y-1">
                <div className="flex justify-between text-brand-800">
                  <span className="font-medium">Paid On:</span>
                  <span className="font-bold">{payment.paidDate}</span>
                </div>
                <div className="flex justify-between text-brand-800">
                  <span className="font-medium">Method:</span>
                  <span className="font-bold">{payment.paymentMethod || 'UPI'}</span>
                </div>
                <div className="flex justify-between text-brand-800">
                  <span className="font-medium">Transaction ID:</span>
                  <span className="font-mono font-bold">{payment.transactionId}</span>
                </div>
              </div>
            )}
          </div>

          {/* Breakdown Items */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Itemized Charge Breakdown
            </h3>
            
            <div className="divide-y divide-slate-100 text-xs">
              {payment.breakdown?.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-600 font-medium">{item.item}</span>
                  <span className="font-bold text-navy-900">₹{item.amount.toLocaleString('en-IN')}</span>
                </div>
              ))}

              <div className="pt-3 flex items-center justify-between font-bold text-sm text-navy-900">
                <span>Total Amount Due</span>
                <span>₹{payment.amount.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Payment Method Selector if Pending */}
          {payment.status === 'Pending' && (
            <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Select Payment Method
              </h3>

              <div className="space-y-2 text-xs">
                {['UPI (Google Pay / PhonePe / Paytm)', 'Net Banking (HDFC / ICICI / SBI)', 'Credit / Debit Card'].map((method) => (
                  <label
                    key={method}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod.includes(method.split(' ')[0])
                        ? 'border-brand-600 bg-brand-50/50 text-navy-900 font-semibold'
                        : 'border-surface-border bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <CreditCard className="w-4 h-4 text-brand-600" />
                      <span>{method}</span>
                    </div>
                    <input
                      type="radio"
                      name="payMethod"
                      checked={paymentMethod.includes(method.split(' ')[0])}
                      onChange={() => setPaymentMethod(method)}
                      className="text-brand-600 focus:ring-brand-600"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Sticky CTA */}
      <div className="p-4 bg-white border-t border-surface-border sticky bottom-0">
        {payment.status === 'Pending' ? (
          <button
            onClick={handlePayNow}
            disabled={isProcessing}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-3.5 rounded-xl shadow-soft-sm active-press transition flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <span>Processing Payment...</span>
            ) : (
              <span>Pay ₹{payment.amount.toLocaleString('en-IN')} via {paymentMethod.split(' ')[0]}</span>
            )}
          </button>
        ) : (
          <button
            onClick={() => showToast('PDF Receipt downloaded successfully')}
            className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs py-3.5 rounded-xl shadow-soft-sm active-press transition flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4 text-brand-400" />
            <span>Download Official PDF Receipt</span>
          </button>
        )}
      </div>
    </div>
  );
};
