import React, { useState, useEffect, useRef } from 'react';
import { timelineEvents } from '../../data/timeline';

const TimelineSection = () => {
  const [visibleEvents, setVisibleEvents] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timelineEvents.forEach((_, index) => {
            setTimeout(() => {
              setVisibleEvents(prev => [...prev, index]);
            }, index * 200);
          });
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
    <section id="timeline" ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-brand-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16">
          TIMELINE
        </h2>

        {/* Desktop Timeline */}
        <div className="relative hidden md:block">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleEvents.includes(index);

              return (
                <div
                  key={index}
                  className={`
                    relative flex items-center
                    ${isLeft ? 'justify-start' : 'justify-end'}
                    ${isVisible ? 'fade-in-up' : 'opacity-0'}
                  `}
                >
                  {/* Connecting line */}
                  <div
                    className={`
                      absolute top-1/2 w-12 h-0.5 bg-white
                      ${isLeft ? 'left-1/2' : 'right-1/2'}
                    `}
                  ></div>

                  {/* Dot indicator */}
                  <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 ${item.color} rounded-full border-2 border-white z-10`}></div>

                  {/* Event card */}
                  <div
                    className={`
                      w-5/12 bg-white text-brand-black border-2 border-white
                      rounded-xl p-3 md:p-4 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]
                      ${isLeft ? 'mr-auto translate-x-[-3rem]' : 'ml-auto translate-x-[3rem]'}
                    `}
                  >
                    <div className="font-mono font-bold text-xs md:text-sm mb-1">{item.time}</div>
                    <div className="font-heading font-bold text-base md:text-lg">{item.event}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden max-w-md mx-auto">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>

            {timelineEvents.map((item, index) => {
              const isVisible = visibleEvents.includes(index);
              return (
                <div
                  key={index}
                  className={`
                    relative mb-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}
                  `}
                >
                  <div className={`absolute left-[-2.1rem] top-2 w-5 h-5 ${item.color} rounded-full border-2 border-white`}></div>
                  <div className="bg-white text-brand-black border-2 border-white rounded-xl p-4">
                    <div className="font-mono font-bold text-sm mb-1">{item.time}</div>
                    <div className="font-heading font-bold text-base">{item.event}</div>
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

export default TimelineSection;
