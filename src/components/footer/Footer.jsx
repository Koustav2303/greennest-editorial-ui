import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUp, Leaf } from 'lucide-react'; 

gsap.registerPlugin(ScrollTrigger);

// --- Native SVG Components for Social Brands ---
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%", 
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".footer-col", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".footer-bottom", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .from(".footer-brand-text", {
      y: 80,
      opacity: 0,
      rotationX: -45,
      transformOrigin: "bottom center",
      duration: 1.2,
      ease: "power4.out"
    }, "-=0.6");

  }, { scope: footerRef });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef} 
      className="bg-[#0A1408] text-white pt-20 pb-8 md:pt-28 md:pb-10 relative overflow-hidden z-10"
    >
      {/* MASSIVE BACKGROUND TEXT (Absolutely positioned behind content) */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none z-0 perspective-1000 overflow-hidden">
        <h1 className="footer-brand-text text-[18vw] md:text-[22vw] font-black text-white/[0.04] leading-[0.75] tracking-tighter select-none">
          GREENNEST
        </h1>
      </div>

      {/* MAIN FOREGROUND CONTENT (z-10 ensures it stays clickable over the text) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-20">
          
          <div className="lg:col-span-4 footer-col">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-[#85B060] w-7 h-7" />
              <span className="text-2xl font-bold tracking-tight">GreenNest.</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-medium mb-8">
              Transforming urban spaces into living, breathing sanctuaries. Cultivating mindfulness through premium botanical design.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#85B060] hover:border-[#85B060] transition-all duration-300 hover:-translate-y-1">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#85B060] hover:border-[#85B060] transition-all duration-300 hover:-translate-y-1">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#85B060] hover:border-[#85B060] transition-all duration-300 hover:-translate-y-1">
                <TwitterIcon />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6 footer-col">
            <h4 className="text-white font-bold mb-6 tracking-wide">Shop</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Indoor Plants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Outdoor Botanicals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rare Succulents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pots & Planters</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plant Care Kits</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 footer-col">
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal & Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 footer-col">
            <h4 className="text-white font-bold mb-6 tracking-wide">Support</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Contact Studio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plant Doctor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
            </ul>
          </div>

        </div>

        <div className="w-full h-[1px] bg-white/10 mb-8 footer-bottom"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 footer-bottom">
          <p className="text-white/40 text-xs font-medium">
            &copy; {new Date().getFullYear()} GreenNest Botanical Studio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-white/40 text-xs font-medium relative z-20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            
            <button 
              onClick={scrollToTop}
              className="ml-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#85B060] hover:text-white hover:border-[#85B060] transition-all duration-300 text-white group cursor-pointer"
            >
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;