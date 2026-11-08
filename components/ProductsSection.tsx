'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  Search,
  FileText,
  Layers,
  Sparkles,
  CheckCircle,
  Tag,
  Info,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';
import { PRODUCTS_CATALOG } from '@/lib/catalog-data';

interface ProductsSectionProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function ProductsSection({ onOpenQuoteModal }: ProductsSectionProps) {
  const { t, isAmharic } = useLanguage();
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'construction' | 'home' | 'office'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', labelKey: 'products.filter.all' },
    { id: 'construction', labelKey: 'products.filter.materials' },
    { id: 'home', labelKey: 'products.filter.home' },
    { id: 'office', labelKey: 'products.filter.office' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const titleText = isAmharic ? item.title.am : item.title.en;
      const descText = isAmharic ? item.description.am : item.description.en;
      const matchesSearch =
        !searchQuery ||
        titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        descText.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, isAmharic]);

  return (
    <section
      id="products"
      className={`py-12 sm:py-16 px-4 border-b transition-colors duration-200 ${
        theme === 'dark' ? 'bg-[#0a192f] border-slate-800' : 'bg-white border-gray-200'
      }`}
    >
      <div className="container mx-auto">
        {/* Section Header (HRMS style) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>{t('products.badge')}</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('products.title')}
            </h2>
            <p className={`text-xs sm:text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('products.subtitle')}
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            <span>{isAmharic ? 'የጅምላ ዋጋ ይጠይቁ' : 'Bulk Quote Inquiry'}</span>
            <span>→</span>
          </button>
        </div>

        {/* Filter Controls Bar matching HRMS layout */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {filterTabs.map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    active
                      ? 'bg-blue-600 text-white shadow-md'
                      : theme === 'dark'
                      ? 'bg-[#112240] text-gray-300 border border-slate-700 hover:border-blue-400'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-500 shadow-sm'
                  }`}
                >
                  {t(tab.labelKey)}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAmharic ? 'ዕቃዎችን ይፈልጉ...' : 'Search catalog items...'}
              className={`w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                theme === 'dark'
                  ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
              }`}
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Products Grid (HRMS Property/Item Card Signature) */}
        {filteredProducts.length === 0 ? (
          <div
            className={`text-center py-16 rounded-2xl border ${
              theme === 'dark' ? 'bg-[#112240] border-slate-700 text-gray-400' : 'bg-slate-50 border-gray-200 text-gray-500'
            }`}
          >
            <p className="text-sm">{isAmharic ? 'ምንም ዕቃ አልተገኘም።' : 'No items found matching your filter.'}</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {isAmharic ? 'ማጣሪያውን አፅዳ' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const title = isAmharic ? product.title.am : product.title.en;
              const desc = isAmharic ? product.description.am : product.description.en;
              const catName = isAmharic ? product.categoryName.am : product.categoryName.en;
              const badgeText = product.badge ? (isAmharic ? product.badge.am : product.badge.en) : null;

              return (
                <div
                  key={product.id}
                  className={`rounded-2xl overflow-hidden border transition-all duration-200 flex flex-col justify-between hover-card-elevate ${
                    theme === 'dark'
                      ? 'bg-[#112240] border-slate-700 shadow-lg hover:border-blue-400'
                      : 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500'
                  }`}
                >
                  {/* Card Image with HRMS badges */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                    <Image
                      src={product.image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Category pill (HRMS top-left badge) */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-black/60 text-white backdrop-blur-sm">
                        {catName}
                      </span>
                    </div>

                    {/* Hot Deal / Grade badge (HRMS top-right amber badge) */}
                    {badgeText && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 text-xs font-bold bg-amber-500 text-gray-900 rounded-lg flex items-center gap-1 shadow-sm">
                          <Sparkles className="w-3 h-3" />
                          <span>{badgeText}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3
                        className={`text-base font-bold truncate ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {title}
                      </h3>
                      <p className={`mt-1.5 text-xs line-clamp-2 leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {desc}
                      </p>

                      {/* Specs pills (HRMS spec strip) */}
                      <div className="mt-3 py-2 border-t border-gray-100 dark:border-slate-800 space-y-1">
                        {product.specs.slice(0, 2).map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-1.5 truncate"
                          >
                            <CheckCircle className="w-3 h-3 text-blue-500 shrink-0" />
                            <span className="truncate">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar (HRMS Card Footer Button) */}
                    <div className="pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        {isAmharic ? 'የፋብሪካ ዋጋ' : 'Direct Pricing'}
                      </span>
                      <button
                        onClick={() => onOpenQuoteModal(catName, title)}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm hover:scale-105 flex items-center gap-1"
                      >
                        <FileText className="w-3 h-3" />
                        <span>{t('products.request_quote')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Scalability note (HRMS alert style) */}
        <div
          className={`mt-10 p-4 rounded-2xl border flex items-start gap-3 max-w-2xl mx-auto text-xs ${
            theme === 'dark'
              ? 'bg-[#112240] border-slate-700 text-gray-300'
              : 'bg-slate-50 border-gray-200 text-gray-600'
          }`}
        >
          <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
          <p>{t('products.catalog_note')}</p>
        </div>
      </div>
    </section>
  );
}
