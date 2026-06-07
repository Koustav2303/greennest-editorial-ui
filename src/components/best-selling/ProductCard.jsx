import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ plant }) => {
  return (
    <div className="group relative min-w-[220px] sm:min-w-[230px] lg:min-w-0 bg-white border border-neutral-200/60 rounded-2xl p-4 transition-all duration-500 hover:shadow-[0_22px_40px_-10px_rgba(42,54,35,0.08)] hover:border-[#6B8E4E]/30 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between snap-start overflow-hidden">
      
      {/* Subtle bottom gradient glow on card hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F4F7F2]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Badges & Actions */}
      <div className="flex justify-between items-center z-10 relative">
        {plant.discount ? (
          <span className="bg-[#E55A5A] text-white text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wider">
            {plant.discount}
          </span>
        ) : (
          <span className="opacity-0 text-[10px]">Spacer</span>
        )}
        <button className="text-neutral-400 hover:text-[#E55A5A] transition-colors bg-neutral-50 hover:bg-white p-2 rounded-full border border-neutral-100 shadow-sm hover:shadow-md">
          <Heart size={14} strokeWidth={2.5} />
        </button>
      </div>

      {/* Creative Product Image Area (Decreased Size) */}
      <div className="relative h-36 md:h-44 w-full mt-2 mb-4 flex items-center justify-center overflow-visible">
        {/* Organic geometric circular reveal on hover */}
        <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-[#EAF0E3] rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out -z-0" />
        
        <img 
          src={plant.image} 
          alt={plant.title} 
          className="h-full w-auto object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.12)] group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500 ease-out z-10"
        />
      </div>

      {/* Product Content Details */}
      <div className="flex flex-col gap-0.5 z-10 relative">
        <h3 className="text-[#1a1f16] font-bold text-base tracking-tight leading-snug group-hover:text-[#4A6731] transition-colors duration-300">
          {plant.title}
        </h3>
        <p className="text-neutral-400 text-[11px] font-medium italic">{plant.scientificName}</p>
        
        {/* Star Rating Layout */}
        <div className="flex items-center gap-1 mt-0.5">
          <div className="flex text-[#FABB05]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill="#FABB05" strokeWidth={0} />
            ))}
          </div>
          <span className="text-neutral-500 text-[11px] font-medium ml-0.5">
            {plant.rating} <span className="text-neutral-400 font-normal">({plant.reviews})</span>
          </span>
        </div>

        {/* Pricing Layout & Animated Cart Action */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            {plant.originalPrice && (
              <span className="text-[11px] text-neutral-400 line-through font-medium leading-none mb-0.5">
                {plant.originalPrice}
              </span>
            )}
            <span className="text-base font-extrabold text-[#1a1f16] leading-none">{plant.price}</span>
          </div>
          
          <button className="bg-[#4A6731] hover:bg-[#3A5226] text-white p-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
            <ShoppingCart size={15} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;