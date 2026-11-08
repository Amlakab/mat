'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  FolderKanban,
  CheckCircle,
  Building2,
  Hammer,
  Layers,
  ArrowRight,
  FileText,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';
import { DEMO_PROJECTS } from '@/lib/catalog-data';

interface ProjectsSectionProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function ProjectsSection({ onOpenQuoteModal }: ProjectsSectionProps) {
  const { t, isAmharic } = useLanguage();
  const { theme } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: isAmharic ? 'ሁሉም ፕሮጀክቶች' : 'All Projects' },
    { id: 'commercial', label: isAmharic ? 'የንግድ ሕንፃዎች' : 'Commercial' },
    { id: 'office', label: isAmharic ? 'የቢሮ ዕቃዎች' : 'Office Furnishing' },
    { id: 'residential', label: isAmharic ? 'የመኖሪያ ቤቶች' : 'Residential' },
    { id: 'construction', label: isAmharic ? 'የግንባታ አቅርቦት' : 'Material Supply' },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return DEMO_PROJECTS;
    return DEMO_PROJECTS.filter((proj) => proj.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section
      id="projects"
      className={`py-12 sm:py-16 px-4 border-b transition-colors duration-200 ${
        theme === 'dark' ? 'bg-[#112240]/60 border-slate-800' : 'bg-slate-50 border-gray-200'
      }`}
    >
      <div className="container mx-auto">
        {/* Section Header (HRMS style) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>{t('projects.badge')}</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t('projects.title')}
            </h2>
            <p className={`text-xs sm:text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('projects.subtitle')}
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('General Contracting')}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            <span>{isAmharic ? 'ፕሮጀክትዎን ያማክሩ' : 'Consult Your Project'}</span>
            <span>→</span>
          </button>
        </div>

        {/* Filter Pills matching HRMS layout */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedFilter === f.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : theme === 'dark'
                  ? 'bg-[#112240] text-gray-300 border border-slate-700 hover:border-blue-400'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-500 shadow-sm'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid (HRMS Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const title = isAmharic ? project.title.am : project.title.en;
            const desc = isAmharic ? project.description.am : project.description.en;
            const categoryLabel = isAmharic
              ? project.categoryLabel.am
              : project.categoryLabel.en;

            return (
              <div
                key={project.id}
                className={`rounded-2xl overflow-hidden border transition-all duration-200 flex flex-col justify-between hover-card-elevate ${
                  theme === 'dark'
                    ? 'bg-[#112240] border-slate-700 shadow-lg hover:border-blue-400'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500'
                }`}
              >
                {/* Project Image */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-800">
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-black/60 text-white backdrop-blur-sm">
                      {categoryLabel}
                    </span>
                  </div>

                  {/* Showcase Tag Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 text-xs font-bold bg-blue-600 text-white rounded-lg shadow-sm">
                      {project.isDemo ? (isAmharic ? 'የማሳያ ፕሮጀክት' : 'Demo Project') : (isAmharic ? 'የተጠናቀቀ' : 'Completed')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3
                      className={`text-base font-bold truncate ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`mt-1.5 text-xs line-clamp-2 leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {desc}
                    </p>

                    {/* Scope info row */}
                    <div className="mt-3 py-2 border-t border-gray-100 dark:border-slate-800">
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="font-semibold text-gray-700 dark:text-gray-300 truncate">
                          {project.scope}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                      {isAmharic ? 'የሥራ ዘርፍ' : 'Contract Scope'}
                    </span>
                    <button
                      onClick={() => onOpenQuoteModal('General Contracting', title)}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm hover:scale-105 flex items-center gap-1"
                    >
                      <FileText className="w-3 h-3" />
                      <span>{isAmharic ? 'የሥራ ዋጋ ጠይቅ' : 'Request Estimate'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
