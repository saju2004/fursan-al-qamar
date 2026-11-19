import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight, Shield } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { siteConfig } from '../../config/siteConfig';

export function Navbar({ onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Our Team', path: '/team' },
    { name: 'Completed Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-22">
          {/* Brand Logo Link */}
          <Link to="/" className="group flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <BrandLogo variant="dark" />
          </Link>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 relative py-1 hover:text-[#B5892E] ${
                    isActive 
                      ? 'text-[#B5892E] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B5892E]' 
                      : 'text-[#0B132B]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Direct Sales Call Pill */}
            <a 
              href={`tel:${siteConfig.salesPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FBF7EE] border border-[#E6D5B0] hover:border-[#B5892E] text-xs font-bold text-[#0B132B] transition-all group shadow-2xs"
              title="Call Sales Office"
            >
              <div className="w-6 h-6 rounded-full bg-[#B5892E] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-3 h-3" />
              </div>
              <span>Call: <span className="text-[#B5892E] font-semibold">{siteConfig.salesPhone}</span></span>
            </a>

            {/* Primary CTA Button: Get a Free Estimate */}
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 bg-[#B5892E] hover:bg-[#9A7222] text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex bg-[#B5892E] text-white text-xs font-bold px-3 py-2 rounded-md"
            >
              Free Estimate
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0B132B] hover:bg-gray-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#FBF7EE] text-[#B5892E] font-bold border-l-4 border-[#B5892E]'
                      : 'text-[#0B132B] hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <a 
              href={`tel:${siteConfig.salesPhone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#FBF7EE] border border-[#E6D5B0] text-sm font-bold text-[#0B132B]"
            >
              <Phone className="w-4 h-4 text-[#B5892E]" />
              <span>Call Sales: {siteConfig.salesPhone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#B5892E] hover:bg-[#9A7222] text-white py-3 rounded-lg font-bold text-sm shadow-sm"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
