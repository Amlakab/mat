'use client';

import React from 'react';
import { Phone, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface CTASectionProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function CTASection({ onOpenQuoteModal }: CTASectionProps) {
  const { t } = useLanguage();

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-navy-900 via-primary-950 to-navy-900 text-white">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/10">
            <span>Direct Partner Engagement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {t('cta.headline')}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('cta.subheadline')}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Call Us Button */}
            <a
              href="tel:+251911994405"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all transform active:scale-95"
            >
              <Phone className="w-5 h-5" />
              <span>{t('cta.btn.call')}</span>
            </a>

            {/* Request a Quote Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-md transition-all active:scale-95"
            >
              <FileText className="w-5 h-5 text-accent-300" />
              <span>{t('cta.btn.quote')}</span>
            </button>
          </div>

          {/* Verification sub-line */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />
              General Manager: Amare Tesfa
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />
              Direct Inquiries Welcomed
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />
              Nationwide Delivery Across Ethiopia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
