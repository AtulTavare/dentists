"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  "Dental Checkups",
  "Teeth Cleaning",
  "Tooth Filing",
  "Gum Treatment",
  "Referrals",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`transition-all duration-700 max-w-2xl ${
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
      </div>
    </section>
  );
}
