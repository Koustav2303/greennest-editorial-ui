import React from 'react';
import { Link } from 'react-router-dom'; // Integrated Link for seamless routing
import { ChevronRight, Star } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { BentoLargeCard, BentoStatCard, BentoDarkCard } from './BentoCards';

// Top Row Services Assets
import setupImg from '../../assets/plant-care-service/home-arden.jpg'; 
import consultImg from '../../assets/plant-care-service/plant-consult.jpg';
import maintainImg from '../../assets/plant-care-service/plant-care.jpg';
import landscapeImg from '../../assets/plant-care-service/landscape.jpg';
import doctorImg from '../../assets/plant-care-service/plant-doctor.jpg';
import renovateImg from '../../assets/plant-care-service/plant-renovation.jpg';

// Bento Box Assets
import bannerImg1 from '../../assets/plant-care-service/banner-img1.jpg';
import bannerImg2 from '../../assets/plant-care-service/banner-img2.jpg';
import greenEarthImg from '../../assets/plant-care-service/green-earth.jpg';

const PlantCareServices = () => {
  const services = [
    { id: 1, title: "Home Garden Setup", image: setupImg },
    { id: 2, title: "Plant Consultation", image: consultImg },
    { id: 3, title: "Plant Maintenance", image: maintainImg },
    { id: 4, title: "Landscape Design", image: landscapeImg },
    { id: 5, title: "Plant Doctor Services", image: doctorImg },
    { id: 6, title: "Garden Renovation", image: renovateImg },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative z-10" id="services">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-row items-end justify-between mb-8 gap-4">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl lg:text-[42px] font-extrabold text-[#1a1f16] tracking-tight leading-tight mb-2">
              Plant Care Services
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium">
              Professional care for your green companions.
            </p>
          </div>
          
          {/* FIX: Replaced button with Link, removed 'hidden', added dynamic mobile text scaling */}
          <Link 
            to="/services" 
            className="flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-2.5 border border-gray-200 rounded-full text-xs md:text-sm font-bold text-gray-700 hover:border-[#6B8E4E] hover:text-[#6B8E4E] transition-all duration-300 group shadow-sm hover:shadow-md shrink-0"
          >
            <span className="hidden sm:block">View All Services</span>
            <span className="sm:hidden">View All</span>
            <ChevronRight size={16} className="text-gray-400 group-hover:text-[#6B8E4E] transition-colors md:w-4 md:h-4" />
          </Link>
        </div>

        {/* 1. Services Horizontal Scroll / Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-5 pb-6 md:pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map(service => (
            <div key={service.id} className="snap-start shrink-0">
               <ServiceCard title={service.title} image={service.image} />
            </div>
          ))}
        </div>

        {/* 2. Company Stats Bento Grid */}
        {/* Grid setup: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-2">
          
          {/* Column 1: Large Banner (Spans 2 rows) */}
          <BentoLargeCard image={bannerImg1} />

          {/* Column 2 & 3: Top Row Light Cards */}
          <BentoStatCard value="10K+" label="Happy Customers">
            {/* Avatar Stack Simulation */}
            <div className="flex -space-x-3 mt-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white bg-gray-300 shadow-sm relative z-10 hover:scale-110 transition-transform" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`, backgroundSize: 'cover' }} />
              ))}
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white bg-[#85B060] flex items-center justify-center text-white text-[10px] font-bold shadow-sm z-0">
                +
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-3 font-bold uppercase tracking-wider">Join our green family</p>
          </BentoStatCard>

          <BentoStatCard value="25K+" label="Plants Delivered">
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-3">Across 500+ cities</p>
            {/* Custom Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 mt-auto overflow-hidden shadow-inner">
              <div className="bg-[#4A6731] h-2 rounded-full w-[85%] relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-[3px] border-[#4A6731] rounded-full shadow-md"></div>
              </div>
            </div>
          </BentoStatCard>

          {/* Column 4: Top Right Dark Card */}
          <BentoDarkCard value="98%" label="Customer Satisfaction" image={bannerImg2}>
             <p className="text-[11px] text-white/70 font-medium mb-3 tracking-wide">Based on 5K+ verified reviews</p>
             <div className="flex gap-1.5 text-[#FABB05]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FABB05" strokeWidth={0} />)}
             </div>
          </BentoDarkCard>

          {/* Column 2 & 3: Bottom Row Light Cards */}
          <BentoStatCard value="500+" label="Plant Varieties" />
          <BentoStatCard value="9" label="Years Experience" />

          {/* Column 4: Bottom Right Earth Card */}
          <BentoDarkCard value="2M+" label="Trees Planted" image={greenEarthImg} isEarth={true}>
            <p className="text-xs md:text-[13px] text-white/90 font-medium leading-relaxed mt-2 max-w-[85%] drop-shadow-md">
              Actively contributing to a greener, healthier planet every single day.
            </p>
          </BentoDarkCard>

        </div>

      </div>
    </section>
  );
};

export default PlantCareServices;