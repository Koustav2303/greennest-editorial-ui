import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Database, Cookie, Lock, Scale, Mail, 
  ChevronRight, AlertTriangle, Zap, Activity, Leaf 
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';

// Importing your specific image assets based on the folder structure
import dataCollectionImg from '../../assets/legal/privacy/data-collection.png';
import dataProtectionImg from '../../assets/legal/privacy/data-protection.png';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      anchor: "data-collection",
      content: (
        <>
          <p className="mb-10 leading-relaxed">
            We may collect, use, store, and transfer different kinds of personal data about you. For detailed clarity, we have categorized this information below. For example, when you engage with our <Link to="/plants" className="text-[#85B060] hover:text-[#4A6731] font-bold">plants catalog</Link> or add items to your <span className="text-[#85B060] font-bold">cart</span>, we may process specific identifiers to manage your session.
          </p>
          
          {/* Your Custom Data Collection Image */}
          <div className="w-full bg-[#F8F9F5] border border-gray-100 p-2 md:p-4 rounded-3xl shadow-sm mb-12">
             <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200/50 bg-white shadow-inner">
                <img 
                  src={dataCollectionImg} 
                  alt="GreenNest Data Collection Categories" 
                  className="w-full h-auto object-contain"
                />
             </div>
          </div>

          <h4 className="font-bold text-[#1a1f16] mt-8 mb-4">How is your personal data collected?</h4>
          <p className="mb-4">We collect data through several direct and automated methods:</p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 font-medium">
            <li><strong>Direct interactions:</strong> Information provided when creating an account, making a purchase, or contacting us.</li>
            <li><strong>Automated technologies:</strong> Information automatically collected via cookies, server logs, and similar technologies during your interaction with our website.</li>
            <li><strong>Third parties:</strong> Limited information might be received from analytics providers or secure payment gateways.</li>
          </ul>
        </>
      ),
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      anchor: "cookies",
      content: (
        <>
          <p className="mb-8 leading-relaxed">
            We utilize cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center mb-10">
            <div className="bg-[#F8F9F5] p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#85B060] shadow-sm mb-4">
                  <Zap size={22} />
                </div>
                <h4 className="font-bold text-[#1a1f16] text-sm mb-1.5">Essential</h4>
                <p className="text-xs font-medium text-gray-500 leading-relaxed">Required for core functionality, like maintaining your cart or authentication session.</p>
            </div>
            <div className="bg-[#F8F9F5] p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#85B060] shadow-sm mb-4">
                  <Activity size={22} />
                </div>
                <h4 className="font-bold text-[#1a1f16] text-sm mb-1.5">Analytics</h4>
                <p className="text-xs font-medium text-gray-500 leading-relaxed">Helps us understand how visitors interact with our catalog to improve the experience.</p>
            </div>
            <div className="bg-[#F8F9F5] p-6 rounded-2xl border border-gray-100 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#85B060] shadow-sm mb-4">
                  <Leaf size={22} />
                </div>
                <h4 className="font-bold text-[#1a1f16] text-sm mb-1.5">Functional</h4>
                <p className="text-xs font-medium text-gray-500 leading-relaxed">Remembers your preferences to personalize your visit and remember your settings.</p>
            </div>
          </div>
          
          <p className="leading-relaxed">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>
        </>
      ),
    },
    {
      icon: Lock,
      title: "Data Security",
      anchor: "security",
      content: (
        <>
          <p className="mb-10 leading-relaxed">
            The security of your data is paramount to us. We have architected our systems with multiple layers of protection to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
          </p>
          
          {/* Your Custom Data Protection Image */}
          <div className="w-full bg-[#1a1f16] border border-[#2a3025] p-2 md:p-4 rounded-3xl shadow-xl mb-12">
             <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black shadow-inner">
                <img 
                  src={dataProtectionImg} 
                  alt="GreenNest Security Architecture" 
                  className="w-full h-auto object-contain"
                />
             </div>
          </div>

          <p className="leading-relaxed mb-6">
            In addition to technical measures, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a strict business need to know. They process your personal data solely on our instructions and are subject to strict duties of confidentiality.
          </p>
          
          <div className="bg-orange-50 border border-orange-100 text-orange-800 p-6 rounded-2xl flex items-start gap-4 mt-8">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-orange-100 text-orange-500 shrink-0 shadow-inner">
               <AlertTriangle size={20} />
            </div>
            <div>
                <h5 className="font-black text-orange-950 m-0 text-sm mb-1">Our Limitation of Liability</h5>
                <p className="text-sm font-medium text-orange-900 leading-relaxed">While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. The complete security of your data in transit or stored digitally can never be guaranteed due to the inherent nature of the internet.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      icon: Scale,
      title: "Your Legal Rights",
      anchor: "rights",
      content: (
        <>
          <p className="mb-8 leading-relaxed">
            Under certain circumstances, you have rights under data protection laws in relation to your personal data. This includes the right to request access, correction, erasure, object to processing, request restriction, and the right to withdraw consent.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              "Request Access to Data",
              "Request Correction of Inaccuracies",
              "Request Erasure of your Data",
              "Object to Data Processing",
              "Request Restriction of Processing",
              "Request Data Portability",
              "Withdraw Consent at any Time"
            ].map((right, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-[#85B060]/30 transition-colors">
                 <div className="w-6 h-6 rounded-full bg-[#F8F9F5] flex items-center justify-center text-[#85B060] shrink-0">
                    <ChevronRight size={14} />
                 </div>
                 <span className="font-bold text-[#1a1f16] text-sm">{right}</span>
              </div>
            ))}
          </div>
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
        <ShieldCheck size={40} className="text-[#85B060] mb-6 relative z-10" strokeWidth={1.5} />
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 relative z-10">
          Privacy Policy
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
              Contact Details
            </a>
          </nav>
        </aside>

        {/* Detailed Content */}
        <div className="prose prose-lg prose-headings:font-black prose-headings:text-[#1a1f16] prose-p:text-gray-600 prose-p:leading-relaxed max-w-none space-y-20">
          
          <p className="text-xl font-medium text-[#1a1f16] leading-relaxed border-l-4 border-[#85B060] pl-6 -ml-6 mb-16">
            At GreenNest Nursery, we deeply respect your privacy and are committed to protecting your personal data. This comprehensive policy outlines how we handle your data when you visit our website, utilize our services, or purchase our botanical products.
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
                  <Mail size={22} strokeWidth={2} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#1a1f16] leading-tight m-0 flex-1">
                  Contact Us
                </h2>
            </div>
            <div className="text-gray-600 font-medium">
                <p>If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact our Data Privacy Manager via email:</p>
                <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-2xl flex items-center gap-4 w-fit shadow-sm relative isolate overflow-hidden group">
                   <div className="absolute inset-0 bg-[#85B060]/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0">
                      <Mail size={18} className="text-gray-500" />
                   </div>
                   <div className="flex flex-col flex-1 overflow-hidden">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 truncate">Data Privacy Manager</span>
                      <a href="mailto:privacy@greennest.com" className="text-[#1a1f16] font-black text-lg hover:text-[#85B060] transition-colors no-underline truncate">
                        privacy@greennest.com
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

export default PrivacyPage;