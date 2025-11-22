import React from 'react';

const ThreeLoops = ({ color = "#4285f4", size = 100, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
    <path
      d="M20 30 Q30 15, 45 20 T70 30 Q85 35, 80 50 T65 70"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M30 50 Q35 35, 50 40 T75 50"
      stroke="#ea4335"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M15 60 Q25 55, 35 65 T55 75 Q70 80, 75 70"
      stroke="#f9ab00"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default ThreeLoops;
