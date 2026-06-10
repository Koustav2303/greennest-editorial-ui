import React from 'react';
import { Leaf, MessageCircle, ClipboardCheck, Sprout, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    num: "01",
    title: "Consultation",
    desc: "We understand your needs and space to tailor the perfect approach.",
    icon: MessageCircle
  },
  {
    id: 2,
    num: "02",
    title: "Planning",
    desc: "Our experts create a custom plan and design specifically for you.",
    icon: ClipboardCheck
  },
  {
    id: 3,
    num: "03",
    title: "Execution",
    desc: "We bring the plan to life with care, precision, and high-quality plants.",
    icon: Sprout
  },
  {
    id: 4,
    num: "04",
    title: "Maintenance",
    desc: "Ongoing support and guidance for healthy, thriving green spaces.",
    icon: ShieldCheck
  }
];

const ServiceProcess = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden rounded-[2.5rem] bg-[#FAFBFA] border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] mt-8">
      
      {/* Decorative Edge Plants (Replace src with your local transparent PNGs if available) */}
      <img 
        src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=400&auto=format&fit=crop&bg=transparent" 
        alt="" 
        className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 lg:w-64 opacity-20 mix-blend-multiply pointer-events-none hidden md:block"
        style={{ filter: 'drop-shadow(0 20px 10px rgba(0,0,0,0.1))' }}
      />
      <img 
        src="https://images.unsplash.com/photo-1597055181300-e3623ddf11a4?q=80&w=400&auto=format&fit=crop&bg=transparent" 
        alt="" 
        className="absolute -right-16 top-1/2 -translate-y-1/2 w-48 lg:w-64 opacity-20 mix-blend-multiply pointer-events-none hidden md:block"
        style={{ filter: 'drop-shadow(0 20px 10px rgba(0,0,0,0.1))' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="text-[#4A6731] w-6 h-6 rotate-12" fill="#4A6731" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1f16] tracking-tight">
              Our Process
            </h2>
          </div>
          <p className="text-gray-500 font-medium text-sm md:text-base">
            Simple steps to a greener space
          </p>
        </div>

        {/* Stepper Timeline Container */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative">
          
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center md:items-start flex-1 group">
              
              {/* Icon & Number Row */}
              <div className="flex items-center gap-3 md:gap-4 bg-[#FAFBFA] pr-4 z-10 relative">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#4A6731] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <step.icon size={24} strokeWidth={2} />
                </div>
                <span className="text-[#4A6731] font-black text-lg md:text-xl tracking-wider">
                  {step.num}
                </span>
              </div>

              {/* Dashed Connecting Line (Visible on Desktop only) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-7 md:top-8 left-[110px] lg:left-[130px] w-[calc(100%-90px)] lg:w-[calc(100%-100px)] border-t-[2px] border-dashed border-[#85B060]/40 z-0"></div>
              )}

              {/* Text Content */}
              <div className="mt-6 text-center md:text-left px-4 md:px-0">
                <h3 className="text-lg md:text-xl font-extrabold text-[#1a1f16] mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;