import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FileText, AlertCircle, Users, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BottomNavigation = () => {
  const { unreadNoticesCount, openComplaintsCount } = useApp();

  const navItems = [
    {
      label: 'Home',
      path: '/home',
      icon: Home
    },
    {
      label: 'Notices',
      path: '/notices',
      icon: FileText,
      badge: unreadNoticesCount > 0 ? unreadNoticesCount : null
    },
    {
      label: 'Complaints',
      path: '/complaints',
      icon: AlertCircle,
      badge: openComplaintsCount > 0 ? openComplaintsCount : null
    },
    {
      label: 'Visitors',
      path: '/visitors',
      icon: Users
    },
    {
      label: 'Profile',
      path: '/profile',
      icon: User
    }
  ];

  return (
    <nav className="sticky bottom-0 bg-white border-t border-surface-border px-2 py-1.5 z-40 shadow-soft-sm">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-150 active-press ${
                  isActive
                    ? 'text-brand-600 font-semibold'
                    : 'text-slate-500 hover:text-navy-800 font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative">
                    <Icon className={`w-5 h-5 transition-transform duration-150 ${isActive ? 'scale-110' : ''}`} />
                    {item.badge && (
                      <span className="absolute -top-1 -right-2 bg-brand-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] mt-1 tracking-tight leading-tight">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
