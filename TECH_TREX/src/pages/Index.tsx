
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rounds from '@/components/Rounds';
import Countdown from '@/components/Countdown';
import PrizePool from '@/components/PrizePool';
import Coordinators from '@/components/Coordinators';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "TECH-TREX | NMIT ACM Club";
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="py-10 bg-charcoal/80">
        <div className="section-container">
          <Countdown />
        </div>
      </div>
      <About />
      <Timeline />
      <Rounds />
      <PrizePool />
      <Coordinators />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
