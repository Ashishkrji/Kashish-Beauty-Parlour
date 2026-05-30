import React from "react";
import { Icons } from "@/components/Icons";
import { BUSINESS_INFO } from "@/data";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  return (
    <div className="pt-24 pb-20 overflow-hidden bg-white">
      <section className="bg-primary py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Contact Us</h1>
        <p className="text-accent font-poppins text-lg">We would love to hear from you.</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-playfair font-bold text-dark mb-6">Get In Touch</h2>
            <p className="text-gray-600 font-poppins mb-10">Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center shrink-0">
                  <Icons.MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-dark mb-1">Visit Us</h4>
                  <p className="text-gray-600 font-poppins">{BUSINESS_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center shrink-0">
                  <Icons.Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-dark mb-1">Call Us</h4>
                  <p className="text-gray-600 font-poppins">{BUSINESS_INFO.phoneDisplay}</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center shrink-0">
                  <Icons.Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-dark mb-1">Working Hours</h4>
                  <p className="text-gray-600 font-poppins">{BUSINESS_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-playfair font-semibold text-xl mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary hover:text-dark transition-colors">
                  <Icons.Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary hover:text-dark transition-colors">
                  <Icons.Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13702.730303847748!2d75.83615309999999!3d30.8242006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a81c15f9ee767%3A0xe543fa01cbf5d482!2sChimni%20Rd%2C%20Shimlapuri%2C%20Ludhiana%2C%20Punjab%20141003!5e0!3m2!1sen!2sin!4v1709825488123!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Google Maps Location"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
