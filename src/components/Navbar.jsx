import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Search, ShoppingCart, User, Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // CHANGED: Nav paths now point to hashes on the root page
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Plants', path: '/#plants' },
    { name: 'Categories', path: '/#categories' },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ];

  // Helper to determine if a link is active
  const checkIsActive = (link) => {
    if (link.path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    // Highlights if they are on the homepage looking at the section, OR if they clicked through to the actual details page
    const targetHash = link.path.replace('/', '');
    const isHashMatch = location.pathname === '/' && location.hash === targetHash;
    const isPageMatch = location.pathname.startsWith(`/${link.name.toLowerCase()}`);
    
    return isHashMatch || isPageMatch;
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-4 md:px-8 py-4 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className={`max-w-[1400px] mx-auto flex items-center justify-between rounded-full transition-all duration-500 ${isScrolled ? 'bg-[#1a1f16]/95 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] py-3 px-6 md:px-8 border border-white/10' : 'bg-[#1a1f16]/80 backdrop-blur-sm py-4 px-6 md:px-8 shadow-lg'}`}>
          
          <Link to="/" className="flex items-center gap-2 z-50 shrink-0">
            <Leaf className="text-[#85B060] w-6 h-6 md:w-7 md:h-7" fill="#85B060" />
            <div className="flex flex-col">
              <span className="text-white font-black text-lg md:text-xl leading-none tracking-tight">GreenNest</span>
              <span className="text-[#85B060] text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase leading-none mt-1">Nursery</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = checkIsActive(link);
              return (
                <Link key={link.name} to={link.path} className={`relative text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`}>
                  {link.name}
                  {isActive && <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#85B060] rounded-full"></span>}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <div className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 hover:bg-white/20 transition-colors cursor-text">
              <Search size={16} className="text-white/60" />
              <input type="text" placeholder="Search plants..." className="bg-transparent border-none outline-none text-white text-xs w-28 placeholder:text-white/50" />
            </div>

            <div className="w-px h-5 bg-white/20"></div>

            <Link to="/cart" className="relative text-white/90 hover:text-[#85B060] transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#85B060] text-white text-[9px] font-black flex items-center justify-center rounded-full border border-[#1a1f16]">2</span>
            </Link>

            {user ? (
              <div className="relative group cursor-pointer ml-1">
                <div className="w-9 h-9 rounded-full bg-[#85B060] border-2 border-[#1a1f16] flex items-center justify-center text-[#1a1f16] font-black text-sm shadow-md hover:scale-105 transition-transform">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="absolute right-0 top-full mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col py-2 z-50">
                  <div className="px-5 py-3 border-b border-gray-50 mb-1">
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Signed in as</p>
                    <p className="text-sm font-extrabold text-[#1a1f16] truncate">{user.name}</p>
                    <p className="text-xs text-gray-500 font-medium truncate">{user.email}</p>
                  </div>
                  <Link to="/dashboard" className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-gray-600 hover:text-[#4A6731] hover:bg-[#F8F9F5] transition-colors">
                    <LayoutDashboard size={16} /> Dashboard
                  </Link>
                  <button onClick={logout} className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-left text-red-500 hover:bg-red-50 transition-colors w-full mt-1 border-t border-gray-50">
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/auth" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#85B060] border border-white/20 hover:border-[#85B060] flex items-center justify-center text-white transition-all shadow-sm ml-1">
                <User size={16} />
              </Link>
            )}

            <Link to="/plants" className="ml-2 bg-[#85B060] hover:bg-[#6B8E4E] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-colors shadow-lg hover:shadow-xl">
              Shop Plants
            </Link>
          </div>

          <button className="lg:hidden text-white p-1 hover:text-[#85B060] transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0a1508]/60 backdrop-blur-sm z-[100] lg:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      <div className={`fixed top-0 right-0 h-full w-[85vw] sm:w-[350px] bg-white z-[110] transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col shadow-2xl lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <span className="text-[#1a1f16] font-black text-xl tracking-tight">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
          <div className="flex items-center gap-3 bg-[#F8F9F5] border border-gray-200 rounded-2xl px-4 py-3">
            <Search size={18} className="text-gray-400" />
            <input type="text" placeholder="Search plants..." className="bg-transparent border-none outline-none text-[#1a1f16] text-sm w-full font-medium" />
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = checkIsActive(link);
              return (
                <Link key={link.name} to={link.path} className={`text-lg font-extrabold py-3 px-4 rounded-2xl transition-colors ${isActive ? 'bg-[#EAF0E3] text-[#4A6731]' : 'text-[#1a1f16] hover:bg-gray-50'}`}>
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-6 border-t border-gray-100 flex flex-col gap-4 bg-gray-50/50">
          {user ? (
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#85B060] flex items-center justify-center text-white font-black text-lg">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col flex-1 overflow-hidden">
                    <span className="text-sm font-extrabold text-[#1a1f16] truncate">{user.name}</span>
                    <span className="text-xs font-medium text-gray-500 truncate">{user.email}</span>
                  </div>
                  <Link to="/dashboard" className="p-2 text-gray-400 hover:text-[#4A6731] transition-colors">
                    <LayoutDashboard size={20} />
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={logout} className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-red-200 bg-red-50 text-red-600 rounded-full font-bold text-sm hover:bg-red-100 transition-colors">
                    <LogOut size={16} /> Sign Out
                  </button>
                  <Link to="/cart" className="relative w-[52px] h-[52px] bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#1a1f16] shadow-sm shrink-0">
                    <ShoppingCart size={20} />
                    <span className="absolute top-0 right-0 w-4 h-4 bg-[#85B060] text-white text-[10px] font-black flex items-center justify-center rounded-full border border-white">2</span>
                  </Link>
                </div>
             </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/auth" className="flex-1 py-3.5 border border-gray-200 bg-white text-[#1a1f16] rounded-full font-bold text-sm text-center shadow-sm flex items-center justify-center gap-2">
                <User size={16} /> Sign In
              </Link>
              <Link to="/cart" className="relative w-[52px] h-[52px] bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#1a1f16] shadow-sm shrink-0">
                <ShoppingCart size={20} />
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#85B060] text-white text-[10px] font-black flex items-center justify-center rounded-full border border-white">2</span>
              </Link>
            </div>
          )}
          <Link to="/plants" className="w-full bg-[#85B060] text-white py-3.5 rounded-full font-bold text-sm text-center shadow-lg">
            Shop All Plants
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;