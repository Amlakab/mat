'use client';

import React from 'react';
import Image from 'next/image';
import {
  Truck,
  Armchair,
  Briefcase,
  Building,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileText,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';
import { SERVICE_DEPARTMENTS } from '@/lib/catalog-data';

interface ServicesSectionProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function ServicesSection({ onOpenQuoteModal }: ServicesSectionProps) {
  const { t, isAmharic } = useLanguage();
  const { theme } = useTheme();

  const iconMap: Record<string, React.ReactNode> = {
    '01': <Truck className="w-6 h-6 text-white" />,
    '02': <Armchair className="w-6 h-6 text-white" />,
    '03': <Briefcase className="w-6 h-6 text-white" />,
    '04': <Building className="w-6 h-6 text-white" />,
  };

  const gradientMap: Record<string, string> = {
    '01': 'from-blue-600 to-blue-800',
    '02': 'from-sky-500 to-blue-700',
    '03': 'from-indigo-600 to-blue-800',
    '04': 'from-blue-700 to-cyan-700',
  };

  return (
    <section
      id="services"
      className={`py-12 sm:py-16 px-4 border-b transition-colors duration-200 ${
        theme === 'dark' ? 'bg-[#112240]/60 border-slate-800' : 'bg-slate-50 border-gray-200'
      }`}
    >
      <div className="container mx-auto">
        {/* Section Header (HRMS style) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('services.badge')}</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('services.title')}
            </h2>
            <p className={`text-xs sm:text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('services.subtitle')}
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>{isAmharic ? 'የዋጋ ዝርዝር ይጠይቁ' : 'Request Pricing'}</span>
            <span>→</span>
          </button>
        </div>

        {/* 4 Dedicated Department Cards (HRMS Card Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICE_DEPARTMENTS.map((dept) => {
            const title = t(dept.titleKey);
            const desc = t(dept.descKey);

            return (
              <div
                key={dept.id}
                className={`rounded-2xl overflow-hidden border transition-all duration-200 flex flex-col justify-between hover-card-elevate ${
                  theme === 'dark'
                    ? 'bg-[#112240] border-slate-700 shadow-lg hover:border-blue-500/50'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500/50'
                }`}
              >
                {/* Visual Header Image with Department Badge */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-800">
                  <Image
                    src={dept.image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-r ${
                        gradientMap[dept.number] || 'from-blue-600 to-blue-800'
                      } flex items-center justify-center shadow-lg`}
                    >
                      {iconMap[dept.number]}
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-black/60 text-white backdrop-blur-sm border border-white/10 font-mono">
                      DEPT {dept.number}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {desc}
                    </p>

                    {/* Featured Scope Badges */}
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-800">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                        {isAmharic ? 'የአገልግሎት ዝርዝርና አቅርቦት:' : 'Scope of Supply & Execution:'}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {dept.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold ${
                              theme === 'dark'
                                ? 'bg-slate-800 text-gray-200 border border-slate-700'
                                : 'bg-slate-100 text-gray-700 border border-gray-200'
                            }`}
                          >
                            <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0" />
                            <span>{isAmharic ? cat.am : cat.en}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {isAmharic ? 'ኦፊሴላዊ የዋጋ ጥያቄ' : 'Official Inquiry'}
                    </span>
                    <button
                      onClick={() => onOpenQuoteModal(title)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-md hover:scale-105 inline-flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t('hero.primary_cta')}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
