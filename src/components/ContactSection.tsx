"use client";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  // NOTE: This should be replaced with the actual Formspree form ID
  const formspreeEndpoint = "https://formspree.io/f/xaqznyld"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const result = await response.json();
        if (Object.hasOwn(result, "errors")) {
          setErrorMessage(result.errors.map((err: any) => err.message).join(", "));
        } else {
          setErrorMessage("Something went wrong. Have you updated the Formspree ID?");
        }
        setSubmitStatus("error");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-charcoal text-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent hidden lg:block"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-5/12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Get in Touch with <br/><span className="text-gold italic">Our Experts.</span>
            </h2>
            <p className="text-gray-400 font-light mb-12">
              Interested in Shiv Shakti Enclave? Fill out the form or reach us directly. We&apos;re here to help you secure your luxury plot or villa.
            </p>
            
            <div className="space-y-8 mb-12">
              <a href="tel:+918218614668" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Call Us Directly</p>
                  <p className="text-xl font-bold">+91 8218614668</p>
                </div>
              </a>
              
              <a href="mailto:dakshchaudhary040@gmail.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email Enquiry</p>
                  <p className="text-lg font-bold">dakshchaudhary040@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Site Location</p>
                  <p className="text-lg font-bold">Jalalpur Road, Muradnagar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative"
            >
              <div className="absolute top-0 right-12 w-24 h-1 bg-gold"></div>
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-8">Register Your Interest</h3>
              
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="shrink-0 mt-0.5" size={20} />
                  <p>Thank you! Your enquiry has been sent successfully. We will get back to you shortly.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start gap-3">
                  <AlertCircle className="shrink-0 mt-0.5" size={20} />
                  <p>{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all text-charcoal"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all text-charcoal"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all text-charcoal"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message / Requirements</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all text-charcoal resize-none"
                    placeholder="I am interested in a premium plot..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"} <Send size={18} />
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy and consent to being contacted.
                </p>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
