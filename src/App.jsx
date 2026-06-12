import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- Global Contexts & Loaders ---
import { AuthProvider } from './context/AuthContext'; 
import GlobalLoader from './components/GlobalLoader'; // IMPORTED LOADER

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
import AuthPage from './pages/auth/AuthPage'; 
import DashboardPage from './pages/dashboard/DashboardPage';

// --- Scroll Utility Component ---
const ScrollToAnchor = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
          const yOffset = -100; 
          window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
        }
      }, 100);
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
};

// --- Home Page Layout Wrapper ---
const HomePage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <div id="plants"><BestSelling /></div>
      <FeaturesBanner />
      <div id="categories"><FeaturedCategories /></div>
      <div id="services"><PlantCareServices /></div>
      <div id="about"><AboutSection /></div>
      <SeasonalCollection />
      <Testimonials />
      <GardenGallery />
      <PlantTips />
      <Newsletter />
      <FAQ />
      <div id="contact"><ContactSection /></div>
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <AuthProvider>
      <Router basename="/greennest-editorial-ui/">
        
        {/* INJECTED OUR GLOBAL LOADER AND SCROLLER */}
        <GlobalLoader />
        <ScrollToAnchor />
        
        <div className="relative font-sans antialiased text-neutral-900 bg-white selection:bg-[#85B060] selection:text-white overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plants" element={<PlantsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;