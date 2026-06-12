import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Global Contexts ---
import { AuthProvider } from './context/AuthContext'; // Import the new AuthProvider

// --- Global Layout Components ---
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';

// --- Home Page Components ---
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

// --- Additional Pages ---
import PlantsPage from './pages/plants/PlantsPage';
import ServicesPage from './pages/services/ServicesPage'; 
import AuthPage from './pages/auth/AuthPage'; // Import the new Auth Page

// --- Home Page Layout Wrapper ---
const HomePage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <BestSelling />
      <FeaturesBanner />
      <FeaturedCategories />
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
    <Footer />
  </>
);

function App() {
  return (
    // WRAP EVERYTHING IN AuthProvider to make user state globally available
    <AuthProvider>
      {/* basename handles the GitHub Pages subdirectory routing seamlessly */}
      <Router basename="/greennest-editorial-ui/">
        <div className="relative font-sans antialiased text-neutral-900 bg-white selection:bg-[#85B060] selection:text-white overflow-hidden">
          <Routes>
            {/* Main Landing Page */}
            <Route path="/" element={<HomePage />} />
            
            {/* Detailed Plant Catalog Page */}
            <Route path="/plants" element={<PlantsPage />} />

            {/* Services Page Route */}
            <Route path="/services" element={<ServicesPage />} />

            {/* NEW: Authentication Page Route */}
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;