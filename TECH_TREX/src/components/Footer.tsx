
import React from 'react';
import { Github, Instagram, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="bg-charcoal py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold text-white">
            TECH<span className="text-tech-green">-TREX</span>
          </h2>
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-tech-green/10 text-tech-green hover:bg-tech-green/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <p className="text-white/60">
              TECH-TREX is a premier technical event organized by the NMIT ACM Student Chapter as part of Anaadyanta, challenging participants through multiple rounds of technical competitions.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/60 hover:text-tech-green transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-tech-green transition-colors">About</a>
              </li>
              <li>
                <a href="#rounds" className="text-white/60 hover:text-tech-green transition-colors">Rounds</a>
              </li>
              <li>
                <a href="#prizes" className="text-white/60 hover:text-tech-green transition-colors">Prizes</a>
              </li>
              <li>
                <a href="#faq" className="text-white/60 hover:text-tech-green transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-white/60 mb-4">
              Have questions about TECH-TREX? Reach out to us through social media or email.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/acm-nmit" className="p-2 text-white hover:text-tech-green transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/acm_nmit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="p-2 text-white hover:text-tech-green transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/acm-nmit/" className="p-2 text-white hover:text-tech-green transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 text-white hover:text-tech-green transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm">
            © 2025 NMIT ACM Student Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
