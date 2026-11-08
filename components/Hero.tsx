'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Building,
  Truck,
  Armchair,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface HeroProps {
  onOpenQuoteModal: (initialService?: string, initialItem?: string) => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const { t, isAmharic } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image:
        'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1920&q=80',
      tag: isAmharic ? 'የኮንስትራክሽን ግብዓቶች አቅራቢ' : 'Construction Material Supplier',
      title: isAmharic ? 'ጥራት ያላቸው የኮንስትራክሽን ዕቃዎች' : 'Quality Construction Materials',
      subtitle: isAmharic
        ? 'የደረጃ 60 ባለአከርካሪ ብረት፣ ሲሚንቶ፣ ብሎኬት እና የጣሪያ ቆርቆሮዎችን በተመጣጣኝ ዋጋ በመላው ኢትዮጵያ እናቀርባለን።'
        : 'High-tensile Grade 60 rebar, certified Portland cement, solid HCB blocks, and premium roofing sheets delivered nationwide.',
      primaryBtn: isAmharic ? 'ዋጋ ይጠይቁ' : 'Request Quotation',
      secondaryBtn: isAmharic ? 'የዕቃዎች ዝርዝር ይመልከቱ' : 'Explore Materials',
      serviceType: 'Construction Material Supply',
    },
    {
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
      tag: isAmharic ? 'የቤት እና የቢሮ ፈርኒቸር' : 'Home & Office Furniture',
      title: isAmharic ? 'ዘመናዊ እና ውብ የቤትና የቢሮ ፈርኒቸር' : 'Modern Home & Office Furniture',
      subtitle: isAmharic
        ? 'የአስተዳዳሪ ጠረጴዛዎች፣ ምቹ ወንበሮች፣ የሶፋ ስብስቦች እና የመኝታ ቤት እቃዎች ለውብ እና ምቹ የሥራና የኑሮ ቦታ።'
        : 'Executive managerial desks, ergonomic task seating, contemporary sofas, and custom bedroom sets crafted for style and durability.',
      primaryBtn: isAmharic ? 'ፈርኒቸር ይጠይቁ' : 'Request Catalog Quote',
      secondaryBtn: isAmharic ? 'የፈርኒቸር ዝርዝር' : 'Browse Furniture',
      serviceType: 'Office Furniture',
    },
    {
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
      tag: isAmharic ? 'ጠቅላላ ተቋራጭ' : 'General Contractor',
      title: isAmharic ? 'አስተማማኝ የህንፃ ግንባታ እና እድሳት' : 'General Contracting & Building',
      subtitle: isAmharic
        ? 'የንግድና የመኖሪያ ሕንፃ ግንባታ፣ የመዋቅር ምህንድስና፣ እና የውስጥ ማስዋብ ሥራዎችን በከፍተኛ ጥራት እናከናውናለን።'
        : 'Turnkey commercial building, residential engineering, renovation, and interior architectural fit-outs executed to strict standards.',
      primaryBtn: isAmharic ? 'ፕሮጀክት ይጀምሩ' : 'Start a Project',
      secondaryBtn: isAmharic ? 'አገልግሎቶቻችን' : 'Our Services',
      serviceType: 'General Contracting',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section id="home" className="relative">
      {/* Slideshow Hero Section matching HRMS Hero height & overlay */}
      <div className="relative min-h-[540px] sm:h-[620px] lg:h-[700px] overflow-hidden flex items-center">
        {/* Background Image with HRMS exact dark gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover transition-all duration-700 scale-100"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />
        </div>

        {/* Hero Content matching HRMS text & button layouts */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white shadow-sm mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{slide.tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-5 text-white tracking-tight drop-shadow-md leading-tight">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 px-2 leading-relaxed drop-shadow max-w-2xl mx-auto">
              {slide.subtitle}
            </p>

            {/* Action Buttons (HRMS exact button design) */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button
                onClick={() => onOpenQuoteModal(slide.serviceType)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-200" />
                <span>{slide.primaryBtn}</span>
              </button>

              <a
                href="#products"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-white/90 hover:bg-white hover:text-gray-900 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-200 backdrop-blur-sm inline-flex items-center justify-center gap-2"
              >
                <span>{slide.secondaryBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+251911994405"
                className="w-full sm:w-auto px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-200 backdrop-blur-sm border border-white/20 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>0911 994 405</span>
              </a>
            </div>

            {/* Ethiopian Enterprise Verification Tag */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-300">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                MAT Engineering and Trading PLC
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                {t('brand.gm')}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Nationwide Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Arrows (HRMS exact style) */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all backdrop-blur-sm border border-white/20 hover:scale-110"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-all backdrop-blur-sm border border-white/20 hover:scale-110"
          aria-label="Next Slide"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-blue-500' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
