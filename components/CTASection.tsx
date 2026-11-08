'use client';

import React from 'react';
import { Phone, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface CTASectionProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function CTASection({ onOpenQuoteModal }: CTASectionProps) {
  const { t, isAmharic } = useLanguage();

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden bg-gradient-to-br from-blue-950 via-[#0a192f] to-[#112240] text-white">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/15">
            <span>{isAmharic ? 'ቀጥተኛ የንግድ ግንኙነት' : 'Direct Partner Engagement'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {t('cta.headline')}
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            {t('cta.subheadline')}
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Call Us Button (HRMS Style) */}
            <a
              href="tel:+251911994405"
              className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-blue-200" />
              <span>{t('cta.btn.call')}</span>
            </a>

            {/* Request a Quote Button (HRMS Style) */}
            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 border-2 border-white/80 hover:bg-white hover:text-gray-900 text-white rounded-xl font-bold text-sm sm:text-base transition-all backdrop-blur-sm inline-flex items-center justify-center gap-2.5 hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              <span>{t('cta.btn.quote')}</span>
            </button>
          </div>

          {/* Verification sub-line */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              {t('brand.gm')}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              {isAmharic ? 'ቀጥተኛ የዋጋ ስምምነት' : 'Direct Inquiries Welcomed'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              {isAmharic ? 'በመላው ኢትዮጵያ አቅርቦት' : 'Nationwide Delivery Across Ethiopia'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
