import React, { useState } from 'react';
import { HelpCircle, Mail, Phone, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { AppHeader } from '../components/AppHeader';

export const HelpSupport = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How do I add a new visitor for gate pre-approval?",
      a: "Go to the Visitors tab from the bottom navigation, click '+ Add', fill in the guest's name, mobile number, and arrival time, and tap 'Create Visitor Pass'. Share the generated pass code with your guest."
    },
    {
      q: "When is society maintenance due every month?",
      a: "Maintenance bills are generated on the 1st of every month and due by the 20th. You can view itemized breakdowns and pay via UPI or Net Banking under the Payments section."
    },
    {
      q: "How do I book the Clubhouse or Badminton Court?",
      a: "Navigate to Services -> Amenities from the Home dashboard. Select the facility, pick your preferred date and time slot, and confirm your booking."
    },
    {
      q: "What should I do if a complaint ticket is delayed?",
      a: "You can track real-time ticket status under My Complaints. If urgent, dial the Maintenance Supervisor directly via Emergency Contacts."
    }
  ];

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Help & Support" showBack />

        <div className="p-4 space-y-4 pb-6">
          {/* Quick Contact Box */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Mail className="w-4 h-4 text-brand-600" />
              <span>Contact App Support Desk</span>
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              For technical queries regarding SocietyHub mobile app access or login assistance, reach out to our campus administrator:
            </p>

            <div className="bg-surface-canvas p-3 rounded-xl border border-surface-border space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Support Email:</span>
                <a href="mailto:support@societyhub.app" className="font-bold text-brand-600 hover:underline">
                  support@societyhub.app
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Estate Manager Line:</span>
                <span className="font-bold text-navy-900">+91 22 2780 1201</span>
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <HelpCircle className="w-4 h-4 text-brand-600" />
              <span>Frequently Asked Questions</span>
            </h3>

            <div className="divide-y divide-slate-100 text-xs">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-2.5">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between font-bold text-navy-900 text-left py-1"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <p className="text-slate-600 mt-1.5 leading-relaxed font-normal bg-surface-canvas p-2.5 rounded-xl border border-surface-border">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Privacy & RERA Disclaimer */}
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <span>Privacy & Security Compliance</span>
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Green Valley Residency SocietyHub complies with Maharashtra Co-operative Societies Act guidelines and RERA data confidentiality norms. Resident contact details are shielded and encrypted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
