import React from 'react';
import FloatingLeaves from './hero/FloatingLeaves';
import HeroContent from './hero/HeroContent';
import HeroButtons from './hero/HeroButtons';
import TrustBanner from './hero/TrustBanner';
import heroBg from '../assets/hero/hero-background.jpeg';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[100svh] md:min-h-screen flex items-center overflow-hidden bg-neutral-900">
      
      {/* Background Image with Parallax feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Greenhouse Background" 
          className="w-full h-full object-cover object-center transform scale-105"
        />
        {/* Gradient overlays for readability and mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white/5"></div>
      </div>

      {/* Floating Leaves Layer */}
      <FloatingLeaves />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-center h-full">
        <HeroContent />
        <HeroButtons />
      </div>

      {/* Glassmorphism Trust Banner */}
      <TrustBanner />

      {/* Bottom Wave SVG Transition */}
      <div className="absolute bottom-0 left-0 w-full z-20 leading-none">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-xl"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,106.7C960,107,1056,85,1152,69.3C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="#ffffff"
          />
        </svg>
      </div>

    </div>
  );
};

export default Hero;