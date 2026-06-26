import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Services - Dental",
  description: "Explore our full range of dental services designed for your comfort and health.",
};

const services = [
  {
    title: "Teeth Cleaning",
    description: "Our professional teeth cleaning service removes plaque and tartar buildup, leaving your teeth feeling smooth and looking bright. We use gentle techniques to ensure your comfort throughout the process.",
    features: ["Ultrasonic cleaning", "Polishing & fluoride treatment", "Gentle on sensitive teeth"],
    image: "/images/service1.jpg",
  },
  {
    title: "Dental Checkups",
    description: "Comprehensive dental examinations help detect potential issues early, saving you time and discomfort. Our thorough checkups include digital X-rays and oral cancer screening.",
    features: ["Digital X-rays", "Oral cancer screening", "Early problem detection"],
    image: "/images/service2.jpg",
  },
  {
    title: "Dental Veneers",
    description: "Transform your smile with custom porcelain veneers that are matched to your natural tooth color. Veneers can correct chips, gaps, stains, and minor alignment issues.",
    features: ["Custom porcelain shells", "Natural appearance", "Long-lasting results"],
    image: "/images/service3.jpg",
  },
  {
    title: "Tooth Filing",
    description: "Gentle shaping and contouring procedures to improve the appearance and alignment of your teeth. Our precise techniques ensure natural-looking results.",
    features: ["Painless procedure", "Immediate results", "Precision shaping"],
    image: "/images/service4.jpg",
  },
  {
    title: "Gum Treatment",
    description: "Advanced periodontal care to treat and prevent gum disease. From deep cleaning to surgical procedures, we offer comprehensive solutions for gum health.",
    features: ["Deep cleaning (scaling)", "Antibiotic therapy", "Surgical options"],
    image: "/images/service5.jpg",
  },
  {
    title: "Teeth Whitening",
    description: "Professional-grade whitening treatments that can brighten your teeth by several shades in a single visit. Safe, effective, and long-lasting results guaranteed.",
    features: ["In-office treatment", "Take-home kits", "Safe & effective"],
    image: "/images/service6.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-accent-light/30 to-white" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 text-center">
          <p className="text-accent text-sm font-semibold mb-3 uppercase tracking-wider">What We Offer</p>
          <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
            our dental <span className="gradient-text">services.</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Comprehensive dental care designed to keep your smile healthy and beautiful for years to come.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-accent-light">
                  <SafeImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text mb-4">
                  {service.title.toLowerCase()}.
                </h2>
                <p className="text-muted text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-body">
                      <span className="w-6 h-6 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-accent" />
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-accent-hover transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
                >
                  Book Appointment
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
