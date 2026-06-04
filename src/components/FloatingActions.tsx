"use client";
import { MessageCircle, Phone, Mail } from "lucide-react";

export default function FloatingActions() {
  const phoneNumber = "+918218614668";
  const message = "Hello, I am interested in Shiv Shakti Enclave. Please share more details.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const mailtoUrl = "mailto:dakshchaudhary040@gmail.com";
  const telUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={mailtoUrl}
        className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-all hover:-translate-y-1 group relative"
        aria-label="Email Us"
      >
        <Mail size={22} />
        <span className="absolute right-14 bg-white text-gray-800 text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Email Us
        </span>
      </a>
      <a
        href={telUrl}
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1 group relative"
        aria-label="Call Now"
      >
        <Phone size={22} />
        <span className="absolute right-14 bg-white text-gray-800 text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20b858] transition-all hover:-translate-y-1 group relative"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={30} />
        <span className="absolute right-16 bg-white text-gray-800 text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
      </a>
    </div>
  );
}
