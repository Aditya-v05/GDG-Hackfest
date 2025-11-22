import React, { useState, useEffect, useRef } from 'react';
import { CalendarCheck, Laptop, Clock, Award, Trophy, Gavel } from 'lucide-react';
import { eventSpecifics } from '../../data/rules';

const EventSpecificsSection = () => {
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

  const iconMap = {
    CalendarCheck,
    Laptop,
    Clock,
    Award,
    Trophy,
    Gavel
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className={`max-w-7xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="bg-brand-red border-2 border-black rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <Award size={32} color="#fff" className="md:w-10 md:h-10 flex-shrink-0" />
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white">
              Event Specifics
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {eventSpecifics.map((specific, index) => {
              const IconComponent = iconMap[specific.icon];
              return (
                <div key={index} className="bg-white border-2 border-black rounded-xl p-4 md:p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                    <div className="bg-pastel-red border-2 border-black rounded-lg p-2 md:p-3">
                      <IconComponent size={28} className="md:w-8 md:h-8" />
                    </div>
                    <h3 className="font-heading font-bold text-lg md:text-xl text-brand-red">{specific.title}:</h3>
                    <p className="text-sm md:text-base text-gray-700">{specific.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSpecificsSection;
