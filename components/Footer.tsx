'use client';

import React from 'react';
import Link from 'next/link';
import {
  Phone,
  User,
  MapPin,
  ArrowUp,
  ShieldCheck,
  Building2,
  Truck,
  Armchair,
  Layers,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { t, isAmharic } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', labelKey: 'nav.home' },
    { href: '#about', labelKey: 'nav.about' },
    { href: '#services', labelKey: 'nav.services' },
    { href: '#products', labelKey: 'nav.products' },
    { href: '#projects', labelKey: 'nav.projects' },
    { href: '#why-us', labelKey: 'nav.why_us' },
    { href: '#contact', labelKey: 'nav.contact' },
  ];

  return (
    <footer className="bg-[#0a192f] text-gray-300 pt-14 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Column 1: Company Profile (Col span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 flex items-center justify-center text-white shadow-md font-extrabold text-xl">
                MAT
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block">
                  MAT Engineering & Trading PLC
                </span>
                <span className="text-xs text-blue-400 font-medium">
                  {t('brand.subtitle')}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
              {t('footer.desc')}
            </p>

            {/* Core Specialties Pills */}
            <div className="pt-1 flex flex-col gap-1.5 text-xs text-gray-300 font-medium">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Construction Material Supplier</span>
              </div>
              <div className="flex items-center gap-2">
                <Armchair className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Home & Office Furniture</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>General Contractor</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 hover:underline transition-colors block text-gray-400"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Contact Info (Col span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.contact_info')}
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-white font-medium">{t('brand.gm')}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="tel:+251911994405"
                  className="text-white hover:text-blue-400 font-semibold transition-colors"
                >
                  0911 994 405
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Ethiopia (Addis Ababa & Nationwide Delivery)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>{t('footer.copyright')}</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#112240] hover:bg-slate-700 text-gray-300 hover:text-white transition-all border border-slate-700"
            aria-label="Back to top"
          >
            <span>{isAmharic ? 'ወደ ላይ ውጣ' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
