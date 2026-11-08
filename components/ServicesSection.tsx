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
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { SERVICE_DEPARTMENTS } from '@/lib/catalog-data';

interface ServicesSectionProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function ServicesSection({ onOpenQuoteModal }: ServicesSectionProps) {
  const { t, isAmharic } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    '01': <Truck className="w-5 h-5 text-primary-600 dark:text-primary-400" />,
    '02': <Armchair className="w-5 h-5 text-accent-600 dark:text-accent-400" />,
    '03': <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    '04': <Building className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-navy-800 text-primary-700 dark:text-primary-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent-600" />
            <span>{t('services.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed font-normal">
            {t('services.subtitle')}
          </p>
        </div>

        {/* 4 Dedicated Department Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICE_DEPARTMENTS.map((dept) => {
            const title = t(dept.titleKey);
            const desc = t(dept.descKey);

            return (
              <div
                key={dept.id}
                className="group rounded-2xl bg-surface border border-border overflow-hidden shadow-sm hover:border-primary-400 dark:hover:border-primary-500 hover-card-elevate flex flex-col justify-between"
              >
                {/* Visual Header Image with Department Number */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={dept.image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
                  
                  {/* Department Number Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-navy-900/90 backdrop-blur-md border border-navy-700/80 text-white font-mono font-bold text-sm tracking-wider flex items-center gap-2">
                    {iconMap[dept.number]}
                    <span>{dept.number}</span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Card Body & Categories */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5">
                      {desc}
                    </p>

                    {/* Category Tags */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                        Featured Offerings & Scope:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {dept.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated text-text-secondary text-xs font-medium border border-border"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                            {isAmharic ? cat.am : cat.en}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <span className="text-xs text-text-muted italic">
                      Catalog tailored on inquiry
                    </span>

                    <button
                      onClick={() => onOpenQuoteModal(title)}
                      type="button"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-50 dark:bg-navy-800 text-primary-700 dark:text-primary-300 font-semibold text-xs sm:text-sm hover:bg-primary-700 hover:text-white dark:hover:bg-primary-600 transition-colors"
                    >
                      <span>Inquire About {dept.number}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
