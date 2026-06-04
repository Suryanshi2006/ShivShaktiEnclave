"use client";
import { motion } from "framer-motion";
import { Home, Shield, Trees, Banknote } from "lucide-react";

const highlights = [
  {
    icon: <Home size={40} className="text-gold" />,
    title: "Premium Living",
    description: "Choose from well-planned residential plots or move-in ready luxury villas designed with modern architecture.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <Shield size={40} className="text-gold" />,
    title: "Unmatched Security",
    description: "A fully gated colony with 24x7 CCTV surveillance, barrier entry, and dedicated guard rooms for absolute peace of mind.",
    image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=2030&auto=format&fit=crop"
  },
  {
    icon: <Trees size={40} className="text-gold" />,
    title: "Smart Infrastructure",
    description: "Wide internal roads, proper drainage systems, 24x7 electricity, and lush green environments for healthy living.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
  },
  {
    icon: <Banknote size={40} className="text-gold" />,
    title: "Clear Legal Titles",
    description: "100% transparent documentation with Dhara 80C cleared, ensuring a safe and hassle-free investment.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function HighlightsSection() {
  return (
    <section id="highlights" className="py-24 bg-charcoal text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <span className="text-xs font-bold tracking-widest text-gold uppercase">Project Highlights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Designed for <span className="text-gold italic">Perfection</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Every aspect of Shiv Shakti Enclave is meticulously planned to provide a lifestyle that is both luxurious and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-white/10 w-16 h-16 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 transform group-hover:-translate-y-4 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3 group-hover:-translate-y-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-light text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
