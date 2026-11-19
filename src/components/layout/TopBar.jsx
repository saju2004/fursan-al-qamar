import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export function TopBar() {
  return (
    <div className="bg-[#B5892E] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#9A7222]/40 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Information Strip */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-1">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-white/90 flex-shrink-0" />
            <span>{siteConfig.serviceCoverage}</span>
          </div>

          <span className="hidden sm:inline text-white/40">|</span>

          <a 
            href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors font-semibold"
            title="Call technical desk"
          >
            <Phone className="w-3.5 h-3.5 text-white/90 flex-shrink-0" />
            <span>Call us: {siteConfig.primaryPhone}</span>
          </a>

          <span className="hidden sm:inline text-white/40">|</span>

          <a 
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors underline-offset-2 hover:underline"
            title="Send email"
          >
            <Mail className="w-3.5 h-3.5 text-white/90 flex-shrink-0" />
            <span>{siteConfig.email}</span>
          </a>
        </div>

        {/* Right Information & Socials */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1.5 text-white/95">
            <Clock className="w-3.5 h-3.5 text-white/85 flex-shrink-0" />
            <span>{siteConfig.operatingHours}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2.5 pl-3 border-l border-white/20">
            <a 
              href={siteConfig.socialLinks.facebook} 
              target="_blank" 
              rel="noreferrer"
              className="p-1 hover:bg-black/10 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a 
              href={siteConfig.socialLinks.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="p-1 hover:bg-black/10 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a 
              href={siteConfig.socialLinks.youtube} 
              target="_blank" 
              rel="noreferrer"
              className="p-1 hover:bg-black/10 rounded-full transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
