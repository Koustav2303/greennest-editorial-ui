import React from 'react';
import { ArrowRight } from 'lucide-react';

const ArticleCard = ({ title, excerpt, image }) => {
  return (
    <div className="group relative min-w-[280px] md:min-w-[320px] lg:min-w-0 h-[140px] md:h-[160px] bg-[#F8F9F5] rounded-3xl overflow-hidden flex cursor-pointer snap-start transition-all duration-500 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#6B8E4E]/20 border border-transparent">
      
      {/* Left: Thumbnail Image */}
      <div className="relative w-[40%] h-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform z-0"
        />
        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 shadow-[inset_-10px_0_20px_-15px_rgba(0,0,0,0.1)] z-10 pointer-events-none"></div>
      </div>

      {/* Right: Typography Content */}
      <div className="w-[60%] p-4 md:p-5 flex flex-col justify-center">
        <h3 className="text-[#1a1f16] font-bold text-[13px] md:text-[15px] leading-tight mb-1.5 group-hover:text-[#4A6731] transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-[#6b7264] text-[11px] md:text-[12px] font-medium leading-relaxed mb-auto line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-1.5 text-[#4A6731] font-extrabold text-[11px] md:text-[12px] mt-2 transition-all duration-300 group-hover:gap-2.5">
          Read More 
          <ArrowRight size={14} strokeWidth={2.5} />
        </div>
      </div>

    </div>
  );
};

export default ArticleCard;