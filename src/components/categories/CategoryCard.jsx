import React from 'react';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ title, count, description, image, className = "" }) => {
  return (
    <div className={`group relative overflow-hidden rounded-[2rem] cursor-pointer isolate ${className}`}>
      
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform z-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-all duration-500 group-hover:from-black group-hover:via-black/60 z-10" />

      <div className="relative z-20 h-full flex flex-col justify-between p-5 md:p-7">
        
        <div className="flex justify-end">
          <button className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 bg-black/20 backdrop-blur-md text-white transition-all duration-500 group-hover:bg-[#85B060] group-hover:text-white group-hover:border-[#85B060] shadow-lg overflow-hidden relative">
            <ArrowRight size={16} className="transform transition-transform duration-500 group-hover:-rotate-45" />
          </button>
        </div>
        
        <div className="transform transition-transform duration-500 group-hover:-translate-y-1 mt-auto">
          <h3 className="text-white text-lg md:text-2xl font-bold tracking-wide drop-shadow-md">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 mt-1 mb-2">
            <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm">
              {count}
            </span>
          </div>

          {/* Adjusted text sizing and line-clamp to elegantly handle full paragraphs */}
          <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-3 lg:line-clamp-4 font-medium transition-colors duration-500 group-hover:text-white/95">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default CategoryCard;