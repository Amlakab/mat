'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  FileText,
  CheckCircle2,
  Phone,
  Send,
  Building,
  Truck,
  Armchair,
  Briefcase,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialItem?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  initialService = 'Construction Material Supply',
  initialItem = '',
}: QuoteModalProps) {
  const { t } = useLanguage();

  const [department, setDepartment] = useState(initialService);
  const [itemName, setItemName] = useState(initialItem);
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) setDepartment(initialService);
    if (initialItem) setItemName(initialItem);
  }, [initialService, initialItem]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl rounded-2xl bg-surface border border-border shadow-2xl z-10 overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 py-4 bg-primary-900 text-white flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-white/10 text-accent-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                {t('modal.quote_title')}
              </h3>
              <p className="text-xs text-slate-300">
                MAT Engineering & Trading PLC
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-text-primary">
                {t('modal.success_title')}
              </h4>
              <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                {t('modal.success_desc')}
              </p>

              <div className="pt-4 p-4 rounded-xl bg-surface-elevated border border-border text-xs text-left text-text-muted space-y-1">
                <div>
                  <span className="font-semibold text-text-primary">Contact Phone:</span> 0911 994 405
                </div>
                <div>
                  <span className="font-semibold text-text-primary">General Manager:</span> Amare Tesfa
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                type="button"
                className="mt-4 px-6 py-2.5 rounded-xl bg-primary-700 text-white font-semibold text-sm hover:bg-primary-800 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-text-secondary mb-2">
                {t('modal.quote_subtitle')}
              </p>

              {/* Department */}
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  {t('modal.field.service')} <span className="text-red-500">*</span>
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="Construction Material Supply">01 — Construction Material Supply</option>
                  <option value="Home Furniture">02 — Home Furniture</option>
                  <option value="Office Furniture">03 — Office Furniture</option>
                  <option value="General Contracting">04 — General Contracting</option>
                  <option value="Multi-Discipline Project">Comprehensive Supply & Contracting</option>
                </select>
              </div>

              {/* Item or Scope */}
              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  {t('modal.field.item')}
                </label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="e.g. 500 Quintals Cement, 12mm Rebar, Executive Office Set"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Quantity & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    {t('modal.field.qty')}
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 50 units / 200 sqm"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    Site / Delivery Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Addis Ababa, Bole"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Client Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-border">
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name / Company"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0911..."
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@company.com"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Additional Specifications or Notes
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any technical requirements or preferred delivery dates..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2.5 rounded-xl border border-border text-xs font-semibold text-text-secondary hover:bg-slate-100 dark:hover:bg-navy-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-700 hover:bg-primary-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : t('modal.field.submit')}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
