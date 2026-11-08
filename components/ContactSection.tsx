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
  HelpCircle,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function ContactSection() {
  const { t } = useLanguage();

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
    }, 900);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-navy-800 text-primary-700 dark:text-primary-300 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-accent-600" />
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed font-normal">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Card & Business Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-surface border border-border shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-primary-700 text-white flex items-center justify-center font-black text-lg">
                  MAT
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-text-primary leading-tight">
                    MAT Engineering and Trading PLC
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    Engineering, Supply & General Contracting
                  </p>
                </div>
              </div>

              {/* Verified Company Contact Items */}
              <div className="space-y-4">
                {/* General Manager */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-primary-50 dark:bg-navy-800 text-primary-600 dark:text-primary-400 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">
                      {t('contact.info.gm_title')}
                    </div>
                    <div className="text-base font-bold text-text-primary">
                      {t('contact.info.gm_name')}
                    </div>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-accent-50 dark:bg-navy-800 text-accent-600 dark:text-accent-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">
                      {t('contact.info.phone_label')}
                    </div>
                    <a
                      href="tel:+251911994405"
                      className="text-base font-bold text-accent-600 dark:text-accent-400 hover:underline"
                    >
                      {t('brand.phone')}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-navy-800 text-blue-600 dark:text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">
                      {t('contact.info.location_label')}
                    </div>
                    <div className="text-sm font-semibold text-text-primary">
                      {t('contact.info.location_val')}
                    </div>
                    <div className="text-xs text-text-muted mt-0.5">
                      Addis Ababa & Regional Projects Serviced
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-navy-800 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">
                      {t('contact.info.hours_label')}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-text-primary">
                      {t('contact.info.hours_val')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick direct call action banner */}
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:+251911994405"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-bold text-sm shadow transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 0911 994 405</span>
                </a>
              </div>
            </div>

            {/* Google Map Section ready for company coordinates */}
            <div className="p-5 rounded-2xl bg-surface border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-text-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  Business Location Map
                </span>
                <span className="text-[10px] text-accent-600 font-semibold">
                  Location Ready
                </span>
              </div>

              {/* Interactive map placeholder without inventing specific coordinates */}
              <div className="relative h-48 w-full rounded-xl overflow-hidden border border-border bg-slate-100 dark:bg-navy-800">
                <iframe
                  title="MAT Engineering & Trading PLC Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.09341773094!2d38.70425983756314!3d9.006004543781702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1714000000000!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-90 dark:opacity-80"
                />
              </div>

              <p className="text-[11px] text-text-muted leading-relaxed">
                {t('contact.map_placeholder')}
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-surface border border-border shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                Send an Inquiry or Quote Request
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mb-6">
                Fill in the details below and our team will get in touch directly.
              </p>

              {submitted ? (
                <div className="py-12 px-6 text-center space-y-4 rounded-xl bg-emerald-50 dark:bg-navy-800/90 border border-emerald-200 dark:border-emerald-800">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-text-secondary max-w-md mx-auto">
                    {t('contact.form.success')}
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
                    type="button"
                    className="mt-4 px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-text-primary mb-1.5">
                        {t('contact.form.name')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Abebe Bekele"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-text-primary mb-1.5">
                        {t('contact.form.phone')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0911..."
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-text-primary mb-1.5">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@company.com"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label className="block text-xs font-semibold text-text-primary mb-1.5">
                        {t('contact.form.service')}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="Construction Material Supply">01 — Construction Material Supply</option>
                        <option value="Home Furniture">02 — Home Furniture</option>
                        <option value="Office Furniture">03 — Office Furniture</option>
                        <option value="General Contracting">04 — General Contracting</option>
                        <option value="General Inquiry">General Corporate Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1.5">
                      {t('contact.form.message')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify materials, furniture models, or project scope..."
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-700 hover:bg-primary-800 text-white font-bold text-sm shadow-md transition-all active:scale-95 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>{t('contact.form.sending')}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-accent-300" />
                        <span>{t('contact.form.submit')}</span>
                      </>
                    )}
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
