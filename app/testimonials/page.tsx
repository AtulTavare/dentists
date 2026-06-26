import { Star, Quote } from "lucide-react";
import type { Metadata } from "next";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Testimonials - Dental",
  description: "Read what our patients have to say about their dental care experience.",
};

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Teeth Whitening Patient",
    rating: 5,
    text: "Absolutely amazing experience! The staff was incredibly friendly and professional. My teeth have never looked better.",
    image: "/images/patient1.jpg",
  },
  {
    name: "Michael Chen",
    role: "Dental Implant Patient",
    rating: 5,
    text: "Dr. Flores and his team did an outstanding job with my dental implants. The results exceeded my expectations.",
    image: "/images/patient2.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Regular Checkup Patient",
    rating: 5,
    text: "I've been coming here for over 3 years now and I couldn't be happier. The dental care is truly top-notch.",
    image: "/images/patient3.jpg",
  },
  {
    name: "David Rodriguez",
    role: "Veneer Patient",
    rating: 5,
    text: "Got my veneers done here and the results are phenomenal. They matched the color perfectly and it was painless.",
    image: "/images/patient4.jpg",
  },
  {
    name: "Lisa Thompson",
    role: "Gum Treatment Patient",
    rating: 5,
    text: "After struggling with gum issues for years, I finally found relief here. Dr. Webb's expertise is truly remarkable.",
    image: "/images/patient5.jpg",
  },
  {
    name: "James Wilson",
    role: "Pediatric Dentistry Patient",
    rating: 5,
    text: "Taking my kids here is no longer a struggle. The pediatric team is incredible with children. Highly recommend!",
    image: "/images/patient6.jpg",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-accent-light/30 to-white" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 text-center">
          <p className="text-accent text-sm font-semibold mb-3 uppercase tracking-wider">Testimonials</p>
          <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
            what patients <span className="gradient-text">say.</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Real stories from real patients who trust us with their dental care.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-bg border border-border/50 rounded-3xl p-8 card-hover"
              >
                <Quote size={28} className="text-accent/30 mb-4" />
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-peach text-peach"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-4 border-t border-border pt-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-accent-light">
                    <SafeImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-sora font-semibold text-text text-sm">{testimonial.name}</p>
                    <p className="text-accent text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass rounded-3xl px-8 py-10 text-center">
              <p className="font-sora text-4xl font-bold text-text mb-2">98%</p>
              <p className="text-accent text-xs tracking-wider uppercase font-semibold">Satisfaction Rate</p>
            </div>
            <div className="glass rounded-3xl px-8 py-10 text-center">
              <p className="font-sora text-4xl font-bold text-text mb-2">2,500+</p>
              <p className="text-accent text-xs tracking-wider uppercase font-semibold">Happy Patients</p>
            </div>
            <div className="glass rounded-3xl px-8 py-10 text-center">
              <p className="font-sora text-4xl font-bold text-text mb-2">4.9</p>
              <p className="text-accent text-xs tracking-wider uppercase font-semibold">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
