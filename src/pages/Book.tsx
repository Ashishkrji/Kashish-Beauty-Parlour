import React from "react";
import { useForm } from "react-hook-form";
import { SERVICES } from "@/data";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/Icons";
import { motion, AnimatePresence } from "motion/react";

export default function Book() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">Book an Appointment</h1>
        <p className="text-gray-600 font-poppins">Schedule your visit to experience premium beauty services.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-accent">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Sparkles className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-dark mb-4">Booking Request Sent!</h2>
              <p className="text-gray-600 mb-8 font-poppins">
                Thank you for choosing Kashish Beauty Parlour. Our team will contact you shortly to confirm your appointment.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Book Another Appointment
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2 font-poppins">Full Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors font-poppins"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2 font-poppins">Phone Number</label>
                  <input
                    {...register("phone", { required: "Phone is required" })}
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors font-poppins"
                    placeholder="Enter your mobile number"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-2 font-poppins">Select Service</label>
                <select
                  {...register("service", { required: "Please select a service" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors font-poppins bg-white"
                >
                  <option value="">Choose a service category</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message as string}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <label className="block text-sm font-medium text-dark mb-2 font-poppins">Preferred Date</label>
                  <input
                    {...register("date", { required: "Date is required" })}
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors font-poppins"
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message as string}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2 font-poppins">Preferred Time</label>
                  <input
                    {...register("time", { required: "Time is required" })}
                    type="time"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors font-poppins"
                  />
                  {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message as string}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-2 font-poppins">Special Requests (Optional)</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors font-poppins resize-none"
                  placeholder="Any specific requirements for your appointment?"
                ></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Confirm Appointment"}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
