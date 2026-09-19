import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Bell } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';
import { FilterChip } from '../components/FilterChip';
import { NoticeCard } from '../components/NoticeCard';
import { BottomNavigation } from '../components/BottomNavigation';

export const Notices = () => {
  const navigate = useNavigate();
  const { notices } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const filters = ['All', 'Important', 'Maintenance', 'Events'];

  const filteredNotices = notices.filter((item) => {
    const matchesFilter =
      activeFilter === 'All' ||
      (activeFilter === 'Important' && item.isImportant) ||
      item.category.toLowerCase() === activeFilter.toLowerCase();

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const unreadCount = notices.filter(n => !n.read).length;

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader
          title="Society Notices"
          subtitle={unreadCount > 0 ? `${unreadCount} unread notice` : `${notices.length} notices`}
          rightAction={
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-slate-600 hover:text-navy-900 rounded-xl hover:bg-slate-100 transition active-press"
              aria-label="Search notices"
            >
              <Search className="w-4 h-4 stroke-[2]" />
            </button>
          }
        />

        <div className="p-4 space-y-3.5">
          {showSearch && (
            <div className="relative animate-in fade-in duration-200">
              <input
                type="text"
                placeholder="Search notices by title or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-navy-900 text-xs rounded-xl border border-surface-border pl-9 pr-8 py-2.5 outline-none focus:border-brand-600 shadow-soft-sm"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          {/* Filter Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {filters.map((filter) => (
              <FilterChip
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>

          {/* Notice Cards List */}
          {filteredNotices.length > 0 ? (
            <div className="space-y-3">
              {filteredNotices.map((notice) => (
                <NoticeCard
                  key={notice.id}
                  notice={notice}
                  onClick={() => navigate(`/notices/${notice.id}`)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 bg-white rounded-2xl border border-surface-border my-4 shadow-soft">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-2">
                <Bell className="w-5 h-5 text-slate-400" />
              </div>
              <h3 className="font-bold text-navy-900 text-xs">No notices found</h3>
              <p className="text-[11px] text-slate-400 mt-1 max-w-[200px] mx-auto">
                No notices match your selected category.
              </p>
            </div>
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};
