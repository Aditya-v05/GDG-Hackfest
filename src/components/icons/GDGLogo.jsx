import React from 'react';

const GDGLogo = ({ size = 40, className = "" }) => (
  <img
    src="/gdg-logo.png"
    alt="GDG Logo"
    width={size}
    height={size}
    className={className}
  />
);

export default GDGLogo;
