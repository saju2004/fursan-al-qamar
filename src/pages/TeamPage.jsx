import React from 'react';
import { Phone, MessageCircle, Mail, ShieldCheck, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GeometricAccents } from '../components/common/GeometricAccents';

export function TeamPage() {
  const leadershipPhotos = {
    abuthahir: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    khaliludeen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    abuthaheer: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  };

  const expandedDetails = {
    abuthahir: {
      bio: 'Eng. Abuthahir oversees structural civil integrity, foundation rectifications, Dubai Municipality site inspections, and turnkey commercial fit-outs. With over 12 years of hands-on UAE civil contracting experience, he ensures every project meets structural safety standards.',
      skills: ['Civil Engineering', 'Structural Modifications', 'Dubai Municipality Approvals', 'Site Quality Assurance']
    },
    khaliludeen: {
      bio: 'Eng. Mohammed Khaliludeen directs MEP operations, high-voltage electrical distribution panels, ducted HVAC airflow engineering, and commercial booster pump systems. His background in electrical and mechanical systems ensures code-compliant execution.',
      skills: ['MEP Systems', 'DEWA / SEWA Standards', 'HVAC & Central Chillers', 'DB Dressing & Balancing']
    },
    abuthaheer: {
      bio: 'Abuthaheer leads commercial client relations, project tendering, fast-track estimates, and Annual Maintenance Contracts (AMCs). He acts as the dedicated single point of contact from first quotation to project sign-off and warranty handover.',
      skills: ['Commercial Proposals', 'Client Coordination', 'UAE Project Tendering', 'Facility AMC Management']
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#0B132B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
        <GeometricAccents position="left" className="top-8 opacity-75" />
        <GeometricAccents position="right" className="bottom-8 opacity-75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-block bg-[#B5892E] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            ENGINEERING LEADERSHIP
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Meet Our <span className="text-[#B5892E]">Technical Leadership</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            The certified Civil Engineers, MEP specialists, and commercial project managers driving Fursan Al Qamar’s operational excellence across the UAE.
          </p>
        </div>
      </section>

      {/* Leadership Profile Deep-Dives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {siteConfig.contacts.map((contact, idx) => {
            const extra = expandedDetails[contact.id];
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={contact.id}
                className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Portrait & Contacts Column (4 cols) */}
                  <div className={`lg:col-span-4 text-center ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative w-44 h-44 mx-auto mb-6">
                      <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-[#FBF7EE] shadow-lg bg-[#0B132B]">
                        <img
                          src={leadershipPhotos[contact.id]}
                          alt={contact.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#B5892E] text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                        {contact.experience}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-[#0B132B] uppercase tracking-wide">
                      {contact.name}
                    </h3>
                    <div className="text-sm font-bold text-[#B5892E] mt-0.5">
                      {contact.role}
                    </div>

                    {/* Direct Contact Links */}
                    <div className="mt-5 space-y-2.5 max-w-xs mx-auto">
                      <a
                        href={contact.telLink}
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#FBF7EE] border border-[#E6D5B0] hover:border-[#B5892E] text-xs font-bold text-[#0B132B] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#B5892E]" />
                        <span>Direct: {contact.phone}</span>
                      </a>

                      <a
                        href={contact.whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-colors shadow-2xs"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Narrative Bio & Responsibilities Column (8 cols) */}
                  <div className={`lg:col-span-8 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F8F9FB] border border-gray-200 text-xs font-bold text-[#0B132B]">
                      <ShieldCheck className="w-4 h-4 text-[#B5892E]" />
                      <span>{contact.badge}</span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-extrabold text-[#0B132B]">
                      Engineering Oversight & Project Delivery
                    </h4>

                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {extra.bio}
                    </p>

                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                        Core Competencies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {extra.skills.map((s, i) => (
                          <span
                            key={i}
                            className="bg-[#FBF7EE] text-[#0B132B] border border-[#E6D5B0] px-3 py-1 rounded-lg text-xs font-semibold"
                          >
                            ✓ {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-gray-500 border-t border-gray-100 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Directly reachable for on-site technical walkthroughs and Dubai Municipality compliance.</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Central Support Callout */}
      <section className="bg-[#F8F9FB] py-14 border-t border-gray-200 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <h4 className="text-xl font-bold text-[#0B132B]">Need an Engineering Inspection on Site?</h4>
          <p className="text-sm text-gray-600">
            Our engineers visit your site anywhere in Dubai or the UAE to evaluate your civil, MEP, or maintenance requirements.
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#B5892E] hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>Email: {siteConfig.email}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
