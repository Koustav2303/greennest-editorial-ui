import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, ChevronRight, Ruler, ShieldCheck, Truck, HelpCircle, 
  ArrowRight, Award, Flame, CloudRain, Snowflake, Sprout, 
  Sparkles, Calendar, Heart, ArrowLeftRight, BookOpen, Sun,
  CheckCircle2, MessageSquare, RefreshCw, Box, Globe
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';

// --- Pack Data Definition ---
const seasonalPacksData = [
  {
    id: 'summer-bloom',
    season: 'Summer',
    badgeIcon: Flame,
    title: 'Summer Bloom Pack',
    desc: 'Brighten your space with vibrant, sun-loving blooms.',
    mainImg: 'https://images.unsplash.com/photo-1587667678653-f33ab0f57674?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bundlePrice: 1499,
    originalPrice: 1999,
    discount: '25% OFF',
    plantCount: 4,
    plants: [
      { name: 'Hibiscus', price: 299, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjPFWRF2g849UsnhPmoq23pKw91fZw3sODee2zjGCIw&s=10' },
      { name: 'Bougainvillea', price: 599, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvVPj2b-HnRbiuxaWoMSsVxOgw71NXebDQxi_9rbN0Q&s=10' },
      { name: 'Portulaca', price: 299, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQBf1VSU8k5mY8bHhNlIbrGSzF0h6soBwu_JaJVAmUw&s=10' },
      { name: 'Mogra', price: 399, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSloPqQUHvHITQuU1UerE7RrYcZw92tWrb389MCNEAh1A&s=10' }
    ]
  },
  {
    id: 'monsoon-green',
    season: 'Monsoon',
    badgeIcon: CloudRain,
    title: 'Monsoon Green Pack',
    desc: 'Perfect lush greens that thrive beautifully in the rainy season.',
    mainImg: 'https://plus.unsplash.com/premium_photo-1708769592969-9f42825496a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVhY2UlMjBsaWxseSUyMHBsYW50fGVufDB8fDB8fHww',
    bundlePrice: 1599,
    originalPrice: 2099,
    discount: '24% OFF',
    plantCount: 4,
    plants: [
      { name: 'Peace Lily', price: 499, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0c-hFfGR1fTuPa97POFyglRYoLNmdGXqMq_3YS_KB6w&s=10' },
      { name: 'Areca Palm', price: 799, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQFjoFutzMHCm3otNSZQqpj6gnDXADcgRNejWDdg3pQ&s=10' },
      { name: 'Spider Plant', price: 299, img: 'https://nurserylive.com/cdn/shop/files/spider-plant_8b87119a-a34d-4429-a3d3-eea28382a087.jpg?v=1751758880' },
      { name: 'Fern', price: 399, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMzv-h0y_L7qeTb9x5dgb5h1doINed9EqTil34QwzJg&s=10' }
    ]
  },
  {
    id: 'winter-care',
    season: 'Winter',
    badgeIcon: Snowflake,
    title: 'Winter Care Pack',
    desc: 'Hardy and architectural plants that love the cool climate.',
    mainImg: 'https://images.unsplash.com/photo-1668082623862-28bc9f15c6ec?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bundlePrice: 1549,
    originalPrice: 1996,
    discount: '22% OFF',
    plantCount: 4,
    plants: [
      { name: 'Poinsettia', price: 449, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9ETTeGsej3r9Z-YpifXOP3QPOECNTSAFPOdJMbk6MA&s=10' },
      { name: 'Cyclamen', price: 649, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxWtC9t2T-IGQV8Wieckbd-wIPknCmk7T_hPSiJ5G8Q&s=10' },
      { name: 'Kalanchoe', price: 399, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zps12lcIPY8LMifs9VrMjX097BQl3tWOKaBiN0AKUfPNdMWvWrSGi7v8&s=10' },
      { name: 'Petunia', price: 299, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYocIFJ2_5hHu-z1BimJ-mmNRZcb6NhuNzwawqQh6irvclQO6nzEq2OKEz&s=10' }
    ]
  },
  {
    id: 'spring-blossom',
    season: 'Spring',
    badgeIcon: Sprout,
    title: 'Spring Blossom Pack',
    desc: 'Celebrate new organic beginnings with colorful displays.',
    mainImg: 'https://images.unsplash.com/photo-1566146991394-b09a95e80d17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFpc3l8ZW58MHx8MHx8fDA%3D',
    bundlePrice: 1699,
    originalPrice: 2246,
    discount: '22% OFF',
    plantCount: 4,
    plants: [
      { name: 'Geranium', price: 449, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3p1JAQhWFrug_s2s46QnDoVvIEM7AI_fSm7i2jI4Dg&s=10' },
      { name: 'Daisy', price: 299, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CMRUVFKLG_fLPAoC2SDNgBxXf2zKT3t4Y1G3BJ0mag&s=10' },
      { name: 'Orchid', price: 999, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdG-EDbTSxoUIT-g8OT4R_vaRMXDeO57TCsGRmpvjhsA&s=10' },
      { name: 'Begonia', price: 499, img: 'https://static.vecteezy.com/system/resources/thumbnails/066/344/440/small_2x/beautiful-flowering-begonia-plant-in-pot-png.png' }
    ]
  },
  {
    id: 'festive-plants',
    season: 'Festive',
    badgeIcon: Sparkles,
    title: 'Festive Plants Pack',
    desc: 'Decorate and elevate your interior home environment for celebrations.',
    mainImg: 'https://images.unsplash.com/photo-1719584256749-e8cc9774610d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bundlePrice: 1199,
    originalPrice: 1596,
    discount: '24% OFF',
    plantCount: 4,
    plants: [
      { name: 'Marigold', price: 299, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNS3QJfV1s_iHRzcKwHiDozO6eRlpKm_nPLh2nyNIcxQ&s=10' },
      { name: 'Tulsi', price: 199, img: 'https://png.pngtree.com/png-vector/20240127/ourmid/pngtree-cartoon-beautiful-tulsi-plant-design-png-image_11584723.png' },
      { name: 'Money Plant', price: 299, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfkQasjHHUXFLjphZezsE2NkLIDOCN06XkLP_M8BHtQ&s=10' },
      { name: 'Adenium', price: 599, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtYo5RosCESOFBZVhac1V2l93GN7NcStz2iGR1nbi3A&s=10' }
    ]
  },
  {
    id: 'autumn-care',
    season: 'Autumn',
    badgeIcon: Calendar,
    title: 'Autumn Care Pack',
    desc: 'Prepare your architectural foliage setups for transitional weather.',
    mainImg: 'https://images.unsplash.com/photo-1663472869789-5dbfe097bccb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bundlePrice: 1649,
    originalPrice: 2096,
    discount: '21% OFF',
    plantCount: 4,
    plants: [
      { name: 'Rubber Plant', price: 499, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4sX5Os_HXzF4mUk9orgT_k6FlcwGivLy0Z90y1i2Dg&s=10' },
      { name: 'Dracaena', price: 599, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Ww46PDDtafdUofpX1K_bxvaBtNmIOqAKIOefkbgClQ&s=10' },
      { name: 'Chinese Evergreen', price: 449, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtV16UZ-KqeRkFwcx0pD83cmU9rzGxH9Bb4dH1SqCjXw&s=10' },
      { name: 'Boston Fern', price: 399, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPe-EAJWmAnw1iBvB7owKCGODhdOinJzyok-CleSDhA&s=10' }
    ]
  },
  {
    id: 'all-season',
    season: 'All Season',
    badgeIcon: Heart,
    title: 'All Season Green Pack',
    desc: 'Timeless structural greens curated for consistent year-round beauty.',
    mainImg: 'https://plus.unsplash.com/premium_photo-1665408511276-24c85c39d671?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bundlePrice: 1499,
    originalPrice: 1996,
    discount: '23% OFF',
    plantCount: 4,
    plants: [
      { name: 'Snake Plant', price: 449, img: 'https://static.vecteezy.com/system/resources/thumbnails/065/719/360/small/snake-plant-in-terracotta-pot-isolated-on-transparent-background-free-png.png' },
      { name: 'ZZ Plant', price: 499, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQp6GU1yDiZN45SKd8VTFHc5Q-3bxSE7iOaBIGcs19yA&s=10' },
      { name: 'Peace Lily', price: 499, img: 'https://static.vecteezy.com/system/resources/thumbnails/051/680/246/small/a-peace-lily-plant-in-a-white-pot-png.png' },
      { name: 'Pothos', price: 299, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDI6bIanQrtlSJeIG1B1J7iGdwWe8Xfy8Lzu_dN8mXdg&s=10' }
    ]
  },
  {
    id: 'year-round-bloom',
    season: 'Blooming',
    badgeIcon: Award,
    title: 'Year Round Bloom Pack',
    desc: 'Stunning botanical blooms engineered to cycle floral displays reliably.',
    mainImg: 'https://images.unsplash.com/photo-1734016883189-41fae1e02825?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEl4b3JhJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
    bundlePrice: 1799,
    originalPrice: 2296,
    discount: '21% OFF',
    plantCount: 4,
    plants: [
      { name: 'Rose', price: 599, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2peH4idyfPkgxM36n6sdmHjxK2X6ifpksZFXtVQWMmA&s=10' },
      { name: 'Hibiscus', price: 499, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEA3HexdkatW1Lwr18v717_UDgOvrGv00ZCjmYOvNbMw&s=10' },
      { name: 'Ixora', price: 399, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QVj06BeVnhiSg0sj-vVltFmR1vMdzcVNUZOKsDvdkw&s=10' },
      { name: 'Plumeria', price: 499, img: 'https://nurserylive.com/cdn/shop/files/champa-white_99b7a2ce-8623-485e-a8e2-c309ab06eb2b.jpg?v=1751755943' }
    ]
  },
  {
    id: 'tropical-oasis',
    season: 'Tropical',
    badgeIcon: Sun,
    title: 'Tropical Oasis Pack',
    desc: 'Create a lush, humid microclimate with these broad-leafed tropical beauties.',
    mainImg: 'https://images.unsplash.com/photo-1652712088453-970e2604c80e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bundlePrice: 1899,
    originalPrice: 2496,
    discount: '24% OFF',
    plantCount: 4,
    plants: [
      { name: 'Monstera', price: 799, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5R-XPa05S3ZlXxFbPIXY8byngJgsb437V_xDY5ciFeA&s=10' },
      { name: 'Paradise', price: 899, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mhmXPClFYnsJWl81-u2mk_wtKxqJwnEgkGHK3Yo47Q&s=10' },
      { name: 'Calathea', price: 499, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS04SghAvs_W5Kv8lk6pRyApHEU2htUCXgZ0cVeE5cEuA&s=10' },
      { name: 'Philo', price: 299, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqutted2K_nlMi3rgBPUcKcljQygzCavGouZKXLykKLQ&s=10' }
    ]
  }
];

const careGuidesData = [
  { title: 'Summer Care Guide', desc: 'Tips to keep your flora fresh and fully hydrated.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3qcbw94PPrCKVOH2daScY5Jz7jwBoYgCePH1GefrpA&s=10' },
  { title: 'Monsoon Care Guide', desc: 'Protect your plants from excessive rain and saturation.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3l6JAP8NutxkQqgS5gYe7KYapj3fgw-yFVChFF83drfPYP2lThKrcdfWG&s=10' },
  { title: 'Winter Care Guide', desc: 'Keep your plants warm and healthily balanced during frosts.', img: 'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/6954fdb1ffacb26a8c260634/top-10-winter-flowers-for-indian-garden.png' },
  { title: 'Spring Care Guide', desc: 'Encourage early root stabilization and structural growth.', img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&q=80' }
];

const SeasonalPacksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans antialiased text-neutral-900 bg-white selection:bg-[#85B060] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* --- Part 1: Editorial Cinematic Hero Section --- */}
      <section className="relative w-full min-h-[500px] bg-[#0c1a0a] flex items-center px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden isolate shadow-[inset_0_-60px_80px_-20px_rgba(133,176,96,0.15)]">
        {/* Immersive Blurred Forest Backdrop */}
        <div className="absolute inset-0 -z-20 scale-105 filter brightness-[0.35] contrast-125">
          <img 
            src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1920&q=80" 
            alt="Cinematic background foliage" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent -z-10"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#85B060]/10 rounded-full blur-[120px] -bottom-1/3 -left-1/4 -z-10 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center">
          {/* Main Hero Header Layout */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-none">
              Seasonal <span className="text-[#85B060]">Collection</span>
            </h1>
            <p className="text-gray-300 font-medium text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Handpicked biological plant setups and absolute care essentials engineered deliberately to flourish contextually throughout every season.
            </p>
            {/* Inline Micro Badges */}
            <div className="flex flex-wrap gap-4 text-xs font-bold text-white/90 tracking-wider uppercase">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-sm"><Leaf size={14} className="text-[#85B060]" /> Seasonal Care Tips</div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-sm"><Award size={14} className="text-[#85B060]" /> Handpicked Bundles</div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-sm"><Sprout size={14} className="text-[#85B060]" /> Expert Guidance</div>
            </div>
          </div>

          {/* Floated Premium Editorial Feature Card */}
          <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col justify-between items-start animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="w-12 h-12 bg-[#EAF0E3] rounded-xl flex items-center justify-center text-[#4A6731] border border-[#85B060]/20 mb-6">
              <Sparkles size={22} />
            </div>
            <h3 className="text-xl font-black text-[#1a1f16] tracking-tight mb-2">Every Season Brings New Life</h3>
            <p className="text-gray-500 font-medium text-xs leading-relaxed mb-6">
              Explore dynamic botanical configurations that shift seamlessly to adapt to local regional humidity levels and ambient temperatures.
            </p>
            <a href="#packs-matrix" className="w-full bg-[#1a1f16] hover:bg-[#85B060] text-white text-center py-4 rounded-xl font-bold transition-colors shadow-md text-sm flex items-center justify-center gap-2 group">
              Explore Packs Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- Navigation Breadcrumb Anchor --- */}
      <div className="bg-gray-50 border-b border-gray-100 py-3 text-xs font-bold text-gray-400 tracking-wide uppercase px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          <Link to="/" className="hover:text-[#85B060] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">Seasonals</span>
        </div>
      </div>

      {/* --- Section Meta Title --- */}
      <div id="packs-matrix" className="text-center max-w-xl mx-auto pt-20 pb-12 px-4 scroll-mt-12">
        <div className="flex items-center justify-center gap-2 text-[#85B060] mb-3">
          <Leaf size={16} fill="#85B060" />
          <span className="font-bold tracking-[0.2em] uppercase text-xs">Our Seasonal Collections</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-[#1a1f16] tracking-tight m-0">Carefully Curated Packs & Essentials</h2>
      </div>

      {/* --- Part 2: Premium Curated Pack Display Matrix --- */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {seasonalPacksData.map((pack) => {
            const BadgeIcon = pack.badgeIcon;
            return (
              <div key={pack.id} className="bg-white border border-gray-100 rounded-[2rem] p-5 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(133,176,96,0.1)] hover:border-[#85B060]/20 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                <div>
                  {/* Image Container with Absolute Badge Layout */}
                  <div className="w-full h-[240px] md:h-[280px] rounded-2xl overflow-hidden relative border border-gray-100/50 shadow-inner mb-6">
                    <img 
                      src={pack.mainImg} 
                      alt={pack.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-gray-100">
                      <BadgeIcon size={16} className="text-[#85B060]" />
                      <span className="text-xs font-black uppercase tracking-widest text-[#1a1f16]">{pack.season}</span>
                    </div>
                  </div>

                  {/* Pack Typography Headers */}
                  <div className="px-1 mb-6">
                    <h4 className="text-xl font-black text-[#1a1f16] tracking-tight mb-2 group-hover:text-[#4A6731] transition-colors">{pack.title}</h4>
                    <p className="text-sm font-medium text-gray-500 leading-relaxed min-h-[40px] line-clamp-2">{pack.desc}</p>
                  </div>

                  {/* Sub-Grid Item Mapping (The 4 Included Plants) */}
                  <div className="grid grid-cols-4 gap-3 bg-[#F8F9F5] border border-gray-100 p-3.5 rounded-2xl mb-8">
                    {pack.plants.map((plant, index) => (
                      <div key={index} className="flex flex-col items-center text-center group/plant">
                        <div className="w-full aspect-square rounded-xl overflow-hidden border border-gray-200/50 bg-white mb-2 shadow-sm group-hover/plant:border-[#85B060]/30 transition-colors">
                          <img src={plant.img} alt={plant.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[11px] md:text-xs font-black text-[#1a1f16] truncate w-full px-0.5">{plant.name}</span>
                        <span className="text-[10px] md:text-[11px] font-bold text-gray-400 mt-0.5">₹{plant.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Architecture & CTA Action Footers */}
                <div className="pt-2 px-1 border-t border-gray-100/70">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                     <Sprout size={12} className="text-[#85B060]" /> {pack.plantCount} Healthy Plants Included
                  </div>
                  <div className="flex items-baseline gap-2.5 mb-5">
                    <span className="text-2xl font-black text-[#1a1f16]">₹{pack.bundlePrice.toLocaleString('en-IN')}</span>
                    <span className="text-sm font-medium text-gray-400 line-through">₹{pack.originalPrice.toLocaleString('en-IN')}</span>
                    <span className="text-xs font-bold px-2.5 py-1 bg-red-50 text-red-500 border border-red-100 rounded-md ml-auto">
                      {pack.discount}
                    </span>
                  </div>
                  <Link to={`/plants`} className="w-full border border-gray-200 hover:border-[#85B060] hover:bg-[#85B060] text-[#1a1f16] hover:text-white text-center py-3.5 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 group/btn shadow-sm">
                    View Bundle Details
                    <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* --- ENHANCED Part 3: Trust Infrastructure Banner --- */}
      <section className="bg-white border-t border-b border-gray-100 py-16 px-6 md:px-12 relative isolate overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,#85B060_0%,transparent_70%)] opacity-[0.03] -z-10"></div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { 
              icon: BookOpen, 
              title: 'Care Guides Included', 
              desc: 'Detailed tracking metrics with every pack.',
              color: 'text-emerald-600',
              bg: 'bg-emerald-50',
              border: 'border-emerald-100/50'
            },
            { 
              icon: Award, 
              title: 'Premium Curation', 
              desc: 'Sourced explicitly for atmospheric resilience.',
              color: 'text-amber-500',
              bg: 'bg-amber-50',
              border: 'border-amber-100/50'
            },
            { 
              icon: Sprout, 
              title: 'Expert Consultation', 
              desc: 'Direct technical support parameters from agronomists.',
              color: 'text-[#85B060]',
              bg: 'bg-[#85B060]/10',
              border: 'border-[#85B060]/20'
            },
            { 
              icon: Truck, 
              title: 'Secure Handling', 
              desc: 'Eco-friendly customized safe transit frameworks.',
              color: 'text-blue-500',
              bg: 'bg-blue-50',
              border: 'border-blue-100/50'
            },
            { 
              icon: ArrowLeftRight, 
              title: 'Maximum Utility Value', 
              desc: 'Highly affordable bundled pricing modules.',
              color: 'text-rose-500',
              bg: 'bg-rose-50',
              border: 'border-rose-100/50'
            }
          ].map((item, idx) => (
            <div key={idx} className="group flex flex-col items-start gap-4 p-5 rounded-3xl hover:bg-[#F8F9F5] transition-all duration-300 cursor-default border border-transparent hover:border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center ${item.color} shadow-sm shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]`}>
                <item.icon size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h5 className="font-black text-sm md:text-base text-[#1a1f16] mb-1.5 tracking-tight group-hover:text-[#85B060] transition-colors">
                  {item.title}
                </h5>
                <p className="text-xs font-medium text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Part 4: Educational Care Guide Grid Layout --- */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-12 py-20 md:py-28">
        <div className="text-center max-w-md mx-auto mb-14">
          <span className="text-[#85B060] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Expert Insights</span>
          <h3 className="text-2xl md:text-3xl font-black text-[#1a1f16] tracking-tight m-0">Seasonal Plant Care Guides</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careGuidesData.map((guide, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-full h-[160px] rounded-xl overflow-hidden relative mb-4">
                <img src={guide.img} alt={guide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="px-2 pb-2">
                 <h4 className="font-bold text-sm text-[#1a1f16] mb-1">{guide.title}</h4>
                 <p className="text-xs font-medium text-gray-400 mb-4 leading-relaxed">{guide.desc}</p>
                 <Link to="/privacy" className="text-xs font-black text-[#85B060] hover:text-[#4A6731] transition-colors flex items-center gap-1 group/link">
                   Read Guide Overview
                   <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                 </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Part 5: Promo Discount Call-to-Action Banner --- */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-12 pb-20">
        <div className="w-full bg-[#0a1508] border border-[#2a3025] rounded-[2.5rem] p-10 md:p-16 relative isolate overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1a2e15_0%,transparent_70%)] opacity-80 -z-20"></div>
          {/* Decorative blurred flora orb */}
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#85B060]/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

          <div className="lg:col-span-8">
            <span className="text-[#85B060] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Limited Seasonal Windows</span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white m-0 mb-4 leading-tight">
               Limited Season.<br className="hidden sm:block" /> Maximum Greenery.
            </h3>
            <p className="text-gray-400 font-medium text-sm md:text-base max-w-xl m-0 leading-relaxed">
               Secure your favorite curated biological plant configurations before inventory levels cycle out for the upcoming quarter.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-6 lg:text-right w-full">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Scale Discounts Up To</span>
              <span className="text-4xl md:text-5xl font-black text-[#85B060] leading-none">25% OFF</span>
            </div>
            <Link to="/plants" className="bg-white hover:bg-[#85B060] text-[#1a1f16] hover:text-white px-8 py-4 rounded-xl font-bold transition-all text-sm shadow-lg flex items-center gap-2 group shrink-0">
               Shop Seasonal Packs
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- ENHANCED Part 6: Brand Trust Operational Values Grid --- */}
      <section className="bg-white border-t border-gray-200/60 py-16 px-6 md:px-12 relative isolate overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 lg:gap-8">
          {[
            { icon: CheckCircle2, val: '100%', label: 'Healthy Plants', color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { icon: Truck, val: 'Fast', label: 'Secure Delivery', color: 'text-blue-500', bg: 'bg-blue-50' },
            { icon: MessageSquare, val: 'Expert', label: 'Guidance Modules', color: 'text-purple-500', bg: 'bg-purple-50' },
            { icon: RefreshCw, val: '7-Day', label: 'Easy Returns', color: 'text-orange-500', bg: 'bg-orange-50' },
            { icon: Box, val: 'Premium', label: 'Safe Packaging', color: 'text-amber-500', bg: 'bg-amber-50' },
            { icon: Globe, val: 'Verified', label: 'Sustainable Sourcing', color: 'text-[#85B060]', bg: 'bg-[#85B060]/10' }
          ].map((item, sIdx) => (
            <div key={sIdx} className="group flex flex-col items-center text-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
               <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center ${item.color} mb-2 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                 <item.icon size={24} strokeWidth={2.5} />
               </div>
               <div className="flex flex-col gap-1">
                 <span className="font-black text-[#1a1f16] text-xl tracking-tight">{item.val}</span>
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</span>
               </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeasonalPacksPage;