import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Send } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Teeth Cleaning", href: "/services" },
    { label: "Dental Checkups", href: "/services" },
    { label: "Dental Veneers", href: "/services" },
    { label: "Teeth Whitening", href: "/services" },
    { label: "Gum Treatment", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-sora font-bold text-lg text-text mb-4">
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
            <p className="text-muted text-sm leading-relaxed mb-6">
              Expert dental care for healthy, confident smiles at every age — delivered with comfort, precision, and trust.
            </p>
            <div className="space-y-3 text-sm text-muted">
              <a href="tel:+1234567890" className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <span className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-accent" />
                </span>
                +1 (234) 567-890
              </a>
              <a href="mailto:info@dental.com" className="flex items-center gap-2.5 hover:text-accent transition-colors">
                <span className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-accent" />
                </span>
                info@dental.com
              </a>
              <p className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-accent" />
                </span>
                123 Dental Street, NY 10001
              </p>
              <p className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-accent" />
                </span>
                Mon–Sat: 8AM – 6PM
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-sora font-semibold text-text mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="font-sora font-semibold text-text mb-4">Stay Updated</h3>
            <p className="text-sm text-muted mb-4">
              Get dental tips and exclusive offers straight to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-bg border border-border rounded-full px-4 py-2.5 text-sm text-text placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent-hover transition-colors flex-shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} dental. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
