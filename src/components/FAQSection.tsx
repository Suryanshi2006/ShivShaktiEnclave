"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Where is Shiv Shakti Enclave located?",
    answer: "Shiv Shakti Enclave is strategically located at Jalalpur Road, Metro City, Muradnagar, Uttar Pradesh. It is just 1 km from the Rapid Metro Station and 500m from ITS Dental College."
  },
  {
    question: "What is the starting price of the plots?",
    answer: "The premium residential plots start at a highly competitive price of ₹29,000 Per Square Yard. We also offer premium villa options upon request."
  },
  {
    question: "Are the property titles legally clear?",
    answer: "Absolutely. The project has 100% clear legal titles with Dhara 80C cleared, meaning the land use has been officially converted for residential purposes, ensuring a safe investment."
  },
  {
    question: "What amenities are provided in the colony?",
    answer: "The fully gated colony features 24x7 security with CCTV, barrier entry, wide internal roads, a proper drainage system, 24x7 electricity, and a dedicated guard room."
  },
  {
    question: "Is financing or loan available?",
    answer: "Yes, since our property titles are legally clear and 80C compliant, most major banks and financial institutions can process home loans for plots and construction. Contact us for assistance."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 text-primary">
            <span className="text-xs font-bold tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            Frequently Asked <span className="text-primary italic">Questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === idx ? 'border-primary/30 bg-primary/5' : 'border-gray-100 bg-white'}`}
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-lg text-charcoal pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
