import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { AccommodationSection } from './components/AccommodationSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LeafAnimation } from './components/animations/LeafAnimation';
const MainContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(section.id);
      }
    });
    setScrolling(window.scrollY > 50);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    // Handle direct navigation to /menu
    if (location.pathname === '/menu') {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({
          behavior: 'smooth'
        });
        setActiveSection('menu');
      }
    }
  }, [location]);
  return <div className="relative w-full overflow-x-hidden bg-[#f9f1de] text-[#0e3e2e]">
      <LeafAnimation />
      <Navigation activeSection={activeSection} scrolling={scrolling} />
      <main className="w-full">
        <HeroSection />
        <MenuSection />
        <GallerySection />
        <AccommodationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
};
export function App() {
  return <Router>
      <Routes>
        <Route path="/*" element={<MainContent />} />
      </Routes>
    </Router>;
}