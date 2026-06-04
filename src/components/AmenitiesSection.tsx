"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Video, Zap, Droplet, Users, Trees, Map, BoomBox } from "lucide-react";

const amenities = [
  { name: "24x7 Security", icon: <ShieldCheck size={32} /> },
  { name: "CCTV Surveillance", icon: <Video size={32} /> },
  { name: "Continuous Electricity", icon: <Zap size={32} /> },
  { name: "Proper Drain Line", icon: <Droplet size={32} /> },
  { name: "Guard Room", icon: <Users size={32} /> },
  { name: "Green Landscaping", icon: <Trees size={32} /> },
  { name: "Wide Internal Roads", icon: <Map size={32} /> },
  { name: "Barrier Entry", icon: <BoomBox size={32} /> },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6 text-gold">
            <span className="text-xs font-bold tracking-widest uppercase">World Class Amenities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Everything You Need, <br/> <span className="text-gold italic">Right Here.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">
            We have designed every aspect of the community to ensure comfort, convenience, and absolute security for your family.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {amenities.map((amenity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-gold hover:text-charcoal transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="mb-4 text-gold group-hover:text-charcoal transition-colors duration-300 group-hover:scale-110 transform">
                {amenity.icon}
              </div>
              <h3 className="font-semibold">{amenity.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
