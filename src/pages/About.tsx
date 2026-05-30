import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-24 pb-20 overflow-hidden bg-white">
      {/* Header */}
      <section className="bg-primary py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">About Kashish</h1>
        <p className="text-accent font-poppins text-lg">Where beauty becomes timeless elegance.</p>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop" alt="Bridal Makeup Artistry" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark mb-6">Our Journey to Beauty Excellence</h2>
            <p className="text-gray-600 font-poppins mb-6 leading-relaxed">
              Founded in Ludhiana, Punjab, Kashish Beauty Parlour has grown to become one of the region's most trusted and luxurious beauty destinations. We specialize in transforming look and elevating confidence through our dedicated expertise.
            </p>
            <p className="text-gray-600 font-poppins mb-8 leading-relaxed">
              Our master stylists and makeup artists bring years of experience, ensuring every bride looks stunningly unique on her special day. From HD makeup to advanced hair styling, we provide top-tier services tailored to individual beauty goals.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Premium Products', 'Hygiene Assured', 'Experienced Pros', 'Luxury Ambience'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Icons.Sparkles className="w-4 h-4 text-secondary" />
                  <span className="font-poppins text-sm font-medium text-dark">{item}</span>
                </div>
              ))}
            </div>
            <Button asChild>
              <Link to="/book">Consult with an Expert</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
