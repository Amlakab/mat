'use client';

import React from 'react';
import Image from 'next/image';
import {
  CheckCircle,
  Award,
  Users2,
  Clock,
  Target,
  UserCheck,
  Building2,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function AboutSection() {
  const { t } = useLanguage();

  const corePillars = [
    {
      icon: Award,
      title: t('about.pillar1'),
      desc: t('about.pillar1.sub'),
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900',
    },
    {
      icon: Clock,
      title: t('about.pillar2'),
      desc: t('about.pillar2.sub'),
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900',
    },
    {
      icon: Users2,
      title: t('about.pillar3'),
      desc: t('about.pillar3.sub'),
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900',
    },
    {
      icon: Target,
      title: t('about.pillar4'),
      desc: t('about.pillar4.sub'),
      color: 'text-accent-500 bg-accent-50 dark:bg-accent-950/40 border-accent-200 dark:border-accent-900',
    },
  ];

  return (
    <section id="about" className="section-padding bg-surface-elevated/40 dark:bg-navy-900/60 border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visuals & Team Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Professional Engineering Team on Site */}
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="MAT Engineering and Construction Professional Team on Site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider font-semibold text-accent-300 mb-1">
                    On-Site Engineering Execution
                  </div>
                  <div className="text-base font-bold">
                    Professional Project Supervision & Quality Control
                  </div>
                </div>
              </div>

              {/* Floating Company Card with GM Details */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-6 sm:max-w-xs p-4 sm:p-5 rounded-xl bg-surface dark:bg-navy-800 border border-border shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm">
                    AT
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">General Manager</div>
                    <div className="text-sm font-bold text-text-primary">Amare Tesfa</div>
                    <a
                      href="tel:+251911994405"
                      className="text-xs font-semibold text-accent-600 dark:text-accent-400 hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <Phone className="w-3 h-3" />
                      0911 994 405
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Grounded Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-navy-800 text-primary-700 dark:text-primary-300 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-600" />
              <span>{t('about.badge')}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
              {t('about.title')}
            </h2>

            <div className="space-y-4 text-base text-text-secondary leading-relaxed font-normal">
              <p className="font-medium text-text-primary">
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
              <p>
                {t('about.p3')}
              </p>
            </div>

            {/* 4 Pillars (NO fake statistics, strictly qualitative authentic values) */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface dark:bg-navy-800/80 border border-border flex items-start gap-3.5 hover-card-elevate"
                  >
                    <div className={`p-2.5 rounded-lg border ${pillar.color} shrink-0`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-primary mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {pillar.desc}
                      </p>
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
