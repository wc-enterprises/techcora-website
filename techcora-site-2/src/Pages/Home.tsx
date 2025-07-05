import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Code, Cpu, Users, Target, Eye, Lightbulb, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

import Navigation from '../components/home/Navigation';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import MissionVision from '../components/home/MissionVision';
import Verticals from '../components/home/Verticals';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Team from '../components/home/Team';
import Industries from '../components/home/Industries';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'mission', 'verticals', 'services', 'why-choose-us', 'team', 'industries', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <Hero scrollToSection={scrollToSection} />
      <About />
      <MissionVision />
      <Verticals />
      <Services />
      <WhyChooseUs />
      <Team />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
}