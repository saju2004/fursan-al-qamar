import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Droplets, 
  Snowflake, 
  BrickWall, 
  Paintbrush, 
  Hammer, 
  Columns, 
  ArrowRight, 
  Check, 
  Sparkles,
  Phone
} from 'lucide-react';
import { servicesData } from '../../data/mockData';
import { siteConfig } from '../../config/siteConfig';

// Map icon names to Lucide icon components
const iconMap = {
  Zap,
  Droplets,
  Snowflake,
  BrickWall,
  Paintbrush,
  Hammer,
  Columns
};

export function ServicesGrid({ onOpenQuoteModal }) {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-block">
            <span className="bg-[#B5892E] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-2xs">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Expert Technical & Maintenance Services
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Providing reliable, end-to-end engineering and contracting solutions tailored to your residential, commercial, or industrial project across the UAE.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Zap;
            const isSeventh = index === 6; // False Ceiling & Light Partitions

            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl p-7 border border-[#E5E7EB] hover:border-[#B5892E] transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col justify-between relative overflow-hidden ${
                  isSeventh ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top Subtle Gold Accent Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#B5892E] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-[#FBF7EE] border border-[#E6D5B0] flex items-center justify-center text-[#B5892E] group-hover:bg-[#B5892E] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-bold text-[#0B132B] bg-[#F8F9FB] px-2.5 py-1 rounded-md border border-gray-200">
                      {service.badgeText}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0B132B] group-hover:text-[#B5892E] transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  {/* 2-Line Clean Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Quick Feature Checklist Preview */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B5892E] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions Row */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="text-xs font-bold text-[#B5892E] group-hover:text-[#9A7222] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <Link
                    to={`/services?highlight=${service.id}`}
                    className="text-xs font-semibold text-gray-500 hover:text-[#0B132B] transition-colors"
                  >
                    Full Details →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Turnkey Project Inquiries */}
        <div className="mt-14 bg-[#0B132B] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#B5892E]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Need a Multi-Trade or Annual Maintenance Contract (AMC)?</h4>
            <p className="text-sm text-gray-300">
              We provide turnkey MEP & Civil maintenance packages for residential towers, commercial offices, and villas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FBF7EE] text-[#0B132B] hover:bg-white px-5 py-3 rounded-lg text-sm font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B5892E]" />
              <span>Call Engineer Desk</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal('multiple')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B5892E] hover:bg-[#9A7222] text-white px-5 py-3 rounded-lg text-sm font-bold transition-colors"
            >
              <span>Get Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
