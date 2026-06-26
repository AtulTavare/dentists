"use client";

import { useEffect, useState } from "react";
import { ThumbsUp, Smile, Users } from "lucide-react";

const stats = [
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Satisfaction Rate",
    description: "Patients love their results",
  },
  {
    icon: Smile,
    value: "50K+",
    label: "Smiles Transformed",
    description: "And counting every day",
  },
  {
    icon: Users,
    value: "4.9",
    label: "Customer Rating",
    description: "Average from 2,500+ reviews",
  },
];

export default function Stats() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`glass rounded-3xl p-8 text-center card-hover ${
                  mounted ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-accent" />
                </div>
                <p className="font-sora text-4xl lg:text-5xl font-bold text-text mb-2">
                  {stat.value}
                </p>
                <p className="font-sora text-sm font-semibold text-text mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-muted">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
