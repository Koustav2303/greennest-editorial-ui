import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Leaf } from 'lucide-react';

// Added subtitle and buttonLink to the props
const SectionHeader = ({ title, subtitle, buttonText, buttonLink = "#" }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16">
      
      {/* Text Content */}
      <div className="flex flex-col items-start gap-3">
        {/* Optional Premium Eyebrow Subtitle */}
        {subtitle && (
          <span className="text-[#85B060] font-bold tracking-[0.2em] uppercase text-xs flex items-center gap-2">
            <Leaf size={14} className="text-[#85B060]" />
            {subtitle}
          </span>
        )}
        
        <h2 className="text-3xl md:text-5xl font-black text-[#1a1f16] tracking-tight m-0">
          {title}
        </h2>
      </div>
      
      {/* Action Button: Now uses <Link> for SPA routing */}
      {buttonText && (
        <Link 
          to={buttonLink}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-[#1a1f16] hover:border-[#85B060] hover:text-[#85B060] hover:bg-[#F8F9F5] transition-all duration-300 group shadow-sm hover:shadow-md w-fit shrink-0"
        >
          {buttonText}
          <ChevronRight 
            size={16} 
            className="text-gray-400 group-hover:text-[#85B060] group-hover:translate-x-1 transition-all duration-300" 
          />
        </Link>
      )}
      
    </div>
  );
};

export default SectionHeader;