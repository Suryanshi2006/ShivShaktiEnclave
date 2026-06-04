"use client";
import { motion } from "framer-motion";
import { FileText, ShieldAlert, BadgeCheck, Scale } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-charcoal text-white relative border-y border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Invest with <br/><span className="text-gold italic">Absolute Confidence.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light mb-12 max-w-lg">
              We understand that buying a property is a major life decision. That&apos;s why we&apos;ve ensured complete transparency and 100% legal compliance for Shiv Shakti Enclave.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 mt-1 border border-gold/20">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Dhara 80C Cleared</h4>
                  <p className="text-gray-400 font-light text-sm">
                    The land use has been officially converted for residential purposes, ensuring your construction and investment is legally protected.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 border border-primary/20">
                  <BadgeCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Clear Legal Titles</h4>
                  <p className="text-gray-400 font-light text-sm">
                    No disputes, no hidden clauses. Every plot comes with a 100% clear legal title ready for immediate registry.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 text-white flex items-center justify-center shrink-0 mt-1 border border-white/10">
                  <Scale size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Transparent Transactions</h4>
                  <p className="text-gray-400 font-light text-sm">
                    Ethical practices and completely transparent financial transactions with no hidden charges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-full border border-gold/30 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-charcoal-light to-charcoal border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 text-center z-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl"></div>
                  <ShieldAlert size={48} className="text-gold mb-4 relative z-10" />
                  <div className="text-3xl font-heading font-bold relative z-10 text-white">100%</div>
                  <div className="text-sm uppercase tracking-widest text-gray-400 mt-2 relative z-10">Secure<br/>Investment</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
