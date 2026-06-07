import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Leaf, Quote } from 'lucide-react';

const TestimonialCard = ({ name, location, review, avatar }) => (
  <div className="min-w-[280px] md:min-w-[340px] bg-[#F8F9F5] rounded-3xl p-6 flex flex-col gap-4 snap-start border border-transparent transition-all duration-300 hover:shadow-md hover:border-[#6B8E4E]/20 hover:-translate-y-1">
    
    {/* Header: Avatar, Info, and Quote Icon */}
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" 
        />
        <div className="flex flex-col">
          <h4 className="text-[#1a1f16] font-bold text-[15px] leading-tight">{name}</h4>
          <span className="text-gray-500 text-[12px] mt-0.5">{location}</span>
        </div>
      </div>
      {/* Decorative Quote Icon matching the light green from design */}
      <Quote className="text-[#b2cfa1] fill-[#b2cfa1] opacity-60 rotate-180" size={24} />
    </div>
    
    {/* Review Text */}
    <p className="text-[#5a6054] text-[14px] leading-relaxed min-h-[60px] font-medium">
      {review}
    </p>
    
    {/* 5-Star Rating */}
    <div className="flex gap-1 text-[#FABB05]">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="#FABB05" strokeWidth={0} />
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      review: "Amazing quality plants and excellent packaging. My pothos are thriving!",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      id: 2,
      name: "Rahul Verma",
      location: "Bangalore",
      review: "Best nursery I've ever ordered from. Fast delivery and healthy plants.",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Ahmedabad",
      review: "Their plant care support is incredible. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      id: 4,
      name: "Karan Desai",
      location: "Pune",
      review: "The seasonal collection arrived in perfect condition. Beautiful blooms!",
      avatar: "https://i.pravatar.cc/150?img=68"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white relative z-10" id="testimonials">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* The Outlined Wrapper Container */}
        <div className="relative border border-gray-200/80 rounded-[2rem] p-6 md:p-8 pt-12 md:pt-14 bg-white shadow-[0_5px_20px_-10px_rgba(0,0,0,0.03)] group">
          
          {/* Floating Title cutting through the top border */}
          <div className="absolute -top-4 left-6 md:left-10 bg-white px-4 flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a1f16] tracking-tight">
              What Our Plant Parents Say
            </h2>
            <Leaf className="text-[#6B8E4E] w-5 h-5 -rotate-12 drop-shadow-sm" fill="#6B8E4E" />
          </div>

          {/* Floating Left Arrow (Overlaps the left border) */}
          <button 
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white border border-[#e5e7eb] rounded-full items-center justify-center text-[#7e9b63] shadow-sm hover:shadow-md hover:scale-105 hover:border-[#6B8E4E] transition-all z-20"
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} strokeWidth={2} />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {reviews.map((review) => (
              <TestimonialCard 
                key={review.id} 
                name={review.name} 
                location={review.location} 
                review={review.review} 
                avatar={review.avatar} 
              />
            ))}
          </div>

          {/* Floating Right Arrow (Overlaps the right border) */}
          <button 
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-11 h-11 bg-white border border-[#e5e7eb] rounded-full items-center justify-center text-[#7e9b63] shadow-sm hover:shadow-md hover:scale-105 hover:border-[#6B8E4E] transition-all z-20"
            aria-label="Scroll right"
          >
            <ChevronRight size={22} strokeWidth={2} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;