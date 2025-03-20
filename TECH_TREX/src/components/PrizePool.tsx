
import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Sparkles, Award } from 'lucide-react';

const PrizePool = () => {
  const prizes = [
    { 
      position: '1st', 
      amount: 2500, 
      displayAmount: 0,
      icon: <Trophy size={42} className="text-yellow-400" />,
      gradient: "from-yellow-400 via-yellow-300 to-yellow-200",
      glow: "yellow-400"
    },
    { 
      position: '2nd', 
      amount: 1500, 
      displayAmount: 0,
      icon: <Trophy size={36} className="text-gray-300" />,
      gradient: "from-gray-300 via-gray-200 to-gray-100",
      glow: "gray-300"
    },
    { 
      position: '3rd', 
      amount: 1000, 
      displayAmount: 0,
      icon: <Trophy size={32} className="text-amber-700" />,
      gradient: "from-amber-700 via-amber-600 to-amber-500",
      glow: "amber-700"
    },
  ];

  const [animatedPrizes, setAnimatedPrizes] = useState(prizes.map(prize => ({...prize, displayAmount: 0})));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Observer to start animation when the element is in viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    const prizeSection = sectionRef.current;
    if (prizeSection) {
      observer.observe(prizeSection);
    }

    return () => {
      if (prizeSection) {
        observer.unobserve(prizeSection);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Start the counting animation
    const duration = 2000; // Animation duration in ms
    const framesPerSecond = 60;
    const totalFrames = duration / 1000 * framesPerSecond;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      if (progress >= 1) {
        setAnimatedPrizes(prizes.map(prize => ({...prize, displayAmount: prize.amount})));
        clearInterval(timer);
        return;
      }

      // Easing function for smoother animation
      const easeOutQuart = (x: number) => 1 - Math.pow(1 - x, 4);
      const easedProgress = easeOutQuart(progress);

      setAnimatedPrizes(prizes.map(prize => ({
        ...prize,
        displayAmount: Math.round(easedProgress * prize.amount)
      })));
    }, 1000 / framesPerSecond);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div id="prize-pool-section" ref={sectionRef} className="py-16 bg-gradient-to-b from-charcoal/90 to-charcoal/70">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 reveal">
          <h2 className="section-subtitle flex items-center justify-center gap-2">
            <Sparkles size={18} className="text-yellow-400 animate-pulse" />
            Rewards
            <Sparkles size={18} className="text-yellow-400 animate-pulse" />
          </h2>
          <h3 className="section-title relative">
            Prize <span className="text-tech-green">Pool</span>
            <span className="absolute -right-8 top-0">
              <Award size={32} className="text-tech-green opacity-70" />
            </span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {animatedPrizes.map((prize, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500 opacity-0 reveal group`}
              style={{ 
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Particle effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -top-10 left-1/2 w-2 h-2 rounded-full bg-tech-green animate-float-slow"></div>
                <div className="absolute top-1/3 -right-5 w-3 h-3 rounded-full bg-tech-green/70 animate-float-medium"></div>
                <div className="absolute -bottom-5 left-1/3 w-2 h-2 rounded-full bg-tech-green/50 animate-float-fast"></div>
              </div>

              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Glowing effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-tech-green via-tech-green-dark to-tech-green rounded-xl opacity-20 blur-xl group-hover:opacity-40 group-hover:blur-2xl transition-all duration-500`}></div>
              
              <div className="relative glass-card p-10 flex flex-col items-center text-center border-t border-white/20">
                <div className="mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
                  {prize.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{prize.position} Place</h4>
                <div className="flex items-center justify-center text-tech-green animate-pulse">
                  <Sparkles size={18} className="mr-2" />
                </div>
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-green to-tech-green-dark">
                  ₹{prize.displayAmount.toLocaleString()}
                </p>
                
                {/* Extra visual element */}
                <div className="w-20 h-1 bg-gradient-to-r from-tech-green/0 via-tech-green/70 to-tech-green/0 rounded-full mt-4 group-hover:w-32 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(5px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(-7px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-5px) translateX(3px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        `}
      </style>
    </div>
  );
};

export default PrizePool;
