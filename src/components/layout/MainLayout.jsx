import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFloat } from '../common/WhatsAppFloat';
import { QuoteModal } from '../common/QuoteModal';

export function MainLayout() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('electrical');
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleOpenQuoteModal = (serviceId = 'electrical') => {
    setSelectedService(serviceId);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans relative selection:bg-[#B5892E] selection:text-white">
      {/* Top Gold Utility Bar */}
      <TopBar />

      {/* Main Sticky Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Page Dynamic Content */}
      <main className="flex-1 relative">
        <Outlet context={{ openQuoteModal: handleOpenQuoteModal }} />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating UAE WhatsApp Quick-Chat Widget */}
      <WhatsAppFloat />

      {/* Interactive Free Estimate Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}
