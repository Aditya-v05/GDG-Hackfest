import React from 'react';

const StickerCard = ({ children, bgColor = "bg-pastel-yellow", rotation = "-1", className = "" }) => (
  <div
    className={`
      ${bgColor} border-2 border-black
      rounded-2xl p-6
      rotate-[${rotation}deg] hover:rotate-[1deg]
      transition-all duration-300
      shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
      hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
      hover:-translate-y-1
      ${className}
    `}
  >
    {children}
  </div>
);

export default StickerCard;
