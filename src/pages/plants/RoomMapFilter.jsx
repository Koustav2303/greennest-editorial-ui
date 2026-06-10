import React from 'react';
import { motion } from 'framer-motion';
import { Sun, SunDim, CloudSun, Home, Sparkles } from 'lucide-react';

const RoomMapFilter = ({ activeFilters, setActiveFilters }) => {
  // Define our structural room zones matching our catalog's lighting criteria
  const zones = [
    {
      id: 'low-light',
      name: 'The Shaded Corner',
      sub: 'Bookshelves, Bedrooms & Corridors',
      lightValue: 'Low Light',
      icon: SunDim,
      bgStyle: 'bg-[#FDFDFD] border-neutral-200 hover:border-neutral-400',
      activeStyle: 'ring-2 ring-[#4A6731] bg-[#F4F7F2]/60 border-[#4A6731]/30',
      description: 'Perfect for spaces with minimal natural lighting or soft ambient environments.'
    },
    {
      id: 'indirect-light',
      name: 'The Sunlit Lounge',
      sub: 'Desks, Living Tables & Plant Stands',
      lightValue: 'Bright Indirect Light',
      icon: CloudSun,
      bgStyle: 'bg-[#FAFBF7] border-neutral-200 hover:border-[#85B060]/50',
      activeStyle: 'ring-2 ring-[#4A6731] bg-[#EAF0E3]/60 border-[#4A6731]/30',
      description: 'Ideal for vibrant spaces that receive lots of clear, filtered daylight without harsh rays.'
    },
    {
      id: 'direct-sun',
      name: 'The Glass Windowsill',
      sub: 'Balconies, Patios & South Windows',
      lightValue: 'Direct Sunlight',
      icon: Sun,
      bgStyle: 'bg-[#FFFDF9] border-neutral-200 hover:border-amber-300/50',
      activeStyle: 'ring-2 ring-amber-500 bg-amber-50/40 border-amber-500/30',
      description: 'Tailored for sun-drenched architectural zones that handle unfiltered bright sunshine.'
    }
  ];

  const handleZoneClick = (lightValue) => {
    setActiveFilters(prev => {
      const currentLightFilters = prev.light;
      // If already active, remove it (toggle off); otherwise set it as the exclusive light filter
      const updatedLight = currentLightFilters.includes(lightValue) 
        ? currentLightFilters.filter(item => item !== lightValue)
        : [lightValue]; // Setting as an array with this single filter for focused exploration
      
      return {
        ...prev,
        light: updatedLight
      };
    });
  };

  return (
    <div className="w-full mb-16">
      {/* Decorative Title Block */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-2 text-[#4A6731] font-bold text-xs tracking-widest uppercase mb-2">
          <Home size={14} />
          <span>Interactive Spatial Mapping</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#1a1f16] tracking-tight">
          Filter by Room Environment
        </h3>
        <p className="text-gray-500 text-sm max-w-xl mt-1 leading-relaxed">
          Select an architectural zone below to map your specific home lighting conditions directly to our botanical collection.
        </p>
      </div>

      {/* Grid Blueprint Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {zones.map((zone) => {
          const isSelected = activeFilters.light.includes(zone.lightValue);
          const IconComponent = zone.icon;

          return (
            <motion.div
              key={zone.id}
              whileHover={{ y: -4 }}
              onClick={() => handleZoneClick(zone.lightValue)}
              className={`p-6 rounded-[2rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] shadow-sm select-none relative overflow-hidden group
                ${isSelected ? zone.activeStyle : zone.bgStyle}
              `}
            >
              {/* Decorative Subtle Grid Line Overlay for a blueprints/architectural aesthetic */}
              <div className="absolute inset-0 opacity-[0.015] group-hover:opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px] transition-opacity pointer-events-none z-0"></div>

              {/* Card Header Info */}
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all shadow-sm
                    ${isSelected ? 'bg-white text-[#4A6731]' : 'bg-neutral-100 text-neutral-500 group-hover:bg-white'}
                  `}>
                    <IconComponent size={20} strokeWidth={2} />
                  </div>
                  
                  {isSelected && (
                    <span className="flex items-center gap-1 text-[10px] font-extrabold tracking-wider text-[#4A6731] uppercase bg-white px-2.5 py-1 rounded-full border border-[#4A6731]/10 shadow-sm animate-pulse">
                      <Sparkles size={10} /> Active Zone
                    </span>
                  )}
                </div>

                <h4 className="text-[#1a1f16] font-extrabold text-lg tracking-tight mb-1">
                  {zone.name}
                </h4>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-3">
                  {zone.sub}
                </p>
              </div>

              {/* Descriptive Footer Context */}
              <p className="text-neutral-500 text-xs font-medium leading-relaxed mt-auto relative z-10 line-clamp-2">
                {zone.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomMapFilter;