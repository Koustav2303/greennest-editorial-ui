import React from 'react';
import { Leaf } from 'lucide-react';
import { StoryCard, ValuesCard, QuoteCard, ImageCard } from './AboutCards';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative z-10" id="about">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Minimalist Section Header */}
        <div className="flex items-center justify-center gap-2 mb-10 md:mb-14">
          <Leaf className="text-[#6B8E4E] w-6 h-6 md:w-8 md:h-8 -rotate-12" fill="#6B8E4E" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1f16] tracking-tight">
            Behind the Foliage
          </h2>
        </div>

        {/* Master Bento Grid
          Mobile: 1 column
          Tablet (md): 2 columns
          Desktop (lg): 3 columns, auto-rows
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:auto-rows-[minmax(220px,auto)]">
          
          {/* Top Left: Massive Story Block (Spans 2 cols, 2 rows on desktop) */}
          <StoryCard />

          {/* Top Right: Tall Lifestyle Image (Spans 1 col, 2 rows on desktop) */}
          <ImageCard />

          {/* Bottom Left/Center: Values Strip (Spans 2 cols on desktop) */}
          <ValuesCard />

          {/* Bottom Right: Quote Square (Spans 1 col on desktop) */}
          <QuoteCard />

        </div>

      </div>
    </section>
  );
};

export default AboutSection;