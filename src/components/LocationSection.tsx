"use client";
import { motion } from "framer-motion";
import { MapPin, Train, GraduationCap, ShoppingBag, Stethoscope, Building2 } from "lucide-react";

const landmarks = [
  { name: "Rapid Metro Station", distance: "1 km", time: "5 Mins", icon: <Train size={24} /> },
  { name: "ITS Dental College", distance: "500 m", time: "2 Mins", icon: <GraduationCap size={24} /> },
  { name: "KIET College", distance: "500 m", time: "2 Mins", icon: <GraduationCap size={24} /> },
  { name: "Surya Hospital", distance: "500 m", time: "2 Mins", icon: <Stethoscope size={24} /> },
  { name: "Local Market", distance: "500 m", time: "2 Mins", icon: <ShoppingBag size={24} /> },
  { name: "Railway Station", distance: "500 m", time: "2 Mins", icon: <Train size={24} /> },
  { name: "School in Campus", distance: "0 km", time: "0 Mins", icon: <Building2 size={24} /> },
];

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 text-primary">
            <MapPin size={16} />
            <span className="text-xs font-bold tracking-widest uppercase">Prime Location</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            Connected to <span className="text-primary italic">Everything.</span>
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Situated at Jalalpur Road, Metro City, Muradnagar, Shiv Shakti Enclave offers unparalleled connectivity to major educational institutions, healthcare, and transport hubs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group"
          >
            {/* Embedded Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111867.79634938096!2d77.41164966601456!3d28.766336040842887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf3094896e001%3A0xc3f7a63753da6929!2sMuradnagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-125 transition-all duration-700 group-hover:grayscale-0"
            ></iframe>
            
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <MapPin size={18} /> Jalalpur Road, Muradnagar
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-2/5">
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-8">Connectivity Timeline</h3>
            <div className="relative border-l border-gray-200 ml-4 space-y-8">
              {landmarks.map((landmark, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-primary">
                    <div className="scale-75">{landmark.icon}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow group">
                    <h4 className="font-semibold text-charcoal text-lg group-hover:text-primary transition-colors">{landmark.name}</h4>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1 font-medium bg-white px-2 py-1 rounded border border-gray-100">
                        {landmark.distance}
                      </span>
                      <span className="flex items-center gap-1 text-primary">
                        Est. {landmark.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
