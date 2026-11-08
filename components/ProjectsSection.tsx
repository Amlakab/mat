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
  Info,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { DEMO_PROJECTS, ProjectShowcaseItem } from '@/lib/catalog-data';

interface ProjectsSectionProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function ProjectsSection({ onOpenQuoteModal }: ProjectsSectionProps) {
  const { t, isAmharic } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: isAmharic ? 'ሁሉም' : 'All Showcases' },
    { id: 'commercial', label: isAmharic ? 'የንግድ' : 'Commercial' },
    { id: 'office', label: isAmharic ? 'የቢሮ' : 'Office' },
    { id: 'residential', label: isAmharic ? 'የመኖሪያ' : 'Residential' },
    { id: 'construction', label: isAmharic ? 'ኮንስትራክሽን' : 'Construction' },
    { id: 'renovation', label: isAmharic ? 'እድሳት' : 'Renovation' },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return DEMO_PROJECTS;
    return DEMO_PROJECTS.filter((proj) => proj.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-navy-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <FolderKanban className="w-3.5 h-3.5 text-accent-600" />
            <span>{t('projects.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed font-normal">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedFilter === f.id
                  ? 'bg-primary-700 text-white shadow-md'
                  : 'bg-surface dark:bg-navy-800 text-text-secondary hover:text-text-primary border border-border hover:bg-slate-100 dark:hover:bg-navy-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => {
            const title = isAmharic ? project.title.am : project.title.en;
            const desc = isAmharic ? project.description.am : project.description.en;
            const categoryLabel = isAmharic
              ? project.categoryLabel.am
              : project.categoryLabel.en;

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-surface border border-border overflow-hidden shadow-sm hover:border-primary-400 dark:hover:border-primary-500 hover-card-elevate flex flex-col justify-between"
              >
                {/* Project Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />

                  {/* Clearly Labeled Placeholder / Demo Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-navy-900/90 backdrop-blur-md border border-navy-700/80 text-accent-300 text-[10px] font-bold tracking-wider uppercase">
                    {t('projects.demo_badge')}
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 dark:bg-navy-800/90 text-text-primary text-[11px] font-semibold">
                    {categoryLabel}
                  </div>

                  {/* Scope badge */}
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 font-medium">
                    <span className="text-accent-400 font-semibold">Scope:</span> {project.scope}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Inquire CTA */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-[11px] text-text-muted">
                      Ready for similar project?
                    </span>
                    <button
                      onClick={() => onOpenQuoteModal('General Contracting & Supply', title)}
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Transparency Banner */}
        <div className="mt-12 p-4 rounded-xl bg-surface dark:bg-navy-800/80 border border-border flex items-start gap-3 max-w-3xl mx-auto text-xs text-text-muted">
          <Info className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
          <p>{t('projects.note')}</p>
        </div>
      </div>
    </section>
  );
}
