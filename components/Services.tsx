"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Sparkles, Shield, Heart, Zap, CheckCircle, Stethoscope } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    title: "Teeth Cleaning",
    description: "Professional cleaning to keep your teeth healthy and bright with gentle ultrasonic technology.",
    icon: Sparkles,
    color: "bg-accent-light text-accent",
  },
  {
    title: "Dental Checkups",
    description: "Comprehensive exams to catch issues early and maintain optimal oral health.",
    icon: Stethoscope,
    color: "bg-indigo/10 text-indigo",
  },
  {
    title: "Dental Veneers",
    description: "Transform your smile with custom porcelain veneers matched to perfection.",
    icon: Heart,
    color: "bg-peach/10 text-peach",
  },
  {
    title: "Tooth Filing",
    description: "Gentle shaping procedures for a perfectly aligned, natural-looking smile.",
    icon: Zap,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Gum Treatment",
    description: "Advanced gum care to treat and prevent periodontal disease effectively.",
    icon: Shield,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Whitening",
    description: "Professional-grade treatments to brighten your smile by several shades.",
    icon: CheckCircle,
    color: "bg-sky-100 text-sky-600",
  },
];

export default function Services() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-accent text-sm font-semibold mb-3 uppercase tracking-wider">
              Our Services
            </p>
            <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight">
              everything your smile needs,{" "}
              <span className="gradient-text">all in one place.</span>
            </h2>
          </div>
          <p className="text-muted text-base max-w-md leading-relaxed lg:text-right">
            Experience modern dental care delivered with comfort, precision, and attention to detail in a calm, welcoming environment.
          </p>
        </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="bento-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLarge = i === 0;

            return (
              <div
                key={service.title}
                className={`group bg-bg rounded-3xl p-8 card-hover cursor-pointer border border-border/50 ${
                  isLarge ? "flex flex-col justify-between min-h-[320px]" : ""
                } ${mounted ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="font-sora text-xl font-bold text-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowUpRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal>
        <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-accent-hover transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            View All Services
            <ArrowRight size={16} />
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
