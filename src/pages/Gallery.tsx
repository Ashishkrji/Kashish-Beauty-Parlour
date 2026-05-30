import React from "react";
import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583900985737-6d0484559858?q=80&w=1964&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=2074&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550428515-37330dbd404f?q=80&w=1980&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1926&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden bg-white">
       <section className="bg-primary py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Our Portfolio</h1>
        <p className="text-accent font-poppins text-lg">A showcase of our finest work.</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: (i % 3) * 0.1 }}
               className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer"
             >
               <img src={img} alt={`Gallery Image ${i+1}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
