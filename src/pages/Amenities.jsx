import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Calendar, Search } from 'lucide-react';
import { initialAmenities } from '../data/mockData';
import { AppHeader } from '../components/AppHeader';
import { AmenityCard } from '../components/AmenityCard';
import { BottomNavigation } from '../components/BottomNavigation';

export const Amenities = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sports', 'Events & Gatherings', 'Recreation', 'Health & Fitness'];

  const filteredAmenities = initialAmenities.filter(a => {
    if (activeCategory === 'All') return true;
    return a.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader
          title="Facility Amenities"
          subtitle="Book common clubhouse facilities"
          rightAction={
            <button
              onClick={() => navigate('/bookings')}
              className="flex items-center space-x-1 text-xs font-bold text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1.5 rounded-xl hover:bg-brand-100 transition active-press"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>My Bookings</span>
            </button>
          }
        />

        <div className="p-4 space-y-4 pb-6">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all active-press ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-soft-sm'
                    : 'bg-white text-slate-600 border border-surface-border hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 gap-3.5">
            {filteredAmenities.map((amenity) => (
              <AmenityCard
                key={amenity.id}
                amenity={amenity}
                onClick={() => navigate(`/amenities/${amenity.id}`)}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
