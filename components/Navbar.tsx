'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  Moon,
  Sun,
  Globe,
  ChevronDown,
} from 'lucide-react';
import { useTheme } from '@/lib/theme-context';
import { useLanguage } from '@/lib/language-context';

interface NavbarProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const [mounted, setMounted] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Mount component
  useEffect(() => {
    setMounted(true);

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      } else {
        setActiveHash('#home');
      }
    };

    // Set initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Close dropdown/menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close language dropdown
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(target)
      ) {
        setIsLanguageOpen(false);
      }

      // Close mobile menu
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Lock body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Navigation links
  const navLinks = [
    { href: '#home', labelKey: 'nav.home' },
    { href: '#about', labelKey: 'nav.about' },
    { href: '#services', labelKey: 'nav.services' },
    { href: '#products', labelKey: 'nav.products' },
    { href: '#projects', labelKey: 'nav.projects' },
    { href: '#why-us', labelKey: 'nav.why_us' },
    { href: '#contact', labelKey: 'nav.contact' },
  ];

  const isActive = (href: string) => activeHash === href;

  // Desktop navigation link styles
  const navLinkClasses = (href: string) => `
    relative px-3 sm:px-4 py-2 sm:py-3
    text-sm sm:text-base font-medium
    transition-all duration-300
    ${
      isActive(href)
        ? 'text-primary dark:text-primary after:scale-x-100'
        : 'text-text-primary dark:text-text-primary hover:text-primary dark:hover:text-primary'
    }
    after:absolute after:bottom-0 after:left-0
    after:h-0.5
    after:bg-primary dark:after:bg-primary
    after:transition-transform after:duration-300
    after:origin-left after:scale-x-0
    hover:after:scale-x-100
  `;

  // Mobile navigation link styles
  const mobileNavLinkClasses = (href: string) => `
    block px-4 py-3
    text-base sm:text-lg font-medium
    transition-all duration-200
    rounded-lg
    ${
      isActive(href)
        ? 'text-primary dark:text-primary bg-primary/10 dark:bg-primary/20 border-l-4 border-primary'
        : 'text-text-primary dark:text-text-primary hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10'
    }
  `;

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface dark:bg-surface border-b border-border shadow-md h-16 sm:h-20" />
    );
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface dark:bg-surface border-b border-border dark:border-border shadow-md transition-colors duration-300">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* =====================================================
                LOGO + BRAND
            ====================================================== */}
            <Link
              href="#home"
              onClick={() => {
                setActiveHash('#home');
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-2 sm:space-x-3 group min-w-0"
            >
              {/* Company Logo */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 overflow-hidden rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105 bg-white">
                <Image
                  src="/mat.jpg"
                  alt="MAT Engineering and Trading PLC"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, 48px"
                />
              </div>

              {/* Company Name */}
              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-xl md:text-2xl font-bold text-text-primary dark:text-text-primary transition-colors duration-300 group-hover:text-primary dark:group-hover:text-primary leading-tight truncate">
                  MAT Engineering
                </span>

                <span className="text-[10px] sm:text-xs text-text-muted font-medium hidden sm:block truncate">
                  {t('brand.subtitle')}
                </span>
              </div>
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION
            ====================================================== */}
            <nav className="hidden lg:flex items-center space-x-1">

              {/* Navigation Links */}
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className={navLinkClasses(link.href)}
                >
                  {t(link.labelKey)}
                </a>
              ))}

              {/* =================================================
                  LANGUAGE DROPDOWN
              ================================================== */}
              <div
                className="relative ml-2 sm:ml-4"
                ref={langDropdownRef}
              >
                <button
                  type="button"
                  onClick={() =>
                    setIsLanguageOpen(!isLanguageOpen)
                  }
                  className={`
                    relative px-2 sm:px-3 py-2
                    text-sm sm:text-base font-medium
                    transition-all duration-300
                    flex items-center space-x-1.5
                    ${
                      isLanguageOpen
                        ? 'text-primary dark:text-primary'
                        : 'text-text-primary dark:text-text-primary hover:text-primary dark:hover:text-primary'
                    }
                  `}
                  aria-label="Select Language"
                  aria-expanded={isLanguageOpen}
                >
                  <Globe className="w-4 h-4 text-text-primary dark:text-text-primary" />

                  <span className="text-text-primary dark:text-text-primary text-xs font-bold uppercase">
                    {language === 'am' ? 'አማ' : 'EN'}
                  </span>

                  <ChevronDown
                    className={`
                      w-3.5 h-3.5
                      transition-transform duration-300
                      ${isLanguageOpen ? 'rotate-180' : ''}
                      text-text-muted
                    `}
                  />
                </button>

                {/* Language Menu */}
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-surface dark:bg-surface border border-border dark:border-border rounded-lg shadow-lg py-2 animate-fadeIn z-50">

                    {/* English */}
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('en');
                        setIsLanguageOpen(false);
                      }}
                      className={`
                        block w-full px-4 py-2.5
                        text-left text-sm
                        transition-colors duration-200
                        ${
                          language === 'en'
                            ? 'text-primary font-bold bg-primary/10'
                            : 'text-text-primary hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/20'
                        }
                      `}
                    >
                      English
                    </button>

                    {/* Amharic */}
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('am');
                        setIsLanguageOpen(false);
                      }}
                      className={`
                        block w-full px-4 py-2.5
                        text-left text-sm
                        transition-colors duration-200
                        ${
                          language === 'am'
                            ? 'text-primary font-bold bg-primary/10'
                            : 'text-text-primary hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/20'
                        }
                      `}
                    >
                      አማርኛ (Amharic)
                    </button>
                  </div>
                )}
              </div>

              {/* =================================================
                  DESKTOP THEME TOGGLE
              ================================================== */}
              <button
                type="button"
                onClick={toggleTheme}
                className="ml-2 sm:ml-3 p-2 sm:p-2.5 rounded-lg hover:bg-border dark:hover:bg-border transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-warning" />
                ) : (
                  <Moon className="w-4 h-4 text-text-secondary" />
                )}
              </button>
            </nav>

            {/* =====================================================
                MOBILE CONTROLS
            ====================================================== */}
            <div className="lg:hidden flex items-center space-x-2">

              {/* Mobile Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-border dark:hover:bg-border transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-warning" />
                ) : (
                  <Moon className="w-4 h-4 text-text-secondary" />
                )}
              </button>

              {/* Mobile Language Toggle */}
              <button
                type="button"
                onClick={() =>
                  setLanguage(language === 'en' ? 'am' : 'en')
                }
                className="p-2 text-xs font-bold rounded-lg border border-border text-text-primary hover:bg-border transition-all"
                aria-label="Switch language"
              >
                {language === 'en' ? 'አማ' : 'EN'}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text-primary hover:text-primary p-2 rounded-lg hover:bg-border transition-all duration-300"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            MOBILE MENU
        ========================================================== */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden bg-surface dark:bg-surface border-b border-border shadow-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveHash(link.href);
                  setIsMenuOpen(false);
                }}
                className={mobileNavLinkClasses(link.href)}
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}