'use client';

import React from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Layers,
  HeartHandshake,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';

export default function WhyChooseUs() {
  const { t, isAmharic } = useLanguage();
  const { theme } = useTheme();

  const reasons = [
    {
      number: '01',
      icon: ShieldCheck,
      title: t('why.reason1.title'),
      desc: t('why.reason1.desc'),
    },
    {
      number: '02',
      icon: CheckCircle,
      title: t('why.reason2.title'),
      desc: t('why.reason2.desc'),
    },
    {
      number: '03',
      icon: Layers,
      title: t('why.reason3.title'),
      desc: t('why.reason3.desc'),
    },
    {
      number: '04',
      icon: HeartHandshake,
      title: t('why.reason4.title'),
      desc: t('why.reason4.desc'),
    },
    {
      number: '05',
      icon: Briefcase,
      title: t('why.reason5.title'),
      desc: t('why.reason5.desc'),
    },
  ];

  return (
    <section
      id="why-us"
      className={`py-12 sm:py-16 px-4 border-b transition-colors duration-200 ${
        theme === 'dark' ? 'bg-[#112240]/60 border-slate-800' : 'bg-slate-50 border-gray-200'
      }`}
    >
      <div className="container mx-auto">
        {/* Section Header (HRMS style) */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('why.badge')}</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('why.title')}
          </h2>
          <p
            className={`text-xs sm:text-sm max-w-xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {isAmharic
              ? 'በታማኝነት፣ በጥራት እና በፈጣን አቅርቦት ላይ የተመሰረተ ዘላቂ አጋርነት።'
              : 'Grounding our partnerships in straightforward accountability, dependable deliveries, and practical value.'}
          </p>
        </div>

        {/* Reasons Grid matching HRMS Why Choose Us cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border text-center transition-all hover-card-elevate ${
                  theme === 'dark'
                    ? 'bg-[#112240] border-slate-700 shadow-md'
                    : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                {/* Icon Box (HRMS Style) */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3.5 ${
                    theme === 'dark'
                      ? 'bg-blue-900/40 text-blue-400'
                      : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="font-mono text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {reason.number}
                </div>

                <h3
                  className={`text-base font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {reason.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
