import React from 'react';
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqItems = [
    {
      question: "Who can participate in TECH-TREX?",
      answer: "TECH-TREX is open to all college students. Participants can form teams of 2-3 members from any department or college."
    },
    {
      question: "How do I register for the event?",
      answer: "Registration details will be announced soon. Keep an eye on our social media channels and website for updates on the registration process."
    },
    {
      question: "What skills are required for participating?",
      answer: "Participants should have basic knowledge of programming, problem-solving abilities, and teamwork skills. Specific requirements for each round will be explained before the competition."
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, there is a nominal registration fee per team. The exact amount will be announced during registration."
    },
    {
      question: "What should I bring on the day of the event?",
      answer: "Participants should bring their college ID, a laptop with necessary software installed, and any specific requirements that will be communicated before the event."
    }
  ];

  return (
    <div id="faq" className="py-16 bg-charcoal">
      <div className="section-container">
        <div className="text-center mb-12 opacity-0 reveal">
          <h2 className="section-subtitle">Questions</h2>
          <h3 className="section-title">Frequently Asked <span className="text-tech-green">Questions</span></h3>
        </div>
        
        <div className="max-w-3xl mx-auto opacity-0 reveal">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card overflow-hidden border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-tech-green hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-white/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
