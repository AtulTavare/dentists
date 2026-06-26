"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Star, Award, Users, Clock } from "lucide-react";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Albert Flores",
    specialty: "Pediatric Dentistry",
    experience: "10+ years",
    rating: 4.8,
    image: "/images/doctor2.jpg",
  },
  {
    name: "Dr. Theresa Webb",
    specialty: "Orthodontics",
    experience: "8+ years",
    rating: 4.7,
    image: "/images/doctor3.jpg",
  },
];

const highlights = [
  { icon: Award, label: "Award Winning", value: "15+" },
  { icon: Users, label: "Expert Doctors", value: "20+" },
  { icon: Clock, label: "Years Experience", value: "12+" },
];

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Image with floating badges */}
          <div
            className={`relative transition-all duration-700 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-accent-light">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about.jpg"
                  alt="Dental procedure"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.style.display = "none";
                  }}
                />
              </div>

              {/* Floating badge — Experience */}
              <div className="absolute -bottom-5 -right-5 lg:-right-8 glass rounded-2xl px-5 py-4 shadow-xl animate-float">
                <p className="font-sora text-3xl font-bold text-accent">12+</p>
                <p className="text-xs text-muted font-medium">Years of Excellence</p>
              </div>

              {/* Floating badge — Patients */}
              <div className="absolute -top-4 -left-4 lg:-left-6 glass rounded-2xl px-5 py-4 shadow-xl animate-float delay-300">
                <div className="flex items-center gap-2 mb-1">
                  <Users size={16} className="text-indigo" />
                  <p className="font-sora text-lg font-bold text-text">50K+</p>
                </div>
                <p className="text-xs text-muted font-medium">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-accent text-sm font-semibold mb-3 uppercase tracking-wider">
              About Us
            </p>
            <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight mb-6">
              excellence in dentistry with{" "}
              <span className="gradient-text">compassionate care.</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-8">
              We are committed to providing the highest quality dental care in a warm and welcoming environment. Our experienced team combines advanced technology with gentle techniques for every patient.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="text-center p-4 rounded-2xl bg-surface">
                    <Icon size={20} className="text-accent mx-auto mb-2" />
                    <p className="font-sora text-2xl font-bold text-text">{h.value}</p>
                    <p className="text-xs text-muted mt-1">{h.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Doctors */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {doctors.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-center gap-3 bg-surface rounded-2xl p-4 flex-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-light overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-sora font-semibold text-sm text-text truncate">
                      {doc.name}
                    </p>
                    <p className="text-accent text-xs">{doc.specialty}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star size={10} className="fill-peach text-peach" />
                      <span className="text-xs text-muted">{doc.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-text text-text text-sm font-semibold px-7 py-3 rounded-full hover:bg-text hover:text-white transition-all duration-200"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
