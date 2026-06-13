import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, FileText, UserCheck, Leaf, CreditCard, Shield, 
  AlertCircle, Mail, ChevronRight, Ruler, Palette, Sprout,
  Clock, Package, Truck, CheckCircle2, AlertTriangle, XCircle
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';

// --- Integrated Interactive Visualizers ---

// 1. Botanical Variation Visualizer (Explaining living product terms)
const BotanicalVariationVisualizer = () => {
  const variations = [
    { id: 'size', icon: <Ruler size={24} />, title: 'Size & Proportions', desc: 'Plant heights and widths are approximations. Natural growth rates mean your plant may arrive slightly taller or shorter than specified.' },
    { id: 'color', icon: <Palette size={24} />, title: 'Color & Variegation', desc: 'Foliage color shifts based on seasonal light and maturity. Variegated plants will uniquely differ from catalog photography.' },
    { id: 'structure', icon: <Sprout size={24} />, title: 'Leaf Structure', desc: 'Minor blemishes, dropped leaves during transit, or varying leaf counts are natural occurrences, not product defects.' }
  ];

  return (
    <div className="bg-[#F8F9F5] border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm relative isolate overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#EAF0E3] rounded-full blur-[80px] -z-10 opacity-50"></div>
      
      <div className="flex flex-col items-center text-center mb-10">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-gray-200 text-[#4A6731] shadow-md mb-4">
           <Leaf size={32} className="text-[#85B060]" />
        </div>
        <h3 className="text-2xl font-black text-[#1a1f16] m-0">The Nature of Living Products</h3>
        <p className="text-gray-500 font-medium max-w-lg mt-3 leading-relaxed">
          Plants are living organisms. By purchasing from GreenNest, you acknowledge and accept that natural variations will occur and no two plants are exactly alike.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {variations.map((item) => (
          <div key={item.id} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#1a1f16] group-hover:scale-110 group-hover:bg-[#EAF0E3] group-hover:text-[#4A6731] transition-all mb-4 shadow-inner">
              {item.icon}
            </div>
            <h4 className="font-bold text-[#1a1f16] mb-2">{item.title}</h4>
            <p className="text-xs font-medium text-gray-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 2. Order Lifecycle Visualizer (Explaining cancellation/refund terms)
const OrderTimelineVisualizer = () => {
  return (
    <div className="bg-[#1a1f16] border border-[#2a3025] rounded-3xl p-8 mb-12 shadow-xl relative isolate overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#85B060]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <h3 className="text-2xl font-black text-white mb-8 text-center">Order Lifecycle & Cancellations</h3>

      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 mt-4 px-4 md:px-10">
        
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gray-800 -z-10"></div>

        {/* Step 1 */}
        <div className="flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-3 w-full md:w-1/4">
           <div className="w-12 h-12 rounded-full bg-[#85B060]/20 border border-[#85B060] flex items-center justify-center text-[#85B060] shrink-0">
             <Clock size={20} />
           </div>
           <div>
             <h5 className="text-white font-bold text-sm mb-1">Placed</h5>
             <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#85B060]/20 text-[#85B060] rounded-full">24hr Window</span>
             <p className="text-xs text-gray-400 mt-2 font-medium hidden md:block">Orders can be modified or cancelled freely.</p>
           </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-3 w-full md:w-1/4">
           <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center text-orange-500 shrink-0">
             <Package size={20} />
           </div>
           <div>
             <h5 className="text-white font-bold text-sm mb-1">Processing</h5>
             <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-orange-500/20 text-orange-500 rounded-full">Locked</span>
             <p className="text-xs text-gray-400 mt-2 font-medium hidden md:block">Plants are curated and packed. No cancellations.</p>
           </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-3 w-full md:w-1/4">
           <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-500 shrink-0">
             <Truck size={20} />
           </div>
           <div>
             <h5 className="text-white font-bold text-sm mb-1">In Transit</h5>
             <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-blue-500/20 text-blue-500 rounded-full">Shipped</span>
             <p className="text-xs text-gray-400 mt-2 font-medium hidden md:block">Handed over to delivery partners.</p>
           </div>
        </div>

      </div>

      <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4 backdrop-blur-sm">
        <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
        <p className="text-sm font-medium text-gray-300 leading-relaxed">
          Because plants are perishable goods, <strong className="text-white">we do not accept returns or cancellations once an order enters the Processing phase.</strong> If your plant arrives heavily damaged, you must contact us within 24 hours of delivery with photographic proof for a resolution.
        </p>
      </div>

    </div>
  );
};


// --- Main Page Component ---
const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: UserCheck,
      title: "1. Acceptance & Accounts",
      anchor: "acceptance",
      content: (
        <>
          <p className="mb-4">By accessing our website, purchasing our botanical products, or booking our landscape services, you agree to be bound by these Terms of Use.</p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 font-medium mb-6">
            <li>You must be at least 18 years old to create an account and make purchases on GreenNest Nursery.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
            <li>You agree to provide accurate, current, and complete information during the registration and checkout process.</li>
          </ul>
          <p>We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion if we suspect fraudulent activity or a violation of these terms.</p>
        </>
      ),
    },
    {
      icon: Leaf,
      title: "2. Botanical Products",
      anchor: "products",
      content: (
        <>
          <p className="mb-8 leading-relaxed">We strive to display the colors, sizes, and specific traits of our plants as accurately as possible. However, the exact plant you receive will inherently differ from the catalog photography.</p>
          
          {/* Integrated interactive visualizer */}
          <BotanicalVariationVisualizer />

          <h4 className="font-bold text-[#1a1f16] mt-8 mb-4">Availability & Substitutions</h4>
          <p className="mb-4 text-gray-600 font-medium">All products are subject to seasonal availability. In the rare event that a specific plant or ceramic pot becomes unavailable after your order is placed, we reserve the right to substitute it with an item of equal or greater value, or to cancel that portion of your order and issue a refund.</p>
        </>
      ),
    },
    {
      icon: CreditCard,
      title: "3. Orders & Payments",
      anchor: "orders",
      content: (
        <>
          <p className="mb-8 leading-relaxed">All prices are displayed in INR (₹) and are inclusive of applicable taxes unless stated otherwise. Prices for our products are subject to change without notice.</p>
          
          {/* Integrated interactive visualizer */}
          <OrderTimelineVisualizer />

          <p className="mb-4 text-gray-600 font-medium">We process payments via secure, encrypted third-party gateways. We do not store your raw credit card information on our servers. By submitting payment information, you represent and warrant that you have the legal right to use the payment method provided.</p>
        </>
      ),
    },
    {
      icon: Shield,
      title: "4. Intellectual Property",
      anchor: "intellectual-property",
      content: (
        <>
          <p className="mb-6 leading-relaxed">
            All content included on this site—such as text, editorial graphics, logos, images, audio clips, digital downloads, and software—is the exclusive property of GreenNest Nursery or its content suppliers and protected by international copyright laws.
          </p>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
             <h4 className="font-bold text-[#1a1f16] mb-3 flex items-center gap-2">
               <AlertCircle size={18} className="text-[#85B060]" />
               Usage Restrictions
             </h4>
             <p className="text-sm font-medium text-gray-600 leading-relaxed">
               You may not extract, scrape, copy, or systematically utilize parts of our content, imagery, or botanical data without our express written consent. The "GreenNest" name, logos, and service marks are our exclusive trademarks.
             </p>
          </div>
        </>
      ),
    },
    {
      icon: Scale,
      title: "5. Limitation of Liability",
      anchor: "liability",
      content: (
        <>
          <p className="mb-6 leading-relaxed">
            We do not guarantee, represent, or warrant that your use of our service will be uninterrupted, timely, secure, or error-free.
          </p>
          <div className="bg-orange-50 border border-orange-100 text-orange-800 p-6 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-orange-100 text-orange-500 shrink-0 shadow-inner">
               <AlertTriangle size={20} />
            </div>
            <div>
                <h5 className="font-black text-orange-950 m-0 text-sm mb-2">Legal Disclaimer</h5>
                <p className="text-sm font-medium text-orange-900 leading-relaxed">
                  In no case shall GreenNest Nursery, our directors, officers, employees, affiliates, or suppliers be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including loss of profits, arising from your use of any of the service or any products procured using the service.
                </p>
            </div>
          </div>
          <p className="mt-6 text-gray-600 font-medium">These Terms of Use and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Karnataka, India.</p>
        </>
      ),
    },
  ];

  return (
    <div className="font-sans antialiased text-neutral-900 bg-white selection:bg-[#85B060] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Cinematic Header */}
      <div className="relative w-full pt-32 pb-20 md:pt-40 md:pb-24 bg-[#0a1508] overflow-hidden flex flex-col items-center text-center px-4 shadow-[inset_0_-40px_60px_-10px_rgba(133,176,96,0.1)] isolate">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a2e15_0%,transparent_70%)] opacity-50 -z-20"></div>
        <Scale size={40} className="text-[#85B060] mb-6 relative z-10" strokeWidth={1.5} />
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 relative z-10">
          Terms of Use
        </h1>
        <p className="text-white/70 font-medium text-sm tracking-widest uppercase relative z-10 bg-white/5 px-4 py-1 rounded-full border border-white/10 backdrop-blur-sm">
          Effective Date: June 15, 2026
        </p>
        <div className="absolute w-[800px] h-[800px] bg-[#85B060]/10 rounded-full blur-[100px] -z-30 pointer-events-none -bottom-1/2 left-1/2 -translate-x-1/2"></div>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 lg:gap-20 items-start">
        
        {/* Sidebar Navigation */}
        <aside className="sticky top-28 hidden lg:flex flex-col gap-6">
          <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest">Contents</h2>
          <nav className="flex flex-col gap-1 border-l-2 border-gray-100 pl-4">
            {sections.map(section => (
              <a 
                key={section.anchor} 
                href={`#${section.anchor}`} 
                className="text-gray-500 font-bold text-sm hover:text-[#85B060] transition-colors py-2"
              >
                {section.title}
              </a>
            ))}
            <a href="#contact" className="text-gray-500 font-bold text-sm hover:text-[#85B060] transition-colors py-2 mt-4">
              Contact Legal
            </a>
          </nav>
        </aside>

        {/* Detailed Content */}
        <div className="prose prose-lg prose-headings:font-black prose-headings:text-[#1a1f16] prose-p:text-gray-600 prose-p:leading-relaxed max-w-none space-y-20">
          
          <p className="text-xl font-medium text-[#1a1f16] leading-relaxed border-l-4 border-[#85B060] pl-6 -ml-6 mb-16">
            Welcome to GreenNest Nursery. By accessing or using our platform to purchase curated botanical goods or to book landscape consulting services, you establish a binding legal agreement with us. Please read these terms carefully.
          </p>

          {sections.map((section) => (
            <div key={section.anchor} id={section.anchor} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#F8F9F5] flex items-center justify-center border border-gray-200 text-[#4A6731] shadow-sm shrink-0">
                  <section.icon size={22} strokeWidth={2} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#1a1f16] leading-tight m-0 flex-1">
                  {section.title}
                </h2>
              </div>
              
              <div className="text-gray-600 font-medium">
                {section.content}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div id="contact" className="pt-10 border-t border-gray-100 scroll-mt-32 last:pb-12 last:mb-0">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#F8F9F5] flex items-center justify-center border border-gray-200 text-[#4A6731] shadow-sm shrink-0">
                  <FileText size={22} strokeWidth={2} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#1a1f16] leading-tight m-0 flex-1">
                  Legal Inquiries
                </h2>
            </div>
            <div className="text-gray-600 font-medium">
                <p>If you have any questions regarding these Terms of Use, intellectual property claims, or general legal inquiries, please contact our legal team:</p>
                <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-2xl flex items-center gap-4 w-fit shadow-sm relative isolate overflow-hidden group">
                   <div className="absolute inset-0 bg-[#85B060]/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0">
                      <Mail size={18} className="text-gray-500" />
                   </div>
                   <div className="flex flex-col flex-1 overflow-hidden">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 truncate">Legal Department</span>
                      <a href="mailto:legal@greennest.com" className="text-[#1a1f16] font-black text-lg hover:text-[#85B060] transition-colors no-underline truncate">
                        legal@greennest.com
                      </a>
                   </div>
                </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;