import React, { useState, useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { 
  Zap, 
  Droplets, 
  Snowflake, 
  BrickWall, 
  Paintbrush, 
  Hammer, 
  Columns, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import { servicesData } from '../data/mockData';
import { siteConfig } from '../config/siteConfig';
import { GeometricAccents } from '../components/common/GeometricAccents';

const iconMap = {
  Zap,
  Droplets,
  Snowflake,
  BrickWall,
  Paintbrush,
  Hammer,
  Columns
};

export function ServicesPage() {
  const { openQuoteModal } = useOutletContext();
  const location = useLocation();
  const [selectedServiceId, setSelectedServiceId] = useState('electrical');

  // Handle URL query param highlight
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const highlight = params.get('highlight');
    if (highlight && servicesData.some(s => s.id === highlight)) {
      setSelectedServiceId(highlight);
      const element = document.getElementById(`service-detail-${highlight}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="bg-white min-h-screen">
      {/* Services Hero Header */}
      <section className="bg-[#0B132B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
        <GeometricAccents position="left" className="top-8 opacity-75" />
        <GeometricAccents position="right" className="bottom-8 opacity-75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-block bg-[#B5892E] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            COMPREHENSIVE TECHNICAL CAPABILITIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Our 7 Core <span className="text-[#B5892E]">Technical Divisions</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            From precision MEP electrical and HVAC engineering to turnkey architectural fit-outs, painting, and joinery across the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* Quick Division Selector Strip */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.iconName] || Zap;
              const isSelected = selectedServiceId === svc.id;

              return (
                <button
                  key={svc.id}
                  onClick={() => {
                    setSelectedServiceId(svc.id);
                    const el = document.getElementById(`service-detail-${svc.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    isSelected
                      ? 'bg-[#B5892E] text-white shadow-sm'
                      : 'bg-gray-100 text-[#0B132B] hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{svc.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detailed Service Cards List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Zap;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={`service-detail-${service.id}`}
                className={`pt-6 scroll-mt-36 border-t ${index === 0 ? 'border-transparent' : 'border-gray-200'}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Visual Image Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="group relative rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 bg-[#0B132B]">
                      <img
                        src={service.bgImage}
                        alt={service.title}
                        className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/20 to-transparent flex flex-col justify-end p-6 text-white">
                        <span className="text-xs font-bold text-[#B5892E] uppercase tracking-wider">
                          Division 0{index + 1}
                        </span>
                        <h4 className="text-xl font-bold text-white mt-1">
                          {service.title}
                        </h4>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-300">
                          <span>✓ {service.stats.completed} Projects Completed</span>
                          <span>★ {service.stats.satisfaction} Satisfaction</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Column (7 cols) */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#FBF7EE] text-[#B5892E] border border-[#E6D5B0] flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#B5892E] uppercase tracking-wider">
                          {service.badgeText}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Features Checklist Grid */}
                    <div className="bg-[#F8F9FB] rounded-xl p-5 border border-gray-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-3">
                        Technical Scope & Inclusions:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#B5892E] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button
                        onClick={() => openQuoteModal(service.id)}
                        className="inline-flex items-center gap-2 bg-[#B5892E] hover:bg-[#9A7222] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm"
                      >
                        <span>Request Free Estimate for {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={`https://wa.me/971522569868?text=Hello%20Eng.%20Abuthahir,%20I%20am%20inquiring%20about%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#FBF7EE] text-[#0B132B] hover:bg-[#E6D5B0] border border-[#E6D5B0] px-4 py-2.5 rounded-lg text-xs font-bold transition-colors"
                      >
                        <span>WhatsApp Quick Chat</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Emergency On-Call Strip */}
      <section className="bg-[#0B132B] text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-xl font-bold">Have an Immediate Urgent Repair or Facility Emergency?</h4>
            <p className="text-sm text-gray-300">
              Our 24/7 on-call technical team responds quickly for electrical faults, major AC outages, and water leaks.
            </p>
          </div>

          <a
            href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 bg-[#B5892E] hover:bg-[#9A7222] text-white px-6 py-3.5 rounded-lg text-sm font-bold shadow-lg transition-colors flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Emergency Call: {siteConfig.primaryPhone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
