import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, Award, Phone } from 'lucide-react';
import { GeometricAccents } from '../common/GeometricAccents';
import { siteConfig } from '../../config/siteConfig';

export function HeroSection({ onOpenQuoteModal }) {
  return (
    <section className="relative bg-[#F8F9FB] overflow-hidden pt-8 pb-16 lg:py-20 border-b border-gray-100">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

      {/* Signature Interlocking Navy and Gold Geometric Motifs on Viewport Edges */}
      <GeometricAccents position="left" className="top-12 hidden lg:flex" />
      <GeometricAccents position="right" className="bottom-16 hidden lg:flex" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (55% / 7 cols) */}
          <div className="lg:col-span-7 space-y-7 z-10">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF7EE] border border-[#E6D5B0] text-xs font-bold text-[#B5892E] shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#B5892E]" />
              <span className="tracking-wide">APPROVED CIVIL & MEP TECHNICAL CONTRACTOR</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
              Your Trusted Partner for{' '}
              <span className="text-[#B5892E] block sm:inline">
                Technical & Maintenance Solutions
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              We deliver certified Electrical, Plumbing, HVAC, and Construction & Finishing services 
              for residential, commercial, and industrial spaces across Dubai and the UAE.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal('electrical')}
                className="inline-flex items-center justify-center gap-2 bg-[#B5892E] hover:bg-[#9A7222] text-white px-7 py-3.5 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0B132B] border-2 border-[#0B132B] hover:bg-[#0B132B] hover:text-white px-7 py-3.5 rounded-md font-bold text-sm transition-all duration-200 shadow-2xs"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Trust Badges Row matching UI Mockup */}
            <div className="pt-4 border-t border-gray-200/80">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold text-[#0B132B]">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-gray-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#B5892E] flex-shrink-0" />
                  <span>Approved Civil Engineers</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-gray-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#B5892E] flex-shrink-0" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-gray-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#B5892E] flex-shrink-0" />
                  <span>Quality Assurance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (45% / 5 cols) — Asymmetric 3-Photo Bento Collage */}
          <div className="lg:col-span-5 relative">
            {/* Soft Ambient Gold Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#B5892E]/20 to-transparent rounded-3xl blur-2xl -z-10" />

            <div className="space-y-4">
              {/* Top Wide Photo Card */}
              <div className="group relative rounded-2xl overflow-hidden border-2 border-[#B5892E]/40 shadow-xl bg-white aspect-[16/10]">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80"
                  alt="Certified electrical engineer inspecting commercial distribution panel in safety helmet"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/85 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B5892E] bg-[#0B132B]/90 px-2 py-0.5 rounded">
                      DEWA Certified
                    </span>
                    <h4 className="text-sm font-bold mt-1 text-white">Commercial DB & Power Distribution</h4>
                  </div>
                </div>
              </div>

              {/* Bottom 2-Column Split Photos */}
              <div className="grid grid-cols-2 gap-4">
                {/* Bottom Left: HVAC Condenser / Service */}
                <div className="group relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80"
                    alt="HVAC technician servicing outdoor commercial AC condenser unit"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/85 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white">HVAC & Chiller Care</span>
                  </div>
                </div>

                {/* Bottom Right: Modern False Ceiling & Interior Finishing */}
                <div className="group relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                    alt="Luxury false ceiling and wood partition modern interior finishing"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/85 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white">False Ceiling & Fit-Out</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#0B132B] text-white p-3.5 rounded-xl shadow-xl border border-[#B5892E] hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#B5892E] flex items-center justify-center text-white font-black text-base">
                100%
              </div>
              <div className="text-left pr-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#B5892E]">UAE Standard</div>
                <div className="text-[11px] text-gray-300">Municipality & Civil Defense</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
