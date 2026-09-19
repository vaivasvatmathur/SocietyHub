import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  initialResident,
  initialNotices,
  initialComplaints,
  initialVisitors,
  initialPayments,
  initialBookings,
  initialEvents,
  initialNotifications
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const saved = localStorage.getItem('societyhub_auth');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [resident] = useState(initialResident);

  const [notices, setNotices] = useState(() => {
    const saved = localStorage.getItem('societyhub_notices');
    return saved ? JSON.parse(saved) : initialNotices;
  });

  const [complaints, setComplaints] = useState(() => {
    const saved = localStorage.getItem('societyhub_complaints');
    return saved ? JSON.parse(saved) : initialComplaints;
  });

  const [visitors, setVisitors] = useState(() => {
    const saved = localStorage.getItem('societyhub_visitors');
    return saved ? JSON.parse(saved) : initialVisitors;
  });

  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem('societyhub_payments');
    return saved ? JSON.parse(saved) : initialPayments;
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('societyhub_bookings');
    return saved ? JSON.parse(saved) : initialBookings;
  });

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('societyhub_events');
    return saved ? JSON.parse(saved) : initialEvents;
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('societyhub_notifications');
    return saved ? JSON.parse(saved) : initialNotifications;
  });

  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem('societyhub_auth', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('societyhub_notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('societyhub_complaints', JSON.stringify(complaints));
  }, [complaints]);

  useEffect(() => {
    localStorage.setItem('societyhub_visitors', JSON.stringify(visitors));
  }, [visitors]);

  useEffect(() => {
    localStorage.setItem('societyhub_payments', JSON.stringify(payments));
  }, [payments]);

  useEffect(() => {
    localStorage.setItem('societyhub_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('societyhub_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('societyhub_notifications', JSON.stringify(notifications));
  }, [notifications]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const login = () => {
    setIsAuthenticated(true);
    showToast("Logged in successfully");
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const markNoticeAsRead = (id) => {
    setNotices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item))
    );
  };

  const addComplaint = (complaintData) => {
    const nextIdNumber = complaints.length + 1;
    const formattedId = `CMP${String(nextIdNumber).padStart(3, '0')}`;
    
    const newComplaint = {
      id: formattedId,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Open',
      ...complaintData
    };

    setComplaints((prev) => [newComplaint, ...prev]);
    showToast(`Complaint ${formattedId} created successfully`);
    return newComplaint;
  };

  const addVisitor = (visitorData) => {
    const randomPassNumber = Math.floor(1000 + Math.random() * 9000);
    const newVisitor = {
      id: `VIS-${Date.now()}`,
      status: 'Expected',
      passCode: `PASS-${randomPassNumber}`,
      createdAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      ...visitorData
    };

    setVisitors((prev) => [newVisitor, ...prev]);
    showToast(`Visitor pass created for ${newVisitor.name}`);
    return newVisitor;
  };

  const payBill = (paymentId, paymentMethod = 'UPI (HDFC Bank)') => {
    const todayStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const txnId = `TXN${Math.floor(1000000000 + Math.random() * 9000000000)}`;

    setPayments((prev) =>
      prev.map((pay) =>
        pay.id === paymentId
          ? {
              ...pay,
              status: 'Paid',
              paidDate: todayStr,
              paymentMethod,
              transactionId: txnId
            }
          : pay
      )
    );
    showToast('Payment completed successfully!');
  };

  const addBooking = (bookingData) => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newBk = {
      id: `BK${randomNum}`,
      bookingRef: `REF-2026-${randomNum}`,
      status: 'Confirmed',
      isPast: false,
      ...bookingData
    };
    setBookings((prev) => [newBk, ...prev]);
    showToast(`Amenity booked successfully for ${newBk.date}`);
    return newBk;
  };

  const cancelBooking = (bookingId) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    showToast('Booking cancelled');
  };

  const toggleRSVP = (eventId) => {
    setEvents((prev) =>
      prev.map((ev) => {
        if (ev.id === eventId) {
          const newRSVP = !ev.isRSVPed;
          showToast(newRSVP ? 'RSVP Confirmed for Event!' : 'RSVP Cancelled');
          return {
            ...ev,
            isRSVPed: newRSVP,
            attendeesCount: newRSVP ? ev.attendeesCount + 1 : ev.attendeesCount - 1
          };
        }
        return ev;
      })
    );
  };

  const markNotificationRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    showToast('All notifications marked as read');
  };

  const unreadNoticesCount = notices.filter(n => !n.read).length;
  const openComplaintsCount = complaints.filter(c => c.status !== 'Resolved').length;
  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        resident,
        notices,
        markNoticeAsRead,
        complaints,
        addComplaint,
        visitors,
        addVisitor,
        payments,
        payBill,
        bookings,
        addBooking,
        cancelBooking,
        events,
        toggleRSVP,
        notifications,
        markNotificationRead,
        markAllNotificationsRead,
        toastMessage,
        showToast,
        unreadNoticesCount,
        openComplaintsCount,
        unreadNotificationsCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

