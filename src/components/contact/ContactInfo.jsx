import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const InfoItem = ({ icon: Icon, title, detail }) => (
  <div className="flex items-start gap-4 group cursor-default">
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#4A6731] shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300 shrink-0">
      <Icon size={18} strokeWidth={2.5} />
    </div>
    <div>
      <h4 className="text-[#1a1f16] font-bold text-sm mb-0.5">{title}</h4>
      <p className="text-[#5a6054] text-sm font-medium leading-relaxed max-w-[200px]">
        {detail}
      </p>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className="bg-[#F4F7F2] rounded-[2rem] p-8 md:p-10 flex flex-col justify-center h-full border border-[#EAF0E3]">
      <h3 className="text-2xl font-extrabold text-[#1a1f16] tracking-tight mb-2">
        Get in Touch
      </h3>
      <p className="text-[#5a6054] text-sm font-medium mb-8">
        Have a question about a plant or an order? Our botanical experts are here to help.
      </p>

      <div className="flex flex-col gap-6">
        <InfoItem 
          icon={MapPin} 
          title="Studio Address" 
          detail="124 GreenNest Boulevard, Koramangala, Bengaluru 560034" 
        />
        <InfoItem 
          icon={Mail} 
          title="Email Us" 
          detail="hello@greennest.com" 
        />
        <InfoItem 
          icon={Phone} 
          title="Call Us" 
          detail="+91 98765 43210" 
        />
        <InfoItem 
          icon={Clock} 
          title="Working Hours" 
          detail="Mon - Sat: 9:00 AM - 7:00 PM" 
        />
      </div>
    </div>
  );
};

export default ContactInfo;