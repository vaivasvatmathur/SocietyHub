import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Camera, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppHeader } from '../components/AppHeader';
import { InputField } from '../components/InputField';
import { PrimaryButton } from '../components/PrimaryButton';

export const RaiseComplaint = () => {
  const navigate = useNavigate();
  const { addComplaint, resident } = useApp();

  const [category, setCategory] = useState('Plumbing');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(`Flat ${resident.flat}`);
  const [priority, setPriority] = useState('Medium');
  const [photoAttached, setPhotoAttached] = useState(false);

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const categories = [
    'Plumbing',
    'Electrical',
    'Maintenance',
    'Security',
    'Cleaning',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Please enter a complaint title.';
    }
    if (!description.trim()) {
      newErrors.description = 'Please describe the issue.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const created = addComplaint({
      title,
      category,
      description,
      location,
      priority,
      hasAttachment: photoAttached
    });

    setSubmittedData(created);
  };

  // Success state view
  if (submittedData) {
    return (
      <div className="min-h-full flex flex-col justify-between p-6 bg-surface-canvas">
        <div>
          <div className="pt-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-brand-50 border border-brand-200 rounded-full flex items-center justify-center text-brand-600 mb-3 animate-bounce">
              <CheckCircle2 className="w-8 h-8 stroke-[2]" />
            </div>
            <h2 className="text-lg font-extrabold text-navy-900 tracking-tight">Complaint Submitted</h2>
            <p className="text-xs text-slate-500 mt-1 max-w-[220px]">
              Your complaint has been registered successfully.
            </p>
          </div>

          <div className="mt-6 bg-white p-5 rounded-3xl border border-surface-border shadow-soft space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 text-xs">
              <span className="text-slate-400 font-medium">Ticket ID</span>
              <span className="font-mono font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-md text-xs">
                {submittedData.id}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Category:</span>
                <span className="font-semibold text-navy-900">{submittedData.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Title:</span>
                <span className="font-semibold text-navy-900">{submittedData.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full text-[11px]">
                  {submittedData.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date:</span>
                <span className="font-semibold text-navy-900">{submittedData.date}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-4 space-y-3">
          <PrimaryButton onClick={() => navigate('/complaints')} className="bg-brand-600 hover:bg-brand-700">
            View My Complaints
          </PrimaryButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full flex flex-col justify-between bg-surface-canvas">
      <div>
        <AppHeader title="Raise a Complaint" showBack />

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="bg-white p-4 rounded-3xl border border-surface-border shadow-soft space-y-4">
            <InputField
              label="Category"
              type="select"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              options={categories}
              required
            />

            <InputField
              label="Title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) setErrors((prev) => ({ ...prev, title: '' }));
              }}
              placeholder="Enter complaint title"
              error={errors.title}
              required
            />

            <InputField
              label="Description"
              type="textarea"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (errors.description) setErrors((prev) => ({ ...prev, description: '' }));
              }}
              placeholder="Describe the issue in detail..."
              error={errors.description}
              rows={3}
              required
            />

            <InputField
              label="Location"
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Block / Flat / Area"
              icon={MapPin}
              required
            />

            {/* Priority Selection Pills */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">Priority</label>
              <div className="grid grid-cols-3 gap-2">
                {['Low', 'Medium', 'High'].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`py-2 rounded-xl text-xs font-semibold border transition-all active-press ${
                      priority === p
                        ? p === 'High'
                          ? 'bg-rose-700 text-white border-rose-700'
                          : p === 'Medium'
                          ? 'bg-brand-600 text-white border-brand-600'
                          : 'bg-navy-900 text-white border-navy-900'
                        : 'bg-surface-canvas text-slate-600 border-surface-border hover:bg-slate-100'
                    }`}
                  >
                    {p === 'High' ? '● High' : p === 'Medium' ? '● Medium' : '○ Low'}
                  </button>
                ))}
              </div>
            </div>

            {/* Attachment Upload Simulator */}
            <div className="space-y-1.5 pt-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">Attachment</label>
              <button
                type="button"
                onClick={() => setPhotoAttached(!photoAttached)}
                className={`w-full border border-dashed rounded-2xl py-3 px-4 flex items-center justify-center gap-2 text-xs font-medium transition-all ${
                  photoAttached
                    ? 'border-brand-500 bg-brand-50 text-brand-700'
                    : 'border-slate-300 hover:border-slate-400 text-slate-500 bg-surface-canvas'
                }`}
              >
                <Camera className="w-4 h-4" />
                <span>{photoAttached ? '✓ Photo attached (IMG_9021.jpg)' : '+ Add Photo'}</span>
              </button>
            </div>
          </div>

          <PrimaryButton type="submit" className="bg-brand-600 hover:bg-brand-700">
            Submit Complaint
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};
