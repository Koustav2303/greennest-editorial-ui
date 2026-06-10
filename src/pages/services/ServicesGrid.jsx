import React from 'react';
import { Leaf, ArrowRight, Home, Users, Sprout, PaintBucket, Stethoscope, Hammer } from 'lucide-react';

// Using the exact assets matching your folder structure
import homeSetupImg from '../../assets/service-page/home-arden.jpg';
import plantConsultImg from '../../assets/service-page/plant-consult.jpg';
import plantMaintenanceImg from '../../assets/service-page/plant-care.jpg';
import landscapeImg from '../../assets/service-page/landscape.jpg';
import plantDoctorImg from '../../assets/service-page/plant-doctor.jpg';
import gardenRenoImg from '../../assets/service-page/plant-renovation.jpg';

const serviceData = [
  {
    id: 1,
    title: "Home Garden Setup",
    desc: "Transform your home with beautiful indoor plants and décor.",
    icon: Home,
    image: homeSetupImg
  },
  {
    id: 2,
    title: "Plant Consultation",
    desc: "Get personalized advice from our plant care experts.",
    icon: Users,
    image: plantConsultImg
  },
  {
    id: 3,
    title: "Plant Maintenance",
    desc: "Regular care and maintenance to keep your plants healthy.",
    icon: Sprout,
    image: plantMaintenanceImg
  },
  {
    id: 4,
    title: "Landscape Design",
    desc: "Beautiful and sustainable landscape design solutions.",
    icon: PaintBucket, // FIX: Capitalized the 'B'
    image: landscapeImg
  },
  {
    id: 5,
    title: "Plant Doctor Services",
    desc: "Diagnosis and treatment for sick plants by our plant doctors.",
    icon: Stethoscope,
    image: plantDoctorImg
  },
  {
    id: 6,
    title: "Garden Renovation",
    desc: "Revamp your existing garden into a stunning green space.",
    icon: Hammer,
    image: gardenRenoImg
  }
];

const ServicesGrid = () => {
  return (
    <section className="flex flex-col items-center">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2 mb-3">
          <Leaf className="text-[#6B8E4E] w-6 h-6 rotate-12" fill="#6B8E4E" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1f16] tracking-tight">
            Our Services
          </h2>
        </div>
        <p className="text-gray-500 font-medium text-sm md:text-base">
          Comprehensive plant care solutions tailored to your needs.
        </p>
      </div>

      {/* Grid Architecture */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full">
        {serviceData.map((service) => (
          <div 
            key={service.id} 
            className="flex flex-col sm:flex-row bg-[#F8F9F5] rounded-[2rem] overflow-hidden group hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            {/* Image Container */}
            <div className="w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden shrink-0">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Content Container */}
            <div className="flex flex-col justify-center p-8 sm:p-10 flex-1 relative bg-white sm:rounded-l-[2rem] sm:-ml-6 z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
              
              {/* Floating Icon Badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E3] flex items-center justify-center text-[#4A6731] mb-6 shadow-sm">
                <service.icon size={24} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-extrabold text-[#1a1f16] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 max-w-[250px]">
                {service.desc}
              </p>

              <button className="flex items-center gap-2 text-[#4A6731] font-bold text-sm hover:text-[#3A5226] transition-colors mt-auto w-fit group/btn">
                Learn More 
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesGrid;