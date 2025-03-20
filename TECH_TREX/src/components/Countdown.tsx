
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set the event date (April 4th, 2025)
  const eventDate = new Date("2025-04-04T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Event has started/passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="w-full max-w-3xl mx-auto glass-card rounded-xl p-6 md:p-8 border-2 border-tech-purple/20">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Sparkles className="text-tech-purple" size={20} />
        <h3 className="text-lg md:text-xl font-medium">Event Countdown</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="relative w-full aspect-square bg-tech-dark rounded-lg flex items-center justify-center border border-tech-purple/30 overflow-hidden">
              <div className="absolute inset-0 bg-tech-gradient opacity-10 animate-pulse-glow"></div>
              <span className="text-3xl md:text-5xl font-mono font-bold text-tech-green">
                {item.value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="mt-2 text-sm text-foreground/70">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
