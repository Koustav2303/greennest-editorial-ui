import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 z-30 relative">
      <button className="flex items-center gap-2 bg-gradient-to-r from-[#6B8E4E] via-[#85B060] to-[#6B8E4E] bg-[length:200%_auto] hover:bg-right text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-500 shadow-[0_8px_20px_rgba(107,142,78,0.4)] hover:shadow-[0_8px_25px_rgba(107,142,78,0.6)] hover:-translate-y-1">
        Shop Now <ArrowRight size={18} strokeWidth={2.5} />
      </button>
      
      <button className="bg-white text-green-950 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:-translate-y-1">
        Explore Collection
      </button>
    </div>
  );
};

export default HeroButtons;