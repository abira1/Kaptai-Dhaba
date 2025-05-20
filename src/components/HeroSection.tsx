import React, { useEffect, useRef } from 'react';
import { ChevronDownIcon } from 'lucide-react';
export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      window.scrollTo({
        top: menuSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat" style={{
    backgroundImage: 'url("https://i.postimg.cc/6pB7jS1h/Chat-GPT-Image-May-20-2025-11-16-08-AM.png")'
  }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e3e2e]/70 via-[#0e3e2e]/60 to-[#0e3e2e]/70"></div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="animate-fadeIn space-y-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#e79c56] blur-2xl opacity-20 rounded-full transform scale-150"></div>
            <img src="/Kaptai_dhaba_Logo.png" alt="Kaptai Dhaba Logo" className="w-32 h-32 md:w-40 md:h-40 relative animate-float" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-[#f9f1de] drop-shadow-lg">
              Welcome to{' '}
              <span className="text-[#e79c56] block md:inline">
                Kaptai Dhaba
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#f9f1de] max-w-2xl mx-auto drop-shadow-md font-light">
              Experience authentic flavors in the heart of nature's paradise
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-4">
            <button onClick={scrollToMenu} className="group bg-[#e79c56] text-[#0e3e2e] px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden">
              <span className="relative z-10">Explore Our Menu</span>
              <div className="absolute inset-0 bg-[#f9f1de] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <a href="https://wa.me/8801851567656" target="_blank" rel="noopener noreferrer" className="group bg-transparent border-2 border-[#f9f1de] text-[#f9f1de] px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 relative overflow-hidden flex items-center justify-center">
              <span className="relative z-10 group-hover:text-[#0e3e2e]">
                Reserve on WhatsApp
              </span>
              <div className="absolute inset-0 bg-[#f9f1de] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon size={36} className="text-[#f9f1de] cursor-pointer hover:text-[#e79c56] transition-colors duration-300" onClick={scrollToMenu} />
      </div>
    </section>;
};