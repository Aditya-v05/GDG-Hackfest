import React, { useState, useEffect } from 'react';
import { ThreeLoops, AngledSlashes, Brackets, Asterisk } from '../icons';
import { Button } from '../ui';

const HeroSection = () => {
  const [count, setCount] = useState({ hackers: 0, hours: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount({
        hackers: Math.floor((100 * currentStep) / steps),
        hours: Math.floor((24 * currentStep) / steps)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, increment);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Background Doodles */}
      <div className="absolute top-20 right-10 animate-float" style={{'--rotate': '-15deg'}}>
        <ThreeLoops size={150} />
      </div>
      <div className="absolute top-40 left-10 animate-float delay-500">
        <Asterisk size={40} color="#ea4335" />
      </div>
      <div className="absolute bottom-1/3 right-20 animate-float delay-1000">
        <Asterisk size={50} color="#34a853" />
      </div>
      <div className="absolute top-1/3 left-20 animate-float delay-1500">
        <AngledSlashes size={70} color="#f9ab00" />
      </div>
      <div className="absolute bottom-40 left-1/4 animate-float">
        <Brackets variant="square" size={100} color="#ea4335" />
      </div>
      <div className="absolute top-1/4 right-1/3 animate-float delay-500">
        <Asterisk size={35} color="#4285f4" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-4">
        <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-brand-black mb-6 leading-tight"
            style={{textShadow: '4px 4px 0px rgba(0, 0, 0, 1)'}}>
          HACKFEST 2025
        </h1>

        <div className="font-mono text-sm sm:text-base md:text-xl lg:text-2xl mb-12 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8">
          <span className="bg-pastel-yellow border-2 border-black px-3 sm:px-4 py-2 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center">
            {count.hours} HOURS
          </span>
          <span className="bg-pastel-blue border-2 border-black px-3 sm:px-4 py-2 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center">
            {count.hackers}+ HACKERS
          </span>
          <span className="bg-pastel-green border-2 border-black px-3 sm:px-4 py-2 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center">
            INFINITE POSSIBILITIES
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="primary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
            Register Now
          </Button>
          <Button variant="outline" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
            Join Discord
          </Button>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-yellow border-t-2 border-black overflow-hidden py-3 md:py-4">
        <div className="flex animate-marquee whitespace-nowrap font-mono font-bold text-lg md:text-2xl">
          {['CODE', '•', 'CREATE', '•', 'INNOVATE', '•', 'COLLABORATE', '•'].map((item, i) => (
            <span key={i} className="mx-8">{item}</span>
          ))}
          {['CODE', '•', 'CREATE', '•', 'INNOVATE', '•', 'COLLABORATE', '•'].map((item, i) => (
            <span key={`dup-${i}`} className="mx-8">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
