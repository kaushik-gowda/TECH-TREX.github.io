
import React, { useEffect } from 'react';
import { Lightbulb, Code, Trophy } from 'lucide-react';

const Rounds = () => {
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
    
    const elements = document.querySelectorAll('.reveal-round');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const rounds = [
    {
      number: "01",
      title: "Dot-Dash Decipher",
      icon: <Lightbulb size={28} className="text-tech-green" />,
      description: "Teams race against time to decode hidden messages.",
      rules: [
        "Each team will receive a set of encoded Morse code sequences.",
        "Teams must use the provided reference list to decode the word.",
        "Answers must be submitted within the time limit; late submissions wont be considered.",
        "The top teams with the fastest and most accurate answers will proceed to the next round."
      ]
    },
    {
      number: "02",
      title: "InvisiSketch",
      icon: <Code size={28} className="text-tech-green" />,
      description: "A game where One teammate unleashes their inner Picasso on Skribbl, while the other scrambles to decode the masterpiece within the time limit.",
      rules: [
        "One participant will be shown a tech-related word and must sketch it on Skribbl without using letters or numbers.",
        "The second participant must guess the correct image based on the virtual sketch.",
        "Each team will have a fixed time to complete their turn.",
        "The number of correct guesses within the time limit will determine qualification for the next round."
      ]
    },
    {
      number: "03",
      title: "Promptopia",
      icon: <Trophy size={28} className="text-tech-green" />,
      description: "Teams tackle a given task using only AI-generated prompts—no coding, just smart and strategic prompting!",
      rules: [
        "A specific task or problem statement will be given at the start of the round.",
        "Teams can only use text-based prompts to generate results—no manual coding, editing, or external software manipulation allowed.",
        "Participants must use the AI tools provided (e.g., ChatGPT, GitHub Copilot, DALL·E, or similar).",
        "Judged by industry professionals",
        "Each round will have a fixed time limit to create and refine their outputs."
      ]
    }
  ];

  return (
    <section 
      id="rounds" 
      className="py-20 bg-gradient-to-b from-charcoal to-charcoal/90"
    >
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 reveal-round">
          <h2 className="section-subtitle">Challenge Yourself</h2>
          <h3 className="section-title">Event <span className="text-tech-green">Rounds</span></h3>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            TECH-TREX features three challenging rounds that will test different aspects of your technical knowledge and skills.
          </p>
        </div>
        
        <div className="space-y-12 mt-16">
          {rounds.map((round, index) => (
            <div 
              key={index} 
              className="glass-card p-8 opacity-0 reveal-round relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Round number background */}
              <div className="absolute -right-10 -top-10 text-[180px] font-bold text-tech-green/5 select-none pointer-events-none">
                {round.number}
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-lg bg-tech-green/10 mb-4 md:mb-0">
                    {round.icon}
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">
                      Round {round.number}: {round.title}
                    </h4>
                    <p className="text-white/70 mb-6 max-w-2xl">
                      {round.description}
                    </p>
                    
                    <div className="bg-charcoal/50 p-6 rounded-lg border border-white/5">
                      <h5 className="text-lg font-semibold text-tech-green mb-4">Rules</h5>
                      <ul className="space-y-3">
                        {round.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start gap-2">
                            <span className="text-tech-green mt-1">•</span>
                            <span className="text-white/80">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rounds;
