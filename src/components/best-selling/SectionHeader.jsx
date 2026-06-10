import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Leaf } from 'lucide-react';

const SectionHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6 md:mb-8">
      <div className="flex items-center gap-1.5 md:gap-2">
        <h2 className="text-xl md:text-3xl font-bold text-[#1a1f16] tracking-tight">
          Best Selling
        </h2>
        <Leaf className="text-[#6B8E4E] w-5 h-5 md:w-6 md:h-6 rotate-12" fill="#6B8E4E" />
      </div>
      
      {/* REMOVED 'hidden md:flex' and replaced it with just 'flex'. 
          Also adjusted mobile padding/text-size to fit perfectly next to the title. */}
      <Link 
        to="/plants" 
        className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-5 md:py-2 border border-gray-200 rounded-full text-xs md:text-sm font-bold text-gray-700 hover:border-[#6B8E4E] hover:text-[#6B8E4E] transition-colors duration-300 group shadow-sm hover:shadow-md"
      >
        <span className="hidden sm:block">View All Plants</span>
        <span className="sm:hidden">View All</span>
        <ChevronRight size={14} className="text-gray-400 group-hover:text-[#6B8E4E] transition-colors md:w-4 md:h-4" />
      </Link>
    </div>
  );
};

export default SectionHeader;