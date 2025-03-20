
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, FileText, UserPlus, Calendar, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    // Staggered animation on mount
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const info = infoRef.current;

    if (title) title.classList.add('animate-fade-in-up');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in-up');
    }, 300);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-in-up');
    }, 600);
    
    setTimeout(() => {
      if (info) info.classList.add('animate-fade-in-up');
    }, 900);

  }, []);

  const handleRegister = () => {
    // Here you would typically integrate with your registration system
    // For now, we'll just show an alert
    window.open("https://forms.gle/APCWYvZvW8MFZ9fc6", "_blank");
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(180deg, rgba(42,42,42,1) 0%, rgba(28,28,28,1) 100%)`,
      }}
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #4ADE80 1px, transparent 1px), linear-gradient(to bottom, #4ADE80 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Glowing sphere in background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-tech-green/20 blur-[100px] z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-tech-green/10 blur-[80px] z-0" />

      <div className="relative z-10 text-center px-6 max-w-5xl opacity-0" ref={titleRef}>
        <span className="inline-block text-sm md:text-base font-medium uppercase tracking-widest text-tech-green mb-4 py-1 px-3 border border-tech-green/20 rounded-full">
          NMIT ACM Student Chapter Presents
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
          TECH<span className="text-tech-green">-TREX</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto opacity-0" ref={subtitleRef}>
          Unleash your technical prowess in a three-round challenge at Anaadyanta 2025
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0" ref={ctaRef}>
          <Button 
            onClick={handleRegister}
            className="bg-tech-green hover:bg-tech-green/90 text-black font-semibold flex items-center gap-2 px-6 py-6 text-base rounded-lg shadow-lg shadow-tech-green/20 transition-all duration-300 transform hover:scale-105"
          >
            <UserPlus size={20} />
            Register Now
          </Button>
          <a href="#rounds" className="btn-primary">
            Explore Rounds
          </a>
          <a href="/ANAADYANTA.pdf" className="btn-outline flex items-center gap-2">
            <FileText size={18} />
            Download Brochure
          </a>
        </div>
        
        <div className="mt-12 px-4 py-6 glass-card opacity-0 hover-scale max-w-2xl mx-auto" ref={infoRef}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-tech-green" size={24} />
              <div className="text-left">
                <p className="text-xs text-tech-green font-semibold uppercase">Event Date</p>
                <p className="text-xl font-bold">April 4th, 2025</p>
              </div>
            </div>
            
            <div className="hidden md:block h-12 w-px bg-white/10"></div>
            
            <div className="flex items-center gap-3">
              <MapPin className="text-tech-green" size={24} />
              <div className="text-left">
                <p className="text-xs text-tech-green font-semibold uppercase">Venue</p>
                <p className="text-xl font-bold">Room No. 413, D Block</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-white/70 hover:text-tech-green transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
