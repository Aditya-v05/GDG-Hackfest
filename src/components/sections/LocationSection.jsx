import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '../ui';

const LocationSection = () => {
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
    <section ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-off-white">
      <div className={`max-w-7xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16">
          FIND US HERE
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.4969999999996!2d77.817816!3d11.359909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f2376c873e7%3A0xd596e461eaf89447!2sK.S.Rangasamy%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K.S.R College of Engineering Location"
            ></iframe>
          </div>

          {/* Location Info */}
          <div className="bg-pastel-green border-2 border-black rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-white border-2 border-black rounded-lg p-2 md:p-3 flex-shrink-0">
                <MapPin size={28} color="#34a853" className="md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl mb-1 md:mb-2">Venue</h3>
                <p className="text-sm md:text-base lg:text-lg">
                  K.S.R College of Engineering<br />
                  Tiruchengode, Tamil Nadu 637215<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="bg-white border-2 border-black rounded-lg p-2 md:p-3 flex-shrink-0">
                <Calendar size={28} color="#4285f4" className="md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl mb-1 md:mb-2">Date</h3>
                <p className="text-sm md:text-base lg:text-lg font-mono">February 14-15, 2025</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?ll=11.359909,77.817816&z=19&t=m&hl=en&gl=IN&mapclient=embed&cid=15395147896605224647"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="primary" className="w-full md:w-auto">
                <span className="flex items-center gap-2">
                  <ExternalLink size={20} />
                  Open in Google Maps
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
