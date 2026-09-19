import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Building2, CheckCircle, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';
import { StatusBadge } from '../components/StatusBadge';
import { PrimaryButton } from '../components/PrimaryButton';

export const NoticeDetails = () => {
  const { id } = useParams();
  const { notices, markNoticeAsRead, resident, showToast } = useApp();

  const notice = notices.find((n) => n.id === id) || notices[0];

  const handleMarkAsRead = () => {
    markNoticeAsRead(notice.id);
    showToast("Notice marked as read");
  };

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Notice Details" showBack />

        <div className="p-4 space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-surface-border shadow-soft space-y-3.5">
            <div className="flex items-center justify-between">
              <StatusBadge type={notice.category} />
              {notice.read ? (
                <span className="text-[11px] text-brand-800 font-semibold flex items-center gap-1 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-600" /> Read
                </span>
              ) : (
                <span className="text-[11px] text-amber-800 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  Unread Notice
                </span>
              )}
            </div>

            <h1 className="font-bold text-navy-900 text-base leading-snug tracking-tight">
              {notice.title}
            </h1>

            {/* Metadata Box */}
            <div className="bg-surface-canvas rounded-xl p-3 border border-surface-border space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> Date:
                </span>
                <span className="font-semibold text-navy-900">{notice.date}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> Timing:
                </span>
                <span className="font-semibold text-navy-900">{notice.timestamp || 'All Day'}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 pt-1.5 border-t border-surface-border">
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" /> Society:
                </span>
                <span className="font-semibold text-navy-900">{resident.society}</span>
              </div>
            </div>

            {/* Full Notice Content */}
            <div className="text-slate-700 text-xs leading-relaxed space-y-3 pt-3 font-normal whitespace-pre-line border-t border-slate-100">
              {notice.content}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="p-4 bg-white border-t border-surface-border sticky bottom-0">
        <PrimaryButton
          onClick={handleMarkAsRead}
          variant={notice.read ? "secondary" : "primary"}
          disabled={notice.read}
          icon={CheckCircle}
          className={!notice.read ? "bg-brand-600 hover:bg-brand-700" : ""}
        >
          {notice.read ? "Marked as Read" : "Mark as Read"}
        </PrimaryButton>
      </div>
    </div>
  );
};
