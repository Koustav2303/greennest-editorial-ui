import React, { useState } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import sideBannerBg from '../../assets/plants-page/Sidebanner-background.jpg';

const PlantsSidebar = ({ 
  searchQuery, setSearchQuery,
  selectedCategory, setSelectedCategory,
  priceRange, setPriceRange,
  activeFilters, setActiveFilters,
  handleResetAll, plantsData 
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter recommendations based on search input query string matching
  const suggestions = plantsData
    .filter(plant => plant.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 4);

  // Generic matrix handler for multi-select checkboxes
  const handleCheckboxChange = (group, value) => {
    setActiveFilters(prev => {
      const currentGroup = prev[group];
      const updatedGroup = currentGroup.includes(value)
        ? currentGroup.filter(item => item !== value)
        : [...currentGroup, value];
      return { ...prev, [group]: updatedGroup };
    });
  };

  // Reusable sub-component closure for generating consistent controlled checkbox trees
  const FilterSection = ({ title, groupKey, options }) => (
    <div className="mb-6">
      <h4 className="text-[#1a1f16] font-extrabold text-[15px] mb-3 tracking-tight">{title}</h4>
      <div className="flex flex-col gap-2.5">
        {options.map((opt, idx) => (
          <label key={idx} className="flex items-center gap-3 cursor-pointer group select-none">
            <input 
              type="checkbox" 
              checked={activeFilters[groupKey].includes(opt)}
              onChange={() => handleCheckboxChange(groupKey, opt)}
              className="w-4 h-4 rounded border-gray-300 text-[#4A6731] focus:ring-[#4A6731] cursor-pointer transition-colors"
            />
            <span className={`text-[13px] font-medium transition-colors duration-200 ${activeFilters[groupKey].includes(opt) ? 'text-[#4A6731] font-bold' : 'text-[#5a6054] group-hover:text-[#4A6731]'}`}>
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <aside className="w-full lg:w-[260px] xl:w-[280px] flex-shrink-0">
      
      {/* Sticky Mobile Header Toggle Element Configuration */}
      <div className="sticky top-[70px] md:top-[90px] z-30 bg-white/95 backdrop-blur-md pt-2 pb-4 lg:p-0 lg:static lg:bg-transparent lg:z-auto border-b border-gray-100 lg:border-none mb-2 lg:mb-8 flex flex-col gap-3">
        <div className="relative">
          <h4 className="hidden lg:block text-[#1a1f16] font-extrabold text-[15px] mb-3">Search Plant</h4>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Search for plants..." 
            className="w-full pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-2xl text-sm outline-none focus:border-[#85B060] transition-all shadow-sm"
          />
          <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 lg:top-[calc(50%+14px)] text-gray-400 pointer-events-none" />
          
          {suggestions.length > 0 && showSuggestions && searchQuery && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden z-50">
              {suggestions.map((plant) => (
                <div 
                  key={plant.id}
                  onMouseDown={() => { 
                    setSearchQuery(plant.title);
                    setShowSuggestions(false);
                  }}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-[#F4F7F2] cursor-pointer transition-colors border-b border-gray-50 last:border-none"
                >
                  <img src={plant.image} alt={plant.title} className="w-10 h-10 object-contain rounded-full bg-white shadow-sm border border-gray-100 p-1" />
                  <div className="flex flex-col">
                    <span className="text-[#1a1f16] text-xs font-bold">{plant.title}</span>
                    <span className="text-[#85B060] text-[10px] font-bold">{plant.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button 
          onClick={() => setIsMobileFilterOpen(true)}
          className="lg:hidden flex items-center justify-center gap-2 w-full py-2.5 bg-[#F4F7F2] border border-[#EAF0E3] rounded-xl text-sm font-bold text-[#4A6731] hover:bg-[#EAF0E3] transition-colors"
        >
          <SlidersHorizontal size={16} />
          Show Filters & Categories
        </button>
      </div>

      {/* Mobile Drawer Backplane Mask */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isMobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMobileFilterOpen(false)} 
      />

      {/* Core Interface Navigation Shell container */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-[85vw] max-w-[320px] bg-white p-6 overflow-y-auto transition-transform duration-300 shadow-2xl
        lg:static lg:w-full lg:p-0 lg:bg-transparent lg:shadow-none lg:overflow-visible lg:translate-x-0
        ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        
        <div className="flex items-center justify-between lg:hidden mb-6 border-b border-gray-100 pb-4">
          <h3 className="text-xl font-extrabold text-[#1a1f16]">Filters</h3>
          <button onClick={() => setIsMobileFilterOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-between mb-6">
          <h3 className="text-xl font-extrabold text-[#1a1f16]">Filter Plants</h3>
          <button className="text-[#6B8E4E] text-xs font-bold hover:underline" onClick={handleResetAll}>Reset All</button>
        </div>

        {/* Categories Section */}
        <div className="mb-8">
          <h4 className="text-[#1a1f16] font-extrabold text-[15px] mb-3">Categories</h4>
          <ul className="flex flex-col gap-1">
            {["All Plants", "Indoor Plants", "Outdoor Plants", "Succulents", "Flowering Plants", "Medicinal Plants", "Rare Exotic Plants", "Air Purifying Plants", "Hanging Plants", "Pet Friendly Plants"].map((cat) => (
              <li key={cat}>
                <button 
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-[13px] font-medium transition-all ${selectedCategory === cat ? 'bg-[#F4F7F2] text-[#4A6731] font-bold shadow-sm' : 'text-[#5a6054] hover:bg-gray-50'}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Ranger Element Slider Layout */}
        <div className="mb-8">
          <h4 className="text-[#1a1f16] font-extrabold text-[15px] mb-3">Max Price</h4>
          <input 
            type="range" 
            min="199" 
            max="4999" 
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full accent-[#4A6731] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-2" 
          />
          <div className="flex justify-between text-xs font-bold text-gray-500">
            <span>₹199</span>
            <span className="text-[#4A6731] bg-[#F4F7F2] px-2 py-0.5 rounded">Under ₹{priceRange.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Functional Parameter Mappings */}
        <FilterSection title="Light Requirement" groupKey="light" options={["Low Light", "Bright Indirect Light", "Direct Sunlight", "Low to Bright Light"]} />
        <FilterSection title="Watering Needs" groupKey="watering" options={["Low Watering", "Moderate Watering", "High Watering"]} />
        <FilterSection title="Plant Size" groupKey="size" options={["Small (Up to 12 inch)", "Medium (12 - 24 inch)", "Large (24 - 48 inch)", "Extra Large (48+ inch)"]} />
        <FilterSection title="Special Features" groupKey="features" options={["Air Purifying", "Pet Friendly", "Easy to Care", "Flowering", "Drought Tolerant"]} />

        <div className="mt-8">
          <button 
            className="w-full py-3 border border-gray-200 rounded-full text-sm font-bold text-[#1a1f16] bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm cursor-pointer"
            onClick={() => {
              handleResetAll();
              setIsMobileFilterOpen(false);
            }}
          >
            Reset Filters
          </button>
        </div>

        <div className="hidden lg:block relative rounded-2xl overflow-hidden p-6 isolate shadow-md mt-8">
          <img src={sideBannerBg} alt="Help" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-[#152c10]/90 z-10"></div>
          <div className="relative z-20 flex flex-col">
            <h4 className="text-white font-bold text-lg mb-2">Need Help?</h4>
            <p className="text-white/80 text-xs leading-relaxed font-medium mb-5">Our plant experts are here to help you choose the perfect plant.</p>
            <button className="bg-[#85B060] text-white text-xs font-bold py-2.5 px-4 rounded-full hover:bg-[#6e944f] transition-colors self-start shadow-sm">Chat with Expert</button>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default PlantsSidebar;