'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import ProjectsSection from '@/components/ProjectsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { useTheme } from '@/lib/theme-context';

export default function HomePage() {
  const { theme } = useTheme();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState<string>('Construction Material Supply');
  const [modalInitialItem, setModalInitialItem] = useState<string>('');

  const handleOpenQuoteModal = (initialService?: string, initialItem?: string) => {
    if (initialService) setModalInitialService(initialService);
    if (initialItem) setModalInitialItem(initialItem);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setModalInitialItem('');
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        theme === 'dark' ? 'bg-[#0a192f] text-gray-100' : 'bg-[#f8fafc] text-gray-900'
      }`}
    >
      {/* Sticky Fixed Top Navbar (HRMS style) */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Flow with fixed navbar top padding offset */}
      <main className="pt-16 sm:pt-20 flex-1">
        {/* 1. High-Impact Hero with Slideshow & Dark Gradient Overlay */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 2. Featured Department Services (HRMS signature card design) */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 3. Filterable Products Catalog (HRMS listing cards & badges) */}
        <ProductsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4. Demonstrative Projects Showcase */}
        <ProjectsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5. About Us & Grounded Pillars */}
        <AboutSection />

        {/* 6. Why Choose Us (HRMS feature cards) */}
        <WhyChooseUs />

        {/* 7. Conversion CTA Section */}
        <CTASection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 8. Contact & Inquiry Form (HRMS 3xl form card) */}
        <ContactSection />
      </main>

      {/* Footer matching HRMS deep navy footer */}
      <Footer />

      {/* Interactive Global Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={modalInitialService}
        initialItem={modalInitialItem}
      />
    </div>
  );
}
