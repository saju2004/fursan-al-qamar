import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { servicesData } from '../../data/mockData';
import { apiClient } from '../../services/apiClient';

export function QuoteModal({ isOpen, onClose, preselectedService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService || 'electrical',
    emirate: 'Dubai',
    propertyType: 'Commercial Office',
    urgency: 'standard',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [error, setError] = useState('');

  // Update selected service if preselectedService prop changes
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Please provide your name and UAE contact phone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await apiClient.submitQuoteRequest(formData);
      setSubmissionResult(response);
    } catch (err) {
      setError('There was an issue dispatching your request. Please call our direct sales desk.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'electrical',
      emirate: 'Dubai',
      propertyType: 'Commercial Office',
      urgency: 'standard',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0B132B]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-[#0B132B] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#B5892E]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#B5892E] flex items-center justify-center text-white font-bold text-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Request a Free Technical Estimate</h3>
              <p className="text-xs text-gray-300">Certified Civil & MEP Engineering Solutions across UAE</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submissionResult ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#0B132B]">Estimate Request Dispatched!</h4>
              <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. 
                Your ticket has been assigned to our UAE engineering desk.
              </p>

              <div className="bg-[#F8F9FB] border border-gray-200 rounded-xl p-4 my-6 max-w-md mx-auto text-left">
                <div className="flex justify-between items-center text-xs py-1 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Reference Code:</span>
                  <span className="font-mono font-bold text-[#B5892E] text-sm">{submissionResult.referenceNumber}</span>
                </div>
                <div className="flex justify-between items-center text-xs py-1 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Service Trade:</span>
                  <span className="font-semibold text-[#0B132B] capitalize">{formData.service}</span>
                </div>
                <div className="flex justify-between items-center text-xs py-1 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Location:</span>
                  <span className="font-semibold text-[#0B132B]">{formData.emirate}, UAE</span>
                </div>
                <div className="flex justify-between items-center text-xs py-1">
                  <span className="text-gray-500 font-medium">Engineer Response:</span>
                  <span className="font-semibold text-emerald-700">Within ~2 Hours</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a 
                  href={`https://wa.me/971522569868?text=Hello%20Eng.%20Abuthahir,%20I%20just%20submitted%20estimate%20request%20${submissionResult.referenceNumber}%20for%20${encodeURIComponent(formData.service)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Speed Up via WhatsApp
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Al Mansoori"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[#B5892E] focus:ring-1 focus:ring-[#B5892E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-1">
                    UAE Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 5X XXX XXXX"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[#B5892E] focus:ring-1 focus:ring-[#B5892E] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="client@company.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[#B5892E] focus:ring-1 focus:ring-[#B5892E] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-1">
                    Select Technical Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[#B5892E] focus:ring-1 focus:ring-[#B5892E] bg-white transition-colors capitalize"
                  >
                    {servicesData.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                    <option value="multiple">Turnkey MEP & Civil Package</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-1">
                    Emirate / Location
                  </label>
                  <select
                    name="emirate"
                    value={formData.emirate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[#B5892E] bg-white"
                  >
                    {siteConfig.emirates.map(em => (
                      <option key={em} value={em}>{em}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-1">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[#B5892E] bg-white"
                  >
                    <option value="Commercial Office">Commercial Office</option>
                    <option value="Residential Villa">Residential Villa</option>
                    <option value="Residential Apartment">Residential Apartment</option>
                    <option value="Industrial Warehouse">Industrial Warehouse</option>
                    <option value="Retail / Restaurant">Retail / Restaurant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-1">
                    Urgency Level
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[#B5892E] bg-white"
                  >
                    <option value="standard">Standard (Next 1-2 Days)</option>
                    <option value="urgent">Urgent (Within 24 Hours)</option>
                    <option value="emergency">Emergency (Immediate)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B132B] uppercase tracking-wider mb-1">
                  Project Scope / Scope Description
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirements (e.g. DB dressing, ducted AC repair, false ceiling 300 sq.m, civil masonry...)"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[#B5892E] focus:ring-1 focus:ring-[#B5892E] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Phone className="w-3.5 h-3.5 text-[#B5892E]" />
                  <span>Immediate assistance: <strong className="text-[#0B132B]">+971 52 256 9868</strong></span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B5892E] hover:bg-[#9A7222] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Free Quote</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
