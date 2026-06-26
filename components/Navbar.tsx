"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:px-8">
        <nav className="max-w-7xl mx-auto glass rounded-full px-5 py-3 flex items-center justify-between shadow-lg shadow-black/5">
          <Link href="/" className="flex items-center gap-2.5 font-sora font-bold text-lg text-text">
            <span className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path
                  d="M12 2C10.5 2 9 3 9 5V8C7.5 8 6 9 6 11V14C6 17 8 19 10 20V22H14V20C16 19 18 17 18 14V11C18 9 16.5 8 15 8V5C15 3 13.5 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            dental
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-text px-4 py-2 rounded-full hover:bg-surface transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-accent-hover transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Book Now
              <ArrowRight size={16} />
            </Link>
          </div>

          <button
            className="md:hidden w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden glass rounded-2xl mx-4 mt-2 px-5 py-5 space-y-1 animate-slide-down shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-muted hover:text-text hover:bg-surface px-4 py-3 rounded-xl transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-accent text-white text-sm font-semibold px-6 py-3 rounded-full mt-3 hover:bg-accent-hover transition-all"
            >
              Book Now
            </Link>
          </div>
        )}
      </header>
      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
}
