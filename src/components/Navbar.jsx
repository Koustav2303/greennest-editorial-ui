import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import logo from '../assets/navbar/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', active: true },
    { name: 'Plants', active: false },
    { name: 'Categories', active: false },
    { name: 'Services', active: false },
    { name: 'About', active: false },
    { name: 'Contact', active: false },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center w-full">
      
      <nav className="relative w-full max-w-7xl bg-[#1a1f16]/60 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        
        {/* Left: Logo */}
        <div className="flex items-center shrink-0">
          <img 
            src={logo} 
            alt="GreenNest Nursery" 
            className="h-8 md:h-10 w-auto object-contain" 
          />
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.name.toLowerCase()}`}
              className="relative text-sm font-medium transition-colors duration-300 group"
            >
              <span className={link.active ? "text-white" : "text-white/70 group-hover:text-white"}>
                {link.name}
              </span>
              {link.active && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* Right: Actions & CTA (Desktop & Tablet) */}
        <div className="hidden md:flex items-center space-x-5">
          
          {/* Expanding Glassmorphic Search Bar */}
          <div className="relative group flex items-center">
            <Search className="absolute left-3 text-white/60 pointer-events-none" size={16} strokeWidth={2.5} />
            <input 
              type="text" 
              placeholder="Search plants..." 
              className="bg-white/10 border border-white/10 text-white placeholder-white/50 text-sm rounded-full pl-9 pr-4 py-2 outline-none transition-all duration-300 w-36 focus:w-56 focus:bg-white/20 focus:border-white/30 focus:ring-2 focus:ring-white/10 backdrop-blur-sm"
            />
          </div>
          
          <button className="relative text-white/80 hover:text-white transition-colors">
            <ShoppingCart size={20} strokeWidth={2} />
            <span className="absolute -top-1.5 -right-2 bg-white text-green-900 text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          
          <button className="text-white/80 hover:text-white transition-colors">
            <User size={20} strokeWidth={2} />
          </button>

          {/* Gradient Button */}
          <button className="bg-gradient-to-r from-[#6B8E4E] via-[#85B060] to-[#6B8E4E] bg-[length:200%_auto] hover:bg-right text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-500 shadow-[0_0_15px_rgba(107,142,78,0.4)] hover:shadow-[0_0_25px_rgba(107,142,78,0.6)]">
            Shop Plants
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <button className="relative text-white/80 hover:text-white transition-colors">
            <ShoppingCart size={20} strokeWidth={2} />
            <span className="absolute -top-1.5 -right-2 bg-white text-green-900 text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-auto w-full bg-[#1a1f16]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden">
            
            {/* Mobile Search Input */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" size={16} strokeWidth={2.5} />
              <input 
                type="text" 
                placeholder="Search plants..." 
                className="w-full bg-white/10 border border-white/10 text-white placeholder-white/50 text-sm rounded-full pl-9 pr-4 py-3 outline-none focus:bg-white/20 focus:border-white/30 backdrop-blur-sm"
              />
            </div>

            <div className="flex flex-col space-y-4 text-center mt-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.name.toLowerCase()}`}
                  className={`text-base font-medium ${link.active ? "text-white" : "text-white/70"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <hr className="border-white/10 my-2" />
            
            <div className="flex justify-center space-x-6">
              <button className="text-white/80 hover:text-white flex items-center gap-2 text-sm">
                <User size={20} /> Profile
              </button>
            </div>
            
            {/* Gradient Button Mobile */}
            <button className="mt-2 w-full bg-gradient-to-r from-[#6B8E4E] via-[#85B060] to-[#6B8E4E] bg-[length:200%_auto] hover:bg-right text-white py-3 rounded-xl text-sm font-semibold transition-all duration-500 shadow-[0_0_15px_rgba(107,142,78,0.4)]">
              Shop Plants
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;