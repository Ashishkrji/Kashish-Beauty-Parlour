import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { BUSINESS_INFO } from "@/data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Bridal", href: "/bridal" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={cn(
              "font-playfair font-bold text-2xl md:text-3xl tracking-tight transition-colors",
              isScrolled ? "text-primary" : "text-white drop-shadow-sm"
            )}>
              Kashish
            </span>
            <span className={cn(
              "font-poppins text-xs uppercase tracking-widest hidden sm:block transition-colors",
              isScrolled ? "text-dark" : "text-white/90 drop-shadow-sm"
            )}>
              Beauty Parlour
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "font-poppins text-sm font-medium transition-colors hover:text-secondary",
                  isScrolled ? "text-dark" : "text-white shadow-sm",
                  location.pathname === link.href && (isScrolled ? "text-primary font-semibold" : "text-secondary font-semibold")
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant={isScrolled ? "primary" : "secondary"}
              className="hidden lg:flex"
            >
              <Link to="/book">
                Book Appointment
              </Link>
            </Button>
            
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={cn(
                "hidden sm:flex items-center gap-2 font-poppins text-sm font-medium transition-colors hover:text-secondary",
                isScrolled ? "text-dark" : "text-white shadow-sm"
              )}
            >
              <Icons.Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <button
              className={cn(
                "md:hidden p-2 transition-colors",
                isScrolled ? "text-dark" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    "block font-poppins text-lg font-medium",
                    location.pathname === link.href ? "text-primary" : "text-dark"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Button asChild className="w-full">
                  <Link to="/book">
                    Book Appointment
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a href={`tel:${BUSINESS_INFO.phone}`}>
                    <Icons.Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
