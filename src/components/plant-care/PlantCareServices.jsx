import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { BentoLargeCard, BentoStatCard, BentoDarkCard } from './BentoCards';

// Top Row Services Assets
import setupImg from '../../assets/plant-care-service/home-arden.jpg'; // Using exact filename from screenshot
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1f16] tracking-tight mb-1">
              Plant Care Services
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Professional care for your green companions
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#6B8E4E] hover:text-[#6B8E4E] transition-colors group">
            View All Services
            <ChevronRight size={16} className="text-gray-400 group-hover:text-[#6B8E4E] transition-colors" />
          </button>
        </div>

        {/* 1. Services Horizontal Scroll / Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 md:gap-4 pb-4 md:pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map(service => (
            <ServiceCard key={service.id} title={service.title} image={service.image} />
          ))}
        </div>

        {/* 2. Company Stats Bento Grid */}
        {/* Grid setup: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-4">
          
          {/* Column 1: Large Banner (Spans 2 rows) */}
          <BentoLargeCard image={bannerImg1} />

          {/* Column 2 & 3: Top Row Light Cards */}
          <BentoStatCard value="10K+" label="Happy Customers">
            {/* Avatar Stack Simulation */}
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-300 z-[${4-i}]`} style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`, backgroundSize: 'cover' }} />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#85B060] flex items-center justify-center text-white text-[10px] font-bold z-0">
                +
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 font-medium">Join our green family</p>
          </BentoStatCard>

          <BentoStatCard value="25K+" label="Plants Delivered">
            <p className="text-[10px] text-gray-400 font-medium mb-2">Across 500+ cities</p>
            {/* Custom Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-auto">
              <div className="bg-[#4A6731] h-1.5 rounded-full w-[85%] relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#4A6731] border-2 border-white rounded-full"></div>
              </div>
            </div>
          </BentoStatCard>

          {/* Column 4: Top Right Dark Card */}
          <BentoDarkCard value="98%" label="Customer Satisfaction" image={bannerImg2}>
             <p className="text-[10px] text-white/70 font-medium mb-2">Based on 5K+ reviews</p>
             <div className="flex gap-1 text-[#FABB05]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FABB05" strokeWidth={0} />)}
             </div>
          </BentoDarkCard>

          {/* Column 2 & 3: Bottom Row Light Cards */}
          <BentoStatCard value="500+" label="Plant Varieties" />
          <BentoStatCard value="9" label="Years Experience" />

          {/* Column 4: Bottom Right Earth Card */}
          <BentoDarkCard value="2M+" label="Trees Planted" image={greenEarthImg} isEarth={true}>
            <p className="text-[10px] md:text-xs text-white/80 font-medium leading-tight mt-1 max-w-[70%]">
              Contributing to a greener planet
            </p>
          </BentoDarkCard>

        </div>

      </div>
    </section>
  );
};

export default PlantCareServices;