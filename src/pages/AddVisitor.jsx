import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, User, Phone, Calendar, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';
import { InputField } from '../components/InputField';
import { PrimaryButton } from '../components/PrimaryButton';
import { PassCard } from '../components/PassCard';

export const AddVisitor = () => {
  const navigate = useNavigate();
  const { addVisitor } = useApp();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [visitDate, setVisitDate] = useState('Today');
  const [arrivalTime, setArrivalTime] = useState('7:30 PM');
  const [purpose, setPurpose] = useState('Guest');

  const [errors, setErrors] = useState({});
  const [createdVisitor, setCreatedVisitor] = useState(null);

  const purposeOptions = ['Guest', 'Delivery', 'Service', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter the visitor name.';
    }
    if (!phoneNumber.trim() || phoneNumber.length < 10) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const newVisitor = addVisitor({
      name,
      phone: phoneNumber.startsWith('+91') ? phoneNumber : `+91 ${phoneNumber}`,
      date: visitDate,
      time: arrivalTime,
      purpose
    });

    setCreatedVisitor(newVisitor);
  };

  // Render Success Pass View
  if (createdVisitor) {
    return (
      <div className="min-h-full flex flex-col justify-between p-5 bg-surface-canvas">
        <div>
          <div className="pt-4 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-brand-50 border border-brand-200 rounded-full flex items-center justify-center text-brand-600 mb-2">
              <CheckCircle2 className="w-8 h-8 stroke-[2]" />
            </div>
            <h2 className="text-lg font-extrabold text-navy-900 tracking-tight">Visitor Pass Ready</h2>
            <p className="text-xs text-slate-500 mt-1 max-w-[240px]">
              <span className="font-semibold text-navy-900">{createdVisitor.name}</span> added to gate visitor list.
            </p>
          </div>

          <div className="mt-4">
            <PassCard visitor={createdVisitor} />
          </div>
        </div>

        <div className="pb-4 pt-2">
          <PrimaryButton onClick={() => navigate('/visitors')} className="bg-brand-600 hover:bg-brand-700">
            Return to Visitor Log
          </PrimaryButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Add Visitor" showBack />

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="bg-white p-4 rounded-3xl border border-surface-border shadow-soft space-y-4">
            <InputField
              label="Visitor Name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
              }}
              placeholder="Full name of guest / delivery"
              icon={User}
              error={errors.name}
              required
            />

            <InputField
              label="Phone Number"
              type="tel"
              name="phone"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
              }}
              placeholder="10-digit mobile number"
              icon={Phone}
              error={errors.phone}
              required
            />

            <InputField
              label="Purpose of Visit"
              type="select"
              name="purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              options={purposeOptions}
              required
            />

            <div className="grid grid-cols-2 gap-3">
              <InputField
                label="Visit Date"
                type="text"
                name="date"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                icon={Calendar}
                required
              />

              <InputField
                label="Arrival Time"
                type="text"
                name="time"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                icon={Clock}
                required
              />
            </div>
          </div>

          <PrimaryButton type="submit" className="bg-brand-600 hover:bg-brand-700">
            Create Visitor Pass
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};
