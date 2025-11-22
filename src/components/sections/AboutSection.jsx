import React, { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16">
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        {/* Left Column - Text */}
        <div className="bg-pastel-green border-2 border-black rounded-2xl p-6 md:p-8 lg:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            WHAT IS HACKFEST?
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
            A 24-hour coding marathon where innovators, designers, and problem-solvers come together to build the future.
          </p>
          <div className="space-y-3 md:space-y-4 font-mono text-sm md:text-base">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-brand-blue rounded-full border-2 border-black flex-shrink-0"></div>
              <span className="font-bold">February 14-15, 2025</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-brand-red rounded-full border-2 border-black flex-shrink-0"></div>
              <span className="font-bold">K.S.R College of Engineering</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-brand-yellow rounded-full border-2 border-black flex-shrink-0"></div>
              <span className="font-bold">Tiruchengode, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Right Column - Polaroid Stack */}
        <div className="relative h-[500px] md:h-auto min-h-[400px]">
          {/* Polaroid 1 */}
          <div className="absolute top-0 left-0 w-64 sm:w-72 bg-white border-2 border-black rounded-lg p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-5deg] tape-strip">
            <div className="bg-gray-200 border border-black h-40 sm:h-48 flex items-center justify-center font-mono text-xs sm:text-sm px-2">
              [HACKING IN PROGRESS]
            </div>
            <p className="font-mono text-xs sm:text-sm mt-2 text-center">Building the future</p>
          </div>

          {/* Polaroid 2 */}
          <div className="absolute top-12 right-0 w-64 sm:w-72 bg-white border-2 border-black rounded-lg p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[2deg] tape-strip z-10">
            <div className="bg-gray-200 border border-black h-40 sm:h-48 flex items-center justify-center font-mono text-xs sm:text-sm px-2">
              [TEAM COLLABORATION]
            </div>
            <p className="font-mono text-xs sm:text-sm mt-2 text-center">Ideas becoming reality</p>
          </div>

          {/* Polaroid 3 */}
          <div className="absolute bottom-0 left-4 sm:left-8 w-64 sm:w-72 bg-white border-2 border-black rounded-lg p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg] tape-strip z-20">
            <div className="bg-gray-200 border border-black h-40 sm:h-48 flex items-center justify-center font-mono text-xs sm:text-sm px-2">
              [WINNERS CELEBRATION]
            </div>
            <p className="font-mono text-xs sm:text-sm mt-2 text-center">Dreams achieved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
