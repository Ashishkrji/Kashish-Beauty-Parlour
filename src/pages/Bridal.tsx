import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { motion } from "motion/react";

export default function Bridal() {
  return (
    <div className="pt-24 pb-20 overflow-hidden bg-white">
      {/* Header */}
      <section className="bg-dark py-24 text-center relative">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2071&auto=format&fit=crop" alt="Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">Bridal <span className="text-[#D4AF37] italic">Specialization</span></h1>
          <p className="text-gray-300 font-poppins text-lg">Your dream bridal look starts here.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <h2 className="text-3xl font-playfair font-bold text-dark mb-6">A Flawless Look for Your Special Day</h2>
        <p className="text-gray-600 font-poppins mb-8 leading-relaxed">
          At Kashish Beauty Parlour, we understand that your wedding day is one of the most important days of your life. Our expert Bridal Team specializes in creating pristine, long-lasting, and breathtaking makeovers that enhance your natural beauty while aligning perfectly with your vision.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild className="bg-secondary text-dark hover:bg-dark hover:text-white border-none">
            <Link to="/book">Book Bridal Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: 'https://images.unsplash.com/photo-1549417242-b67db3fcf228?q=80&w=1964&auto=format&fit=crop', title: 'HD Makeup' },
            { img: 'https://images.unsplash.com/photo-1583900985737-6d0484559858?q=80&w=1964&auto=format&fit=crop', title: 'Airbrush Makeup' },
            { img: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2071&auto=format&fit=crop', title: 'Bridal Hair Styling' },
            { img: 'https://images.unsplash.com/photo-1550428515-37330dbd404f?q=80&w=1980&auto=format&fit=crop', title: 'Engagement Makeup' },
            { img: 'https://images.unsplash.com/photo-1549417242-b67db3fcf228?q=80&w=1964&auto=format&fit=crop', title: 'Saree Draping' },
            { img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop', title: 'Jewellery Setting' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/5] shadow-lg"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex items-end p-6">
                <h3 className="text-white font-playfair text-2xl font-bold translate-y-4 transition-transform duration-300 group-hover:translate-y-0">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
