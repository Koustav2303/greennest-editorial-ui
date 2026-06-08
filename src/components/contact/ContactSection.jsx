import React from 'react';
import { Leaf } from 'lucide-react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative z-10" id="contact">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1f16] tracking-tight">
            We'd Love to Hear From You
          </h2>
          <Leaf className="text-[#6B8E4E] w-6 h-6 md:w-8 md:h-8 -rotate-12" fill="#6B8E4E" />
        </div>

        {/* Master Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          
          {/* Left Column: Info & Visual (Spans 5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-5 md:gap-6">
            
            {/* Soft Green Contact Info Block */}
            <div className="flex-1">
              <ContactInfo />
            </div>

            {/* Cinematic Image Block to complete the Bento look */}
            <div className="relative h-[200px] md:h-[240px] rounded-[2rem] overflow-hidden group cursor-pointer border border-transparent hover:border-[#6B8E4E]/30 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop" 
                alt="GreenNest Storefront" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 mb-2 inline-block">
                  Visit Us
                </span>
                <h4 className="text-white font-bold text-xl drop-shadow-md">
                  Step into our sanctuary.
                </h4>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form (Spans 7 cols on desktop) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;