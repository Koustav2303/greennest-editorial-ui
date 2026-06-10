import React from 'react';
import { Heart, ShoppingCart, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CollectionCard = ({ data }) => {
  return (
    <div className="group bg-white rounded-3xl p-5 flex flex-col md:flex-row relative gap-6 transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-2 cursor-pointer border border-transparent hover:border-[#6B8E4E]/20 overflow-hidden isolate">
      
      {/* Background soft glow animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#F4F7F2] rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 z-0"></div>

      {/* Top Badges (Absolute positioned) */}
      <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20">
        {data.discount && (
          <span className="bg-[#FF4D4D] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm">
            {data.discount}
          </span>
        )}
        <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-red-500 hover:shadow-md transition-all ml-auto">
          <Heart size={18} />
        </button>
      </div>

      {/* Left: Enhanced Image Container */}
      <div className="relative h-56 md:h-full w-full md:w-56 lg:w-60 flex-shrink-0 flex items-center justify-center isolate bg-[#F8F9F5] rounded-2xl p-4 mt-6 md:mt-0">
        <div className="absolute inset-4 bg-white/60 rounded-xl z-0"></div>
        <img 
          src={data.image} 
          alt={data.title} 
          className="max-h-full w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10"
        />
      </div>

      {/* Right: Detailed Content Area */}
      <div className="flex flex-col flex-1 relative z-10">
        <h3 className="text-[#1a1f16] font-bold text-xl md:text-2xl leading-tight group-hover:text-[#4A6731] transition-colors mb-1.5">
          {data.title}
        </h3>
        <p className="text-gray-500 text-[13px] md:text-sm font-medium italic mb-4">
          {data.subtitle}
        </p>

        {/* Benefits/Features List - LENGTHY DETAILS */}
        <div className="flex flex-col gap-2.5 mb-5 md:mb-6 flex-1">
          {data.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 group/feat">
              <CheckCircle size={16} className="text-[#85B060] shrink-0" />
              <p className="text-[#5a6054] text-xs md:text-[13px] font-medium leading-tight line-clamp-2">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Rating Area */}
        <div className="flex items-center gap-2 mb-6 border-t border-gray-100 pt-4 mt-auto">
          <div className="flex text-[#FABB05]">
            {[...Array(5)].map((_, i) => (
               <Star key={i} size={14} fill={i < Math.floor(data.rating) ? "#FABB05" : "none"} strokeWidth={i < Math.floor(data.rating) ? 0 : 2} className={i >= Math.floor(data.rating) ? "text-gray-300" : ""} />
            ))}
          </div>
          <span className="text-[#1a1f16] text-[13px] font-bold">{data.rating}</span>
          <span className="text-gray-500 text-[11px] md:text-xs font-medium tracking-wide">
             Based on {data.reviews} botanical reviews
          </span>
        </div>

        {/* Pricing & Add to Cart Row (Enhanced for Pack Cards) */}
        <div className="flex items-center justify-between gap-4 mt-auto">
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs font-bold line-through mb-0.5">{data.oldPrice}</span>
            <span className="text-[#1a1f16] font-extrabold text-2xl tracking-tight leading-none">{data.price}</span>
            <span className="text-gray-500 text-[10px] font-medium tracking-wider uppercase mt-1">Pack Includes 3 Mature Plants</span>
          </div>
          
          <button className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#4A6731] text-white text-xs md:text-sm font-bold hover:bg-[#3A5226] hover:scale-105 transition-all shadow-md group/btn">
            <ShoppingCart size={18} className="group-hover/btn:-translate-x-0.5 transition-transform" />
            Add Pack to Cart
          </button>
        </div>
      </div>

    </div>
  );
};

export default CollectionCard;