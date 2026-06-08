import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 h-full">
      <h3 className="text-2xl font-extrabold text-[#1a1f16] tracking-tight mb-6">
        Send us a Message
      </h3>
      
      <form className="flex flex-col gap-5">
        
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#5a6054] ml-1 uppercase tracking-wider">Your Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-[#F8F9F5] px-5 py-3.5 rounded-xl text-sm text-[#1a1f16] placeholder-gray-400 outline-none border border-transparent focus:border-[#85B060]/50 focus:bg-white focus:shadow-sm transition-all duration-300"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#5a6054] ml-1 uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              className="w-full bg-[#F8F9F5] px-5 py-3.5 rounded-xl text-sm text-[#1a1f16] placeholder-gray-400 outline-none border border-transparent focus:border-[#85B060]/50 focus:bg-white focus:shadow-sm transition-all duration-300"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-[#5a6054] ml-1 uppercase tracking-wider">Subject</label>
          <input 
            type="text" 
            placeholder="How can we help you?" 
            className="w-full bg-[#F8F9F5] px-5 py-3.5 rounded-xl text-sm text-[#1a1f16] placeholder-gray-400 outline-none border border-transparent focus:border-[#85B060]/50 focus:bg-white focus:shadow-sm transition-all duration-300"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5 mb-2">
          <label className="text-xs font-bold text-[#5a6054] ml-1 uppercase tracking-wider">Message</label>
          <textarea 
            rows="4"
            placeholder="Write your message here..." 
            className="w-full bg-[#F8F9F5] px-5 py-3.5 rounded-xl text-sm text-[#1a1f16] placeholder-gray-400 outline-none border border-transparent focus:border-[#85B060]/50 focus:bg-white focus:shadow-sm transition-all duration-300 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="group flex items-center justify-center gap-2 w-full md:w-auto md:self-start bg-[#4A6731] hover:bg-[#3A5226] text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={(e) => e.preventDefault()}
        >
          Send Message
          <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>

      </form>
    </div>
  );
};

export default ContactForm;