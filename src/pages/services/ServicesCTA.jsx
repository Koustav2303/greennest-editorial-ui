import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import banner3Bg from '../../assets/service-page/banner3.jpg';

const ServicesCTA = () => {
  const features = [
    "Free Space Consultation",
    "Zero Commitment Required",
    "Expert Botanical Guidance"
  ];

  return (
    // REDUCED: min-h-[350px] md:min-h-[400px] -> min-h-[280px] md:min-h-[320px]
    <section className="relative w-full min-h-[280px] md:min-h-[320px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group shadow-2xl isolate flex items-center">
      
      {/* 1. Kinetic Background Image */}
      <img 
        src={banner3Bg} 
        alt="Lush leaves" 
        className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] z-0"
      />
      
      {/* 2. Deep Cinematic Overlay with a subtle animated radial glow */}
      <div className="absolute inset-0 bg-[#0a1508]/80 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-700 z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#85B060]/30 rounded-full blur-[100px] -translate-y-1/2 group-hover:translate-x-10 transition-transform duration-1000 pointer-events-none z-10"></div>

      {/* REDUCED PADDING & GAPS */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-10 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
        
        {/* Left Side: Editorial Typography & Glassmorphic Pills */}
        <div className="flex flex-col w-full lg:w-3/5 text-center lg:text-left items-center lg:items-start">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4 shadow-sm">
            <Sparkles size={14} className="text-[#85B060]" />
            <span className="text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-widest">Transform Your Space</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4 drop-shadow-xl">
            Ready to Get <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#85B060] to-[#b3d692]">Started?</span>
          </h2>
          
          <p className="text-white/70 font-medium text-sm md:text-base mb-6 max-w-md leading-relaxed">
            Partner with our architects to design, install, and maintain a living ecosystem tailored exactly to your lifestyle.
          </p>

          {/* Frosted Glass Feature Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/5 border border-white/10 hover:border-[#85B060]/50 hover:bg-white/10 rounded-xl backdrop-blur-md transition-all duration-300 cursor-default"
              >
                <CheckCircle2 size={14} className="text-[#85B060]" />
                <span className="text-white font-medium text-[11px] md:text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: The Interactive Action Card */}
        {/* REDUCED PADDING & TRANSLATION FOR SLIMMER FIT */}
        <div className="w-full sm:w-[380px] bg-white/10 border border-white/20 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] flex flex-col items-center text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transform lg:translate-y-2 group-hover:-translate-y-0 transition-transform duration-700 ease-out">
          
          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Session</h3>
          <p className="text-white/60 text-xs md:text-sm font-medium mb-6">Secure your preferred time with our senior landscape architects.</p>
          
          {/* High-End Button with sweeping shine effect */}
          <button className="relative overflow-hidden w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#85B060] text-white rounded-xl font-bold text-sm md:text-base shadow-[0_0_40px_-10px_#85B060] transition-all group/btn hover:scale-105 hover:shadow-[0_0_60px_-15px_#85B060]">
            <span className="relative z-10 flex items-center gap-2">
              Claim Free Consultation <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </span>
            {/* The sweeping light reflection */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[1200ms] ease-in-out z-0"></div>
          </button>
          
        </div>

      </div>
    </section>
  );
};

export default ServicesCTA;