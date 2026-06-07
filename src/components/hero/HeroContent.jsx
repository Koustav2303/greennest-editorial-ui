import React from 'react';

const HeroContent = () => {
  return (
    <div className="max-w-2xl text-left z-30 relative mt-20 md:mt-0">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] text-shadow-md tracking-tight">
        Bring <span className="text-[#85B060]">Nature</span> <br className="hidden md:block" />
        Into Your Home
      </h1>
      <p className="mt-6 text-lg md:text-xl text-white/90 max-w-lg text-shadow-sm font-medium">
        Discover our premium collection of plants that purify your air and brighten your life.
      </p>
    </div>
  );
};

export default HeroContent;