import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const PlantCard = ({ data, viewMode = 'grid' }) => {
  const isList = viewMode === 'list';

  return (
    <div 
      className={`group bg-[#F8F9F5] rounded-3xl p-4 md:p-5 flex relative transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 cursor-pointer border border-transparent hover:border-[#6B8E4E]/20 overflow-hidden
      ${isList ? 'flex-col sm:flex-row w-full gap-6' : 'flex-col h-full'}`}
    >
      
      {/* Top Badges (Absolute positioned for Grid, relative for List on mobile, absolute for List on desktop) */}
      <div className={`flex justify-between items-start z-10 
        ${isList ? 'absolute sm:relative sm:flex-col sm:justify-between sm:h-full top-4 left-4 right-4 sm:top-0 sm:left-0 sm:right-0 sm:order-last sm:items-end' : 'absolute top-5 left-5 right-5'}
      `}>
        {data.discount && (
          <span className="bg-[#FF4D4D] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            {data.discount}
          </span>
        )}
        <button className={`w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-red-500 hover:shadow-md transition-all ${!data.discount && !isList && 'ml-auto'} ${isList && 'sm:mt-auto'}`}>
          <Heart size={16} />
        </button>
      </div>

      {/* Image Container - Dynamically sizes based on view mode */}
      <div className={`relative flex items-center justify-center isolate
        ${isList ? 'h-40 sm:h-36 sm:w-36 md:h-44 md:w-44 shrink-0 rounded-2xl bg-white/40 mt-4 sm:mt-0' : 'h-44 md:h-48 w-full mb-4 mt-2'}
      `}>
        <div className="absolute w-24 h-24 bg-white/60 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700 z-0"></div>
        <img 
          src={data.image} 
          alt={data.title} 
          className="max-h-full w-auto object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500 z-10"
        />
      </div>

      {/* Details Container */}
      <div className={`flex flex-col ${isList ? 'justify-center flex-1' : 'mt-auto'}`}>
        <h3 className={`text-[#1a1f16] font-bold leading-tight group-hover:text-[#4A6731] transition-colors line-clamp-1 ${isList ? 'text-lg md:text-xl' : 'text-[15px]'}`}>
          {data.title}
        </h3>
        <p className="text-gray-500 text-[11px] md:text-xs font-medium mt-1 italic line-clamp-1">
          {data.subtitle}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex text-[#FABB05]">
            {[...Array(5)].map((_, i) => (
               <Star key={i} size={12} fill={i < Math.floor(data.rating) ? "#FABB05" : "none"} strokeWidth={i < Math.floor(data.rating) ? 0 : 2} className={i >= Math.floor(data.rating) ? "text-gray-300" : ""} />
            ))}
          </div>
          <span className="text-gray-500 text-[11px] md:text-xs font-bold">{data.rating} <span className="font-medium text-gray-400">({data.reviews})</span></span>
        </div>

        {/* List View Only: Extra description snippet */}
        {isList && (
          <p className="hidden md:block text-gray-500 text-sm mt-3 line-clamp-2 max-w-lg leading-relaxed">
            Beautiful, thriving botanical ready to elevate your indoor or outdoor space. Grown with care and delivered fresh to your door.
          </p>
        )}

        {/* Pricing & Add to Cart Row */}
        <div className={`flex items-center justify-between mt-4 ${isList ? 'md:mt-6 max-w-xs' : ''}`}>
          <div className="flex items-baseline gap-2">
            <span className="text-[#1a1f16] font-extrabold text-lg md:text-xl">{data.price}</span>
            {data.oldPrice && (
              <span className="text-gray-400 text-xs md:text-sm font-bold line-through">{data.oldPrice}</span>
            )}
          </div>
          
          <button className={`w-9 h-9 rounded-full bg-[#4A6731] flex items-center justify-center text-white hover:bg-[#3A5226] hover:scale-105 transition-all shadow-md ${isList ? 'sm:hidden' : ''}`}>
            <ShoppingCart size={16} />
          </button>
          
          {/* Enhanced button for list view desktop */}
          {isList && (
            <button className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-[#4A6731] text-white text-xs font-bold hover:bg-[#3A5226] transition-all shadow-md ml-auto">
              <ShoppingCart size={14} />
              Add to Cart
            </button>
          )}
        </div>
      </div>

    </div>
  );
};

export default PlantCard;