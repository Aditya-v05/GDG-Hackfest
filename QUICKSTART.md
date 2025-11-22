# Quick Start Guide

## Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Visit `http://localhost:3000`

## What's Already Done ✅

- ✅ Project structure setup with Vite + React
- ✅ Tailwind CSS configured with GDG brand colors
- ✅ Icon components (GDG Logo, Doodles, etc.)
- ✅ UI components (Button, StickerCard)
- ✅ Data files (tracks, timeline, organizers, contacts, rules)
- ✅ Navbar component (fully functional)
- ✅ Hero section (fully functional)

## What You Need to Create 📝

Create the following files in `src/components/sections/`:

1. **AboutSection.jsx** - About the hackfest
2. **TracksSection.jsx** - Competition tracks
3. **TimelineSection.jsx** - Event schedule
4. **ParticipationSection.jsx** - Participation rules
5. **EventSpecificsSection.jsx** - Event details
6. **SafetySection.jsx** - Safety guidelines
7. **OrganizersSection.jsx** - Team members
8. **LocationSection.jsx** - Venue with Google Maps
9. **ContactSection.jsx** - Contact information
10. **SponsorsSection.jsx** - Sponsor logos
11. **Footer.jsx** - Site footer

## Copy From Original

You can copy the logic from your original `index.html` file:
- Lines 440-495: AboutSection
- Lines 497-589: TracksSection
- Lines 591-715: TimelineSection
- Lines 718-799: ParticipationSection
- Lines 801-885: EventSpecificsSection
- Lines 887-955: SafetySection
- Lines 958-1054: OrganizersSection
- Lines 1057-1145: LocationSection
- Lines 1148-1238: ContactSection
- Lines 1241-1275: SponsorsSection
- Lines 1278-1347: Footer

## Example: Creating AboutSection.jsx

```jsx
import React, { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16">
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        {/* Copy content from original index.html */}
      </div>
    </section>
  );
};

export default AboutSection;
```

## Then Import in App.jsx

```jsx
import AboutSection from './components/sections/AboutSection';

function App() {
  return (
    <div className="bg-off-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* ... other sections */}
    </div>
  );
}
```

## Tips

1. Use `lucide-react` for icons instead of custom Icon component
2. Import data from `src/data/` files
3. Use `StickerCard` and `Button` from `src/components/ui/`
4. Follow the same responsive patterns (px-4 md:px-8, text-base md:text-lg, etc.)

## Need Help?

Check the README.md for full documentation and component templates!
