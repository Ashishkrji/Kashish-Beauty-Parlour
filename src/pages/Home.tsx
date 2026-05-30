import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { SERVICES, REVIEWS, BUSINESS_INFO } from "@/data";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop" 
            alt="Beautiful bride makeup" 
            className="w-full h-full object-cover scale-105 origin-center animate-[pulse_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="max-w-2xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 font-poppins text-xs font-medium uppercase tracking-widest text-[#D4AF37]">
                <Icons.Sparkles className="w-4 h-4" />
                <span>Premium Bridal Makeup Studio</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-[1.1] mb-6 drop-shadow-lg">
                Where Beauty Becomes <span className="text-[#D4AF37] italic">Timeless Elegance</span>
              </h1>
              
              <p className="text-lg md:text-xl font-poppins text-gray-200 mb-10 leading-relaxed font-light">
                Experience luxury bridal makeup, hair styling & premium beauty services in Ludhiana. Your perfect look awaits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#D4AF37] text-dark hover:bg-white border text-base" asChild>
                  <Link to="/book">Book Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-2 border-primary object-cover" alt="Client" />
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-primary bg-primary text-white flex items-center justify-center font-bold text-xs">
                    49+
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[1,2,3,4,5].map(i => <Icons.Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-sm font-poppins text-gray-300 mt-1">
                    <span className="font-semibold text-white">4.9 Star</span> Google Rating
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / STATS */}
      <section className="py-16 bg-white border-b border-accent/50 relative -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          {[
            { value: "49+", label: "Google Reviews" },
            { value: "4.9★", label: "Average Rating" },
            { value: "1000+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" }
          ].map((stat, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base font-poppins text-gray-500 font-medium">{stat.label}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" 
                    alt="Salon Interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-xl hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop" 
                    alt="Bridal Makeup" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="max-w-lg">
                <h4 className="text-secondary font-poppins text-sm uppercase tracking-widest font-semibold mb-3">About Us</h4>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6 leading-tight">
                  Crafting Flawless Looks Since <span className="italic text-primary">Inception</span>
                </h2>
                <p className="text-gray-600 font-poppins mb-6 leading-relaxed">
                  At Kashish Beauty Parlour, we believe that every woman deserves to feel confident and beautiful. Located in the heart of Ludhiana, we are a premium beauty destination offering personalized consultations and top-tier services.
                </p>
                <p className="text-gray-600 font-poppins mb-10 leading-relaxed">
                  From HD bridal transformations to rejuvenating skin treatments, our experienced professionals use only the highest quality products in a luxurious, hygienic environment to ensure you get the pampering you deserve.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {["Expert Beauty Professionals", "Premium & Safe Products", "Strict Hygiene Standards"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center shrink-0">
                        <Icons.Sparkles className="w-3 h-3" />
                      </div>
                      <span className="font-poppins text-dark font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button size="lg" asChild>
                  <Link to="/about">Read Our Story <Icons.ChevronRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeUp>
              <h4 className="text-secondary font-poppins text-sm uppercase tracking-widest font-semibold mb-3">Our Services</h4>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6">Premium Beauty Treatments</h2>
              <p className="text-gray-600 font-poppins">Discover our wide range of professional services designed to enhance your natural beauty.</p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <FadeUp key={service.id} delay={index * 0.1}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow group bg-white">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-accent/50 text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-6 min-h-[60px]">{service.description}</p>
                    <ul className="space-y-2 mb-8">
                      {service.items.slice(0, 3).map((item, i) => (
                        <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary" asChild>
                      <Link to="/services">Explore Service</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* BRIDAL SPECIALIZATION */}
      <section className="py-24 relative overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0 opacity-20 hidden md:block">
           <img 
            src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2071&auto=format&fit=crop" 
            alt="Bridal Pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <h4 className="text-secondary font-poppins text-sm uppercase tracking-widest font-semibold mb-3">Bridal Studio</h4>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
                  Your Dream <span className="italic text-secondary">Bridal Look</span> Starts Here
                </h2>
                <p className="text-gray-300 font-poppins mb-8 leading-relaxed text-lg">
                  Specializing in traditional and contemporary bridal looks. Our master artists use HD & Airbrush techniques to ensure you look flawless, stunning, and camera-ready for your big day.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  {["HD Makeup", "Airbrush Makeup", "Saree Draping", "Hair Styling", "Jewellery Setting", "Pre-Bridal Packages"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Icons.Sparkles className="w-5 h-5 text-secondary" />
                      <span className="font-poppins text-white">{item}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="bg-secondary text-dark hover:bg-white" asChild>
                  <Link to="/book">Book Bridal Consultation</Link>
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1549417242-b67db3fcf228?q=80&w=1964&auto=format&fit=crop" 
                  alt="Stunning Indian Bride" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeUp>
              <h4 className="text-secondary font-poppins text-sm uppercase tracking-widest font-semibold mb-3">Testimonials</h4>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6">Stories of Elegance</h2>
              <p className="text-gray-600 font-poppins">Join over 1000+ satisfied clients who trust Kashish Beauty Parlour.</p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <FadeUp key={review.id} delay={index * 0.1}>
                <Card className="h-full bg-accent/20 border-accent/50 p-8">
                  <div className="flex gap-1 text-[#D4AF37] mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icons.Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="font-playfair text-xl italic text-dark mb-8">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={`https://i.pravatar.cc/100?img=${index+1}`} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-poppins font-semibold text-dark">{review.name}</h4>
                      <p className="text-xs text-gray-500 font-poppins">{review.date}</p>
                    </div>
                  </div>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-primary w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Ready to Transform Your Look?</h2>
            <p className="text-accent mb-10 text-lg font-poppins max-w-2xl mx-auto">
              Book your appointment today and let our experts pamper you with the finest beauty treatments in Ludhiana.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-secondary text-dark hover:bg-white" asChild>
                <Link to="/book">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary" asChild>
                <a href={`tel:${BUSINESS_INFO.phone}`}>Call {BUSINESS_INFO.phoneDisplay}</a>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
