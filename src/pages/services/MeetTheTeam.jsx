import React from 'react';
import { Leaf, Calendar, Award, ArrowRight } from 'lucide-react';

const teamData = [
  {
    id: 1,
    name: "Dr. Aris Thorne",
    role: "Master of Succulents",
    experience: "12 Years",
    specialty: "Desert Ecosystems",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Indoor Oasis Architect",
    experience: "8 Years",
    specialty: "Low-Light Tropicals",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Landscape Visionary",
    experience: "15 Years",
    specialty: "Sustainable Hardscaping",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Dr. Sarah Lin",
    role: "Pest & Disease Specialist",
    experience: "10 Years",
    specialty: "Organic Remediation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Julian Silva",
    role: "Bonsai & Rare Exotics",
    experience: "20 Years",
    specialty: "Miniature Trees",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
  }
];

// Duplicate the array to create a seamless infinite loop
const scrollingTrack = [...teamData, ...teamData];

const MeetTheTeam = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white border-y border-gray-100">
      
      {/* Inline Styles for the specific infinite Marquee behavior */}
      <style>
        {`
          @keyframes team-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-team-marquee {
            animation: team-marquee 35s linear infinite;
            display: flex;
            width: max-content;
          }
          .marquee-container:hover .animate-team-marquee {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <Leaf className="text-[#85B060] w-6 h-6 rotate-12" fill="#85B060" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1f16] tracking-tight">
              Meet the Botanists
            </h2>
          </div>
          <p className="text-gray-500 font-medium text-sm md:text-base max-w-lg">
            Our elite roster of plant doctors, architects, and specialists are ready to transform your space.
          </p>
        </div>
      </div>

      {/* The Infinite Scrolling Track */}
      <div className="w-full relative marquee-container cursor-grab active:cursor-grabbing">
        
        {/* Soft edge fading to blend the scrolling track into the white background */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-team-marquee gap-5 px-3">
          {scrollingTrack.map((expert, idx) => (
            <div 
              key={`${expert.id}-${idx}`} 
              // REDUCED DIMENSIONS: Scaled down width and height for a sleeker look
              className="relative w-[240px] md:w-[260px] h-[340px] md:h-[360px] rounded-[2rem] overflow-hidden group shrink-0 shadow-lg border border-gray-100"
            >
              {/* Expert Image */}
              <img 
                src={expert.image} 
                alt={expert.name} 
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Default Bottom Gradient (Always Visible) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f16] via-[#1a1f16]/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Text & Interaction Content */}
              {/* REDUCED PADDING: Adjusted from p-8 to p-5 to match the smaller card size */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
                
                {/* Default Text Base */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-white font-extrabold text-xl md:text-2xl tracking-tight mb-1">{expert.name}</h3>
                  <p className="text-[#85B060] font-bold text-xs md:text-sm tracking-wider uppercase">{expert.role}</p>
                </div>

                {/* Glassmorphic Slide-Up Panel (Hidden until hover) */}
                <div className="absolute bottom-0 left-0 w-full p-5 bg-white/10 backdrop-blur-md border-t border-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col gap-3">
                  
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-white/90 text-[11px] md:text-xs font-medium">
                      <Award size={14} className="text-[#85B060] shrink-0" />
                      <span className="truncate">{expert.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-[11px] md:text-xs font-medium">
                      <Calendar size={14} className="text-[#85B060]" />
                      <span>{expert.experience} Experience</span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-[#85B060] hover:bg-[#6B8E4E] text-white py-2.5 rounded-xl font-bold text-xs md:text-sm transition-colors shadow-lg mt-1">
                    Book {expert.name.split(' ')[0]}
                    <ArrowRight size={14} />
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default MeetTheTeam;