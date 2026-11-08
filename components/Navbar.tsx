'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Phone,
  Moon,
  Sun,
  Globe,
  Building2,
  Hammer,
  Layers,
  ChevronRight,
  FileText,
} from 'lucide-react';
import { useTheme } from '@/lib/theme-context';
import { useLanguage } from '@/lib/language-context';

interface NavbarProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const { theme, toggleTheme, isDark } = useTheme();
  const { language, toggleLanguage, t, isAmharic } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      {/* Top micro-bar for quick phone contact and business identity */}
      <div className="bg-navy-900 text-slate-200 text-xs py-1.5 px-4 border-b border-navy-700/60 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {t('brand.location')}: Ethiopia
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">{t('brand.gm')}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+251911994405"
              className="flex items-center gap-1.5 text-accent-400 hover:text-accent-300 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t('brand.phone')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-md py-2.5'
            : 'bg-surface/95 dark:bg-navy-900/95 backdrop-blur-md py-4 border-b border-border'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <Link
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight">MAT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-text-primary leading-tight">
                MAT Engineering & Trading PLC
              </span>
              <span className="text-[11px] sm:text-xs text-text-muted font-medium">
                {t('brand.subtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-navy-800 rounded-md transition-colors"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Language, Theme & Get Quote */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-border bg-surface hover:bg-slate-100 dark:hover:bg-navy-800 text-text-secondary transition-colors"
              title="Switch Language / ቋንቋ ቀይር"
            >
              <Globe className="w-3.5 h-3.5 text-primary-500" />
              <span>{isAmharic ? 'English' : 'አማርኛ'}</span>
            </button>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-lg border border-border bg-surface hover:bg-slate-100 dark:hover:bg-navy-800 text-text-secondary transition-colors"
              aria-label="Toggle Dark Mode"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Direct Call Button */}
            <a
              href="tel:+251911994405"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 border border-border transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent-600" />
              <span className="hidden lg:inline">{t('brand.phone')}</span>
            </a>

            {/* Get a Quote Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-primary-700 hover:bg-primary-800 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <FileText className="w-4 h-4 text-accent-300" />
              <span>{t('nav.get_quote')}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Theme + Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-2 py-1 text-xs font-semibold rounded-md border border-border bg-surface text-text-secondary"
            >
              {isAmharic ? 'EN' : 'አማ'}
            </button>

            <button
              onClick={toggleTheme}
              type="button"
              className="p-1.5 rounded-md border border-border bg-surface text-text-secondary"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg border border-border bg-surface text-text-primary hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-border px-4 pb-6 bg-surface dark:bg-navy-900 shadow-xl rounded-b-2xl">
            <div className="flex flex-col gap-1.5 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-text-primary hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                >
                  <span>{t(link.labelKey)}</span>
                  <ChevronRight className="w-4 h-4 text-text-muted" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-border space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-primary-700 hover:bg-primary-800 rounded-xl shadow-md transition-all"
              >
                <FileText className="w-4 h-4 text-accent-300" />
                <span>{t('nav.get_quote')}</span>
              </button>

              <a
                href="tel:+251911994405"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-text-primary bg-surface-elevated border border-border rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-accent-600" />
                <span>{t('nav.call_now')}: 0911 994 405</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
