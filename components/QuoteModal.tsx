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
import { useTheme } from '@/lib/theme-context';

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
  const { t, isAmharic } = useLanguage();
  const { theme } = useTheme();

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
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card (HRMS style) */}
      <div
        className={`relative w-full max-w-xl rounded-3xl border shadow-2xl z-10 overflow-hidden my-8 ${
          theme === 'dark' ? 'bg-[#112240] border-slate-700' : 'bg-white border-gray-200'
        }`}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-blue-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shadow-inner">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                {t('modal.quote_title')}
              </h3>
              <p className="text-xs text-blue-100">
                MAT Engineering & Trading PLC
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-blue-100 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4
                className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t('modal.success_title')}
              </h4>
              <p
                className={`text-xs sm:text-sm max-w-md mx-auto ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {t('modal.success_desc')}
              </p>

              <div
                className={`mt-4 p-4 rounded-2xl border text-left text-xs ${
                  theme === 'dark'
                    ? 'bg-slate-800/80 border-slate-700 text-gray-300'
                    : 'bg-slate-50 border-gray-200 text-gray-700'
                }`}
              >
                <div className="font-bold mb-1 text-blue-600 dark:text-blue-400">
                  {isAmharic ? 'የጥያቄዎ ማጠቃለያ:' : 'Inquiry Summary:'}
                </div>
                <div>• {isAmharic ? 'ዘርፍ' : 'Division'}: {department}</div>
                {itemName && <div>• {isAmharic ? 'ዕቃ' : 'Item'}: {itemName}</div>}
                <div>• {isAmharic ? 'ስልክ' : 'Contact Phone'}: {phone}</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  {isAmharic ? 'እሺ፣ ጨርስ' : 'Done'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Department Selection */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                  {t('modal.department')} *
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="Construction Material Supply">
                    Construction Material Supply (ብረት፣ ሲሚንቶ፣ ብሎኬት)
                  </option>
                  <option value="Home Furniture">
                    Home Furniture (ሳሎን ሶፋ፣ አልጋ፣ ቁምሳጥን)
                  </option>
                  <option value="Office Furniture">
                    Office Furniture (የአስተዳዳሪ ጠረጴዛ፣ የስብሰባ ወንበር፣ ካቢኔት)
                  </option>
                  <option value="General Contracting">
                    General Contracting & Building Construction (ህንፃ ግንባታ እና እድሳት)
                  </option>
                </select>
              </div>

              {/* Item Name & Estimated Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                    {t('modal.item_name')}
                  </label>
                  <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="e.g. Grade 60 Rebar 16mm / Executive Desk"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                    {t('modal.quantity')}
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 50 Quintals / 20 Sets"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>
              </div>

              {/* Customer Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                    {t('modal.name')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name or Enterprise"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                    {t('modal.phone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09... / +251..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>
              </div>

              {/* Project Destination */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                  {t('modal.location')}
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Addis Ababa (Bole), Hawassa, Adama, Bahir Dar..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              {/* Specific Notes */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                  {t('modal.notes')}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any technical requirements, project schedule, or delivery conditions..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm sm:text-base shadow-md transition-all disabled:opacity-50 hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isSubmitting
                    ? isAmharic
                      ? 'በማዘጋጀት ላይ...'
                      : 'Submitting...'
                    : t('modal.submit')}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
