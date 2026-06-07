import React from 'react';
import { ChevronRight, Leaf } from 'lucide-react';
import ArticleCard from './ArticleCard';

const PlantTips = () => {
  const articles = [
    {
      id: 1,
      title: "Complete Guide to Indoor Plant Care",
      excerpt: "Tips for healthy indoor plants",
      image: "https://www.southernliving.com/thmb/05xnfs3ct6v7O9iAA2TZMRNsjL4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-823655632-2-36d7ea506c5a409ea5e25264852a9f6f.jpg"
    },
    {
      id: 2,
      title: "Monsoon Plant Care Guide",
      excerpt: "Essential care tips for rainy season",
      image: "https://doulton.in/wp-content/uploads/2023/08/hand-watering-plant-from-white-watering-can-1024x768.jpg"
    },
    {
      id: 3,
      title: "Best Low Light Plants for Home",
      excerpt: "Perfect plants for dim spaces",
      image: "https://abanahomes.com/cdn/shop/articles/Low-Light-Indoor-Plants.png?v=1739811033"
    },
    {
      id: 4,
      title: "How to Choose the Right Plant Pot",
      excerpt: "Guide to select perfect pots",
      image: "https://www.ikea.com/ext/ingkadam/m/57900e73e2691cfa/original/PH193266.jpg?f=s"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white relative z-10" id="guides">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1f16] tracking-tight">
              Plant Tips & Guides
            </h2>
            <Leaf className="text-[#6B8E4E] w-6 h-6 rotate-12" fill="#6B8E4E" />
          </div>
          
          <button className="hidden md:flex items-center gap-2 px-5 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#6B8E4E] hover:text-[#6B8E4E] transition-colors duration-300 group shadow-sm hover:shadow-md">
            View All Articles
            <ChevronRight size={16} className="text-gray-400 group-hover:text-[#6B8E4E] transition-colors" />
          </button>
        </div>

        {/* Responsive Layout Container */}
        <div className="flex lg:grid lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory gap-4 md:gap-5 pb-6 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {articles.map((article) => (
            <ArticleCard 
              key={article.id} 
              title={article.title} 
              excerpt={article.excerpt} 
              image={article.image} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlantTips;