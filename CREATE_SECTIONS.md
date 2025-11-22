# Step-by-Step: Creating All Remaining Sections

## Quick Copy-Paste Guide

For each section below, follow these steps:
1. Create the file in `src/components/sections/`
2. Copy the corresponding code from `index.html` (line numbers provided)
3. Wrap it in the React component structure
4. Import it in `App.jsx`

---

## 1. AboutSection.jsx

**Create:** `src/components/sections/AboutSection.jsx`

**Copy from index.html:** Lines 440-495

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
      {/* PASTE CONTENT FROM index.html LINE 441 */}
    </section>
  );
};

export default AboutSection;
```

---

## 2. TracksSection.jsx

**Create:** `src/components/sections/TracksSection.jsx`

**Import data:** `import { tracks } from '../../data/tracks';`

**Import icons:** `import { Brain, Cloud, Smartphone, Lightbulb, ArrowRight } from 'lucide-react';`

**Import UI:** `import { StickerCard } from '../ui';`

**Copy from index.html:** Lines 497-589

**Replace icon references:**
- Replace `<Icon name="brain"` with `<Brain`
- Replace `<Icon name="cloud"` with `<Cloud`
- Replace `<Icon name="smartphone"` with `<Smartphone`
- Replace `<Icon name="lightbulb"` with `<Lightbulb`
- Replace `<Icon name="arrow-right"` with `<ArrowRight`

---

## 3. TimelineSection.jsx

**Create:** `src/components/sections/TimelineSection.jsx`

**Import data:** `import { timelineEvents } from '../../data/timeline';`

**Copy from index.html:** Lines 591-715

**Use `timelineEvents` instead of inline `events` array**

---

## 4. ParticipationSection.jsx

**Create:** `src/components/sections/ParticipationSection.jsx`

**Import data:** `import { participationRules } from '../../data/rules';`

**Import icons:**
```jsx
import { Users, UserPlus, ShieldCheck, Heart, FileText } from 'lucide-react';
```

**Copy from index.html:** Lines 718-799

**Create icon map:**
```jsx
const iconMap = {
  Users, UserPlus, ShieldCheck, Heart, FileText
};
```

**Use:** `{React.createElement(iconMap[rule.icon], { size: 20 })}`

---

## 5. EventSpecificsSection.jsx

**Create:** `src/components/sections/EventSpecificsSection.jsx`

**Import data:** `import { eventSpecifics } from '../../data/rules';`

**Import icons:**
```jsx
import { CalendarCheck, Laptop, Clock, Award, Trophy, Gavel } from 'lucide-react';
```

**Copy from index.html:** Lines 801-885

---

## 6. SafetySection.jsx

**Create:** `src/components/sections/SafetySection.jsx`

**Import data:** `import { safetyRules } from '../../data/rules';`

**Import icons:** `import { Shield, AlertTriangle, MapPin } from 'lucide-react';`

**Copy from index.html:** Lines 887-955

---

## 7. OrganizersSection.jsx

**Create:** `src/components/sections/OrganizersSection.jsx`

**Import data:** `import { organizers } from '../../data/organizers';`

**Copy from index.html:** Lines 958-1054

---

## 8. LocationSection.jsx

**Create:** `src/components/sections/LocationSection.jsx`

**Import icons:** `import { MapPin, Calendar, ExternalLink } from 'lucide-react';`

**Import UI:** `import { Button } from '../ui';`

**Copy from index.html:** Lines 1057-1145

---

## 9. ContactSection.jsx

**Create:** `src/components/sections/ContactSection.jsx`

**Import data:** `import { contacts } from '../../data/contacts';`

**Import icons:** `import { Phone, Mail } from 'lucide-react';`

**Copy from index.html:** Lines 1148-1238

---

## 10. SponsorsSection.jsx

**Create:** `src/components/sections/SponsorsSection.jsx`

**Import UI:** `import { Button } from '../ui';`

**Copy from index.html:** Lines 1241-1275

---

## 11. Footer.jsx

**Create:** `src/components/sections/Footer.jsx`

**Import icons:**
```jsx
import { GDGLogo } from '../icons';
import { Github, MessageCircle, Linkedin, Twitter, Heart } from 'lucide-react';
```

**Copy from index.html:** Lines 1278-1347

---

## Finally: Update App.jsx

Once all sections are created, update `src/App.jsx`:

```jsx
import React from 'react';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import TracksSection from './components/sections/TracksSection';
import TimelineSection from './components/sections/TimelineSection';
import ParticipationSection from './components/sections/ParticipationSection';
import EventSpecificsSection from './components/sections/EventSpecificsSection';
import SafetySection from './components/sections/SafetySection';
import OrganizersSection from './components/sections/OrganizersSection';
import LocationSection from './components/sections/LocationSection';
import ContactSection from './components/sections/ContactSection';
import SponsorsSection from './components/sections/SponsorsSection';
import Footer from './components/sections/Footer';

import './styles/index.css';

function App() {
  return (
    <div className="bg-off-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <TimelineSection />
      <ParticipationSection />
      <EventSpecificsSection />
      <SafetySection />
      <OrganizersSection />
      <LocationSection />
      <ContactSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}

export default App;
```

---

## Icon Replacement Quick Reference

When copying from index.html, replace these:

| Old (in HTML) | New (in JSX) |
|---------------|--------------|
| `<Icon name="brain"` | `<Brain` |
| `<Icon name="cloud"` | `<Cloud` |
| `<Icon name="smartphone"` | `<Smartphone` |
| `<Icon name="lightbulb"` | `<Lightbulb` |
| `<Icon name="users"` | `<Users` |
| `<Icon name="user-plus"` | `<UserPlus` |
| `<Icon name="shield-check"` | `<ShieldCheck` |
| `<Icon name="heart"` | `<Heart` |
| `<Icon name="file-text"` | `<FileText` |
| `<Icon name="phone"` | `<Phone` |
| `<Icon name="mail"` | `<Mail` |
| `<Icon name="map-pin"` | `<MapPin` |
| `<Icon name="calendar"` | `<Calendar` |
| `<Icon name="external-link"` | `<ExternalLink` |
| `<Icon name="github"` | `<Github` |
| `<Icon name="message-circle"` | `<MessageCircle` |
| `<Icon name="linkedin"` | `<Linkedin` |
| `<Icon name="twitter"` | `<Twitter` |

---

## Tips

1. **Start with AboutSection** - It's the simplest
2. **Test after each section** - Run `npm run dev` to see changes
3. **Don't forget imports** - Icons, data, and UI components
4. **Keep the structure** - Each section should have useEffect for visibility
5. **className stays the same** - All Tailwind classes work identically

Good luck! 🚀
