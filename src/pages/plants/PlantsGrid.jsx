import React, { useState, useRef, useEffect } from 'react';
import { LayoutGrid, List, ChevronDown, Check, Ghost } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PlantCard from './PlantCard';

const PlantsGrid = ({ filteredPlants, totalCount, searchQuery }) => {
  const [viewMode, setViewMode] = useState('grid'); 
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Popularity');
  const sortOptions = ['Popularity', 'Price: Low to High', 'Price: High to Low', 'Newest Arrivals', 'Highest Rated'];
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- Dynamic Sorting Routine ---
  const parsePrice = (priceStr) => parseInt(priceStr.replace(/[^0-9]/g, ''), 10);

  const processedAndSortedPlants = [...filteredPlants].sort((a, b) => {
    switch (selectedSort) {
      case 'Price: Low to High':
        return parsePrice(a.price) - parsePrice(b.price);
      case 'Price: High to Low':
        return parsePrice(b.price) - parsePrice(a.price);
      case 'Highest Rated':
        return b.rating - a.rating;
      case 'Newest Arrivals':
        return b.id - a.id; 
      case 'Popularity':
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="flex-1 flex flex-col">
      
      {/* Top Controller Segment Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 z-20">
        <span className="text-[#5a6054] text-sm font-medium">
          Showing {processedAndSortedPlants.length} of {totalCount} plants
        </span>
        
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          
          <div className="flex items-center gap-2 relative" ref={dropdownRef}>
            <span className="text-sm font-bold text-gray-500 hidden md:block">Sort By:</span>
            <button 
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center justify-between gap-6 px-5 py-2.5 min-w-[170px] border border-gray-200 rounded-full hover:border-[#85B060] transition-all bg-white shadow-sm text-sm font-bold text-[#1a1f16] group"
            >
              {selectedSort} 
              <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isSortOpen ? 'rotate-180 text-[#85B060]' : 'group-hover:text-[#85B060]'}`} />
            </button>

            <AnimatePresence>
              {isSortOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden z-50"
                >
                  <div className="py-2">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedSort(option);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-5 py-2.5 text-sm font-medium flex items-center justify-between transition-colors
                          ${selectedSort === option ? 'text-[#4A6731] bg-[#F4F7F2]' : 'text-gray-600 hover:bg-gray-50 hover:text-[#1a1f16]'}
                        `}
                      >
                        {option}
                        {selectedSort === option && <Check size={16} className="text-[#4A6731]" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-200 shadow-inner">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white text-[#4A6731] shadow-sm' : 'text-gray-400 hover:text-gray-600 hover:bg-white/50'}`}
              aria-label="Grid View"
            >
              <LayoutGrid size={20} strokeWidth={2.5} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white text-[#4A6731] shadow-sm' : 'text-gray-400 hover:text-gray-600 hover:bg-white/50'}`}
              aria-label="List View"
            >
              <List size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid Render Logic Area */}
      {processedAndSortedPlants.length > 0 ? (
        <motion.div 
          layout 
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }} 
          className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5" 
              : "flex flex-col gap-4 md:gap-5"
          }
        >
          <AnimatePresence mode="popLayout">
            {processedAndSortedPlants.map(plant => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 50, 
                  damping: 22, 
                  mass: 1.2,
                  layout: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
                }}
                key={plant.id}
                className={viewMode === 'grid' ? "h-full" : "w-full"}
              >
                <PlantCard data={plant} viewMode={viewMode} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200"
        >
          <Ghost size={48} className="text-gray-300 mb-4" />
          <h3 className="text-lg font-bold text-[#1a1f16] mb-2">No plants found</h3>
          <p className="text-gray-500 text-sm max-w-sm">
            We couldn't find any items matching your active filter criteria. Try expanding your parameters or resetting filters.
          </p>
        </motion.div>
      )}

      {/* Render Pagination Node block */}
      {processedAndSortedPlants.length > 0 && (
        <div className="flex justify-center mt-12 mb-8">
          <div className="flex items-center gap-1.5 md:gap-2">
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#85B060] hover:text-[#85B060] transition-colors"><ChevronDown size={16} className="rotate-90" /></button>
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#4A6731] text-white text-sm font-bold flex items-center justify-center shadow-md">1</button>
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full hover:bg-gray-100 text-gray-600 text-sm font-bold flex items-center justify-center transition-colors">2</button>
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full hover:bg-gray-100 text-gray-600 text-sm font-bold flex items-center justify-center transition-colors">3</button>
            <span className="w-6 md:w-8 flex justify-center text-gray-400 tracking-widest text-sm">...</span>
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full hover:bg-gray-100 text-gray-600 text-sm font-bold flex items-center justify-center transition-colors">7</button>
            <button className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#85B060] hover:text-[#85B060] transition-colors"><ChevronDown size={16} className="-rotate-90" /></button>
          </div>
        </div>
      )}

    </div>
  );
};

export default PlantsGrid;