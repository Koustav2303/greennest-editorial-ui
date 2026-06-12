import React from 'react';
import { Sprout, ShieldCheck, Truck } from 'lucide-react';
import topBannerImg from '../../assets/plants-page/top-banner.jpg';

const PlantsHero = () => {
  return (
    // CHANGED: Removed fixed height, added min-height, and changed flex-alignment so we can use explicit padding
    <div className="relative w-full min-h-[320px] md:min-h-[380px] flex flex-col justify-center overflow-hidden">
      
      {/* Full Bleed Background Image & Cinematic Overlay */}
      <img 
        src={topBannerImg} 
        alt="All Plants Catalog" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Heavy dark gradient on the left for text, fading out to the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1508]/90 via-[#0a1508]/60 to-transparent z-10"></div>

      {/* CHANGED: Added pt-28 md:pt-32 and pb-10 to push the content safely below the floating navbar */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-28 pb-10 md:pt-32 md:pb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left: Titles */}
        <div className="max-w-xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-3 drop-shadow-lg">
            All Plants
          </h1>
          <p className="text-white/90 text-[15px] md:text-base font-medium leading-relaxed max-w-sm drop-shadow-md">
            Explore our wide collection of premium plants for every space and lifestyle.
          </p>
        </div>

        {/* Right: Unified Glassmorphic Trust Indicators */}
        <div className="hidden lg:flex items-center bg-[#0a1508]/30 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          
          {/* Item 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
              <Sprout className="text-white" size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base leading-none mb-1">500+</span>
              <span className="text-white/70 text-[11px] font-medium tracking-wide">Plant Varieties</span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] h-10 bg-white/15 mx-6"></div>

          {/* Item 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
              <ShieldCheck className="text-white" size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base leading-none mb-1">100%</span>
              <span className="text-white/70 text-[11px] font-medium tracking-wide">Healthy Plants</span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] h-10 bg-white/15 mx-6"></div>

          {/* Item 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
              <Truck className="text-white" size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base leading-none mb-1">Fast Delivery</span>
              <span className="text-white/70 text-[11px] font-medium tracking-wide">Across India</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PlantsHero;