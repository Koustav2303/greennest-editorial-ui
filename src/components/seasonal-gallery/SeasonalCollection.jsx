import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Importing assets based EXACTLY on your VS Code screenshot
import cornerPackImg from '../../assets/second-banner/corner-bloom-pack.png';
import monsoonPackImg from '../../assets/second-banner/monsoon-green-pack.png';
import winterPackImg from '../../assets/second-banner/winter-care-pack.png';
import springPackImg from '../../assets/second-banner/spring-bloosom-pack.png';

const SeasonalCard = ({ title, price, image }) => (
  // Matched the exact wide, rounded-xl shape with the soft off-white background
  <div className="group min-w-[260px] md:min-w-[290px] bg-[#F8F9F5] rounded-3xl p-5 flex flex-col items-center justify-between cursor-pointer snap-start transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:-translate-y-1">
    
    <div className="relative h-40 md:h-44 w-full flex items-center justify-center mb-4">
      <img 
        src={image} 
        alt={title} 
        className="max-h-full w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
    
    <div className="text-center w-full mt-auto pb-1">
      <h3 className="text-[#2a3024] font-semibold text-[15px] tracking-tight group-hover:text-[#6B8E4E] transition-colors">
        {title}
      </h3>
      <p className="text-[#1a1f16] font-extrabold text-[17px] mt-0.5">{price}</p>
    </div>
    
  </div>
);

const SeasonalCollection = () => {
  // Using a ref to add functional scrolling to the custom arrows
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
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
    <section className="py-12 md:py-16 bg-white relative z-10" id="seasonal">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        <SectionHeader title="Seasonal Collection" buttonText="View All Seasonals" />

        {/* Carousel Wrapper with Relative Positioning for Arrows */}
        <div className="relative group">
          
          {/* Floating Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-11 h-11 bg-white border border-[#e5e7eb] rounded-full items-center justify-center text-[#7e9b63] shadow-sm hover:shadow-md hover:scale-105 hover:border-[#6B8E4E] transition-all z-20"
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} strokeWidth={2} />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-5 pb-6 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {collections.map((item) => (
              <SeasonalCard key={item.id} title={item.title} price={item.price} image={item.image} />
            ))}
          </div>

          {/* Floating Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-11 h-11 bg-white border border-[#e5e7eb] rounded-full items-center justify-center text-[#7e9b63] shadow-sm hover:shadow-md hover:scale-105 hover:border-[#6B8E4E] transition-all z-20"
            aria-label="Scroll right"
          >
            <ChevronRight size={22} strokeWidth={2} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default SeasonalCollection;