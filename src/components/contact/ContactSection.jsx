import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate a network request for the premium UI feel
    setTimeout(() => {
      setFormState('success');
      // Reset form after showing success message for 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    // The id="contact" is crucial here so your navbar hash link scrolls perfectly to this spot!
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
          
          {/* Left Side: Contact Info (Dark Cinematic) */}
          <div className="lg:col-span-5 bg-[#0a1508] p-10 md:p-14 relative isolate flex flex-col justify-between overflow-hidden">
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1a2e15_0%,transparent_70%)] opacity-80 -z-10"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#85B060]/20 rounded-full blur-[60px] -z-10"></div>

            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8">Contact Information</h3>
              
              <div className="flex flex-col gap-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#85B060] shrink-0 border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-white font-bold mb-1">GreenNest Nursery HQ</span>
                    <span className="text-gray-400 text-sm font-medium leading-relaxed">
                      100ft Road, Indiranagar<br />
                      Bengaluru, Karnataka 560038
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#85B060] shrink-0 border border-white/10">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-white font-bold mb-1">Direct Line</span>
                    <span className="text-gray-400 text-sm font-medium">
                      +91 98765 43210
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#85B060] shrink-0 border border-white/10">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-white font-bold mb-1">Email Support</span>
                    <span className="text-gray-400 text-sm font-medium">
                      hello@greennest.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white mb-2">
                <Clock size={18} className="text-[#85B060]" />
                <span className="font-bold">Operating Hours</span>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                Mon - Sat: 9:00 AM - 8:00 PM<br />
                Sunday: 10:00 AM - 4:00 PM
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
                  {/* Name Input */}
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
                  
                  {/* Email Input */}
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

                {/* Inquiry Type Dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Subject</label>
                  <select 
                    id="subject"
                    required
                    className="w-full bg-[#F8F9F5] border border-gray-200 rounded-xl px-5 py-4 text-[#1a1f16] font-medium focus:outline-none focus:ring-2 focus:ring-[#85B060]/50 focus:border-[#85B060] transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Select an inquiry type...</option>
                    <option value="general">General Botanical Inquiry</option>
                    <option value="order">Order Status & Shipping</option>
                    <option value="landscape">Landscape Consulting</option>
                    <option value="bulk">Bulk Corporate Orders</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows="4"
                    placeholder="Tell us about your space, your plant wishlist, or your project..."
                    className="w-full bg-[#F8F9F5] border border-gray-200 rounded-xl px-5 py-4 text-[#1a1f16] font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#85B060]/50 focus:border-[#85B060] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="mt-2 w-full md:w-auto self-end bg-[#1a1f16] hover:bg-[#85B060] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
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