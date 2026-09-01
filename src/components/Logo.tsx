import { useEffect, useState } from 'react';

function Logo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="64" rx="14" fill="url(#logo-grad)" />
          <path d="M14 18 L14 46 L20 46 L20 28 L32 40 L44 28 L44 46 L50 46 L50 18 L44 18 L32 30 L20 18 Z" fill="white" />
          <rect x="26" y="44" width="12" height="3" rx="1.5" fill="#3A8FFF" />
          <defs>
            <linearGradient id="logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0066FF" />
              <stop offset="1" stopColor="#0D2A52" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {showText && (
        <span className="font-display text-2xl font-extrabold tracking-tight text-current">
          MOBIVO
        </span>
      )}
    </div>
  );
}

export default Logo;
