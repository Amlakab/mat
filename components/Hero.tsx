'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Building,
  Truck,
  Armchair,
  Briefcase,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface HeroProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Background Graphic / Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-15"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1920&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container-custom">
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 dark:bg-navy-800 border border-primary-200/60 dark:border-navy-600 text-xs sm:text-sm font-semibold text-primary-700 dark:text-primary-300 shadow-sm animate-subtle-pulse">
            <span className="w-2 h-2 rounded-full bg-accent-600" />
            <span>{t('hero.tag')}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
            <span className="block text-primary-900 dark:text-white">
              Building Better.
            </span>
            <span className="block text-primary-600 dark:text-primary-400">
              Supplying Better.
            </span>
            <span className="block text-accent-600 dark:text-accent-400">
              Furnishing Better.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-normal">
            {t('hero.subheadline')}
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-primary-700 hover:bg-primary-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95"
            >
              <span>{t('hero.primary_cta')}</span>
              <ArrowRight className="w-4 h-4 text-accent-300" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-text-primary bg-surface hover:bg-slate-100 dark:hover:bg-navy-800 border border-border rounded-xl shadow-sm hover:shadow transition-all"
            >
              <span>{t('hero.secondary_cta')}</span>
            </a>

            <a
              href="tel:+251911994405"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-accent-700 dark:text-accent-300 bg-accent-50 dark:bg-navy-800/80 border border-accent-200 dark:border-navy-600 rounded-xl hover:bg-accent-100 dark:hover:bg-navy-700 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-accent-600" />
              <span>0911 994 405</span>
            </a>
          </div>

          {/* Quick Pillars highlight */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Ethiopian Enterprise
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Direct Material Delivery
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Custom Wood & Metal Works
            </span>
          </div>
        </div>

        {/* 3 Service Cards Below the Hero */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Construction Materials */}
          <div className="relative group p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-sm hover:border-primary-400 dark:hover:border-primary-500 hover-card-elevate">
            <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-navy-700 text-primary-700 dark:text-primary-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-1">
              Supply Division
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2.5">
              {t('hero.card1.title')}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {t('hero.card1.desc')}
            </p>
            <div className="pt-2 border-t border-border/80 flex items-center justify-between text-xs font-semibold text-primary-600 dark:text-primary-400">
              <a href="#services" className="inline-flex items-center gap-1 group-hover:underline">
                <span>View Products & Supplies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Home & Office Furniture */}
          <div className="relative group p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-sm hover:border-accent-400 dark:hover:border-accent-500 hover-card-elevate">
            <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-navy-700 text-accent-700 dark:text-accent-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Armchair className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-1">
              Furnishing Division
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2.5">
              {t('hero.card2.title')}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {t('hero.card2.desc')}
            </p>
            <div className="pt-2 border-t border-border/80 flex items-center justify-between text-xs font-semibold text-accent-600 dark:text-accent-400">
              <a href="#products" className="inline-flex items-center gap-1 group-hover:underline">
                <span>Explore Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: General Contracting */}
          <div className="relative group p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-sm hover:border-primary-400 dark:hover:border-primary-500 hover-card-elevate">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-navy-700 text-blue-700 dark:text-blue-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Building className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Contracting Division
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2.5">
              {t('hero.card3.title')}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {t('hero.card3.desc')}
            </p>
            <div className="pt-2 border-t border-border/80 flex items-center justify-between text-xs font-semibold text-primary-600 dark:text-primary-400">
              <a href="#services" className="inline-flex items-center gap-1 group-hover:underline">
                <span>Contracting Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
