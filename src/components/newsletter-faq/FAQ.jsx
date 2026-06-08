import React, { useState } from 'react';
import { ChevronDown, Leaf } from 'lucide-react';

// Reusable miniature accordion component
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className={`bg-white border rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
        isOpen ? 'border-[#85B060]/50 shadow-[0_4px_20px_-10px_rgba(107,142,78,0.2)]' : 'border-gray-200 hover:border-[#85B060]/30'
      }`}
      onClick={onClick}
    >
      <div className="px-5 py-4 md:py-5 flex items-center justify-between gap-4">
        <h4 className={`text-sm md:text-[15px] font-bold transition-colors duration-300 ${isOpen ? 'text-[#4A6731]' : 'text-[#1a1f16]'}`}>
          {question}
        </h4>
        <ChevronDown 
          size={20} 
          className={`text-gray-400 transition-transform duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] flex-shrink-0 ${isOpen ? 'rotate-180 text-[#4A6731]' : ''}`} 
        />
      </div>
      
      {/* 60FPS CSS Grid Height Transition */}
      <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed font-medium">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "How do I track my order?", answer: "Once your order is shipped, you will receive an email with a tracking link. You can also track it directly from your account dashboard under 'Order History'." },
    { question: "How do I care for my new plant?", answer: "Every plant comes with a specialized care card detailing light, water, and soil requirements. You can also access our detailed digital care guides in the 'Tips & Guides' section." },
    { question: "What if my plant arrives damaged?", answer: "We guarantee healthy delivery! If your plant arrives damaged, take a photo and contact us within 48 hours. We will send a free replacement immediately." },
    { question: "What is your return policy?", answer: "Due to the perishable nature of plants, we do not accept returns. However, we offer a 14-day guarantee. If your plant declines within 14 days despite proper care, we will replace it." },
    { question: "Do you deliver in my area?", answer: "We currently deliver to over 500+ cities across India. You can enter your pincode on any product page to verify delivery availability." },
    { question: "Do you provide plant care support?", answer: "Yes! Our plant experts are available Monday to Friday to answer any questions. Just reach out via our contact form or chat widget." }
  ];

  return (
    <section className="py-12 md:py-20 bg-white relative z-10" id="faq">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative">
        
        {/* Left-aligned Decorative Aloe Image (Desktop Only) */}
        <div className="hidden xl:block absolute left-0 bottom-0 w-[280px] pointer-events-none z-0 translate-y-10">
          <img 
            src="https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fHww" 
            alt="Decorative Plant" 
            className="w-full h-auto object-contain [mask-image:linear-gradient(to_top,black_60%,transparent)] opacity-90"
          />
        </div>

        <div className="max-w-[1000px] mx-auto relative z-10 xl:ml-[300px]">
          
          {/* Section Header */}
          <div className="flex items-center justify-center xl:justify-start gap-2 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1f16] tracking-tight">
              Frequently Asked Questions
            </h2>
            <Leaf className="text-[#6B8E4E] w-6 h-6 rotate-12" fill="#6B8E4E" />
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
            
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {faqs.slice(0, 3).map((faq, index) => (
                <FaqItem 
                  key={index} 
                  question={faq.question} 
                  answer={faq.answer} 
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {faqs.slice(3, 6).map((faq, index) => {
                const actualIndex = index + 3;
                return (
                  <FaqItem 
                    key={actualIndex} 
                    question={faq.question} 
                    answer={faq.answer} 
                    isOpen={openIndex === actualIndex}
                    onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                  />
                )
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;