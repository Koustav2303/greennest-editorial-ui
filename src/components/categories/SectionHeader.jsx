import React from 'react';
import { ChevronRight, Leaf } from 'lucide-react';

const SectionHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1f16] tracking-tight">
            Featured Categories
          </h2>
          <Leaf className="text-[#6B8E4E] w-6 h-6 -rotate-12" fill="#6B8E4E" />
        </div>
        <p className="text-gray-500 text-sm font-medium">
          Find the perfect plants for your space
        </p>
      </div>
      
      <button className="hidden md:flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#6B8E4E] hover:text-[#6B8E4E] transition-colors duration-300 group">
        View All Categories
        <ChevronRight size={16} className="text-gray-400 group-hover:text-[#6B8E4E] transition-colors" />
      </button>
    </div>
  );
};

export default SectionHeader;