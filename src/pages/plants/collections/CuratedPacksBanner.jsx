import React, { useMemo } from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import CollectionCard from './CollectionCard';

// Using all Unsplash URLs so we don't hit any missing local file errors!
const airPurifierPackImg = "https://images.unsplash.com/photo-1620126407238-d28c94627d7e?q=80&w=600&auto=format&fit=crop";
const easeCarePackImg = "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&auto=format&fit=crop"; 
const deskZenPackImg = "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop"; 

const CuratedPacksBanner = () => {
  const collectionsData = useMemo(() => [
    {
      id: 1,
      title: "Air Purifying Botanical Trio",
      subtitle: "Snake Plant, Peace Lily, Areca Palm",
      rating: 4.9,
      reviews: 670,
      price: "₹3,299",
      oldPrice: "₹4,160",
      discount: "-25%",
      image: airPurifierPackImg,
      features: [
        "Eliminates airborne toxins & common pollutants",
        "Significantly boosts indoor air quality & oxygen levels",
        "Resilient, low maintenance plant collection"
      ]
    },
    {
      id: 2,
      title: "Beginner Ease Care Bundle",
      subtitle: "ZZ Plant, Spider Plant, Pothos",
      rating: 4.8,
      reviews: 520,
      price: "₹2,499",
      oldPrice: "₹3,050",
      discount: "-18%",
      image: easeCarePackImg,
      features: [
        "Highly tolerant, drought-resistant varieties",
        "Thrives in low light conditions (office/bedroom)",
        "Durable, hardy plants - perfect for new owners"
      ]
    },
    {
      id: 3,
      title: "Executive Desk Zen Oasis",
      subtitle: "Aloe Vera, Small Monstera, Areca Palm (Small)",
      rating: 4.7,
      reviews: 440,
      price: "₹2,199",
      oldPrice: "₹2,799",
      discount: "-21%",
      image: deskZenPackImg,
      features: [
        "Compact plants for space-conscious environments",
        "Reduces stress, improves focus & productivity",
        "Adds premium natural aesthetic to your workspace"
      ]
    },
  ], []);

  return (
    <section className="py-20 bg-[#F8F9F5] rounded-[2rem] border border-gray-100 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.03)] mb-20 isolate overflow-hidden relative">
      
      {/* Background botanical texture watermark */}
      <div className="absolute top-0 right-0 w-full h-full text-[#4A6731]/[0.02] -rotate-12 transform scale-150 pointer-events-none z-0 overflow-hidden font-black text-[30vw] leading-none select-none">
          BO<br />TAN<br />ICAL
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Creative Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <motion.div initial={{ rotate: -20, opacity: 0 }} whileInView={{ rotate: -12, opacity: 1 }} viewport={{ once: true }}>
                <Leaf className="text-[#6B8E4E] w-9 h-9" fill="#6B8E4E" strokeWidth={1.5}/>
            </motion.div>
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1f16] tracking-tight mb-1">
                Explore Our Seasonal Collections
              </h2>
              <p className="text-[#5a6054] text-sm md:text-base font-medium leading-relaxed max-w-xl">
                 Hand-picked botanical ensembles, curated by experts to elevate your specific space and lifestyle. Perfect for gifts and home refreshing.
              </p>
            </div>
          </div>
          <button className="flex flex-shrink-0 items-center justify-center gap-2.5 px-7 py-3.5 border border-gray-200 rounded-full text-sm font-bold text-[#1a1f16] bg-white hover:border-[#85B060] hover:text-[#85B060] hover:shadow-md transition-all">
            View All Packs
          </button>
        </div>

        {/* Detailed Grid Layout */}
        <div className="flex flex-col gap-6 md:gap-8">
          {collectionsData.map((pack) => (
            <CollectionCard key={pack.id} data={pack} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CuratedPacksBanner;