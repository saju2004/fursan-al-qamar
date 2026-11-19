import React from 'react';
import { ShieldCheck, Clock, Award, CheckCircle2, FileCheck, HardHat, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export function WhyChooseUs() {
  const pillars = [
    {
      icon: HardHat,
      title: 'Experienced Civil & MEP Engineers',
      description: 'Our technical teams are led by certified Civil and Mechanical/Electrical Engineers with over a decade of hands-on UAE project expertise.'
    },
    {
      icon: Clock,
      title: '24/7 Rapid Response Dispatch',
      description: 'Air conditioning breakdowns, electrical outages, and emergency plumbing leaks handled with swift, fully-equipped mobile units.'
    },
    {
      icon: ShieldCheck,
      title: 'Strict UAE Safety & Quality Standards',
      description: 'Every project strictly follows Dubai Municipality, DEWA, SEWA, and Civil Defense codes, ensuring guaranteed safety and compliance.'
    }
  ];

  return (
    <section className="bg-[#F8F9FB] py-16 sm:py-20 relative overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-[#B5892E] uppercase tracking-widest bg-[#FBF7EE] border border-[#E6D5B0] px-3.5 py-1 rounded-full">
            WHY FURSAN AL QAMAR
          </span>
          <h2 className="text-3xl font-extrabold text-[#0B132B]">
            Engineered for Precision, Built for Durability
          </h2>
          <p className="text-gray-600 text-sm">
            We bridge high-level engineering oversight with skilled artisanal craft to deliver flawless technical contracting.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FBF7EE] text-[#B5892E] border border-[#E6D5B0] flex items-center justify-center mb-5 font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B132B] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key Metrics Strip */}
        <div className="bg-[#0B132B] rounded-2xl p-8 text-white shadow-xl border border-gray-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-800">
            {siteConfig.metrics.map((metric, i) => (
              <div key={i} className={`text-center ${i > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#B5892E] mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-400">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
