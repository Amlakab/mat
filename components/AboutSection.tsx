'use client';

import React from 'react';
import Image from 'next/image';
import {
  Award,
  Users,
  Clock,
  Target,
  Phone,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';

export default function AboutSection() {
  const { t, isAmharic } = useLanguage();
  const { theme } = useTheme();

  const corePillars = [
    {
      icon: Award,
      title: t('about.pillar1'),
      desc: t('about.pillar1.sub'),
    },
    {
      icon: Clock,
      title: t('about.pillar2'),
      desc: t('about.pillar2.sub'),
    },
    {
      icon: Users,
      title: t('about.pillar3'),
      desc: t('about.pillar3.sub'),
    },
    {
      icon: Target,
      title: t('about.pillar4'),
      desc: t('about.pillar4.sub'),
    },
  ];

  return (
    <section
      id="about"
      className={`py-12 sm:py-16 px-4 border-b transition-colors duration-200 ${
        theme === 'dark' ? 'bg-[#0a192f] border-slate-800' : 'bg-white border-gray-200'
      }`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visuals & Team Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Professional Team on Site */}
              <div className="relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-slate-700 bg-slate-800">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="MAT Engineering and Construction Professional Team on Site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-blue-400 mb-1">
                    {isAmharic ? 'የምህንድስና እና ግንባታ ጥራት' : 'On-Site Engineering Execution'}
                  </div>
                  <div className="text-sm sm:text-base font-bold leading-snug">
                    {isAmharic
                      ? 'የተሟላ የፕሮጀክት ቁጥጥር እና ጥራት ያላቸው ግብዓቶች'
                      : 'Professional Project Supervision & Quality Control'}
                  </div>
                </div>
              </div>

              {/* Floating Company Card with General Manager Details (HRMS Card Style) */}
              <div
                className={`mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 sm:max-w-xs p-4 sm:p-5 rounded-2xl border shadow-xl ${
                  theme === 'dark'
                    ? 'bg-[#112240] border-slate-700 text-white'
                    : 'bg-white border-gray-200 text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                    AT
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {isAmharic ? 'ዋና ሥራ አስኪያጅ' : 'General Manager'}
                    </div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      {t('contact.info.gm_name')}
                    </div>
                    <a
                      href="tel:+251911994405"
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <Phone className="w-3 h-3" />
                      <span>0911 994 405</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Grounded Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t('about.badge')}</span>
              </div>
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t('about.title')}
              </h2>
            </div>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {t('about.p1')}
            </p>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {t('about.p2')}
            </p>

            {/* 4 Pillars Grid (HRMS Feature Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all ${
                      theme === 'dark'
                        ? 'bg-[#112240] border-slate-700 shadow-sm'
                        : 'bg-slate-50 border-gray-200 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          theme === 'dark'
                            ? 'bg-blue-900/40 text-blue-400'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4
                          className={`text-sm font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {pillar.title}
                        </h4>
                        <p
                          className={`text-xs mt-1 leading-relaxed ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
