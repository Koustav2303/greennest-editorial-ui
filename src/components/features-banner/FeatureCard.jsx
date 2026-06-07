import React from 'react';

const FeatureCard = ({ icon, title, subtitle, isLucide }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-[#F4F7F2] rounded-2xl transition-all duration-300 hover:bg-[#EAF0E3] hover:-translate-y-1 hover:shadow-sm group cursor-default">
      
      {/* Icon Wrapper with a slight bounce on hover */}
      <div className="w-12 h-12 md:w-16 md:h-16 mb-3 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 ease-out">
        {isLucide ? (
          // Renders the Lucide icon fallback if no image is provided
          <div className="text-[#5c803d]">
            {icon}
          </div>
        ) : (
          // Renders your exact PNG assets
          <img 
            src={icon} 
            alt={title} 
            className="w-full h-full object-contain drop-shadow-sm"
          />
        )}
      </div>
      
      {/* Text Content */}
      <h4 className="text-[#1a1f16] font-extrabold text-sm md:text-base text-center leading-tight">
        {title}
      </h4>
      <p className="text-gray-500 text-[11px] md:text-xs text-center mt-1 font-semibold tracking-wide">
        {subtitle}
      </p>
      
    </div>
  );
};

export default FeatureCard;