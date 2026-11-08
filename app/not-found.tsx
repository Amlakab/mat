'use client';

import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Phone, Building2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function NotFound() {
  const { t, isAmharic } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text-primary px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-navy-800 text-primary-600 dark:text-primary-400 flex items-center justify-center mx-auto shadow-sm">
          <Building2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-sm font-bold text-accent-600 uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="text-3xl font-extrabold text-text-primary">
            {isAmharic ? 'ገጹ አልተገኘም' : 'Page Not Found'}
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            {isAmharic
              ? 'የፈለጉት ገጽ አልተገኘም ወይም ተዘዋውሯል። እባክዎን ወደ ዋናው ገጽ ይመለሱ ወይም በስልክ ያግኙን።'
              : 'The page you are looking for does not exist or has been moved. Return to our homepage or contact our team directly.'}
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary-700 hover:bg-primary-800 text-white font-semibold text-sm shadow transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>{isAmharic ? 'ወደ ዋና ገጽ' : 'Return Home'}</span>
          </Link>

          <a
            href="tel:+251911994405"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface text-text-primary hover:bg-slate-100 dark:hover:bg-navy-800 font-semibold text-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-accent-600" />
            <span>0911 994 405</span>
          </a>
        </div>

        <div className="pt-6 border-t border-border text-xs text-text-muted">
          MAT Engineering and Trading PLC • General Manager: Amare Tesfa
        </div>
      </div>
    </div>
  );
}
