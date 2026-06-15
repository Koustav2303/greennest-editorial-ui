import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  ChevronDown, Leaf, Package, Building2 
} from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success
  
  // --- NEW: Custom Dropdown State ---
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [formError, setFormError] = useState(false); // To validate the custom dropdown

  // Rich data for our custom dropdown
  const inquiryOptions = [
    { id: 'general', label: 'General Botanical Inquiry', icon: Leaf, desc: 'Plant care, species info, and general questions.' },
    { id: 'order', label: 'Order Status & Shipping', icon: Package, desc: 'Track your package or report delivery issues.' },
    { id: 'landscape', label: 'Landscape Consulting', icon: MapPin, desc: 'Book our experts for your home or office space.' },
    { id: 'bulk', label: 'Bulk Corporate Orders', icon: Building2, desc: 'Large scale gifting and corporate installations.' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate custom dropdown
    if (!selectedSubject) {
      setFormError(true);
      return;
    }
    setFormError(false);
    setFormState('submitting');
    
    // Simulate a network request
    setTimeout(() => {
      setFormState('success');
      // Reset form after showing success message
      setTimeout(() => {
        setFormState('idle');
        setSelectedSubject(null);
        e.target.reset(); // Clear the text inputs
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-white overflow-hidden isolate">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EAF0E3]/40 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[#85B060] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1a1f16] tracking-tight mb-4">
            Let's Cultivate Your Space.
          </h2>
          <p className="text-gray-500 font-medium text-lg">
            Whether you are looking for a rare species, need landscape consulting, or have a question about your recent order, our botanical experts are here to help.
          </p>
        </div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 bg-[#0a1508] p-10 md:p-14 relative isolate flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1a2e15_0%,transparent_70%)] opacity-80 -z-10"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#85B060]/20 rounded-full blur-[60px] -z-10"></div>

            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8">Contact Information</h3>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#85B060] shrink-0 border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-white font-bold mb-1">GreenNest Nursery HQ</span>
                    <span className="text-gray-400 text-sm font-medium leading-relaxed">
                      100ft Road, Indiranagar<br />Bengaluru, Karnataka 560038
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#85B060] shrink-0 border border-white/10">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-white font-bold mb-1">Direct Line</span>
                    <span className="text-gray-400 text-sm font-medium">+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#85B060] shrink-0 border border-white/10">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-white font-bold mb-1">Email Support</span>
                    <span className="text-gray-400 text-sm font-medium">hello@greennest.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white mb-2">
                <Clock size={18} className="text-[#85B060]" />
                <span className="font-bold">Operating Hours</span>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7 p-10 md:p-14 bg-white relative">
            <h3 className="text-2xl font-black text-[#1a1f16] mb-8">Send us a Message</h3>

            {formState === 'success' ? (
              <div className="h-full min-h-[350px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#EAF0E3] rounded-full flex items-center justify-center text-[#4A6731] mb-6 shadow-sm border border-[#85B060]/30">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-black text-[#1a1f16] mb-2">Message Sent!</h4>
                <p className="text-gray-500 font-medium">
                  Thank you for reaching out. One of our botanical experts will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-[#F8F9F5] border border-gray-200 rounded-xl px-5 py-4 text-[#1a1f16] font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#85B060]/50 focus:border-[#85B060] transition-all"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-[#F8F9F5] border border-gray-200 rounded-xl px-5 py-4 text-[#1a1f16] font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#85B060]/50 focus:border-[#85B060] transition-all"
                    />
                  </div>
                </div>

                {/* --- NEW: Cool & Creative Custom Dropdown --- */}
                <div className="flex flex-col gap-2 relative z-50">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center justify-between">
                    Subject
                    {formError && <span className="text-red-500 normal-case tracking-normal">Please select a subject</span>}
                  </label>
                  
                  {/* Invisible overlay to close dropdown when clicking outside */}
                  {isDropdownOpen && (
                    <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                  )}

                  <div className="relative z-50">
                    {/* Custom Trigger Button */}
                    <button
                      type="button"
                      onClick={() => {
                        setIsDropdownOpen(!isDropdownOpen);
                        setFormError(false); // Clear error on interaction
                      }}
                      className={`w-full bg-[#F8F9F5] border ${formError ? 'border-red-400 ring-2 ring-red-100' : isDropdownOpen ? 'border-[#85B060] ring-2 ring-[#85B060]/50' : 'border-gray-200'} rounded-xl px-5 py-4 text-left flex items-center justify-between transition-all group`}
                    >
                      {selectedSubject ? (
                        <span className="flex items-center gap-3 text-[#1a1f16] font-bold">
                          {React.createElement(selectedSubject.icon, { size: 18, className: "text-[#85B060]" })}
                          {selectedSubject.label}
                        </span>
                      ) : (
                        <span className="text-gray-400 font-medium">Select an inquiry type...</span>
                      )}
                      <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#85B060]' : 'group-hover:text-gray-600'}`} />
                    </button>

                    {/* Rich Dropdown Menu */}
                    <div className={`absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-gray-100 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-300 origin-top ${isDropdownOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-95 opacity-0 invisible'}`}>
                      <div className="flex flex-col p-2">
                        {inquiryOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => {
                              setSelectedSubject(option);
                              setIsDropdownOpen(false);
                            }}
                            className={`flex items-start gap-4 w-full p-4 rounded-xl text-left transition-colors ${selectedSubject?.id === option.id ? 'bg-[#EAF0E3] border border-[#85B060]/30' : 'hover:bg-gray-50 border border-transparent'}`}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${selectedSubject?.id === option.id ? 'bg-white text-[#4A6731]' : 'bg-white border border-gray-100 text-gray-400'}`}>
                              <option.icon size={18} />
                            </div>
                            <div className="flex flex-col">
                              <span className={`font-bold text-sm mb-0.5 ${selectedSubject?.id === option.id ? 'text-[#1a1f16]' : 'text-gray-700'}`}>
                                {option.label}
                              </span>
                              <span className="text-xs font-medium text-gray-500 line-clamp-1">
                                {option.desc}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative z-10">
                  <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows="4"
                    placeholder="Tell us about your space, your plant wishlist, or your project..."
                    className="w-full bg-[#F8F9F5] border border-gray-200 rounded-xl px-5 py-4 text-[#1a1f16] font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#85B060]/50 focus:border-[#85B060] transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="mt-2 w-full md:w-auto self-end bg-[#1a1f16] hover:bg-[#85B060] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed relative z-10"
                >
                  {formState === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;