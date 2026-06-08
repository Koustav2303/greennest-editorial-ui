import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSelling from './components/best-selling/BestSelling';
import FeaturesBanner from './components/features-banner/FeaturesBanner';
import FeaturedCategories from './components/categories/FeaturedCategories';
import PlantCareServices from './components/plant-care/PlantCareServices';
import AboutSection from './components/about/AboutSection';
import SeasonalCollection from './components/seasonal-gallery/SeasonalCollection';
import Testimonials from './components/testimonials/Testimonials';
import GardenGallery from './components/seasonal-gallery/GardenGallery';
import PlantTips from './components/tips-guides/PlantTips';
import Newsletter from './components/newsletter-faq/Newsletter';
import FAQ from './components/newsletter-faq/FAQ';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="relative font-sans antialiased text-neutral-900 bg-white selection:bg-[#85B060] selection:text-white overflow-hidden">
      
      {/* Navigation */}
      <Navbar />
      
      <main>
        <Hero />
        <BestSelling />
        <FeaturedCategories />
        <FeaturesBanner />
        <PlantCareServices />
        <AboutSection />
        <SeasonalCollection />
        <Testimonials />
        <GardenGallery />
        <PlantTips />
        <Newsletter />
        <FAQ />
        <ContactSection />
      </main>

      {/* The Ultimate GSAP Footer */}
      <Footer />
      
    </div>
  );
}

export default App;