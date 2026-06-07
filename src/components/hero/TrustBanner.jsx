import React from 'react';
import plantIcon from '../../assets/hero/plant-icon.png';
import starIcon from '../../assets/hero/star-icon.png';
import deliverIcon from '../../assets/hero/deliver-icon.png';

const TrustBanner = () => {
  const stats = [
    { icon: plantIcon, value: "10K+", label: "Happy Plants" },
    { icon: starIcon, value: "4.9 Rating", label: "Customers Love Us" },
    { icon: deliverIcon, value: "Fast Delivery", label: "Across India" }
  ];

  return (
    <div className="absolute bottom-24 md:bottom-32 left-4 md:left-12 lg:left-24 z-30">
      {/* Changed border to 'border-none md:border md:border-white/10' to hide the harsh line on mobile */}
      <div 
        className="bg-[#1a1f16]/60 backdrop-blur-xl border-none md:border md:border-white/10 rounded-2xl md:rounded-full px-6 md:px-8 py-4 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 shadow-2xl outline-none ring-0"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={stat.icon} alt={stat.label} className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-md" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm md:text-base leading-tight">
                {stat.value}
              </span>
              <span className="text-white/70 text-xs md:text-sm font-medium leading-tight">
                {stat.label}
              </span>
            </div>
            {/* Divider for desktop */}
            {index < stats.length - 1 && (
              <div className="hidden md:block w-px h-8 bg-white/20 ml-6"></div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default TrustBanner;