import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle2, ArrowRight, Filter, Sparkles, Star } from 'lucide-react';
import { apiClient } from '../services/apiClient';
import { GeometricAccents } from '../components/common/GeometricAccents';

export function ProjectsPage() {
  const { openQuoteModal } = useOutletContext();
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Divisions' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'hvac', name: 'HVAC & Cooling' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'ceilings', name: 'Ceilings & Partitions' },
    { id: 'painting', name: 'Painting & Epoxy' },
    { id: 'carpentry', name: 'Carpentry & Joinery' },
    { id: 'construction', name: 'Civil & Finishing' }
  ];

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    apiClient.fetchProjects(activeCategory)
      .then((data) => {
        if (isMounted) {
          setProjects(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#0B132B] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
        <GeometricAccents position="left" className="top-8 opacity-75" />
        <GeometricAccents position="right" className="bottom-8 opacity-75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-block bg-[#B5892E] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            PROVEN TRACK RECORD
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Completed <span className="text-[#B5892E]">Projects</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Explore our portfolio of certified electrical, MEP, civil finishing, and interior installations across landmark UAE developments.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-[#F8F9FB] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#B5892E] text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="w-10 h-10 border-4 border-[#B5892E] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm text-gray-500 font-medium">Loading UAE Project Portfolio...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-[#B5892E] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Banner */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B132B]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                        {proj.categoryName}
                      </div>
                      <div className="absolute top-3 right-3 bg-[#B5892E] text-white text-[11px] font-bold px-2.5 py-0.5 rounded shadow-sm">
                        {proj.year}
                      </div>
                    </div>

                    {/* Details Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-xs text-[#B5892E] font-semibold mb-2">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{proj.location}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#0B132B] group-hover:text-[#B5892E] transition-colors leading-snug mb-3">
                        {proj.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {proj.scope}
                      </p>

                      <div className="text-[11px] font-medium text-gray-500 bg-[#F8F9FB] p-2.5 rounded-lg border border-gray-100">
                        <strong className="text-gray-700">Client / Facility:</strong> {proj.clientType}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => openQuoteModal(proj.category)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#FBF7EE] border border-[#E6D5B0] hover:bg-[#B5892E] hover:text-white text-xs font-bold text-[#0B132B] transition-all flex items-center justify-center gap-2 group-hover:border-[#B5892E]"
                    >
                      <span>Inquire for Similar Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
