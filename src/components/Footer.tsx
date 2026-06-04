"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t-4 border-gold">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-bold font-heading text-white">SHIV SHAKTI</span>
              <span className="text-sm tracking-widest text-gold">ENCLAVE</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              A premium residential project by RKS Buildcon. Offering a secure, smart, and luxurious living destination in the heart of Muradnagar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-semibold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors">About Project</a></li>
              <li><a href="#highlights" className="text-gray-400 hover:text-gold transition-colors">Highlights</a></li>
              <li><a href="#amenities" className="text-gray-400 hover:text-gold transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-heading font-semibold mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <span>Jalalpur Road, Metro City, Muradnagar, Uttar Pradesh</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="text-gold shrink-0" size={20} />
                <a href="tel:+918218614668" className="hover:text-gold transition-colors">+91 8218614668</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="text-gold shrink-0" size={20} />
                <a href="mailto:dakshchaudhary040@gmail.com" className="hover:text-gold transition-colors">dakshchaudhary040@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Location Map Placeholder */}
          <div>
            <h4 className="text-xl font-heading font-semibold mb-6 text-gold">Project Location</h4>
            <div className="w-full h-40 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden group">
              {/* Replace with actual map image or iframe later */}
              <div 
                className="w-full h-full bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shiv Shakti Enclave. A project by RKS Buildcon. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
