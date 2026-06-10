import React from 'react';
import { Link } from 'react-router-dom'; 
import { ShieldCheck, Award, ThumbsUp, ArrowLeft } from 'lucide-react'; 
import bannerBg from '../../assets/service-page/banner1-bg.jpg'; 

const ServicesHero = () => {
  return (
    // 1. Reduced min-heights from 550px/650px down to 450px/500px
    <div className="relative w-full min-h-[450px] lg:min-h-[500px] isolate overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem]">
      
      {/* Absolute Background Image with Cinematic Gradient Overlay */}
      <img 
        src={bannerBg} 
        alt="Plant Care Services" 
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1508]/95 via-[#0a1508]/80 to-transparent z-10"></div>

      {/* 2. Tightened internal padding (pt-28 pb-10 instead of pt-40 pb-24) */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-28 pb-10 md:pt-32 md:pb-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 h-full">
        
        {/* Left Side: Typography & Trust Badges */}
        <div className="flex flex-col max-w-2xl w-full mt-2 md:mt-0">
          
          {/* Back to Home Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#85B060] font-bold text-xs md:text-sm tracking-widest uppercase mb-6 md:mb-8 transition-colors group w-fit"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#85B060]/50 flex items-center justify-center backdrop-blur-sm transition-colors">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Home
          </Link>

          {/* 3. Tightened bottom margins (mb-4 instead of mb-6) to pack the text closer */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.1] mb-4 drop-shadow-lg">
            Our Plant Care <br />
            <span className="text-[#85B060]">Services</span>
          </h1>
          <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed max-w-md mb-8 drop-shadow-md">
            From consultation to maintenance, we provide end-to-end plant care solutions for homes, offices, and outdoor spaces.
          </p>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap items-center gap-5 md:gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#85B060]/20 flex items-center justify-center backdrop-blur-sm border border-[#85B060]/30">
                <Award size={20} className="text-[#85B060]" />
              </div>
              <span className="text-white font-bold text-xs md:text-sm leading-tight">Expert<br/>Team</span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#85B060]/20 flex items-center justify-center backdrop-blur-sm border border-[#85B060]/30">
                <ShieldCheck size={20} className="text-[#85B060]" />
              </div>
              <span className="text-white font-bold text-xs md:text-sm leading-tight">Quality<br/>Service</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#85B060]/20 flex items-center justify-center backdrop-blur-sm border border-[#85B060]/30">
                <ThumbsUp size={20} className="text-[#85B060]" />
              </div>
              <span className="text-white font-bold text-xs md:text-sm leading-tight">Satisfaction<br/>Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Right Side: Floating Lead Generation Card */}
        {/* Removed lg:translate-y-8 to keep the card visually centered in the newly shortened height */}
        <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#EAF0E3] rounded-2xl flex items-center justify-center mb-5 md:mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#4A6731]">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 12H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h3 className="text-xl md:text-2xl font-extrabold text-[#1a1f16] mb-2 md:mb-3 leading-tight">
            Need Help Choosing <br />a Service?
          </h3>
          <p className="text-[#5a6054] text-xs md:text-sm font-medium mb-6 md:mb-8 leading-relaxed">
            Our plant experts are here to help you! Schedule a quick call to assess your space.
          </p>
          
          <button className="w-full bg-[#4A6731] hover:bg-[#3A5226] text-white font-bold py-3 md:py-4 px-6 rounded-full transition-all shadow-lg hover:shadow-xl mb-5 md:mb-6 text-sm md:text-base">
            Talk to Expert
          </button>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex -space-x-2 md:-space-x-3">
              <img className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="Customer" />
              <img className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="Customer" />
              <img className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="Customer" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] md:text-xs font-bold text-gray-500">+</div>
            </div>
            <span className="text-[#1a1f16] font-bold text-[11px] md:text-xs">10K+ Happy Customers</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesHero;