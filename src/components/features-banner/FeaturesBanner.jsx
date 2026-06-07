import React from 'react';
import { Leaf, Tag } from 'lucide-react';
import FeatureCard from './FeatureCard';

// Importing assets based exactly on your VS Code file structure
import plantIcon from '../../assets/first-banner/plant.png';
import deliveryIcon from '../../assets/first-banner/delivery.png';
import supportIcon from '../../assets/first-banner/support.png';
import ecoIcon from '../../assets/first-banner/eco-friendly.png';
import plantCareIcon from '../../assets/first-banner/plant-care.png';

const FeaturesBanner = () => {
  const features = [
    {
      id: 1,
      title: "100%",
      subtitle: "Healthy Plants",
      icon: plantIcon,
      isLucide: false
    },
    {
      id: 2,
      title: "Fast",
      subtitle: "Delivery",
      icon: deliveryIcon,
      isLucide: false
    },
    {
      id: 3,
      title: "Expert",
      subtitle: "Guidance",
      icon: supportIcon,
      isLucide: false
    },
    {
      id: 4,
      title: "Eco-Friendly",
      subtitle: "Packaging",
      icon: ecoIcon,
      isLucide: false
    },
    {
      id: 5,
      title: "Affordable",
      subtitle: "Pricing",
      icon: <Tag size={40} strokeWidth={1.5} />, // Fallback Lucide Icon
      isLucide: true
    },
    {
      id: 6,
      title: "Plant Care",
      subtitle: "Support",
      icon: plantCareIcon,
      isLucide: false
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-white relative z-10 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* The Outlined Container */}
        <div className="relative border border-gray-200/80 rounded-[2rem] p-4 md:p-8 pt-10 md:pt-12 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)]">
          
          {/* Floating Title cutting through the top border */}
          <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-white px-4 md:px-6 flex items-center gap-2 whitespace-nowrap">
            <Leaf className="text-[#6B8E4E] w-5 h-5 md:w-6 md:h-6 -rotate-12" fill="#6B8E4E" />
            <h2 className="text-lg md:text-2xl font-bold text-[#1a1f16] tracking-tight">
              Why Choose GreenNest?
            </h2>
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.id}
                title={feature.title}
                subtitle={feature.subtitle}
                icon={feature.icon}
                isLucide={feature.isLucide}
              />
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default FeaturesBanner;