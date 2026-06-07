import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSelling from './components/best-selling/BestSelling';
import FeaturesBanner from './components/features-banner/FeaturesBanner';
import FeaturedCategories from './components/categories/FeaturedCategories';
import PlantCareServices from './components/plant-care/PlantCareServices';
import AboutSection from './components/about/AboutSection';

function App() {
  return (
    <div className="relative font-sans antialiased text-neutral-900 bg-white selection:bg-[#85B060] selection:text-white overflow-hidden">
      
      {/* 0. Navigation */}
      <Navbar />
      
      <main>
        {/* 1. Cinematic Hero Area */}
        <Hero />
        
        {/* 2. E-commerce Products Slider */}
        <BestSelling />

        {/* 3. Trust Indicators Container */}
        <FeaturesBanner />
        
        {/* 4. Visual Editorial Categories */}
        <FeaturedCategories />
        
        {/* 5. Services & Statistics Bento Grid */}
        <PlantCareServices />

        {/* 6. Brand Story & Mission */}
        <AboutSection />
        
      </main>
      
    </div>
  );
}

export default App;