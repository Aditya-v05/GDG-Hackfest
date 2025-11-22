import React from 'react';

const GDGLogo = ({ size = 40, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
    <path fill="#4285f4" d="M20 30 C20 20, 30 15, 40 20 L40 50 C40 60, 30 65, 20 60 Z" />
    <path fill="#ea4335" d="M40 20 C50 15, 60 20, 60 30 L60 40 C60 50, 50 55, 40 50 Z" />
    <path fill="#f9ab00" d="M60 50 C70 55, 80 50, 80 40 L80 70 C80 80, 70 85, 60 80 Z" />
    <path fill="#34a853" d="M60 80 C50 85, 40 80, 40 70 L40 60 C40 50, 50 45, 60 50 Z" />
  </svg>
);

export default GDGLogo;
