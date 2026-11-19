import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { siteConfig } from '../../config/siteConfig';
import { servicesData } from '../../data/mockData';
import { GeometricAccents } from '../common/GeometricAccents';

export function Footer({ onOpenQuoteModal }) {
  return (
    <footer className="bg-[#0B132B] text-white relative overflow-hidden">
      {/* Decorative Blueprint & Gold Glow Accents */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#B5892E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Company Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <BrandLogo variant="light" size="default" />
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-amber-300/90 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#B5892E]" />
                <span>Licensed Technical & Engineering Services in UAE</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>DEWA & Civil Defense Standards Compliant</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B5892E] hover:text-white transition-colors group"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#B5892E] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#B5892E] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B5892E] text-xs">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B5892E] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B5892E] text-xs">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B5892E] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B5892E] text-xs">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#B5892E] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B5892E] text-xs">›</span> Completed Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#B5892E] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B5892E] text-xs">›</span> Meet The Engineers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B5892E] transition-colors flex items-center gap-1.5">
                  <span className="text-[#B5892E] text-xs">›</span> Contact & Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Technical Trades (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#B5892E] pl-2.5">
              7 Core Divisions
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link 
                    to={`/services?highlight=${s.id}`} 
                    className="hover:text-[#B5892E] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B5892E] group-hover:scale-125 transition-transform" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Standout Gold Callout Contact Box (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-[#B5892E] text-white rounded-2xl p-6 shadow-xl border border-[#D8BE6E]/40 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <h4 className="font-extrabold text-base tracking-wide text-white uppercase">
                    Direct Contact Box
                  </h4>
                  <span className="text-[10px] bg-black/20 px-2 py-0.5 rounded text-white font-semibold">
                    UAE
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Phone 1 */}
                  <div>
                    <div className="text-[11px] text-white/80 font-medium">Civil Engineering Desk:</div>
                    <a 
                      href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, '')}`} 
                      className="text-sm font-bold text-white hover:text-white/80 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-white/90" />
                      <span>{siteConfig.primaryPhone}</span>
                    </a>
                  </div>

                  {/* Phone 2 */}
                  <div>
                    <div className="text-[11px] text-white/80 font-medium">MEP Engineering Desk:</div>
                    <a 
                      href={`tel:${siteConfig.engineeringPhone.replace(/\s+/g, '')}`} 
                      className="text-sm font-bold text-white hover:text-white/80 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-white/90" />
                      <span>{siteConfig.engineeringPhone}</span>
                    </a>
                  </div>

                  {/* Phone 3 */}
                  <div>
                    <div className="text-[11px] text-white/80 font-medium">Sales & Commercial Inquiries:</div>
                    <a 
                      href={`tel:${siteConfig.salesPhone.replace(/\s+/g, '')}`} 
                      className="text-sm font-bold text-white hover:text-white/80 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-white/90" />
                      <span>{siteConfig.salesPhone}</span>
                    </a>
                  </div>

                  {/* Email */}
                  <div className="pt-1 border-t border-white/20">
                    <div className="text-[11px] text-white/80 font-medium">Official Dispatch Email:</div>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      className="text-xs font-semibold text-white hover:underline flex items-center gap-1.5 break-all mt-0.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-white/90 flex-shrink-0" />
                      <span>{siteConfig.email}</span>
                    </a>
                  </div>
                </div>

                <button
                  onClick={onOpenQuoteModal}
                  className="w-full bg-[#0B132B] hover:bg-[#141F43] text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-sm mt-2 flex items-center justify-center gap-1.5"
                >
                  <span>Book Free Inspection</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B5892E]" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Angled Card Motif Stripe */}
        <div className="my-10">
          <GeometricAccents position="card-stripe" />
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">FURSAN AL QAMAR TECHNICAL SERVICE</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Serving Dubai, Abu Dhabi, Sharjah & across the UAE</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-gray-400">UAE Quality Assured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
