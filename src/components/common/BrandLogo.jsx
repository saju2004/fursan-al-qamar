import React from 'react';
import { Link } from 'react-router-dom';

/**
 * BrandLogo Component
 * Renders the exact 4-tower architectural skyline cradled by a sweeping golden crescent moon,
 * accompanied by the bold geometric wordmark "FURSAN AL QAMAR" and letter-spaced "— TECHNICAL SERVICE —".
 */
export function BrandLogo({ variant = 'dark', className = '', showWordmark = true, size = 'default' }) {
  const isDarkVariant = variant === 'light'; // 'light' is used on dark backgrounds
  
  const textColor = isDarkVariant ? 'text-white' : 'text-[#0B132B]';
  const subtitleColor = 'text-[#B5892E]';
  const ruleColor = 'bg-[#B5892E]';

  // SVG dimension scaling
  const iconSizeClass = {
    sm: 'w-9 h-9',
    default: 'w-11 h-11 md:w-12 md:h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }[size] || 'w-11 h-11';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Scalable SVG Icon */}
      <svg 
        className={`${iconSizeClass} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Fursan Al Qamar Logo Emblem"
      >
        <defs>
          <linearGradient id="crescentGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFCA85" />
            <stop offset="45%" stopColor="#B5892E" />
            <stop offset="100%" stopColor="#7B591A" />
          </linearGradient>
          <linearGradient id="towerGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isDarkVariant ? "#2A4683" : "#1D2D5E"} />
            <stop offset="100%" stopColor={isDarkVariant ? "#141F43" : "#0B132B"} />
          </linearGradient>
          <linearGradient id="towerGradTall" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isDarkVariant ? "#3D61A8" : "#152042"} />
            <stop offset="100%" stopColor={isDarkVariant ? "#1D2D5E" : "#080E21"} />
          </linearGradient>
        </defs>

        {/* 4 Architectural Commercial Towers */}
        {/* Tower 1: Far Left (Angled cut roof) */}
        <path d="M 23 44 L 33 37 L 33 75 L 23 75 Z" fill="url(#towerGrad1)" />
        {/* Tower 1 Windows */}
        <g fill="#FFFFFF" opacity={isDarkVariant ? 0.9 : 0.85}>
          <rect x="25.5" y="45" width="2" height="3" rx="0.3"/>
          <rect x="29" y="45" width="2" height="3" rx="0.3"/>
          <rect x="25.5" y="51" width="2" height="3" rx="0.3"/>
          <rect x="29" y="51" width="2" height="3" rx="0.3"/>
          <rect x="25.5" y="57" width="2" height="3" rx="0.3"/>
          <rect x="29" y="57" width="2" height="3" rx="0.3"/>
          <rect x="25.5" y="63" width="2" height="3" rx="0.3"/>
          <rect x="29" y="63" width="2" height="3" rx="0.3"/>
        </g>

        {/* Tower 2: Center-Left Tallest Spire (Apex) */}
        <path d="M 35 24 L 50 14 L 50 78 L 35 78 Z" fill="url(#towerGradTall)" stroke="#B5892E" strokeWidth="0.5" strokeOpacity="0.4" />
        {/* Tower 2 Windows - High Rise Matrix */}
        <g fill="#FFFFFF" opacity={isDarkVariant ? 0.95 : 0.9}>
          <rect x="38" y="24" width="2.5" height="3.2" rx="0.4"/>
          <rect x="44" y="24" width="2.5" height="3.2" rx="0.4"/>
          <rect x="38" y="30" width="2.5" height="3.2" rx="0.4"/>
          <rect x="44" y="30" width="2.5" height="3.2" rx="0.4"/>
          <rect x="38" y="36" width="2.5" height="3.2" rx="0.4"/>
          <rect x="44" y="36" width="2.5" height="3.2" rx="0.4"/>
          <rect x="38" y="42" width="2.5" height="3.2" rx="0.4"/>
          <rect x="44" y="42" width="2.5" height="3.2" rx="0.4"/>
          <rect x="38" y="48" width="2.5" height="3.2" rx="0.4"/>
          <rect x="44" y="48" width="2.5" height="3.2" rx="0.4"/>
          <rect x="38" y="54" width="2.5" height="3.2" rx="0.4"/>
          <rect x="44" y="54" width="2.5" height="3.2" rx="0.4"/>
          <rect x="38" y="60" width="2.5" height="3.2" rx="0.4"/>
          <rect x="44" y="60" width="2.5" height="3.2" rx="0.4"/>
        </g>

        {/* Tower 3: Center-Right Tower */}
        <path d="M 52 28 L 65 21 L 65 77 L 52 77 Z" fill="url(#towerGrad1)" />
        {/* Tower 3 Windows */}
        <g fill="#FFFFFF" opacity={isDarkVariant ? 0.95 : 0.9}>
          <rect x="55" y="30" width="2.5" height="3.2" rx="0.4"/>
          <rect x="60" y="30" width="2.5" height="3.2" rx="0.4"/>
          <rect x="55" y="36" width="2.5" height="3.2" rx="0.4"/>
          <rect x="60" y="36" width="2.5" height="3.2" rx="0.4"/>
          <rect x="55" y="42" width="2.5" height="3.2" rx="0.4"/>
          <rect x="60" y="42" width="2.5" height="3.2" rx="0.4"/>
          <rect x="55" y="48" width="2.5" height="3.2" rx="0.4"/>
          <rect x="60" y="48" width="2.5" height="3.2" rx="0.4"/>
          <rect x="55" y="54" width="2.5" height="3.2" rx="0.4"/>
          <rect x="60" y="54" width="2.5" height="3.2" rx="0.4"/>
          <rect x="55" y="60" width="2.5" height="3.2" rx="0.4"/>
          <rect x="60" y="60" width="2.5" height="3.2" rx="0.4"/>
        </g>

        {/* Tower 4: Far Right Tower */}
        <path d="M 67 40 L 76 35 L 76 74 L 67 74 Z" fill="url(#towerGradTall)" />
        {/* Tower 4 Windows */}
        <g fill="#FFFFFF" opacity={isDarkVariant ? 0.9 : 0.85}>
          <rect x="70" y="43" width="2.2" height="3" rx="0.3"/>
          <rect x="70" y="49" width="2.2" height="3" rx="0.3"/>
          <rect x="70" y="55" width="2.2" height="3" rx="0.3"/>
          <rect x="70" y="61" width="2.2" height="3" rx="0.3"/>
        </g>

        {/* Sweeping Golden Crescent Moon Cradling the Base */}
        <path 
          d="M 14 54 C 13 74 30 89 51 89 C 67 89 80 81 87 68 C 89 64 88 61 84 62 C 81 63 76 68 67 74 C 54 81 36 78 26 67 C 20 60 17 52 17 48 C 17 44 14 47 14 54 Z" 
          fill="url(#crescentGold)" 
        />
        {/* Bottom Crescent Bevel Accent */}
        <path 
          d="M 17 56 C 21 73 37 84 54 84 C 67 84 78 77 84 68 C 82 72 74 79 60 82 C 43 85 27 76 20 61 C 18 57 17 55 17 56 Z" 
          fill="#DFCA85" 
          opacity="0.6"
        />
        {/* Dynamic Crescent Tip Swoop on Right */}
        <path 
          d="M 83 62 C 87 56 90 49 91 44 C 88 50 84 55 79 59 C 81 60 82 61 83 62 Z" 
          fill="#B5892E"
        />
      </svg>

      {/* Brand Typography Wordmark */}
      {showWordmark && (
        <div className="flex flex-col justify-center">
          <span className={`font-extrabold tracking-tight leading-none text-base md:text-lg lg:text-xl uppercase ${textColor}`}>
            FURSAN AL QAMAR
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`h-[1px] w-3.5 md:w-5 ${ruleColor} opacity-90 inline-block`} />
            <span className={`text-[0.62rem] md:text-[0.7rem] font-bold tracking-[0.18em] uppercase ${subtitleColor} whitespace-nowrap`}>
              TECHNICAL SERVICE
            </span>
            <span className={`h-[1px] w-3.5 md:w-5 ${ruleColor} opacity-90 inline-block`} />
          </div>
        </div>
      )}
    </div>
  );
}
