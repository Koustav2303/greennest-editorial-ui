import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import PlantsHero from './PlantsHero';
import RoomMapFilter from './RoomMapFilter'; // Imported the brand new interactive architectural mapping module!
import PlantsSidebar from './PlantsSidebar';
import PlantsGrid from './PlantsGrid';

import CuratedPacksBanner from './collections/CuratedPacksBanner'; 
import BotanicalMatchmaker from './BotanicalMatchmaker'; 

import Newsletter from '../../components/newsletter-faq/Newsletter';
import Footer from '../../components/footer/Footer';
import { ChevronRight, Home } from 'lucide-react';

// Centralized Product Image Assets
import monsteraImg from '../../assets/plants-page/monestera-deliciosa.png';
import snakeImg from '../../assets/plants-page/snake-plant.png';
import peaceImg from '../../assets/plants-page/peace-lilly.png';
import zzImg from '../../assets/plants-page/zz-plant.png';
import aloeImg from '../../assets/plants-page/aloe-vera.png';
import arecaImg from '../../assets/plants-page/Chinese-Evergreen.png'; 
import rubberImg from '../../assets/plants-page/Rubber-plant.png';
import pothosImg from '../../assets/plants-page/Pothos.png';
import fiddleImg from '../../assets/plants-page/Fiddle-leaf.png';
import fernImg from '../../assets/plants-page/Boston-fern.png';
import aglaonemaImg from '../../assets/plants-page/Aglaonema.png';
import birdImg from '../../assets/plants-page/Bird-of-paradise.png';

const PlantsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Plants');
  const [priceRange, setPriceRange] = useState(4999);
  
  const [activeFilters, setActiveFilters] = useState({
    light: [],
    watering: [],
    size: [],
    features: []
  });

  const plantsData = useMemo(() => [
    { id: 1, title: "Monstera Deliciosa", subtitle: "Swiss Cheese Plant", rating: 4.8, reviews: 320, price: "₹1,599", oldPrice: "₹2,299", discount: "-30%", image: monsteraImg, category: "Indoor Plants", light: "Bright Indirect Light", watering: "Moderate Watering", size: "Medium (12 - 24 inch)", features: ["Air Purifying", "Easy to Care"] },
    { id: 2, title: "Snake Plant", subtitle: "Sansevieria trifasciata", rating: 4.9, reviews: 450, price: "₹899", oldPrice: "₹1,050", discount: "-15%", image: snakeImg, category: "Indoor Plants", light: "Low Light", watering: "Low Watering", size: "Medium (12 - 24 inch)", features: ["Air Purifying", "Drought Tolerant", "Easy to Care"] },
    { id: 3, title: "Peace Lily", subtitle: "Spathiphyllum", rating: 4.7, reviews: 280, price: "₹1,299", oldPrice: "₹1,660", discount: "-20%", image: peaceImg, category: "Flowering Plants", light: "Low Light", watering: "Moderate Watering", size: "Medium (12 - 24 inch)", features: ["Air Purifying", "Flowering"] },
    { id: 4, title: "ZZ Plant", subtitle: "Zamioculcas Zamiifolia", rating: 4.6, reviews: 210, price: "₹1,199", oldPrice: null, discount: null, image: zzImg, category: "Indoor Plants", light: "Low Light", watering: "Low Watering", size: "Small (Up to 12 inch)", features: ["Easy to Care", "Drought Tolerant"] },
    { id: 5, title: "Aloe Vera", subtitle: "Aloe Barbadensis", rating: 4.6, reviews: 210, price: "₹599", oldPrice: "₹799", discount: "-25%", image: aloeImg, category: "Succulents", light: "Direct Sunlight", watering: "Low Watering", size: "Small (Up to 12 inch)", features: ["Medicinal Plants", "Drought Tolerant"] },
    { id: 6, title: "Areca Palm", subtitle: "Dypsis lutescens", rating: 4.8, reviews: 275, price: "₹1,349", oldPrice: "₹1,499", discount: "-10%", image: arecaImg, category: "Air Purifying Plants", light: "Bright Indirect Light", watering: "Moderate Watering", size: "Large (24 - 48 inch)", features: ["Air Purifying", "Pet Friendly"] },
    { id: 7, title: "Rubber Plant", subtitle: "Ficus elastica", rating: 4.7, reviews: 190, price: "₹1,299", oldPrice: null, discount: null, image: rubberImg, category: "Indoor Plants", light: "Bright Indirect Light", watering: "Moderate Watering", size: "Large (24 - 48 inch)", features: ["Air Purifying"] },
    { id: 8, title: "Pothos", subtitle: "Epipremnum aureum", rating: 4.8, reviews: 520, price: "₹399", oldPrice: "₹469", discount: "-15%", image: pothosImg, category: "Hanging Plants", light: "Low to Bright Light", watering: "Moderate Watering", size: "Small (Up to 12 inch)", features: ["Air Purifying", "Easy to Care"] },
    { id: 9, title: "Fiddle Leaf Fig", subtitle: "Ficus lyrata", rating: 4.9, reviews: 160, price: "₹2,399", oldPrice: "₹2,999", discount: "-20%", image: fiddleImg, category: "Indoor Plants", light: "Bright Indirect Light", watering: "Moderate Watering", size: "Extra Large (48+ inch)", features: ["Air Purifying"] },
    { id: 10, title: "Boston Fern", subtitle: "Nephrolepis exaltata", rating: 4.7, reviews: 140, price: "₹549", oldPrice: null, discount: null, image: fernImg, category: "Hanging Plants", light: "Bright Indirect Light", watering: "High Watering", size: "Medium (12 - 24 inch)", features: ["Air Purifying", "Pet Friendly"] },
    { id: 11, title: "Aglaonema", subtitle: "Aglaonema commutatum", rating: 4.6, reviews: 210, price: "₹699", oldPrice: null, discount: null, image: aglaonemaImg, category: "Rare Exotic Plants", light: "Low Light", watering: "Low Watering", size: "Small (Up to 12 inch)", features: ["Air Purifying", "Easy to Care"] },
    { id: 12, title: "Bird of Paradise", subtitle: "Strelitzia reginae", rating: 4.8, reviews: 180, price: "₹1,899", oldPrice: null, discount: null, image: birdImg, category: "Outdoor Plants", light: "Direct Sunlight", watering: "High Watering", size: "Extra Large (48+ inch)", features: ["Flowering"] },
  ], []);

  const handleResetAll = () => {
    setSearchQuery('');
    setSelectedCategory('All Plants');
    setPriceRange(4999);
    setActiveFilters({ light: [], watering: [], size: [], features: [] });
  };

  const filteredPlants = useMemo(() => {
    return plantsData.filter(plant => {
      const matchesSearch = plant.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            plant.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All Plants' || plant.category === selectedCategory;
      const numericalPrice = parseInt(plant.price.replace(/[^0-9]/g, ''), 10);
      const matchesPrice = numericalPrice <= priceRange;
      const matchesLight = activeFilters.light.length === 0 || activeFilters.light.includes(plant.light);
      const matchesWatering = activeFilters.watering.length === 0 || activeFilters.watering.includes(plant.watering);
      const matchesSize = activeFilters.size.length === 0 || activeFilters.size.includes(plant.size);
      const matchesFeatures = activeFilters.features.length === 0 || 
        activeFilters.features.every(f => plant.features.includes(f));

      return matchesSearch && matchesCategory && matchesPrice && matchesLight && matchesWatering && matchesSize && matchesFeatures;
    });
  }, [searchQuery, selectedCategory, priceRange, activeFilters, plantsData]);

  return (
    <div className="relative font-sans antialiased text-neutral-900 bg-white selection:bg-[#85B060] selection:text-white overflow-hidden">
      <Navbar />
      
      <div className="pt-20 md:pt-[90px]">
        <PlantsHero />
      </div>
      
      <main className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mt-6 mb-8 select-none relative z-10">
          <Home size={14} className="text-gray-400" />
          <ChevronRight size={12} />
          <Link to="/" className="hover:text-[#4A6731] transition-colors duration-200 cursor-pointer relative z-10">Home</Link>
          <ChevronRight size={12} />
          <span className="text-[#1a1f16]">All Plants</span>
        </div>

        {/* --- MOUNT THE INTERACTIVE ROOM MAP COMPONENT HERE --- */}
        {/* Placed prominently above the catalog split structure */}
        <RoomMapFilter activeFilters={activeFilters} setActiveFilters={setActiveFilters} />

        {/* 2-Column Split Layout Area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 pb-12">
          <PlantsSidebar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
            handleResetAll={handleResetAll}
            plantsData={plantsData}
          />
          <PlantsGrid 
            filteredPlants={filteredPlants} 
            totalCount={plantsData.length}
            searchQuery={searchQuery}
          />
        </div>

        {/* Botanical Matchmaker Quiz Module */}
        <BotanicalMatchmaker plantsData={plantsData} />

      </main>

      <CuratedPacksBanner />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PlantsPage;