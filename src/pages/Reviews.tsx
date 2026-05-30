import React from "react";
import { REVIEWS } from "@/data";
import { Card } from "@/components/ui/Card";
import { Icons } from "@/components/Icons";
import { motion } from "motion/react";

export default function Reviews() {
  // Let's duplicate the reviews to have a fuller page
  const allReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS].map((r, i) => ({ ...r, id: i }));

  return (
    <div className="pt-24 pb-20 overflow-hidden bg-white">
      <section className="bg-primary py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Client Reviews</h1>
        <p className="text-accent font-poppins text-lg">Hear what our beautiful clients say.</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl border-b border-gray-100">
        <div className="flex justify-center items-center gap-1 mb-4 text-[#D4AF37]">
          {[1,2,3,4,5].map(i => <Icons.Star key={i} className="w-8 h-8 fill-current" />)}
        </div>
        <h2 className="text-4xl font-playfair font-bold text-dark mb-4">4.9/5 Average Rating</h2>
        <p className="text-gray-600 font-poppins text-lg">Based on 49+ verified reviews on Google.</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((review, index) => (
             <motion.div 
               key={review.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: (index % 3) * 0.1 }}
             >
                <Card className="h-full bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-1 text-[#D4AF37] mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icons.Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="font-poppins text-gray-700 mb-8 italic">"{review.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg font-playfair">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-dark">{review.name}</h4>
                      <p className="text-xs text-gray-500 font-poppins">{review.date}</p>
                    </div>
                  </div>
                </Card>
             </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
