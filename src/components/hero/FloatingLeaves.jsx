import React from 'react';
import leafImg from '../../assets/hero/leaf.png';

const FloatingLeaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      
      {/* 1. Top Left - Midground, slightly blurred, frames the main headline */}
      <img 
        src={leafImg} 
        alt="" 
        className="absolute top-[18%] left-[6%] w-24 md:w-36 blur-[2px] opacity-70 -rotate-12 animate-float will-change-transform"
      />
      
      {/* 2. Bottom Left - Sharp & small, draws the user's eye toward the Trust Banner */}
      <img 
        src={leafImg} 
        alt="" 
        className="absolute bottom-[22%] left-[4%] w-16 md:w-20 opacity-95 rotate-[25deg] animate-float-delayed drop-shadow-2xl will-change-transform"
      />
      
      {/* 3. Top Right - Large foreground element, heavy depth of field */}
      <img 
        src={leafImg} 
        alt="" 
        className="absolute top-[8%] -right-[2%] w-40 md:w-56 blur-[6px] opacity-80 rotate-[105deg] animate-float-slow will-change-transform"
      />

      {/* 4. Middle Right - Small, sharp accent drifting in the empty light patch */}
      <img 
        src={leafImg} 
        alt="" 
        className="absolute top-[45%] right-[18%] w-10 md:w-14 opacity-85 -rotate-45 animate-float drop-shadow-xl will-change-transform"
      />
      
      {/* 5. Bottom Right - Massive foreground sweep, heavily blurred */}
      <img 
        src={leafImg} 
        alt="" 
        className="absolute -bottom-[8%] -right-[4%] w-48 md:w-72 blur-[10px] opacity-90 -rotate-12 animate-float-delayed will-change-transform"
      />
      
    </div>
  );
};

export default FloatingLeaves;