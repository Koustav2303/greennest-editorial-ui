import React from 'react';
import { Star, Leaf } from 'lucide-react';

// 1. The Large Dark Green Card (Left Side)
export const BentoLargeCard = ({ image }) => (
  <div className="relative overflow-hidden rounded-[2rem] col-span-1 md:col-span-2 lg:col-span-1 row-span-2 h-[300px] lg:h-full group">
    <img 
      src={image} 
      alt="Growing Together" 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#152c10]/90 to-[#1a3814]/80 z-10" />
    
    <div className="relative z-20 h-full flex flex-col justify-between p-6 md:p-8">
      <div>
        <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-3">
          Growing Together <br /> Since 2015
        </h3>
        <p className="text-white/70 text-sm md:text-base font-medium max-w-[80%]">
          Creating green spaces and happy homes across the nation.
        </p>
      </div>
      <button className="self-start px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-semibold hover:bg-white hover:text-[#152c10] transition-colors duration-300">
        Learn More
      </button>
    </div>
  </div>
);

// 2. The Light Green Stat Cards (Middle Section)
export const BentoStatCard = ({ value, label, children }) => (
  <div className="relative bg-[#F4F8F1] rounded-3xl p-5 md:p-6 flex flex-col justify-center overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
    {/* Decorative abstract leaf vector in the background */}
    <Leaf className="absolute -bottom-4 -right-4 w-24 h-24 text-[#E2EDD8] -rotate-12 opacity-50 transform group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
    
    <div className="relative z-10">
      <h4 className="text-[#1a1f16] text-3xl font-extrabold tracking-tight mb-1">{value}</h4>
      <p className="text-gray-600 text-xs md:text-sm font-bold mb-3">{label}</p>
      {children}
    </div>
  </div>
);

// 3. The Dark Custom Image Cards (Right Section)
export const BentoDarkCard = ({ value, label, image, children, isEarth }) => (
  <div className="relative bg-[#324f24] rounded-3xl p-5 md:p-6 flex flex-col justify-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group h-full min-h-[140px]">
    {image && (
      <img 
        src={image} 
        alt={label} 
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0 ${isEarth ? 'opacity-90' : 'opacity-40'}`}
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
    
    <div className="relative z-20">
      <h4 className="text-white text-3xl font-extrabold tracking-tight mb-1">{value}</h4>
      <p className="text-white/90 text-xs md:text-sm font-bold mb-2">{label}</p>
      {children}
    </div>
  </div>
);