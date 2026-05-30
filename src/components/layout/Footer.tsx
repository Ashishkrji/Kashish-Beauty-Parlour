import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "@/components/Icons";
import { BUSINESS_INFO, SERVICES } from "@/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="font-playfair font-bold text-3xl text-secondary mb-2">Kashish</h3>
              <p className="font-poppins text-sm uppercase tracking-widest text-gray-300">Beauty Parlour</p>
            </div>
            <p className="font-poppins text-gray-400 text-sm leading-relaxed">
              Premium bridal makeup, hair styling, and beauty services in Ludhiana. Where beauty becomes timeless elegance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-dark transition-colors">
                <Icons.Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-dark transition-colors">
                <Icons.Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-xl mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 font-poppins text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-secondary transition-colors block">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors block">About Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors block">Services</Link></li>
              <li><Link to="/bridal" className="hover:text-secondary transition-colors block">Bridal Portfolio</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors block">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
             <h4 className="font-playfair font-semibold text-xl mb-6 border-b border-white/20 pb-2 inline-block">Our Services</h4>
             <ul className="space-y-3 font-poppins text-gray-400 text-sm">
               {SERVICES.map((s) => (
                 <li key={s.id}><Link to="/services" className="hover:text-secondary transition-colors block">{s.title}</Link></li>
               ))}
               <li><Link to="/book" className="text-secondary font-medium hover:text-white transition-colors block mt-2">Book Appointment &rarr;</Link></li>
             </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-xl mb-6 border-b border-white/20 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 font-poppins text-gray-400 text-sm">
              <li className="flex gap-3 items-start">
                <Icons.MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Icons.Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-secondary transition-colors">{BUSINESS_INFO.phoneDisplay}</a>
              </li>
              <li className="flex gap-3 items-start">
                <Icons.Calendar className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Kashish Beauty Parlour. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="font-poppins text-sm text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
