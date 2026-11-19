import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { apiClient } from '../services/apiClient';
import { GeometricAccents } from '../components/common/GeometricAccents';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Project Consultation & Quote',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }

    setLoading(true);
    try {
      const res = await apiClient.submitContactForm(formData);
      setResult(res);
    } catch {
      setError('Failed to send message. Please call our direct sales desk.');
    } finally {
      setLoading(false);
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
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Contact & <span className="text-[#B5892E]">Free Estimate</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Have a project or technical inquiry? Reach our engineering desk directly or submit an estimate request below.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contact Info & Leadership Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#B5892E] uppercase tracking-wider bg-[#FBF7EE] border border-[#E6D5B0] px-3.5 py-1 rounded-full">
                  FASTEST RESPONSE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
                  Direct Engineering Desks
                </h2>
                <p className="text-sm text-gray-600">
                  Call or WhatsApp our team members directly for real-time site coordination and technical support.
                </p>
              </div>

              {/* 3 Contact Cards */}
              <div className="space-y-3.5">
                {siteConfig.contacts.map((c) => (
                  <div 
                    key={c.id} 
                    className="p-4 rounded-2xl bg-[#F8F9FB] border border-gray-200 hover:border-[#B5892E] transition-colors flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-extrabold text-[#0B132B] uppercase">
                        {c.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#B5892E]">{c.role}</p>
                      <a 
                        href={c.telLink} 
                        className="text-xs font-bold text-gray-700 hover:text-[#0B132B] flex items-center gap-1.5 mt-1"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#B5892E]" />
                        <span>{c.phone}</span>
                      </a>
                    </div>

                    <a
                      href={c.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-all shadow-sm flex-shrink-0"
                      title="WhatsApp Chat"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Central Information Box */}
              <div className="bg-[#0B132B] text-white p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#B5892E] flex items-center justify-center text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Official Company Email:</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-white hover:underline break-all">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-800">
                  <div className="w-10 h-10 rounded-lg bg-[#B5892E] flex items-center justify-center text-white">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Operating Hours:</div>
                    <div className="text-sm font-bold text-white">{siteConfig.operatingHours}</div>
                    <div className="text-[11px] text-[#B5892E] font-semibold">{siteConfig.emergencySupport}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-800">
                  <div className="w-10 h-10 rounded-lg bg-[#B5892E] flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Service Coverage:</div>
                    <div className="text-sm font-bold text-white">Dubai & Across the UAE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation & Estimate Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xl">
                <h3 className="text-2xl font-extrabold text-[#0B132B] mb-1">
                  Send Us a Message
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Fill in your details below and an engineer will reply or call you within 2 hours.
                </p>

                {result ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-extrabold text-[#0B132B]">Message Sent Successfully!</h4>
                    <p className="text-sm text-gray-600 mt-2 max-w-sm mx-auto">
                      Thank you for contacting Fursan Al Qamar. Ticket reference: <strong className="text-[#B5892E] font-mono">{result.ticketId}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setResult(null);
                        setFormData({ name: '', email: '', phone: '', subject: 'Project Consultation & Quote', message: '' });
                      }}
                      className="mt-6 px-6 py-2.5 bg-[#B5892E] hover:bg-[#9A7222] text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0B132B] uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rashid Al Mansoor"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#B5892E] focus:ring-1 focus:ring-[#B5892E]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B132B] uppercase tracking-wider mb-1.5">
                          UAE Contact Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 5X XXX XXXX"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#B5892E] focus:ring-1 focus:ring-[#B5892E]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0B132B] uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="client@example.com"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#B5892E] focus:ring-1 focus:ring-[#B5892E]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B132B] uppercase tracking-wider mb-1.5">
                          Inquiry Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#B5892E] bg-white"
                        >
                          <option value="Project Consultation & Quote">Project Consultation & Quote</option>
                          <option value="Emergency Breakdown Repair">Emergency Breakdown Repair</option>
                          <option value="Commercial Fit-Out / Civil Works">Commercial Fit-Out / Civil Works</option>
                          <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B132B] uppercase tracking-wider mb-1.5">
                        Project / Repair Details
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide project location, scope of work, approximate area, or urgency level..."
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#B5892E] focus:ring-1 focus:ring-[#B5892E] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#B5892E] hover:bg-[#9A7222] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Message to Engineering Desk</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* UAE Geographic Coverage Map Strip */}
      <section className="bg-[#F8F9FB] py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h4 className="text-lg font-bold text-[#0B132B]">
            Active Service Coverage Across all 7 Emirates
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {siteConfig.emirates.map((em) => (
              <span 
                key={em}
                className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-semibold text-gray-700 shadow-2xs"
              >
                📍 {em}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
