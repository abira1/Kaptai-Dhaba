import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
type NavigationProps = {
  activeSection: string;
  scrolling: boolean;
};
export const Navigation = ({
  activeSection,
  scrolling
}: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navLinks = [{
    id: 'home',
    label: 'Home',
    path: '/'
  }, {
    id: 'menu',
    label: 'Menu',
    path: '/menu'
  }, {
    id: 'gallery',
    label: 'Gallery'
  }, {
    id: 'accommodation',
    label: 'Stay'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      if (sectionId === 'menu') {
        navigate('/menu');
      }
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolling ? 'bg-[#0e3e2e] bg-opacity-95 text-[#f9f1de] shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Kaptai_dhaba_Logo.png" alt="Kaptai Dhaba Logo" className="h-12 md:h-14" />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className={`relative px-1 py-2 font-medium tracking-wide transition-colors duration-300 
                ${activeSection === link.id ? scrolling ? 'text-[#e79c56]' : 'text-[#e79c56]' : scrolling ? 'text-[#f9f1de] hover:text-[#e79c56]' : 'text-[#0e3e2e] hover:text-[#e79c56]'}
              `}>
              {link.label}
              {activeSection === link.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e79c56] transform origin-bottom-right transition-transform duration-300"></span>}
            </button>)}
        </div>
        {/* Mobile Navigation Toggle */}
        <button className={`md:hidden p-2 rounded-md ${scrolling ? 'text-[#f9f1de]' : 'text-[#0e3e2e]'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-[#0e3e2e] bg-opacity-95 shadow-lg py-4 px-6 space-y-3 transform transition-all duration-300">
          {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className={`block w-full text-left py-2 px-4 rounded-md transition-colors duration-300 ${activeSection === link.id ? 'text-[#e79c56] font-medium' : 'text-[#f9f1de] hover:text-[#e79c56]'}`}>
              {link.label}
            </button>)}
        </div>}
    </nav>;
};