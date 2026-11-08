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
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800/80">
          {/* Column 1: Company Profile (Col span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 flex items-center justify-center text-white shadow-md font-extrabold text-xl">
                MAT
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block">
                  MAT Engineering and Trading PLC
                </span>
                <span className="text-xs text-accent-400 font-medium">
                  {t('brand.subtitle')}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {t('footer.desc')}
            </p>

            {/* Core Specialties Pills */}
            <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-accent-400 shrink-0" />
                <span>Construction Material Supplier</span>
              </div>
              <div className="flex items-center gap-2">
                <Armchair className="w-4 h-4 text-accent-400 shrink-0" />
                <span>Home & Office Furniture</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-accent-400 shrink-0" />
                <span>General Contractor</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Contact Info (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.contact_info')}
            </h4>

            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-white font-semibold">
                <User className="w-4 h-4 text-primary-400" />
                <span>General Manager: Amare Tesfa</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-400" />
                <a
                  href="tel:+251911994405"
                  className="text-white hover:text-accent-300 font-bold hover:underline"
                >
                  0911 994 405
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Ethiopia (Serving Addis Ababa & Nationwide)</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400">
              {t('footer.ethiopia_pride')}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>{t('footer.copyright')}</div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
