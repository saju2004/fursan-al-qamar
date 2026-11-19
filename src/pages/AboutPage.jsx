import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  HardHat, 
  Building2, 
  Clock, 
  Phone, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GeometricAccents } from '../components/common/GeometricAccents';

export function AboutPage() {
  const { openQuoteModal } = useOutletContext();

  const values = [
    {
      title: 'Architectural & Engineering Precision',
      desc: 'We do not believe in makeshift fixes. Every cable run, pipe joint, duct branch, and tile line is executed with disciplined engineering precision.'
    },
    {
      title: '100% UAE Regulatory Compliance',
      desc: 'Strict adherence to Dubai Municipality, Civil Defense fire safety codes, DEWA electrical regulations, and green building standards.'
    },
    {
      title: 'Uncompromising Site Safety',
      desc: 'Zero-compromise safety protocols, PPE compliance, and regular toolbox talks ensuring accident-free execution across all residential and commercial sites.'
    },
    {
      title: 'Transparent Pricing & Free Estimates',
      desc: 'Clear itemized BoQs (Bill of Quantities) with no hidden charges, realistic timelines, and comprehensive post-handover warranties.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Hero Header */}
      <section className="bg-[#0B132B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
        <GeometricAccents position="left" className="top-8 opacity-70" />
        <GeometricAccents position="right" className="bottom-8 opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-block bg-[#B5892E] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            COMPANY PROFILE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="text-[#B5892E]">Fursan Al Qamar</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Delivering trusted, certified engineering, maintenance, and technical contracting services across Dubai and the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* Narrative & Company Overview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#B5892E] uppercase tracking-wider bg-[#FBF7EE] border border-[#E6D5B0] px-3.5 py-1 rounded-full">
                TECHNICAL EXCELLENCE
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
                Your Single-Source Partner for MEP, Civil & Turnkey Technical Solutions
              </h2>

              <p className="text-gray-600 leading-relaxed text-base">
                <strong>FURSAN AL QAMAR TECHNICAL SERVICE</strong> was established with a singular vision: to bring institutional-grade engineering standards and dependable craftsmanship to property maintenance and architectural finishing throughout the UAE.
              </p>

              <p className="text-gray-600 leading-relaxed text-base">
                Whether retrofitting complex centralized HVAC chillers, dressing commercial distribution boards to meet strict DEWA standards, or executing luxury interior false ceilings and parquet flooring, our team is unified under seasoned Civil and MEP engineering leaders.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F9FB] border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#B5892E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B132B]">Civil Engineering Oversight</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Inspections and structural works led by certified Civil Engineers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F9FB] border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#B5892E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B132B]">Rapid On-Call Units</h4>
                    <p className="text-xs text-gray-500 mt-0.5">24/7 mobile emergency maintenance vans across all Emirates.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Bento Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FBF7EE] relative">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="Civil engineering site inspection and quality check in UAE"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[#B5892E] font-bold text-xs uppercase tracking-wider">
                      Standards & Compliance
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      Civil Defense & Municipality Approved
                    </h4>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-[#B5892E] text-white p-5 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-3xl font-black">7+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-100">
                  Core Technical Divisions
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#F8F9FB] py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-[#B5892E] uppercase tracking-wider bg-white px-3.5 py-1 rounded-full border border-gray-200">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B132B]">
              The Fursan Al Qamar Standard
            </h2>
            <p className="text-sm text-gray-500">
              How our engineers and technical crews approach every commercial and residential project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#B5892E] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FBF7EE] text-[#B5892E] font-extrabold text-sm flex items-center justify-center mb-4 border border-[#E6D5B0]">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-[#0B132B] mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact / Estimate CTA */}
      <section className="py-16 bg-[#0B132B] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Looking for a Reliable Technical Contractor?
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Speak directly with our Civil and MEP Engineers for immediate technical guidance or an on-site feasibility evaluation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0B132B] hover:bg-[#FBF7EE] px-6 py-3 rounded-lg text-sm font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B5892E]" />
              <span>Call Engineer Desk</span>
            </a>
            <button
              onClick={() => openQuoteModal('electrical')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B5892E] hover:bg-[#9A7222] text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors shadow-md"
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
