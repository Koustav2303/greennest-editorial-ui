import React from 'react';

// Importing your specific background asset from last-banner folder
import bgImage from '../../assets/last-banner/background.jpg';

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-8 md:py-10 bg-white relative z-10">
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Banner Container */}
        <div
          className="relative rounded-[2rem] overflow-hidden px-6 py-8 md:py-10 flex flex-col items-center justify-center text-center shadow-sm border border-neutral-100 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-white/70 md:bg-white/55 pointer-events-none"></div>
          
          {/* Foreground Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1f16] tracking-tight mb-2">
              Stay Green, Stay Updated!
            </h2>
            
            <p className="text-[#5a6054] text-sm md:text-[15px] font-medium mb-5 max-w-md leading-relaxed">
              Get plant care tips, exclusive offers & new arrivals delivered to your inbox.
            </p>

            {/* Nested Input Form */}
            <form className="w-full max-w-[460px] bg-white p-1 rounded-full shadow-md border border-gray-200 flex items-center transition-all duration-300 focus-within:shadow-lg focus-within:border-[#85B060]/40 mb-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-transparent px-5 py-2 text-sm text-[#1a1f16] placeholder-gray-400 outline-none w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-[#4A6731] hover:bg-[#3A5226] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Subscribe Now
              </button>
            </form>

            {/* Social Proof Avatars */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/60">
              <div className="flex -space-x-2">
                {[47, 11, 32].map((id, i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${id}`} 
                    alt="Subscriber" 
                    className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <span className="text-[#3b4135] text-[11px] md:text-xs font-bold tracking-wide">Join 10K+ plant lovers</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;