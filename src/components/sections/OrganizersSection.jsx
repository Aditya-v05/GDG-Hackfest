import React, { useState, useEffect, useRef } from 'react';
import { organizers } from '../../data/organizers';

const OrganizersSection = () => {
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
    <section id="organizers" ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className={`max-w-7xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16">
          MEET THE ORGANIZERS
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div className={`bg-white border-2 border-black rounded-2xl p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[${organizer.rotation}deg] hover:rotate-0 transition-all duration-300`}>
                <div className="aspect-square mb-3 md:mb-4 border-2 border-black rounded-xl overflow-hidden">
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl mb-1 md:mb-2">{organizer.name}</h3>
                <p className="font-mono text-xs md:text-sm text-brand-blue font-bold">{organizer.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
