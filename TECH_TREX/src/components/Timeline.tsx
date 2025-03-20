
import React, { useEffect } from 'react';
import { Calendar, Clock, Flag, Trophy } from 'lucide-react';

const Timeline = () => {
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
    
    const elements = document.querySelectorAll('.reveal-timeline');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const timelineEvents = [
    {
      icon: <Calendar className="text-tech-green" size={24} />,
      title: "Registration Opens",
      date: "March 1, 2025",
      time: "09:00 AM",
      description: "Registration opens for all participants. Form your teams of 2-3 members."
    },
    {
      icon: <Flag className="text-tech-green" size={24} />,
      title: "Registration Deadline",
      date: "March 30, 2025",
      time: "11:59 PM",
      description: "Last date to register for the event. No late registrations will be accepted."
    },
    {
      icon: <Clock className="text-tech-green" size={24} />,
      title: "Round 1: Dot-Dash Decipher",
      date: "April 4, 2025",
      time: "10:00 AM - 11:30 AM",
      description: "Teams race against time to decode hidden messages."
    },
    {
      icon: <Clock className="text-tech-green" size={24} />,
      title: "Round 2: InvisiSketch",
      date: "April 4, 2025",
      time: "01:00 PM - 02:30 PM",
      description: "One teammate sketches, the other guesses within time limits."
    },
    {
      icon: <Clock className="text-tech-green" size={24} />,
      title: "Round 3: Promptopia",
      date: "April 4, 2025",
      time: "03:30 PM - 05:00 PM",
      description: "Teams use AI-generated prompts to solve given tasks."
    },
    {
      icon: <Trophy className="text-tech-green" size={24} />,
      title: "Results & Prize Distribution",
      date: "April 4, 2025",
      time: "06:00 PM",
      description: "Winners announcement and prize distribution ceremony."
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-charcoal">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 reveal-timeline">
          <h2 className="section-subtitle">Event Schedule</h2>
          <h3 className="section-title">Event <span className="text-tech-green">Timeline</span></h3>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Mark your calendars for these important dates and times
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto mt-20">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tech-green/20 z-0 rounded-full"></div>
          
          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`relative z-10 flex items-start gap-8 mb-16 opacity-0 reveal-timeline ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-tech-green z-20 shadow-glow"></div>
              
              {/* Content */}
              <div className={`w-full md:w-[calc(50%-2rem)] glass-card p-6 hover-scale ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}>
                <div className={`flex items-center gap-3 mb-3 ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}>
                  <div className="p-2 rounded-lg bg-tech-green/10">
                    {event.icon}
                  </div>
                  <h4 className="text-xl font-bold">{event.title}</h4>
                </div>
                
                <div className={`flex items-center gap-4 mb-3 text-tech-green ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}>
                  <span className="text-sm font-medium">{event.date}</span>
                  <span className="w-1 h-1 rounded-full bg-tech-green"></span>
                  <span className="text-sm font-medium">{event.time}</span>
                </div>
                
                <p className="text-white/70">{event.description}</p>
              </div>
              
              {/* Empty space for the other side on mobile */}
              <div className="hidden md:block w-full md:w-[calc(50%-2rem)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
