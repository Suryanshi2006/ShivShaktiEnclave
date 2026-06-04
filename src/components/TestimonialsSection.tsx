"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Investor",
    text: "Investing in Shiv Shakti Enclave was one of my best decisions. The location is prime, the documentation is crystal clear, and the development speed is impressive.",
    rating: 5,
    initial: "R"
  },
  {
    name: "Sneha Sharma",
    role: "Homebuyer",
    text: "We were looking for a secure gated community for our family. The 24x7 security, wide roads, and proximity to schools made this the perfect choice.",
    rating: 5,
    initial: "S"
  },
  {
    name: "Amit Patel",
    role: "Business Owner",
    text: "The transparency shown by RKS Buildcon is commendable. Having Dhara 80C cleared gave me the confidence to purchase a premium villa plot here.",
    rating: 5,
    initial: "A"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 text-primary">
            <span className="text-xs font-bold tracking-widest uppercase">Client Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6">
            Words of <span className="text-primary italic">Trust.</span>
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Hear what our esteemed clients have to say about their experience with RKS Buildcon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12 transform group-hover:-rotate-12 transition-transform duration-300" />
              
              <div className="flex items-center gap-1 text-gold mb-6 relative z-10">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-600 italic font-light leading-relaxed mb-8 relative z-10">
                &quot;{t.text}&quot;
              </p>
              
              <div className="flex items-center gap-4 relative z-10 border-t border-gray-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold font-heading text-xl">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
