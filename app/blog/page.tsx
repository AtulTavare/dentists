import Link from "next/link";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import type { Metadata } from "next";
import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Blog - Dental",
  description: "Dental tips, advice, and news from our expert team.",
};

const posts = [
  {
    title: "5 Tips for Maintaining Perfect Oral Health",
    excerpt: "Good oral hygiene is essential for a healthy smile. Here are five simple tips to keep your teeth and gums in top condition every day.",
    date: "June 15, 2025",
    author: "Dr. Albert Flores",
    category: "Oral Health",
    image: "/images/blog1.jpg",
    slug: "oral-health-tips",
  },
  {
    title: "Understanding Dental Veneers: What You Need to Know",
    excerpt: "Dental veneers are a popular cosmetic solution for achieving a perfect smile. Learn about the process, benefits, and what to expect.",
    date: "June 8, 2025",
    author: "Dr. Theresa Webb",
    category: "Cosmetic",
    image: "/images/blog2.jpg",
    slug: "dental-veneers-guide",
  },
  {
    title: "How Often Should You Visit the Dentist?",
    excerpt: "Regular dental checkups are crucial for preventing serious oral health issues. Discover the recommended frequency and why it matters.",
    date: "May 30, 2025",
    author: "Dr. Jonas Suherman",
    category: "Prevention",
    image: "/images/blog3.jpg",
    slug: "dental-visit-frequency",
  },
  {
    title: "The Benefits of Professional Teeth Whitening",
    excerpt: "Over-the-counter products can only do so much. Learn why professional teeth whitening is the safest and most effective option.",
    date: "May 22, 2025",
    author: "Dr. Sarah Chen",
    category: "Cosmetic",
    image: "/images/blog4.jpg",
    slug: "professional-whitening",
  },
  {
    title: "Overcoming Dental Anxiety: A Patient's Guide",
    excerpt: "Dental fear is more common than you think. Here are proven strategies to help you feel calm and confident at your next appointment.",
    date: "May 15, 2025",
    author: "Dr. Albert Flores",
    category: "Patient Care",
    image: "/images/blog5.jpg",
    slug: "overcoming-dental-anxiety",
  },
  {
    title: "Why Gum Health Matters More Than You Think",
    excerpt: "Healthy gums are the foundation of a healthy smile. Learn about the signs of gum disease and how to keep your gums in great shape.",
    date: "May 8, 2025",
    author: "Dr. Theresa Webb",
    category: "Oral Health",
    image: "/images/blog6.jpg",
    slug: "gum-health-importance",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-accent-light/30 to-white" />
        <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-indigo/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 text-center">
          <p className="text-accent text-sm font-semibold mb-3 uppercase tracking-wider">Blog</p>
          <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
            dental <span className="gradient-text">insights.</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Tips, insights, and news from our dental experts to help you maintain a healthy, beautiful smile.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-bg border border-border/50 rounded-3xl overflow-hidden card-hover group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-accent-light">
                  <SafeImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={12} />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="font-sora text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Read more <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
