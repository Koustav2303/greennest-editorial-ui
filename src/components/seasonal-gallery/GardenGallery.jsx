import React from 'react';
import SectionHeader from './SectionHeader';

// Importing gallery assets exactly as they are in your folder
import gallery1 from '../../assets/second-banner/garden-gallery1.jpg';
import gallery2 from '../../assets/second-banner/garden-gallery2.jpg';
import gallery3 from '../../assets/second-banner/garden-gallery3.jpg';
import gallery4 from '../../assets/second-banner/garden-gallery4.jpg';
import gallery5 from '../../assets/second-banner/garden-gallery5.jpg';
import gallery6 from '../../assets/second-banner/garden-gallery6.jpg';

const GalleryImage = ({ image }) => (
  // Min-width ensures it looks like a proper swipeable card on mobile
  // lg:min-w-0 resets it so the CSS grid controls the exact width on desktop
  <div className="group relative min-w-[200px] md:min-w-[260px] lg:min-w-0 h-48 md:h-64 lg:h-[200px] xl:h-[240px] rounded-[1.25rem] overflow-hidden cursor-pointer snap-start flex-shrink-0 border border-black/5 hover:shadow-lg transition-shadow duration-500">
    <img 
      src={image} 
      alt="Garden Gallery" 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform z-0"
    />
    {/* Very soft dark overlay only on hover to make it feel premium and interactive */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none"></div>
  </div>
);

const GardenGallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <section className="py-12 md:py-16 bg-white relative z-10" id="gallery">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        <SectionHeader title="Garden Gallery" buttonText="View Gallery" />

        {/* Responsive Layout: 
          Mobile & Tablet: Horizontal scrolling carousel
          Desktop: Locked 6-column grid matching the exact design
        */}
        <div className="flex lg:grid lg:grid-cols-6 overflow-x-auto snap-x snap-mandatory gap-3 md:gap-4 pb-6 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {images.map((img, index) => (
            <GalleryImage key={index} image={img} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default GardenGallery;