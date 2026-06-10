import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';
import Newsletter from '../../components/newsletter-faq/Newsletter';

import ServicesHero from './ServicesHero';
import ServicesGrid from './ServicesGrid';
import ServiceProcess from './ServiceProcess';
import MeetTheTeam from './MeetTheTeam'; // Imported the new Botanist Roster!
import WhyChooseUs from './WhyChooseUs';
import ServicesTestimonials from './ServicesTestimonials';
import ServicesCTA from './ServicesCTA';

const ServicesPage = () => {
  return (
    <div className="relative font-sans antialiased text-neutral-900 bg-white selection:bg-[#85B060] selection:text-white overflow-x-hidden">
      
      <Navbar />
      <ServicesHero />
      
      <main className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col gap-16 md:gap-20 py-16 md:py-24">
        <ServicesGrid />
        <ServiceProcess />
      </main>

      {/* NEW: Full-width continuous scrolling roster */}
      <MeetTheTeam />

      <WhyChooseUs />
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-20 pb-24 md:pt-32 flex flex-col gap-12 md:gap-16">
        <ServicesTestimonials />
        <ServicesCTA />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ServicesPage;