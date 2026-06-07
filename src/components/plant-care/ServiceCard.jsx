import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, image }) => {
  return (
    <div className="group relative min-w-[160px] md:min-w-[200px] h-32 md:h-40 rounded-2xl overflow-hidden cursor-pointer snap-start flex-shrink-0">
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
      
      <div className="relative z-20 h-full flex items-end justify-between p-3 md:p-4">
        <h4 className="text-white font-bold text-sm md:text-base leading-tight max-w-[70%] drop-shadow-md">
          {title}
        </h4>
        <button className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-black transform transition-transform duration-300 group-hover:bg-[#85B060] group-hover:text-white group-hover:-rotate-45 shadow-md">
          <ArrowRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;