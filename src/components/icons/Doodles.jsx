import React from 'react';

export const AngledSlashes = ({ color = "#ea4335", size = 60, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className} fill="none">
    <line x1="15" y1="10" x2="25" y2="50" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="35" y1="10" x2="45" y2="50" stroke={color} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const Brackets = ({ variant = "curly", color = "#4285f4", size = 80, className = "" }) => {
  if (variant === "curly") {
    return (
      <svg width={size} height={size} viewBox="0 0 80 80" className={className} fill="none">
        <path d="M25 10 Q15 10, 15 20 L15 60 Q15 70, 25 70" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <path d="M55 10 Q65 10, 65 20 L65 60 Q65 70, 55 70" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} fill="none">
      <path d="M20 10 L20 70 M20 10 L30 10 M20 70 L30 70" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M60 10 L60 70 M60 10 L50 10 M60 70 L50 70" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

export const Asterisk = ({ color = "#f9ab00", size = 30, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 30 30" className={className} fill="none">
    <line x1="15" y1="5" x2="15" y2="25" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="5" y1="15" x2="25" y2="15" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="8" y1="8" x2="22" y2="22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="8" x2="8" y2="22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
