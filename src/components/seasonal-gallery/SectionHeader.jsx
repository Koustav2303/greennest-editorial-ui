import React from 'react';
import { ChevronRight, Leaf } from 'lucide-react';

const SectionHeader = ({ title, buttonText }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1f16] tracking-tight">
          {title}
        </h2>
        <Leaf className="text-[#6B8E4E] w-6 h-6 rotate-12" fill="#6B8E4E" />
      </div>
      
      {buttonText && (
        <button className="hidden md:flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#6B8E4E] hover:text-[#6B8E4E] transition-colors duration-300 group shadow-sm hover:shadow-md">
          {buttonText}
          <ChevronRight size={16} className="text-gray-400 group-hover:text-[#6B8E4E] transition-colors" />
        </button>
      )}
    </div>
  );
};

export default SectionHeader;