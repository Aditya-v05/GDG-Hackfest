/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4285f4',
        'brand-red': '#ea4335',
        'brand-yellow': '#f9ab00',
        'brand-green': '#34a853',
        'brand-black': '#000000',
        'pastel-blue': '#c3ecf6',
        'pastel-green': '#ccf6c5',
        'pastel-yellow': '#ffe7a5',
        'pastel-red': '#f8d8d8',
        'off-white': '#f0f0f0',
      },
      fontFamily: {
        'heading': ['Outfit', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
