import { Star, ArrowUpRight, Heart, Shield, Award } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "About Us - Dental",
  description: "Learn about our dental clinic, our team, and our commitment to compassionate care.",
};

const team = [
  { name: "Dr. Albert Flores", specialty: "Pediatric Dentistry", experience: "10+ years", rating: 4.8, image: "/images/doctor2.jpg" },
  { name: "Dr. Theresa Webb", specialty: "Orthodontics", experience: "8+ years", rating: 4.7, image: "/images/doctor3.jpg" },
  { name: "Dr. Jonas Suherman", specialty: "General Dentistry", experience: "7+ years", rating: 4.5, image: "/images/doctor1.jpg" },
  { name: "Dr. Sarah Chen", specialty: "Cosmetic Dentistry", experience: "12+ years", rating: 4.9, image: "/images/doctor4.jpg" },
];

const values = [
  { icon: Heart, title: "Compassionate Care", description: "We treat every patient with warmth, empathy, and genuine concern for their wellbeing." },
  { icon: Shield, title: "Safety First", description: "We maintain the highest standards of hygiene and follow strict sterilization protocols." },
  { icon: Award, title: "Excellence", description: "We continuously improve our skills and invest in the latest dental technology." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-accent-light/30 to-white" />
        <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 text-center">
          <p className="text-accent text-sm font-semibold mb-3 uppercase tracking-wider">About Us</p>
          <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
            excellence in <span className="gradient-text">dentistry.</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Delivering compassionate dental care with precision, comfort, and trust for over a decade.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text mb-6">
                our story.
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Founded with a vision to transform dental care, our clinic has been serving the community for over a decade. We believe that everyone deserves access to high-quality dental care in a comfortable and welcoming environment.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Our team of experienced professionals combines advanced technology with gentle techniques to provide personalized care for every patient. From routine checkups to complex procedures, we are committed to making your visit stress-free and pleasant.
              </p>
              <p className="text-muted leading-relaxed">
                We take pride in building lasting relationships with our patients, earning their trust through consistent excellence and genuine compassion. Your smile is our passion.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-accent-light">
                <SafeImage
                  src="/images/about-story.jpg"
                  alt="Our dental clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 glass rounded-2xl px-5 py-4 shadow-xl">
                <p className="font-sora text-3xl font-bold text-accent">12+</p>
                <p className="text-xs text-muted font-medium">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {values.map((value) => (
              <div key={value.title} className="bg-bg border border-border/50 rounded-3xl p-8 text-center card-hover">
                <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center mx-auto mb-5">
                  <value.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-sora text-xl font-bold text-text mb-3">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Team */}
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold mb-3 uppercase tracking-wider">Our Team</p>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text mb-4">
              meet our <span className="gradient-text">expert doctors.</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Our team of skilled professionals is dedicated to providing you with the best dental care experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((doc) => (
              <div key={doc.name} className="bg-bg border border-border/50 rounded-3xl overflow-hidden card-hover group">
                <div className="aspect-[3/4] overflow-hidden bg-accent-light">
                  <SafeImage
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-sora font-semibold text-text text-sm">{doc.name}</h3>
                  <p className="text-accent text-xs font-medium">{doc.specialty}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted">{doc.experience}</span>
                    <div className="flex items-center gap-1">
                      <Star size={10} className="fill-peach text-peach" />
                      <span className="text-xs text-muted">{doc.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-accent-hover transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Schedule a Visit
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
