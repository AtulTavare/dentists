"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-accent-light/30 to-white" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 text-center">
          <p className="text-accent text-sm font-semibold mb-3 uppercase tracking-wider">Contact Us</p>
          <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
            get in <span className="gradient-text">touch.</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Have a question or ready to schedule your visit? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, title: "Phone", detail: "+1 (234) 567-890", href: "tel:+1234567890" },
                { icon: Mail, title: "Email", detail: "info@dental.com", href: "mailto:info@dental.com" },
                { icon: MapPin, title: "Address", detail: "123 Dental Street, NY 10001", href: null },
                { icon: Clock, title: "Hours", detail: "Mon–Sat: 8AM – 6PM", href: null },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-bg border border-border/50 rounded-2xl p-5 flex items-center gap-4 card-hover">
                    <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-sora font-semibold text-text text-sm">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-muted text-sm hover:text-accent transition-colors">
                          {item.detail}
                        </a>
                      ) : (
                        <p className="text-muted text-sm">{item.detail}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-bg border border-border/50 rounded-3xl p-8 sm:p-10">
                <h2 className="font-sora text-2xl font-bold text-text mb-2">
                  send us a message.
                </h2>
                <p className="text-muted text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-16">
                    <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                    <h3 className="font-sora text-2xl font-bold text-text mb-2">Message Sent!</h3>
                    <p className="text-muted">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">First Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">Last Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">Email</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">Phone</label>
                        <input
                          type="tel"
                          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Service</label>
                      <select className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all">
                        <option value="">Select a service</option>
                        <option value="checkup">Dental Checkup</option>
                        <option value="cleaning">Teeth Cleaning</option>
                        <option value="veneers">Dental Veneers</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="gum">Gum Treatment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Message</label>
                      <textarea
                        rows={4}
                        required
                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                        placeholder="Tell us about your dental needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent text-white text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-accent-hover transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/25"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
