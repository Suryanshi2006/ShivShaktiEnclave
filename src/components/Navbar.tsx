"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Highlights", href: "#highlights" },
  { name: "Location", href: "#location" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span className={`text-2xl font-bold font-heading ${isScrolled ? "text-primary" : "text-white"}`}>
            SHIV SHAKTI
          </span>
          <span className={`text-xs tracking-widest ${isScrolled ? "text-gold" : "text-gold-light"}`}>
            ENCLAVE
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                isScrolled ? "text-charcoal" : "text-white/90"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              isScrolled
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-charcoal font-medium text-lg border-b border-gray-100 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-white text-center py-3 rounded-md font-medium mt-4 flex items-center justify-center space-x-2"
              >
                <Phone size={18} />
                <span>Contact Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
