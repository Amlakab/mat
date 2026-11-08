'use client';

import React, { useState } from 'react';
import {
  Phone,
  User,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';

export default function ContactSection() {
  const { t, isAmharic } = useLanguage();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Construction Material Supply',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="contact"
      className={`py-12 sm:py-16 px-4 border-b transition-colors duration-200 ${
        theme === 'dark' ? 'bg-[#112240]/60 border-slate-800' : 'bg-slate-50 border-gray-200'
      }`}
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Header (HRMS style) */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>{t('contact.badge')}</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('contact.title')}
          </h2>
          <p
            className={`text-xs sm:text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Card (HRMS style) */}
          <div className="lg:col-span-5 space-y-4">
            <div
              className={`p-6 sm:p-7 rounded-3xl border shadow-sm space-y-5 ${
                theme === 'dark'
                  ? 'bg-[#112240] border-slate-700'
                  : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md">
                  MAT
                </div>
                <div>
                  <h3
                    className={`font-bold text-base leading-tight ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    MAT Engineering & Trading PLC
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {t('brand.subtitle')}
                  </p>
                </div>
              </div>

              {/* Verified Contact Details (HRMS icons & layout) */}
              <div className="space-y-4">
                {/* General Manager */}
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2.5 rounded-xl shrink-0 ${
                      theme === 'dark'
                        ? 'bg-blue-900/30 text-blue-400'
                        : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {t('contact.info.gm_title')}
                    </div>
                    <div
                      className={`text-sm font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {t('contact.info.gm_name')}
                    </div>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2.5 rounded-xl shrink-0 ${
                      theme === 'dark'
                        ? 'bg-emerald-900/30 text-emerald-400'
                        : 'bg-emerald-50 text-emerald-600'
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {t('contact.info.phone_label')}
                    </div>
                    <a
                      href="tel:+251911994405"
                      className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline block"
                    >
                      {t('contact.info.phone_val')}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2.5 rounded-xl shrink-0 ${
                      theme === 'dark'
                        ? 'bg-amber-900/30 text-amber-400'
                        : 'bg-amber-50 text-amber-600'
                    }`}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {t('contact.info.location_label')}
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                      }`}
                    >
                      {t('contact.info.location_val')}
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2.5 rounded-xl shrink-0 ${
                      theme === 'dark'
                        ? 'bg-purple-900/30 text-purple-400'
                        : 'bg-purple-50 text-purple-600'
                    }`}
                  >
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {t('contact.info.hours_label')}
                    </div>
                    <div
                      className={`text-xs font-semibold ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {t('contact.info.hours_val')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: HRMS Form Card */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-sm ${
                theme === 'dark'
                  ? 'bg-[#112240] border-slate-700 shadow-xl'
                  : 'bg-white border-gray-200'
              }`}
            >
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {isAmharic ? 'መልእክትዎ በተሳካ ሁኔታ ተልኳል!' : 'Message Sent Successfully!'}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm max-w-md mx-auto ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {isAmharic
                      ? 'የMAT Engineering የደንበኞች አገልግሎት ክፍል ጥያቄዎን ተመልክቶ በቅርቡ ያነጋግርዎታል።'
                      : 'Our project team has received your inquiry. We will contact you shortly.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'Construction Material Supply',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    {isAmharic ? 'ሌላ መልእክት ላክ' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                        {isAmharic ? 'ሙሉ ስም *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          theme === 'dark'
                            ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                        }`}
                        placeholder={isAmharic ? 'ስምዎን ያስገቡ' : 'Your name'}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                        {isAmharic ? 'ስልክ ቁጥር *' : 'Phone Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          theme === 'dark'
                            ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                        }`}
                        placeholder="09... / +251..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                        {isAmharic ? 'ኢሜይል (አማራጭ)' : 'Email (Optional)'}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          theme === 'dark'
                            ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                        }`}
                        placeholder="example@domain.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                        {isAmharic ? 'የፍላጎት ዘርፍ' : 'Area of Interest'}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          theme === 'dark'
                            ? 'bg-slate-800 border-slate-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="Construction Material Supply">
                          {isAmharic ? 'የኮንስትራክሽን ዕቃዎች አቅርቦት' : 'Construction Material Supply'}
                        </option>
                        <option value="Home Furniture">
                          {isAmharic ? 'የቤት ፈርኒቸር' : 'Home Furniture'}
                        </option>
                        <option value="Office Furniture">
                          {isAmharic ? 'የቢሮ ፈርኒቸር' : 'Office Furniture'}
                        </option>
                        <option value="General Contracting">
                          {isAmharic ? 'ጠቅላላ ተቋራጭ (ግንባታ)' : 'General Contracting & Building'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-gray-700 dark:text-gray-300">
                      {isAmharic ? 'መልእክት / የፕሮጀክት ዝርዝር *' : 'Message / Project Details *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        theme === 'dark'
                          ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder={
                        isAmharic
                          ? 'የሚፈልጉትን የዕቃ ብዛት ወይም የፕሮጀክትዎን መረጃ ይፃፉልን...'
                          : 'Tell us about the materials, quantities, or contracting scope you need...'
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm sm:text-base shadow-md transition-all disabled:opacity-50 hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? isAmharic
                          ? 'በመላክ ላይ...'
                          : 'Sending...'
                        : isAmharic
                        ? 'መልእክት ላክ'
                        : 'Send Message'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
