import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Importing assets based EXACTLY on your VS Code screenshot
import cornerPackImg from '../../assets/second-banner/corner-bloom-pack.png';
import monsoonPackImg from '../../assets/second-banner/monsoon-green-pack.png';
import winterPackImg from '../../assets/second-banner/winter-care-pack.png';
import springPackImg from '../../assets/second-banner/spring-bloosom-pack.png';

const SeasonalCard = ({ title, price, image }) => (
  // UPGRADED: Changed from <div> to <Link> for SPA routing, added editorial hover states
  <Link 
    to="/seasonals" 
    className="group min-w-[260px] md:min-w-[290px] bg-[#F8F9F5] border border-gray-100 rounded-[2rem] p-6 flex flex-col items-center justify-between cursor-pointer snap-start transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(133,176,96,0.2)] hover:border-[#85B060]/30 hover:-translate-y-2 relative overflow-hidden isolate"
  >
    {/* Subtle background glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#85B060]/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>

    <div className="relative h-40 md:h-48 w-full flex items-center justify-center mb-6">
      <img 
        src={image} 
        alt={title} 
        className="max-h-full w-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
      />
    </div>
    
    <div className="text-center w-full mt-auto pb-1 flex flex-col items-center">
      <h3 className="text-[#1a1f16] font-black text-lg tracking-tight mb-1 group-hover:text-[#4A6731] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 font-bold text-sm mb-3">{price}</p>

      {/* NEW: Smooth sliding "Explore" action that appears on hover */}
      <div className="flex items-center gap-1.5 text-xs font-bold text-[#85B060] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        Explore Pack <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
  </Link>
);

const SeasonalCollection = () => {
  // Using a ref to add functional scrolling to the custom arrows
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320; // Slightly increased scroll distance to match new padding
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const collections = [
    { id: 1, title: "Summer Bloom Pack", price: "₹1,299", image: cornerPackImg },
    { id: 2, title: "Monsoon Green Pack", price: "₹1,499", image: monsoonPackImg },
    { id: 3, title: "Winter Care Pack", price: "₹1,199", image: winterPackImg },
    { id: 4, title: "Spring Blossom Pack", price: "₹1,599", image: springPackImg },
    // Re-using an image to demonstrate the 5th card overflow shown in your reference image
    { id: 5, title: "Festive Plants Pack", price: "₹2,299", image: monsoonPackImg }, 
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative z-10" id="seasonal">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* UPGRADED: Passing the new props to your SectionHeader */}
        <SectionHeader 
          subtitle="Limited Seasonal Windows"
          title="Seasonal Collection" 
          buttonText="View All Seasonals" 
          buttonLink="/seasonals"
        />

        {/* Carousel Wrapper with Relative Positioning for Arrows */}
        <div className="relative group mt-4">
          
          {/* Floating Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-12 h-12 bg-white border border-gray-200 rounded-full items-center justify-center text-[#4A6731] shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(133,176,96,0.25)] hover:scale-105 hover:border-[#85B060] transition-all z-20"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 md:gap-6 pb-8 lg:pb-4 pt-4 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {collections.map((item) => (
              <SeasonalCard key={item.id} title={item.title} price={item.price} image={item.image} />
            ))}
          </div>

          {/* Floating Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-12 h-12 bg-white border border-gray-200 rounded-full items-center justify-center text-[#4A6731] shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(133,176,96,0.25)] hover:scale-105 hover:border-[#85B060] transition-all z-20"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>

        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
           <Link 
              to="/seasonals"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1f16] text-white rounded-xl text-sm font-bold shadow-lg w-full group"
           >
              View All Seasonals
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

      </div>
    </section>
  );
};

export default SeasonalCollection;