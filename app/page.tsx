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

export default function HomePage() {
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
    <div className="relative min-h-screen flex flex-col bg-background text-text-primary">
      {/* Sticky Top Navbar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Powerful Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Dedicated Services Section */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4. Filterable Products Catalog */}
        <ProductsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5. Demonstrative Projects Showcase */}
        <ProjectsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Conversion CTA Section */}
        <CTASection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 8. Verified Contact & Map Section */}
        <ContactSection />
      </main>

      {/* Footer */}
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
