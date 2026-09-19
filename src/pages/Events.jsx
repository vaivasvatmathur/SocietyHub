import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';
import { EventCard } from '../components/EventCard';
import { BottomNavigation } from '../components/BottomNavigation';

export const Events = () => {
  const navigate = useNavigate();
  const { events, toggleRSVP } = useApp();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Cultural Celebration', 'Society Governance', 'Sports & Kids', 'Community Welfare'];

  const filteredEvents = events.filter(e => {
    if (filter === 'All') return true;
    return e.category === filter;
  });

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Society Events" showBack />

        <div className="p-4 space-y-4 pb-6">
          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all active-press ${
                  filter === cat
                    ? 'bg-navy-900 text-white shadow-soft-sm'
                    : 'bg-white text-slate-600 border border-surface-border hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events List */}
          <div className="space-y-3.5">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => navigate(`/events/${event.id}`)}
                onRSVP={(id) => toggleRSVP(id)}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
