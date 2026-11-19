import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { KeyContacts } from '../components/home/KeyContacts';
import { clientTestimonials } from '../data/mockData';
import { Star, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function HomePage() {
  const { openQuoteModal } = useOutletContext();

  return (
    <div className="space-y-0">
      {/* 1. Hero Section matching layout & bento collage */}
      <HeroSection onOpenQuoteModal={openQuoteModal} />

      {/* 2. All 7 Core Services Grid */}
      <ServicesGrid onOpenQuoteModal={openQuoteModal} />

      {/* 3. Why Choose Us & UAE Standards Strip */}
      <WhyChooseUs />

      {/* 4. Meet Our Experts / Key Contacts (3 exact leadership cards) */}
      <KeyContacts />

      {/* 5. UAE Client Testimonials & Trust Validation */}
      <section className="bg-[#F8F9FB] py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-[#B5892E] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-gray-200">
              CLIENT TESTIMONIALS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
              Trusted Across Dubai & UAE Properties
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              What property managers, building engineers, and villa owners say about Fursan Al Qamar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTestimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 italic leading-relaxed mb-4">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-[#0B132B]">{t.author}</h5>
                    <p className="text-xs text-gray-400">{t.company}</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#B5892E] bg-[#FBF7EE] px-2 py-0.5 rounded border border-[#E6D5B0]">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pre-Footer Call to Action Banner */}
      <section className="bg-gradient-to-r from-[#0B132B] via-[#141F43] to-[#0B132B] py-14 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <span className="text-xs font-bold text-[#B5892E] uppercase tracking-widest">
              RAPID UAE DISPATCH
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Upgrade or Maintain Your Property?
            </h3>
            <p className="text-sm text-gray-300">
              Get an accurate, free engineering estimate or schedule an on-site technical inspection today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0B132B] hover:bg-[#FBF7EE] px-6 py-3.5 rounded-lg text-sm font-bold transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-[#B5892E]" />
              <span>Call: {siteConfig.primaryPhone}</span>
            </a>

            <button
              onClick={() => openQuoteModal('electrical')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B5892E] hover:bg-[#9A7222] text-white px-7 py-3.5 rounded-lg text-sm font-bold transition-all shadow-md"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
