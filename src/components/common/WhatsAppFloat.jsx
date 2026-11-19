import React, { useState } from 'react';
import { MessageCircle, X, ChevronUp, User, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Contact Selector Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#0B132B] text-white p-4 border-b-2 border-[#B5892E] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Chat with UAE Engineers</h4>
                <p className="text-[11px] text-gray-300">Fast on-call technical response</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close WhatsApp Drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Contact List */}
          <div className="p-3 space-y-2 max-h-72 overflow-y-auto">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-2">
              Select an Engineer / Officer:
            </p>
            {siteConfig.contacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FBF7EE] border border-transparent hover:border-[#E6D5B0] transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#0B132B] text-white flex items-center justify-center font-bold text-xs group-hover:bg-[#B5892E] transition-colors">
                    {contact.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0B132B] group-hover:text-[#B5892E] transition-colors leading-tight">
                      {contact.name}
                    </h5>
                    <p className="text-[11px] text-gray-500">{contact.role}</p>
                    <span className="text-[10px] text-emerald-600 font-medium">● Online on WhatsApp</span>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center transition-all">
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                </div>
              </a>
            ))}
          </div>

          <div className="bg-[#F8F9FB] px-4 py-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#B5892E]" />
              <span>Dubai & Northern Emirates</span>
            </div>
            <span className="font-semibold text-[#0B132B]">24/7 Available</span>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white"
        aria-label="Open WhatsApp Quick Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500 border border-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="font-bold text-sm tracking-wide hidden sm:inline">
          {isOpen ? 'Close Chat' : 'Chat on WhatsApp'}
        </span>
      </button>
    </div>
  );
}
