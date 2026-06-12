import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const GlobalLoader = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // When the path changes, trigger the loading animation
    setIsLoading(true);
    setProgress(15);

    // Simulate network routing progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 85 ? prev + 15 : prev));
    }, 100);

    // Complete the loader and fade it out
    const completeTimeout = setTimeout(() => {
      setProgress(100);
      
      // Wait for the width transition to hit 100% before fading out
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 400); 
    }, 500); // 500ms total aesthetic loading time

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
    };
  }, [location.pathname]); // ONLY triggers on actual page swaps, not hash scrolls

  return (
    <>
      {/* 1. Sleek Top Progress Bar */}
      <div 
        className={`fixed top-0 left-0 h-[3px] bg-[#85B060] z-[99999] transition-all duration-300 ease-out ${
          isLoading ? 'opacity-100' : 'opacity-0 duration-500'
        }`}
        style={{ width: `${progress}%` }}
      >
        <div className="absolute top-0 right-0 h-full w-5 bg-white/50 blur-[2px] shadow-[0_0_10px_#85B060]"></div>
      </div>

      {/* 2. Frosted Glass Centered Overlay */}
      <div 
        className={`fixed inset-0 z-[99998] bg-white/70 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ease-in-out pointer-events-none ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={`transition-transform duration-500 ${isLoading ? 'scale-100' : 'scale-90'}`}>
          <div className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50">
            {/* Spinning Ring */}
            <div className="absolute inset-0 border-2 border-[#EAF0E3] border-t-[#85B060] rounded-full animate-spin"></div>
            {/* Pulsing Leaf */}
            <Leaf className="text-[#85B060] w-6 h-6 animate-pulse" fill="#85B060" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalLoader;