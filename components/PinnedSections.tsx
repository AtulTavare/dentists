"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Star, Shield, Heart } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollCanvas from "./ScrollCanvas";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Dental Checkups",
  "Teeth Cleaning",
  "Tooth Filing",
  "Gum Treatment",
  "Referrals",
];

const leftContent = {
  tag: "precision meets artistry",
  items: [
    { icon: Star, text: "Digital smile design & 3D imaging" },
    { icon: Shield, text: "Same-day crowns with CEREC technology" },
    { icon: Heart, text: "Laser dentistry for pain-free procedures" },
  ],
};

const rightContent = {
  tag: "designed for your comfort",
  items: [
    { icon: Star, text: "Sedation options for anxiety-free visits" },
    { icon: Shield, text: "Private treatment rooms & noise-canceling" },
    { icon: Heart, text: "Flexible scheduling & emergency slots" },
  ],
};

export default function PinnedSections() {
  const pinRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const el = pinRef.current;
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: el,
      pin: true,
      start: "top top",
      end: "+=300vh",
      scrub: 1,
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => st.kill();
  }, []);

  const s1 = progress < 1 / 3;
  const s2 = progress >= 1 / 3 && progress < 2 / 3;
  const s3 = progress >= 2 / 3;

  return (
    <div ref={pinRef} className="relative">
      {/* Canvas — extends above pinRef by navbar height (h-20) to start from viewport top */}
      <div className="absolute -top-20 left-0 w-full h-[calc(100vh+5rem)] overflow-hidden pointer-events-none -z-10">
        <ScrollCanvas progress={progress} />
      </div>

      {/* Content overlay — inside pinRef, aligns during pin */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-10">
        {/* Section 1: Hero — progress 0-33% */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-500 pointer-events-none"
          style={{ opacity: s1 ? 1 : 0 }}
        >
          <div className="h-full flex items-center pointer-events-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
              <div className="max-w-2xl">
                <div
                  className={`transition-all duration-700 ${
                    mounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
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
            </div>
          </div>
        </div>

        {/* Section 2: Simple heading at center bottom — progress 33-66% */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-500 pointer-events-none"
          style={{ opacity: s2 ? 1 : 0 }}
        >
          <div className="h-full flex items-end justify-center pb-20 pointer-events-auto">
            <h2 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight text-text drop-shadow-sm">
              advanced dentistry,{" "}
              beautifully delivered.
            </h2>
          </div>
        </div>

        {/* Section 3: Content at far left and far right only — progress 66-100% */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-500 pointer-events-none"
          style={{ opacity: s3 ? 1 : 0 }}
        >
          <div className="h-full flex items-center justify-between px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full pointer-events-auto">
            {/* Left */}
            <div className="max-w-xs">
              <p className="text-xs font-semibold mb-4 uppercase tracking-widest text-text drop-shadow-sm">
                {leftContent.tag}
              </p>
              <ul className="space-y-5">
                {leftContent.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={14} className="text-text" />
                      </div>
                      <span className="text-sm leading-relaxed text-text/90 drop-shadow-sm">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right */}
            <div className="max-w-xs text-right">
              <p className="text-xs font-semibold mb-4 uppercase tracking-widest text-text drop-shadow-sm">
                {rightContent.tag}
              </p>
              <ul className="space-y-5">
                {rightContent.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex items-start gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={14} className="text-text" />
                      </div>
                      <span className="text-sm leading-relaxed text-text/90 drop-shadow-sm">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Spacers — create 300vh natural height for pin */}
      <div className="h-screen" />
      <div className="h-screen" />
      <div className="h-screen" />
    </div>
  );
}
