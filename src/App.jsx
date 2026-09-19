import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { MobileFrame } from './components/MobileFrame';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Notices } from './pages/Notices';
import { NoticeDetails } from './pages/NoticeDetails';
import { Complaints } from './pages/Complaints';
import { RaiseComplaint } from './pages/RaiseComplaint';
import { Visitors } from './pages/Visitors';
import { AddVisitor } from './pages/AddVisitor';
import { Profile } from './pages/Profile';
import { Payments } from './pages/Payments';
import { PaymentDetails } from './pages/PaymentDetails';
import { Amenities } from './pages/Amenities';
import { AmenityDetails } from './pages/AmenityDetails';
import { BookingConfirmation } from './pages/BookingConfirmation';
import { MyBookings } from './pages/MyBookings';
import { SocietyInfo } from './pages/SocietyInfo';
import { EmergencyContacts } from './pages/EmergencyContacts';
import { Notifications } from './pages/Notifications';
import { Events } from './pages/Events';
import { EventDetails } from './pages/EventDetails';
import { PersonalInfo } from './pages/PersonalInfo';
import { FlatDetails } from './pages/FlatDetails';
import { HelpSupport } from './pages/HelpSupport';
import { CheckCircle } from 'lucide-react';

// Floating Toast Notification Component
const ToastNotification = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-navy-950 text-white px-4 py-2.5 rounded-full text-xs font-semibold shadow-soft-md border border-navy-800 flex items-center space-x-2 animate-in fade-in slide-in-from-top duration-200">
      <CheckCircle className="w-4 h-4 text-brand-400" />
      <span>{toastMessage}</span>
    </div>
  );
};

// Route wrapper for authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useApp();
  const location = useLocation();

  if (!isAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export const AppContent = () => {
  const { isAuthenticated } = useApp();

  return (
    <MobileFrame>
      <ToastNotification />
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/notices" element={<ProtectedRoute><Notices /></ProtectedRoute>} />
        <Route path="/notices/:id" element={<ProtectedRoute><NoticeDetails /></ProtectedRoute>} />
        <Route path="/complaints" element={<ProtectedRoute><Complaints /></ProtectedRoute>} />
        <Route path="/complaints/new" element={<ProtectedRoute><RaiseComplaint /></ProtectedRoute>} />
        <Route path="/visitors" element={<ProtectedRoute><Visitors /></ProtectedRoute>} />
        <Route path="/visitors/new" element={<ProtectedRoute><AddVisitor /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/payments" element={<ProtectedRoute><Payments /></ProtectedRoute>} />
        <Route path="/payments/:id" element={<ProtectedRoute><PaymentDetails /></ProtectedRoute>} />
        <Route path="/amenities" element={<ProtectedRoute><Amenities /></ProtectedRoute>} />
        <Route path="/amenities/confirmation" element={<ProtectedRoute><BookingConfirmation /></ProtectedRoute>} />
        <Route path="/amenities/:id" element={<ProtectedRoute><AmenityDetails /></ProtectedRoute>} />
        <Route path="/bookings" element={<ProtectedRoute><MyBookings /></ProtectedRoute>} />
        <Route path="/society-info" element={<ProtectedRoute><SocietyInfo /></ProtectedRoute>} />
        <Route path="/emergency" element={<ProtectedRoute><EmergencyContacts /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
        <Route path="/events/:id" element={<ProtectedRoute><EventDetails /></ProtectedRoute>} />
        <Route path="/profile/personal" element={<ProtectedRoute><PersonalInfo /></ProtectedRoute>} />
        <Route path="/profile/flat" element={<ProtectedRoute><FlatDetails /></ProtectedRoute>} />
        <Route path="/support" element={<ProtectedRoute><HelpSupport /></ProtectedRoute>} />

        {/* Fallback default route */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}
        />
      </Routes>
    </MobileFrame>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </BrowserRouter>
  );
}
