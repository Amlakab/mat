'use client';

import React from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Layers,
  HeartHandshake,
  Briefcase,
  Building,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      number: '01',
      icon: ShieldCheck,
      title: t('why.reason1.title'),
      desc: t('why.reason1.desc'),
      accentColor: 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-navy-800 border-primary-200 dark:border-navy-600',
    },
    {
      number: '02',
      icon: CheckCircle,
      title: t('why.reason2.title'),
      desc: t('why.reason2.desc'),
      accentColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-navy-800 border-emerald-200 dark:border-navy-600',
    },
    {
      number: '03',
      icon: Layers,
      title: t('why.reason3.title'),
      desc: t('why.reason3.desc'),
      accentColor: 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-navy-800 border-accent-200 dark:border-navy-600',
    },
    {
      number: '04',
      icon: HeartHandshake,
      title: t('why.reason4.title'),
      desc: t('why.reason4.desc'),
      accentColor: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-navy-800 border-blue-200 dark:border-navy-600',
    },
    {
      number: '05',
      icon: Briefcase,
      title: t('why.reason5.title'),
      desc: t('why.reason5.desc'),
      accentColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-navy-800 border-amber-200 dark:border-navy-600',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-surface-elevated/40 dark:bg-navy-900/60 border-y border-border">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-navy-800 text-primary-700 dark:text-primary-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent-600" />
            <span>{t('why.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            {t('why.title')}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed font-normal">
            Grounding our partnerships in straightforward accountability, dependable deliveries, and practical value.
          </p>
        </div>

        {/* Reasons Grid (5 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-sm hover-card-elevate flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl border ${reason.accentColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-text-muted">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-2.5">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-border/80 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Standard of Practice</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
