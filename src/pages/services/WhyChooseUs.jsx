import React from 'react';
import { Leaf, UserCheck, Sprout, Blocks, Clock, Tag, ShieldCheck } from 'lucide-react';
import banner2Bg from '../../assets/service-page/banner2-bg.jpg';

const features = [
  { id: 1, title: "Experienced", subtitle: "Experts", icon: UserCheck },
  { id: 2, title: "Quality", subtitle: "Plants", icon: Sprout },
  { id: 3, title: "Customized", subtitle: "Solutions", icon: Blocks },
  { id: 4, title: "Timely", subtitle: "Service", icon: Clock },
  { id: 5, title: "Affordable", subtitle: "Pricing", icon: Tag },
  { id: 6, title: "Satisfaction", subtitle: "Guaranteed", icon: ShieldCheck },
];

const WhyChooseUs = () => {
  return (
    // REDUCED: py-16 md:py-20 changed to py-12 md:py-14 for a much slimmer profile
    <section className="relative w-full py-12 md:py-14 mt-12 md:mt-16 isolate overflow-hidden">
      
      {/* Background Image with Dark Green Overlay */}
      <img 
        src={banner2Bg} 
        alt="Lush green background" 
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-[#0a1508]/85 z-10 backdrop-blur-[2px]"></div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Header */}
        {/* REDUCED: mb-12 md:mb-16 changed to mb-8 md:mb-10 to pull the grid closer to the title */}
        <div className="flex items-center gap-2 mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Why Choose GreenNest?
          </h2>
          <Leaf className="text-[#85B060] w-6 h-6 md:w-8 md:h-8 -rotate-12" fill="#85B060" />
        </div>

        {/* Features Grid with Desktop Dividers */}
        {/* REDUCED: gap-y-10 to gap-y-8 for mobile stacking */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-8 md:gap-y-10 w-full xl:divide-x xl:divide-white/20">
          {features.map((feat) => (
            <div key={feat.id} className="flex flex-col items-center text-center px-4 group">
              {/* SLIGHTLY REDUCED: mb-4 to mb-3, icon size from 40 to 36 */}
              <div className="mb-3 text-[#85B060] transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                <feat.icon size={36} strokeWidth={1.5} />
              </div>
              <h4 className="text-white font-bold text-sm md:text-base leading-tight">
                {feat.title} <br /> {feat.subtitle}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;