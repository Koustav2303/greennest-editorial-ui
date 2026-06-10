import React from "react";
import { Leaf, Star } from "lucide-react";

const testimonials = [
  {
    id: 7,
    text: "I ordered indoor plants for my apartment, and they arrived healthy and beautifully packaged. The support team was very helpful.",
    name: "Neha Kapoor",
    location: "Chandigarh",
    image: "https://i.pravatar.cc/150?img=25",
    rating: 5,
  },
  {
    id: 8,
    text: "Their landscaping team exceeded our expectations. The garden design perfectly matched our vision and budget.",
    name: "Arjun Mehta",
    location: "Jaipur",
    image: "https://i.pravatar.cc/150?img=14",
    rating: 5,
  },
  {
    id: 9,
    text: "The plant care workshop was informative and engaging. I learned practical tips that helped my plants thrive.",
    name: "Meera Nair",
    location: "Kochi",
    image: "https://i.pravatar.cc/150?img=36",
    rating: 5,
  },
  {
    id: 10,
    text: "Fantastic customer service and excellent plant quality. Every plant I purchased is growing beautifully.",
    name: "Rohan Gupta",
    location: "Lucknow",
    image: "https://i.pravatar.cc/150?img=21",
    rating: 5,
  },
  {
    id: 11,
    text: "The balcony makeover service completely transformed our outdoor space. We now spend hours relaxing there.",
    name: "Aisha Khan",
    location: "Kolkata",
    image: "https://i.pravatar.cc/150?img=48",
    rating: 5,
  },
  {
    id: 12,
    text: "Their monthly maintenance package is worth every penny. My plants stay healthy without any effort on my part.",
    name: "Sanjay Kulkarni",
    location: "Nagpur",
    image: "https://i.pravatar.cc/150?img=53",
    rating: 4,
  },
  {
    id: 13,
    text: "The team recommended the perfect low-maintenance plants for my office. The space feels more vibrant and welcoming.",
    name: "Divya Reddy",
    location: "Visakhapatnam",
    image: "https://i.pravatar.cc/150?img=30",
    rating: 5,
  },
  {
    id: 14,
    text: "I was impressed by their attention to detail and deep knowledge of plant care. Highly professional throughout.",
    name: "Manish Agarwal",
    location: "Indore",
    image: "https://i.pravatar.cc/150?img=65",
    rating: 5,
  },
  {
    id: 15,
    text: "The online consultation helped me identify and solve several plant issues quickly. Great value and expertise.",
    name: "Pooja Malhotra",
    location: "Noida",
    image: "https://i.pravatar.cc/150?img=41",
    rating: 5,
  },
  {
    id: 16,
    text: "Beautiful plants, timely delivery, and excellent after-sales support. I will definitely order again.",
    name: "Aditya Joshi",
    location: "Surat",
    image: "https://i.pravatar.cc/150?img=17",
    rating: 5,
  },
  {
    id: 17,
    text: "The quality of the plants was exceptional, and the care instructions made it easy for a beginner like me to maintain them.",
    name: "Sneha Iyer",
    location: "Chennai",
    image: "https://i.pravatar.cc/150?img=28",
    rating: 5,
  },
  {
    id: 18,
    text: "Our café feels so much more inviting after their indoor plant installation. Customers constantly compliment the greenery.",
    name: "Amit Bansal",
    location: "Gurugram",
    image: "https://i.pravatar.cc/150?img=62",
    rating: 5,
  },
  {
    id: 19,
    text: "Fast delivery, healthy plants, and excellent packaging. Everything arrived in perfect condition despite the long distance.",
    name: "Ritika Sen",
    location: "Bhubaneswar",
    image: "https://i.pravatar.cc/150?img=35",
    rating: 5,
  },
  {
    id: 20,
    text: "Their experts helped me choose the right plants for my home’s lighting conditions. Every recommendation worked perfectly.",
    name: "Yash Malhotra",
    location: "Mohali",
    image: "https://i.pravatar.cc/150?img=57",
    rating: 5,
  },
];

const scrollingTrack = [...testimonials, ...testimonials];

const ServicesTestimonials = () => {
  const scrollDuration = testimonials.length * 10;

  return (
    <section className="flex flex-col items-center mb-10 md:mb-16 overflow-hidden">
      {/* Inline Styles for the continuous Marquee behavior */}
      <style>
        {`
          @keyframes testimonial-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-testimonial-marquee {
            /* Now passing our dynamic duration variable into the CSS */
            animation: testimonial-marquee ${scrollDuration}s linear infinite;
            display: flex;
            width: max-content;
          }
          .testimonial-marquee-container:hover .animate-testimonial-marquee {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Header */}
      <div className="flex items-center gap-2 mb-10 md:mb-14">
        <Leaf className="text-[#6B8E4E] w-6 h-6 rotate-12" fill="#6B8E4E" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1f16] tracking-tight">
          What Our Customers Say
        </h2>
      </div>

      {/* The Infinite Scrolling Track */}
      <div className="w-full relative testimonial-marquee-container cursor-grab active:cursor-grabbing pb-8">
        {/* Soft edge fading to blend the scrolling track into the white background */}
        <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-testimonial-marquee gap-6 md:gap-8 px-4">
          {scrollingTrack.map((test, idx) => (
            <div
              key={`${test.id}-${idx}`}
              className="relative w-[320px] md:w-[420px] bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col shrink-0 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#85B060]/30 font-serif text-6xl leading-none h-10 mb-4">
                “
              </div>

              <p className="text-[#5a6054] text-sm md:text-[15px] font-medium leading-relaxed mb-8 flex-1">
                {test.text}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#1a1f16] font-extrabold text-sm">
                      {test.name}
                    </span>
                    <span className="text-gray-400 font-medium text-xs">
                      {test.location}
                    </span>
                  </div>
                </div>

                <div className="flex gap-1 shrink-0">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#FABB05" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonials;
