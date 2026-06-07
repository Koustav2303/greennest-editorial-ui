import React from 'react';
import { Quote, Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';

// 1. The Main Story Tile (Dark & Expansive)
export const StoryCard = () => (
  <div className="relative overflow-hidden rounded-[2rem] col-span-1 lg:col-span-2 row-span-2 bg-[#152c10] p-8 md:p-12 flex flex-col justify-center group isolate">
    {/* Subtle animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a3814] via-[#152c10] to-black opacity-80 z-0"></div>
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#85B060]/10 rounded-full blur-3xl group-hover:bg-[#85B060]/20 transition-all duration-700 z-0"></div>
    
    <div className="relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
        <Leaf size={14} className="text-[#85B060]" />
        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Our Story</span>
      </div>
      
      <h3 className="text-white text-3xl md:text-5xl font-bold leading-[1.15] mb-6 tracking-tight">
        Rooted in nature.<br /> Designed for the <span className="text-[#85B060] italic">modern sanctuary.</span>
      </h3>
      
      <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl font-medium">
        We believe that integrating nature into our daily lives isn't just an aesthetic choice—it's a fundamental step toward mindfulness and well-being. GreenNest was born from a simple desire: to make premium, air-purifying botanicals accessible to urban homes, transforming empty corners into living, breathing ecosystems.
      </p>
    </div>
  </div>
);

// 2. The Values Strip (Minimalist & Functional)
export const ValuesCard = () => {
  const values = [
    { icon: <ShieldCheck size={24} />, title: "Uncompromising Quality", desc: "Hand-selected flora nurtured in optimal greenhouse conditions." },
    { icon: <Leaf size={24} />, title: "Sustainable Practices", desc: "Eco-friendly packaging and zero-waste soil management." },
    { icon: <HeartHandshake size={24} />, title: "Lifelong Support", desc: "Expert botanical guidance long after your plant arrives." }
  ];

  return (
    <div className="col-span-1 lg:col-span-2 bg-[#F8F9F6] rounded-[2rem] p-6 md:p-8 flex flex-col justify-center border border-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {values.map((val, idx) => (
          <div key={idx} className="flex flex-col gap-2 group cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#4A6731] group-hover:-translate-y-1 transition-transform duration-300">
              {val.icon}
            </div>
            <h4 className="text-[#1a1f16] font-bold text-base mt-2">{val.title}</h4>
            <p className="text-gray-500 text-xs font-medium leading-relaxed">{val.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. The Quote Tile (Soft & Elegant)
export const QuoteCard = () => (
  <div className="col-span-1 bg-[#EAF0E3] rounded-[2rem] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group">
    <Quote size={120} className="absolute -top-6 -left-6 text-[#85B060]/10 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
    
    <div className="relative z-10 mt-auto">
      <p className="text-[#2A3F1D] text-lg md:text-xl font-medium italic leading-snug mb-6">
        "A home without plants is like a canvas without paint. We don't just sell greenery; we deliver living art."
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#4A6731] flex items-center justify-center text-white font-bold text-sm">
          GN
        </div>
        <div>
          <h5 className="text-[#1a1f16] font-bold text-sm">The GreenNest Team</h5>
          <p className="text-[#4A6731] text-xs font-semibold">Lead Botanists</p>
        </div>
      </div>
    </div>
  </div>
);

// 4. The Tall Image Tile (Cinematic Focus)
export const ImageCard = () => (
  // Note: Using a high-quality Unsplash placeholder. You can replace this src with your own asset later.
  <div className="col-span-1 row-span-2 rounded-[2rem] overflow-hidden relative group min-h-[300px] lg:min-h-0">
    <img 
      src="https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=2000&auto=format&fit=crop" 
      alt="GreenNest Lifestyle" 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
    />
    {/* Inner shadow to give the image premium depth */}
    <div className="absolute inset-0 shadow-[inset_0_-100px_100px_-50px_rgba(0,0,0,0.5)] z-10"></div>
  </div>
);