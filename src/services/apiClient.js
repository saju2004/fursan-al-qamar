import { servicesData, projectsData } from '../data/mockData';

/**
 * Service/API Abstraction Layer
 * Designed for effortless switch between Mock Data and Node/Express or Firebase backend.
 * Set VITE_API_URL in .env to plug in a live backend.
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || null;

// Simulated network delay for realistic UI micro-interactions
const delay = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiClient = {
  /**
   * Submit Quote Request (Estimator modal & contact page)
   */
  async submitQuoteRequest(payload) {
    if (API_BASE_URL) {
      const response = await fetch(`${API_BASE_URL}/api/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Failed to submit quote request');
      return await response.json();
    }

    // Realistic Mock Handler
    await delay(750);
    const referenceNumber = `FAQ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    
    // Save to local storage for persistence demo
    try {
      const existing = JSON.parse(localStorage.getItem('faq_quotes') || '[]');
      existing.unshift({
        id: referenceNumber,
        ...payload,
        createdAt: new Date().toISOString(),
        status: 'PENDING_REVIEW'
      });
      localStorage.setItem('faq_quotes', JSON.stringify(existing.slice(0, 50)));
    } catch {
      // ignore storage errors
    }

    return {
      success: true,
      referenceNumber,
      message: 'Your quote request has been dispatched to Eng. Abuthahir and the technical estimating team.',
      estimatedContactWithinHours: 2,
      data: payload
    };
  },

  /**
   * Submit General Contact Form
   */
  async submitContactForm(payload) {
    if (API_BASE_URL) {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Failed to submit contact message');
      return await response.json();
    }

    // Realistic Mock Handler
    await delay(650);
    const ticketId = `TKT-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      const existing = JSON.parse(localStorage.getItem('faq_messages') || '[]');
      existing.unshift({
        id: ticketId,
        ...payload,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('faq_messages', JSON.stringify(existing.slice(0, 50)));
    } catch {
      // ignore
    }

    return {
      success: true,
      ticketId,
      message: 'Thank you for reaching out. A technical officer will respond shortly.',
      data: payload
    };
  },

  /**
   * Fetch All Services
   */
  async fetchServices() {
    if (API_BASE_URL) {
      const res = await fetch(`${API_BASE_URL}/api/services`);
      if (!res.ok) throw new Error('Failed to load services');
      return await res.json();
    }

    await delay(200);
    return servicesData;
  },

  /**
   * Fetch Single Service by ID or Slug
   */
  async fetchServiceBySlug(slug) {
    if (API_BASE_URL) {
      const res = await fetch(`${API_BASE_URL}/api/services/${slug}`);
      if (!res.ok) throw new Error('Failed to load service');
      return await res.json();
    }

    await delay(200);
    const found = servicesData.find(s => s.slug === slug || s.id === slug);
    if (!found) throw new Error(`Service '${slug}' not found`);
    return found;
  },

  /**
   * Fetch Projects with optional Category Filter
   */
  async fetchProjects(category = 'all') {
    if (API_BASE_URL) {
      const url = category && category !== 'all' 
        ? `${API_BASE_URL}/api/projects?category=${encodeURIComponent(category)}`
        : `${API_BASE_URL}/api/projects`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to load projects');
      return await res.json();
    }

    await delay(300);
    if (!category || category === 'all') {
      return projectsData;
    }
    return projectsData.filter(p => p.category === category);
  }
};
