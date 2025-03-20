
import React, { useEffect, useRef } from 'react';
import { Zap, Award, Users } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: <Zap size={24} className="text-tech-green" />,
      title: "Technical Excellence",
      description: "Test your technical knowledge and problem-solving skills through challenging rounds designed to push your limits."
    },
    {
      icon: <Users size={24} className="text-tech-green" />,
      title: "Team Collaboration",
      description: "Form teams and work together to overcome complex challenges and showcase your collective expertise."
    },
    {
      icon: <Award size={24} className="text-tech-green" />,
      title: "Recognition & Rewards",
      description: "Win exciting prizes and gain recognition among peers and industry professionals for your achievements."
    }
  ];

  return (
    <section id="about" className="py-20 bg-charcoal" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 reveal">
          <h2 className="section-subtitle">About The Event</h2>
          <h3 className="section-title">What is <span className="text-tech-green">TECH-TREX</span>?</h3>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            TECH-TREX is the Premier technical event of Anaadyanta, hosted by the NMIT ACM Student Chapter. This multi-round competition challenges participants to demonstrate their technical knowledge, problem-solving abilities, and teamwork skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 opacity-0 reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4 p-3 inline-block rounded-lg bg-tech-green/10">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center opacity-0 reveal">
          <p className="text-tech-green font-semibold mb-4">Don't miss this opportunity</p>
          <a href="#rounds" className="btn-primary">View Event Rounds</a>
        </div>
      </div>
    </section>
  );
};

export default About;
