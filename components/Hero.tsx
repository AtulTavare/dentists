"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import ScrollCanvas from "./ScrollCanvas";

const services = [
  "Dental Checkups",
  "Teeth Cleaning",
  "Tooth Filing",
  "Gum Treatment",
  "Referrals",
];

const doctors = [
  {
    name: "Dr. Jonas Suherman",
    specialty: "Pediatric Dentistry",
    experience: "7 years",
    rating: "4.5",
    image: "/images/doctor1.jpg",
  },
  {
    name: "Dr. Albert Flores",
    specialty: "General Dentistry",
    experience: "10 years",
    rating: "4.8",
    image: "/images/doctor2.jpg",
  },
  {
    name: "Dr. Theresa Webb",
    specialty: "Orthodontics",
    experience: "8 years",
    rating: "4.7",
    image: "/images/doctor3.jpg",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const next = () => setCurrent((c) => (c + 1) % doctors.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + doctors.length) % doctors.length);

  const doctor = doctors[current];

  return (
    <div ref={sectionRef}>
      <section className="relative overflow-hidden min-h-screen">
        {/* Frame sequence canvas */}
        <ScrollCanvas />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Trusted by 50,000+ patients
            </div>

            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text leading-[1.1] tracking-tight mb-6">
              modern dentistry
              <br />
              with{" "}
              <span className="gradient-text">gentle care.</span>
            </h1>

            <p className="text-muted text-lg max-w-md mb-8 leading-relaxed">
              Expert dental care for healthy, confident smiles at every age
              — delivered with comfort, precision, and trust.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-12">
              {services.map((s, i) => (
                <button
                  key={s}
                  className={`glass px-5 py-2.5 rounded-full text-sm font-medium text-text hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 ${
                    mounted ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${400 + i * 80}ms` }}
                >
                  {s}
                </button>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-text text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-text/90 transition-all duration-200 hover:shadow-xl hover:shadow-text/20"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right content — Doctor card + navigation */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full animate-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo/10 rounded-full animate-float delay-300" />

            {/* Doctor card */}
            <div className="glass rounded-3xl p-6 shadow-xl shadow-black/5 max-w-sm ml-auto">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-20 h-20 rounded-2xl bg-accent-light overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <p className="font-sora font-semibold text-text">{doctor.name}</p>
                  <p className="text-accent text-sm font-medium">{doctor.specialty}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="fill-peach text-peach" />
                  <span className="text-sm font-semibold text-text">{doctor.rating}</span>
                  <span className="text-xs text-muted">Rating</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-text">{doctor.experience}</p>
                  <p className="text-xs text-muted">Experience</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-end gap-4 mt-8">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted hover:bg-text hover:text-white hover:border-text transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-3">
                <span className="font-sora font-semibold text-sm text-text">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <div className="w-20 h-1 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${((current + 1) / doctors.length) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-sm text-muted">
                  {String(doctors.length).padStart(2, "0")}
                </span>
              </div>

              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted hover:bg-text hover:text-white hover:border-text transition-all duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
