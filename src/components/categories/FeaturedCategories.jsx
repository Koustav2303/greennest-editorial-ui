import React from 'react';
import { ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import CategoryCard from './CategoryCard';

import indoorImg from '../../assets/categories/indoor-plants.jpg'; 
import outdoorImg from '../../assets/categories/outdoor-plant.jpg';
import succulentImg from '../../assets/categories/succulents.jpg';
import floweringImg from '../../assets/categories/flower-plants.webp';
import medicinalImg from '../../assets/categories/medical-plants.webp';
import exoticImg from '../../assets/categories/exotic-plants.webp';

const FeaturedCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative z-10" id="categories">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        <SectionHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 lg:h-[550px]">
          
          {/* Left Side: Large Indoor Card */}
          <CategoryCard 
            title="Indoor Plants" 
            count="250+" 
            description="Transform your living spaces with our premium collection of air-purifying indoor botanicals. Designed to thrive in low-light environments, these lush, easy-to-care-for companions elevate your interior aesthetics while promoting a healthier, more serene home atmosphere."
            image={indoorImg} 
            className="h-[400px] lg:h-full col-span-1"
          />

          {/* Right Side: Nested Grids for dynamic rows */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4 lg:gap-6 h-full">
            
            {/* Top Row: 50/50 Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 h-[400px] sm:h-[250px] lg:h-1/2">
              <CategoryCard 
                title="Outdoor Plants" 
                count="180+" 
                description="Create a breathtaking landscape with our robust outdoor selections. Cultivated to withstand the elements, they turn your patio into a natural sanctuary."
                image={outdoorImg} 
                className="h-full w-full"
              />
              <CategoryCard 
                title="Succulents" 
                count="120+" 
                description="Discover the geometric beauty of resilient succulents. Perfect for modern spaces, these drought-tolerant desert gems require minimal watering."
                image={succulentImg} 
                className="h-full w-full"
              />
            </div>

            {/* Bottom Row: 33/33/33 Split */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 h-[600px] sm:h-[250px] lg:h-1/2">
              <CategoryCard 
                title="Flowering Plants" 
                count="150+" 
                description="Infuse your surroundings with vibrant colors and sweet seasonal fragrances. Nurtured to bring a continuous cycle of joy."
                image={floweringImg} 
                className="h-full w-full"
              />
              <CategoryCard 
                title="Medicinal Plants" 
                count="90+" 
                description="Cultivate your personal wellness garden. These functional plants offer natural remedies and soothing aromas right at home."
                image={medicinalImg} 
                className="h-full w-full"
              />
              <CategoryCard 
                title="Rare Exotic Plants" 
                count="80+" 
                description="Step into the extraordinary. Sourced globally, these striking, hard-to-find botanical treasures feature dramatic, unique foliage."
                image={exoticImg} 
                className="h-full w-full"
              />
            </div>

          </div>
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
            View All Categories
            <ChevronRight size={16} className="text-gray-400" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedCategories;