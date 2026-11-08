'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, getTranslation } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
  isAmharic: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mat_language') as Language;
      if (saved === 'en' || saved === 'am') {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('mat_language', lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'am' : 'en';
    setLanguage(next);
  };

  const t = (key: string, fallback?: string): string => {
    return getTranslation(key, language, fallback);
  };

  const isAmharic = language === 'am';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isAmharic }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: (key: string, fallback?: string) => fallback || key,
      isAmharic: false,
    };
  }
  return context;
}
