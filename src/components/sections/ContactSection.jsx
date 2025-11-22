import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail } from 'lucide-react';
import { contacts } from '../../data/contacts';

const ContactSection = () => {
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
    <section id="contact" ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className={`max-w-7xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-16">
          GET IN TOUCH
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {contacts.map((contact, index) => (
            <div key={index} className={`${contact.bgColor} border-2 border-black rounded-2xl p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300`}>
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-1 md:mb-2">{contact.name}</h3>
              <p className="font-mono text-xs md:text-sm mb-3 md:mb-4 text-gray-700">{contact.role}</p>

              <div className="space-y-2 md:space-y-3">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white border-2 border-black rounded-lg hover:translate-x-1 transition-transform font-mono text-sm md:text-base"
                >
                  <Phone size={18} className="md:w-5 md:h-5 flex-shrink-0" />
                  <span>{contact.phone}</span>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white border-2 border-black rounded-lg hover:translate-x-1 transition-transform font-mono text-xs md:text-sm break-all"
                >
                  <Mail size={18} className="md:w-5 md:h-5 flex-shrink-0" />
                  <span>{contact.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
