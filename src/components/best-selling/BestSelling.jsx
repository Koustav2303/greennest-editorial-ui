import React from 'react';
import { ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ProductCard from './ProductCard';

import monsteraImg from '../../assets/best-selling/monestera-deliciosa.png';
import snakePlantImg from '../../assets/best-selling/snake-plant.png';
import peaceLilyImg from '../../assets/best-selling/peace-lilly.png';
import zzPlantImg from '../../assets/best-selling/zz-plant.png';
import aloeVeraImg from '../../assets/best-selling/aloe-vera.png';

const BestSelling = () => {
  const plants = [
    {
      id: 1,
      title: "Monstera Deliciosa",
      scientificName: "Swiss Cheese Plant",
      discount: "-20%",
      rating: 4.8,
      reviews: "120",
      price: "₹1,599",
      originalPrice: "₹1,999",
      image: monsteraImg
    },
    {
      id: 2,
      title: "Snake Plant",
      scientificName: "Sansevieria Trifasciata",
      discount: "-15%",
      rating: 4.9,
      reviews: "450",
      price: "₹899",
      originalPrice: "₹1,050",
      image: snakePlantImg
    },
    {
      id: 3,
      title: "Peace Lily",
      scientificName: "Spathiphyllum",
      discount: "-10%",
      rating: 4.7,
      reviews: "280",
      price: "₹1,299",
      originalPrice: "₹1,450",
      image: peaceLilyImg
    },
    {
      id: 4,
      title: "ZZ Plant",
      scientificName: "Zamioculcas Zamiifolia",
      discount: "-10%",
      rating: 4.8,
      reviews: "191",
      price: "₹1,199",
      originalPrice: null,
      image: zzPlantImg
    },
    {
      id: 5,
      title: "Aloe Vera",
      scientificName: "Aloe Barbadensis",
      discount: "-25%",
      rating: 4.6,
      reviews: "210",
      price: "₹599",
      originalPrice: "₹799",
      image: aloeVeraImg
    }
  ];

  return (
    /* Changed background layout color to enhance high-contrast framing */
    <section className="py-16 md:py-24 bg-[#F8F9F6] relative z-10" id="plants">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        <SectionHeader />

        <div className="flex lg:grid lg:grid-cols-5 gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-6 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {plants.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
            View All Plants
            <ChevronRight size={16} className="text-gray-400" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BestSelling;