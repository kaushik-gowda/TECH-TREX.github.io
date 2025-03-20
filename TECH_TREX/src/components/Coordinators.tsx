
import React from 'react';
import { User, Phone } from 'lucide-react';

const Coordinators = () => {
  const coordinators = [
    {
      name: "Kaushik P",
      phone: "+91 7625067221",
      role: "Event Coordinator"
    },
    {
      name: "Disha R",
      phone: "+91 7795675617",
      role: "Event Coordinator"
    }
  ];

  return (
    <div className="py-16 bg-charcoal/50">
      <div className="section-container">
        <div className="text-center mb-12 opacity-0 reveal">
          <h2 className="section-subtitle">Contact</h2>
          <h3 className="section-title">Event <span className="text-tech-green">Coordinators</span></h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {coordinators.map((coordinator, index) => (
            <div 
              key={index} 
              className="glass-card p-6 opacity-0 reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-tech-green/10 mr-4">
                  <User size={24} className="text-tech-green" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{coordinator.name}</h4>
                  <p className="text-white/60 text-sm">{coordinator.role}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-tech-green/10 mr-4">
                  <Phone size={20} className="text-tech-green" />
                </div>
                <a 
                  href={`tel:${coordinator.phone.replace(/\s+/g, '')}`}
                  className="text-white hover:text-tech-green transition-colors"
                >
                  {coordinator.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coordinators;
