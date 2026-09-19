import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Home,
  Building2,
  PhoneCall,
  Bell,
  Globe,
  HelpCircle,
  ShieldCheck,
  LogOut,
  ChevronRight,
  CreditCard,
  Calendar
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';
import { BottomNavigation } from '../components/BottomNavigation';

export const Profile = () => {
  const navigate = useNavigate();
  const { resident, logout, showToast } = useApp();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out of SocietyHub?")) {
      logout();
      navigate('/login');
    }
  };

  const menuSections = [
    {
      title: "Account",
      items: [
        {
          label: "Personal Information",
          icon: User,
          action: () => navigate('/profile/personal')
        },
        {
          label: "Flat & Parking Details",
          icon: Home,
          action: () => navigate('/profile/flat')
        },
        {
          label: "My Maintenance Bills",
          icon: CreditCard,
          action: () => navigate('/payments')
        },
        {
          label: "My Facility Bookings",
          icon: Calendar,
          action: () => navigate('/bookings')
        }
      ]
    },
    {
      title: "Society Directory",
      items: [
        {
          label: "Society Information",
          icon: Building2,
          action: () => navigate('/society-info')
        },
        {
          label: "Emergency Contacts",
          icon: PhoneCall,
          action: () => navigate('/emergency')
        }
      ]
    },
    {
      title: "Preferences",
      items: [
        {
          label: "Push Notifications",
          icon: Bell,
          toggle: true,
          value: notificationsEnabled,
          action: () => {
            setNotificationsEnabled(!notificationsEnabled);
            showToast(notificationsEnabled ? "Notifications muted" : "Notifications enabled");
          }
        },
        {
          label: "App Language",
          icon: Globe,
          detail: "English",
          action: () => showToast("Language set to English")
        }
      ]
    },
    {
      title: "Support & Legal",
      items: [
        {
          label: "Help & Support",
          icon: HelpCircle,
          action: () => navigate('/support')
        },
        {
          label: "Privacy Policy & RERA",
          icon: ShieldCheck,
          action: () => navigate('/support')
        }
      ]
    }
  ];

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Profile & Account" />

        <div className="p-4 space-y-4 pb-6">
          {/* Resident Personal Card Header */}
          <div className="bg-white p-4 rounded-2xl border border-surface-border shadow-soft flex items-center space-x-3.5">
            <div className="w-13 h-13 bg-navy-900 text-brand-400 rounded-2xl flex items-center justify-center font-extrabold text-base shrink-0 border border-navy-800 shadow-soft-sm">
              {resident.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1.5">
                <h2 className="font-extrabold text-navy-900 text-base truncate tracking-tight">
                  {resident.name}
                </h2>
                <span className="text-[10px] font-bold uppercase bg-brand-50 text-brand-700 px-2 py-0.5 rounded-md border border-brand-200 shrink-0">
                  Owner
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-700 mt-0.5">
                Flat {resident.flat} • {resident.block}
              </p>
              <p className="text-xs text-slate-400 truncate mt-0.5 font-normal">
                {resident.society}
              </p>
            </div>
          </div>

          {/* Grouped Settings Rows */}
          {menuSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-1.5">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                {section.title}
              </h3>
              <div className="bg-white rounded-2xl border border-surface-border divide-y divide-slate-100 shadow-soft overflow-hidden">
                {section.items.map((item, iIdx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={iIdx}
                      onClick={item.action}
                      className="p-3.5 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors active-press"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-xl bg-surface-canvas flex items-center justify-center text-slate-600 border border-surface-border">
                          <Icon className="w-4 h-4 text-navy-800 stroke-[2]" />
                        </div>
                        <span className="text-xs font-semibold text-navy-900">{item.label}</span>
                      </div>

                      {item.toggle ? (
                        <input
                          type="checkbox"
                          checked={item.value}
                          onChange={item.action}
                          className="w-4 h-4 text-brand-600 rounded focus:ring-brand-600 border-slate-300"
                        />
                      ) : item.detail ? (
                        <span className="text-xs text-slate-400 font-medium">{item.detail}</span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Logout Button */}
          <div className="pt-2">
            <button
              onClick={handleLogout}
              className="w-full bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs py-3 rounded-2xl border border-rose-200 flex items-center justify-center gap-2 transition active-press shadow-soft-sm"
            >
              <LogOut className="w-4 h-4 stroke-[2]" />
              <span>Logout from App</span>
            </button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
