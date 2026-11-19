import React from 'react';
import { Phone, MessageCircle, Mail, Shield, CheckCircle, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export function KeyContacts() {
  // Professional portraits curated for UAE engineering leadership in dark corporate navy polos
  const leadershipPhotos = {
    abuthahir: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    khaliludeen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    abuthaheer: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  };

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="bg-[#B5892E] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-2xs">
            MEET OUR EXPERTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Key Contacts & Leadership
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Connect directly with our engineering and project coordination leadership for rapid consultations, site visits, and technical approvals.
          </p>
        </div>

        {/* 3 Exact Leadership Cards from Business Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.contacts.map((contact) => (
            <div
              key={contact.id}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-[#B5892E] p-6 text-center transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0B132B] group-hover:bg-[#B5892E] transition-colors" />

              <div>
                {/* Portrait Avatar Frame */}
                <div className="relative w-32 h-32 mx-auto mb-5">
                  <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-gray-100 group-hover:border-[#B5892E] shadow-sm bg-[#F8F9FB] transition-all">
                    <img
                      src={leadershipPhotos[contact.id]}
                      alt={`${contact.name} - ${contact.role}`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to high-contrast initials badge if network image fails
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'bg-[#0B132B]', 'text-white', 'font-black', 'text-2xl');
                        e.target.parentNode.innerText = contact.name.split(' ').map(n => n[0]).join('');
                      }}
                    />
                  </div>

                  {/* Role Tag Badge */}
                  <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#0B132B] group-hover:bg-[#B5892E] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white shadow-2xs whitespace-nowrap transition-colors">
                    {contact.badge}
                  </span>
                </div>

                {/* Name & Role Title */}
                <div className="mt-2 mb-4">
                  <h3 className="text-lg font-black text-[#0B132B] tracking-wide uppercase">
                    {contact.name}
                  </h3>
                  <div className="text-sm font-semibold text-[#B5892E] mt-0.5">
                    {contact.role}
                  </div>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2 px-2">
                    {contact.specialization}
                  </p>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-gray-100 space-y-2.5">
                {/* Phone Link */}
                <a
                  href={contact.telLink}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#FBF7EE] border border-[#E6D5B0] hover:border-[#B5892E] text-xs font-bold text-[#0B132B] hover:text-[#B5892E] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B5892E]" />
                  <span>{contact.phone}</span>
                </a>

                {/* WhatsApp Link */}
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Official Email Banner below Leadership */}
        <div className="mt-12 text-center p-6 bg-[#F8F9FB] rounded-2xl border border-gray-200 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#B5892E]/10 text-[#B5892E] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-xs text-gray-500 font-medium">Direct Corporate Dispatch Email:</div>
            <a 
              href={`mailto:${siteConfig.email}`} 
              className="text-sm sm:text-base font-bold text-[#0B132B] hover:text-[#B5892E] transition-colors underline-offset-2 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
