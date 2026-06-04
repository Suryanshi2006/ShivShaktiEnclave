"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary/80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center text-white mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/50 bg-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide uppercase">Premium Plots & Villas</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-4 text-shadow-lg">
            A Secure & Smart <br />
            <span className="text-gold italic">Living Destination</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Experience luxury living at Jalalpur Road, Metro City, Muradnagar. 
            Invest in your future with RKS Buildcon.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-charcoal font-semibold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
            >
              Book Site Visit <ArrowRight size={20} />
            </a>
            <a 
              href="#location"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2"
            >
              <MapPin size={20} /> View Location
            </a>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/20 pt-8"
        >
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-gold">₹29K</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider mt-1">Starting / Sq Yd</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-gold">24/7</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider mt-1">Security</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-gold">1km</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider mt-1">To Rapid Metro</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-gold">80C</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider mt-1">Clear Title</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
