"use client";
import { motion } from "framer-motion";
import { TrendingUp, Landmark } from "lucide-react";

export default function InvestmentSection() {
  return (
    <section id="investment" className="py-16 lg:py-24 bg-muted relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold-light mb-6">
              <TrendingUp size={16} className="text-gold" />
              <span className="text-xs font-bold tracking-widest uppercase text-charcoal">Investment Opportunity</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6 leading-tight">
              A Smart Asset for <br/> <span className="text-primary italic">Generational Wealth.</span>
            </h2>
            
            <p className="text-gray-600 text-lg font-light mb-8">
              Real estate in Muradnagar is witnessing exponential growth due to upcoming infrastructure projects and its establishment as an educational hub. Investing in Shiv Shakti Enclave secures not just a home, but a high-yield asset.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp size={24} />
                </div>
                <h4 className="font-bold text-charcoal mb-2">High Appreciation</h4>
                <p className="text-sm text-gray-500">Strategic location near Rapid Metro guarantees excellent property value appreciation over time.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-4">
                  <Landmark size={24} />
                </div>
                <h4 className="font-bold text-charcoal mb-2">Educational Hub</h4>
                <p className="text-sm text-gray-500">Proximity to KIET and ITS Dental College creates constant demand for residential spaces.</p>
              </div>
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Discuss Investment Plans <TrendingUp size={18} />
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="bg-charcoal text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
              
              <h3 className="text-2xl font-heading font-bold mb-8 relative z-10">Project Growth Metrics</h3>
              
              <div className="space-y-8 relative z-10">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Expected ROI (5 Years)</span>
                    <span className="text-gold font-bold">150%+</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gold h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Infrastructure Development</span>
                    <span className="text-gold font-bold">90%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gold h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Current Occupancy Rate</span>
                    <span className="text-gold font-bold">Fast Filling</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[60%] animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-sm text-gray-300 italic">
                  &quot;Muradnagar is emerging as one of the most promising real estate micro-markets in the NCR region.&quot;
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
