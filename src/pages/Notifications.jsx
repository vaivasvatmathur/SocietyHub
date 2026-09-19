import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, CheckCheck, FileText, CreditCard, Users, Calendar, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';
import { BottomNavigation } from '../components/BottomNavigation';

export const Notifications = () => {
  const navigate = useNavigate();
  const { notifications, markNotificationRead, markAllNotificationsRead } = useApp();

  const getIcon = (type) => {
    switch (type) {
      case 'maintenance':
      case 'notice':
        return FileText;
      case 'payment':
        return CreditCard;
      case 'visitor':
        return Users;
      case 'booking':
        return Calendar;
      default:
        return AlertCircle;
    }
  };

  const grouped = {
    Today: notifications.filter(n => n.dateGroup === 'Today'),
    Yesterday: notifications.filter(n => n.dateGroup === 'Yesterday'),
    Earlier: notifications.filter(n => n.dateGroup === 'Earlier')
  };

  const handleNotificationClick = (n) => {
    markNotificationRead(n.id);
    if (n.link) navigate(n.link);
  };

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader
          title="Notifications"
          showBack
          rightAction={
            <button
              onClick={markAllNotificationsRead}
              className="flex items-center space-x-1 text-xs font-bold text-brand-600 hover:text-brand-700 bg-brand-50 px-2.5 py-1 rounded-xl border border-brand-200 active-press"
            >
              <CheckCheck className="w-4 h-4" />
              <span>Mark Read</span>
            </button>
          }
        />

        <div className="p-4 space-y-4 pb-6">
          {Object.entries(grouped).map(([group, items]) => {
            if (items.length === 0) return null;
            return (
              <div key={group} className="space-y-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-0.5">
                  {group}
                </h3>

                <div className="bg-white rounded-2xl border border-surface-border divide-y divide-slate-100 shadow-soft overflow-hidden">
                  {items.map((n) => {
                    const Icon = getIcon(n.type);
                    return (
                      <div
                        key={n.id}
                        onClick={() => handleNotificationClick(n)}
                        className={`p-3.5 flex items-start space-x-3 cursor-pointer transition-colors hover:bg-slate-50 ${
                          !n.read ? 'bg-brand-50/20' : ''
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                          !n.read ? 'bg-brand-50 text-brand-700 border-brand-200' : 'bg-surface-canvas text-slate-500 border-surface-border'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className={`text-xs font-bold truncate ${!n.read ? 'text-navy-900 font-extrabold' : 'text-slate-700'}`}>
                              {n.title}
                            </h4>
                            <span className="text-[10px] text-slate-400 shrink-0 ml-2 font-medium">{n.time}</span>
                          </div>
                          <p className="text-xs text-slate-500 leading-snug mt-0.5 line-clamp-2 font-normal">
                            {n.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
