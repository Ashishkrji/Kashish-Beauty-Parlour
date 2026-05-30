import React from "react";
import { SERVICES } from "@/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Icons } from "@/components/Icons";

export default function Services() {
  return (
    <div className="pt-24 pb-20 overflow-hidden bg-white">
      {/* Header */}
      <section className="bg-primary py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Our Services</h1>
        <p className="text-accent font-poppins text-lg">Indulge in premium beauty treatments.</p>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1 w-full relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                 {/* Map a dynamic stock image based on the service id */}
                 <img 
                    src={
                      service.id === 'bridal' ? 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=2074&auto=format&fit=crop' :
                      service.id === 'hair' ? 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1926&auto=format&fit=crop' :
                      service.id === 'skin' ? 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop' :
                      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop'
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={service.title}
                 />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-dark">{service.title}</h2>
                </div>
                <p className="text-gray-600 font-poppins mb-6">{service.description}</p>
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="font-poppins font-semibold text-dark mb-4">Included Services:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600 font-poppins">
                        <Icons.Sparkles className="w-3 h-3 text-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-poppins">Starting At</span>
                    <p className="text-xl font-bold font-poppins text-primary">{service.price}</p>
                  </div>
                  <Button asChild>
                    <Link to="/book">Book Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
