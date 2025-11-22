import React from 'react';

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-600",
    secondary: "bg-white text-brand-black hover:bg-gray-100",
    outline: "bg-transparent text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        font-bold font-heading
        border-2 border-black rounded-lg
        px-6 py-3
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-150
        hover:translate-x-[2px] hover:translate-y-[2px]
        hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[4px] active:translate-y-[4px]
        active:shadow-none
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
