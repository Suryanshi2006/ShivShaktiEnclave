/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-muted -skew-x-12 translate-x-20 opacity-50"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Villa" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-heading text-3xl font-semibold mb-2 text-gold">RKS Buildcon</p>
                  <p className="font-light">Delivering Excellence in Real Estate</p>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block glass">
              <div className="text-4xl font-heading font-bold text-primary mb-1">100%</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Clear Legal Title</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary mb-6">
              <span className="text-xs font-bold tracking-widest uppercase">About The Project</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal leading-tight mb-6">
              A Legacy of Trust, <br/>
              A Future of <span className="text-primary italic">Luxury.</span>
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed font-light">
              Shiv Shakti Enclave, developed by RKS Buildcon, is a meticulously planned premium residential community located in the heart of Muradnagar. We offer an exclusive blend of residential plots and premium villas designed for those who appreciate the finer things in life.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed font-light">
              Our vision is to provide a secure, smart, and serene living environment. With world-class infrastructure, unmatched connectivity, and clear legal titles, we ensure that your investment is not just secure but guaranteed to appreciate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Dhara 80C Cleared", 
                "Fully Gated Colony", 
                "Wide Internal Roads", 
                "24x7 Electricity & Security"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={24} />
                  <span className="text-charcoal font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-gray-100 flex items-center gap-6">
              <a href="#contact" className="btn-primary px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Schedule a Tour
              </a>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Call for Details</span>
                <a href="tel:+918218614668" className="text-xl font-heading font-bold text-charcoal hover:text-gold transition-colors">
                  +91 8218614668
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
