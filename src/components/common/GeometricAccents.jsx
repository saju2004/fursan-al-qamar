import React from 'react';

/**
 * GeometricAccents Component
 * Replicates the interlocking Navy (#0B132B) and Gold (#B5892E) rectangular geometric blocks
 * inspired by the official business card corner motif and UI reference mockup.
 */
export function GeometricAccents({ position = 'left', className = '' }) {
  if (position === 'left') {
    return (
      <div className={`pointer-events-none select-none absolute left-0 z-10 flex flex-col items-start ${className}`}>
        {/* Top Gold Block */}
        <div className="w-10 sm:w-14 md:w-16 h-12 sm:h-16 md:h-20 bg-[#B5892E] rounded-r-sm opacity-95 shadow-sm transform -translate-x-1" />
        {/* Interlocking Navy Block Offset */}
        <div className="w-14 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-[#0B132B] rounded-r-md -mt-5 sm:-mt-6 shadow-md border-r-2 border-[#B5892E]/40 transform" />
        {/* Small Accent Gold Tab */}
        <div className="w-5 sm:w-7 h-5 sm:h-7 bg-[#B5892E] rounded-r-sm -mt-2 opacity-80" />
      </div>
    );
  }

  if (position === 'right') {
    return (
      <div className={`pointer-events-none select-none absolute right-0 z-10 flex flex-col items-end ${className}`}>
        {/* Interlocking Navy Block */}
        <div className="w-12 sm:w-16 md:w-20 h-16 sm:h-20 md:h-24 bg-[#0B132B] rounded-l-md shadow-md border-l-2 border-[#B5892E]/40" />
        {/* Overlapping Gold Block */}
        <div className="w-8 sm:w-12 md:w-14 h-10 sm:h-14 md:h-16 bg-[#B5892E] rounded-l-sm -mt-4 opacity-95 shadow-sm" />
      </div>
    );
  }

  // Card Angle Bar Motif (matching bottom of business card)
  if (position === 'card-stripe') {
    return (
      <div className={`w-full flex items-stretch h-3 overflow-hidden ${className}`}>
        <div className="w-1/4 bg-[#B5892E]" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }} />
        <div className="flex-1 bg-[#0B132B] -ml-2" />
      </div>
    );
  }

  return null;
}
