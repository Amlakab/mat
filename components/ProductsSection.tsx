'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  Search,
  Filter,
  ArrowRight,
  FileText,
  Tag,
  Info,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { PRODUCTS_CATALOG, CatalogProduct } from '@/lib/catalog-data';

interface ProductsSectionProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function ProductsSection({ onOpenQuoteModal }: ProductsSectionProps) {
  const { t, isAmharic } = useLanguage();
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
    <section id="products" className="section-padding bg-surface-elevated/40 dark:bg-navy-900/60 border-y border-border">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 dark:bg-navy-800 text-accent-700 dark:text-accent-300 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-accent-600" />
            <span>{t('products.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            {t('products.title')}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed font-normal">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {filterTabs.map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    active
                      ? 'bg-primary-700 text-white shadow-md'
                      : 'bg-surface dark:bg-navy-800 text-text-secondary hover:text-text-primary border border-border hover:bg-slate-100 dark:hover:bg-navy-700'
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
              placeholder="Search catalog items..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-border bg-surface dark:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-surface dark:bg-navy-800 rounded-2xl border border-border">
            <p className="text-text-muted text-sm">No items found matching your filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-primary-600 dark:text-primary-400 underline"
            >
              Reset Filters
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
                  className="group rounded-2xl bg-surface border border-border overflow-hidden shadow-sm hover:border-primary-400 dark:hover:border-primary-500 hover-card-elevate flex flex-col justify-between"
                >
                  {/* Product Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={product.image}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Category pill */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-navy-900/80 backdrop-blur-md text-white text-[11px] font-medium border border-white/10">
                      {catName}
                    </div>

                    {badgeText && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-accent-600 text-white text-[10px] font-bold tracking-wider uppercase shadow">
                        {badgeText}
                      </div>
                    )}
                  </div>

                  {/* Card Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-bold text-base text-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                        {title}
                      </h3>
                      <p className="mt-2 text-xs text-text-secondary leading-relaxed line-clamp-3">
                        {desc}
                      </p>

                      {/* Specs bullets */}
                      <div className="mt-3.5 space-y-1">
                        {product.specs.slice(0, 2).map((spec, sIdx) => (
                          <div key={sIdx} className="text-[11px] text-text-muted flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-accent-500" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quote Action (No fabricated price, strictly Request a Quote) */}
                    <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                      <div className="text-[11px] font-medium text-text-muted">
                        Official Pricing
                      </div>
                      <button
                        onClick={() => onOpenQuoteModal(catName, title)}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
                      >
                        <FileText className="w-3.5 h-3.5 text-accent-300" />
                        <span>{t('products.request_quote')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Scalability / Extensibility note for the company */}
        <div className="mt-10 p-4 rounded-xl bg-surface dark:bg-navy-800/80 border border-border flex items-start gap-3 max-w-2xl mx-auto text-xs text-text-muted">
          <Info className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
          <p>{t('products.catalog_note')}</p>
        </div>
      </div>
    </section>
  );
}
