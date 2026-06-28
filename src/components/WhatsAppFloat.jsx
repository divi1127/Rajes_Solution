import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-[49] group">
      {/* Tooltip */}
      <span className="absolute right-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 bg-navy-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-navy-800 transition-all duration-200 origin-right whitespace-nowrap">
        Chat with our experts
      </span>

      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/25 animate-ping duration-1000" />
      <div className="absolute inset-0 rounded-full bg-emerald-500/20 scale-125 animate-pulse duration-2000" />

      {/* Button */}
      <a
        href="https://wa.me/918825733129?text=Hello%20Rajes%20Solutions,%20I%20am%20interested%20in%20your%20ERP%20and%20DBA%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-250 border border-emerald-400/20"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
