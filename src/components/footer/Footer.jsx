import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ChevronDown, ArrowUpRight } from 'lucide-react';

// --- Custom SVG Brand Icons to bypass Lucide versioning issues ---
const FacebookIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// --- Reusable Footer Column Component with Mobile Accordion Logic ---
const FooterColumn = ({ title, links, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-100 md:border-none py-4 md:py-0">
      <button 
        onClick={onToggle}
        className="flex items-center justify-between w-full md:cursor-default md:pointer-events-none group"
        aria-expanded={isOpen}
      >
        <h4 className="text-[#1a1f16] font-extrabold text-[15px] tracking-tight">{title}</h4>
        <ChevronDown 
          size={18} 
          className={`md:hidden text-gray-400 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'rotate-180 text-[#1a1f16]' : ''}`} 
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] md:max-h-none ${isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 md:opacity-100 md:mt-6'}`}
      >
        <ul className="flex flex-col gap-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link 
                to={link.path} 
                className="text-[#5a6054] text-sm font-medium hover:text-[#4A6731] transition-colors flex items-center group/link w-fit"
              >
                {link.label}
                <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  // State to track which accordion is open on mobile
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerData = {
    shop: [
      { label: 'All Plants', path: '/plants' },
      { label: 'Indoor Plants', path: '/plants' },
      { label: 'Outdoor Plants', path: '/plants' },
      { label: 'Plant Care Accessories', path: '#' },
      { label: 'Ceramic Pots', path: '#' },
    ],
    support: [
      { label: 'Track Your Order', path: '#' },
      { label: 'Shipping & Delivery', path: '#' },
      { label: 'Returns & Refunds', path: '#' },
      { label: 'Plant Care Guide', path: '#' },
      { label: 'Contact Us', path: '/#contact' }, // Routing back to home page contact section
    ],
    company: [
      { label: 'About Greennest', path: '/#about' }, // Routing back to home page about section
      { label: 'Sustainability', path: '#' },
      { label: 'Careers', path: '#' },
      { label: 'Privacy Policy', path: '/privacy' }, // UPDATED PATH
      { label: 'Terms of Service', path: '/terms' }, // UPDATED PATH
    ]
  };

  return (
    <footer className="bg-[#F8F9F5] border-t border-gray-200 pt-16 md:pt-24 pb-8 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
          
          {/* Brand & Newsletter Section */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Leaf className="text-[#6B8E4E] w-8 h-8" fill="#6B8E4E" />
              <span className="text-2xl font-black text-[#1a1f16] tracking-tight">Greennest.</span>
            </Link>
            <p className="text-[#5a6054] text-sm leading-relaxed max-w-sm mb-8 font-medium">
              Elevating spaces with premium botanical collections. Expertly curated, sustainably sourced, and delivered with care to your doorstep.
            </p>
            
            {/* Social Icons Array using the custom SVGs */}
            <div className="flex items-center gap-4 mt-auto">
              {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1a1f16] hover:bg-[#1a1f16] hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section - Accordions on Mobile */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
            <FooterColumn 
              title="Shop" 
              links={footerData.shop} 
              isOpen={openSection === 'shop'} 
              onToggle={() => toggleSection('shop')} 
            />
            <FooterColumn 
              title="Support" 
              links={footerData.support} 
              isOpen={openSection === 'support'} 
              onToggle={() => toggleSection('support')} 
            />
            <FooterColumn 
              title="Company" 
              links={footerData.company} 
              isOpen={openSection === 'company'} 
              onToggle={() => toggleSection('company')} 
            />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-4 text-center md:text-left">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Greennest Botanical. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-bold text-gray-400 justify-center md:justify-start">
            {/* UPDATED: Changed <a> to <Link> for SPA routing */}
            <Link to="/privacy" className="hover:text-[#4A6731] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#4A6731] transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;