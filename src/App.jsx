import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSelling from './components/best-selling/BestSelling';
import FeaturesBanner from './components/features-banner/FeaturesBanner';
import FeaturedCategories from './components/categories/FeaturedCategories';
import PlantCareServices from './components/plant-care/PlantCareServices';

function App() {
  return (
    <div className="relative font-sans antialiased text-neutral-900 bg-white selection:bg-[#85B060] selection:text-white overflow-hidden">
      
      {/* Navigation */}
      <Navbar />
      
      <main>
        {/* 1. Cinematic Hero Area */}
        <Hero />
        
        {/* 2. E-commerce Products Slider */}
        <BestSelling />
        
        {/* 4. Visual Editorial Categories */}
        <FeaturedCategories />

        <FeaturesBanner />
        
        {/* 5. Services & Statistics Bento Grid */}
        <PlantCareServices />
        
      </main>
      
    </div>
  );
}

export default App;