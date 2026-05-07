import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Insights — Vital Vision | Blog & Resources" },
      { name: "description", content: "Expert insights on AI, branding, web design, data analytics, and digital growth for African businesses." },
    ],
  }),
});

const posts = [
  { title: "How AI is Transforming Web Design in 2024", category: "AI", excerpt: "Discover how artificial intelligence is revolutionizing the way websites are designed and built.", date: "Dec 15, 2024", readTime: "5 min", gradient: "from-neon-blue to-neon-purple" },
  { title: "5 Branding Mistakes Killing Your Business", category: "Branding", excerpt: "Common branding pitfalls that cost businesses customers and how to fix them.", date: "Dec 10, 2024", readTime: "4 min", gradient: "from-neon-purple to-neon-cyan" },
  { title: "The Power of Data-Driven Decision Making", category: "Analytics", excerpt: "Why businesses that leverage data analytics grow 3x faster than those that don't.", date: "Dec 5, 2024", readTime: "6 min", gradient: "from-neon-cyan to-neon-blue" },
  { title: "Building a Premium Digital Presence in Ghana", category: "Design", excerpt: "How Ghanaian businesses can compete globally with world-class digital branding.", date: "Nov 28, 2024", readTime: "5 min", gradient: "from-neon-blue to-neon-cyan" },
  { title: "AI Automation: A Small Business Guide", category: "AI", excerpt: "Practical ways small businesses can use AI to save time and boost productivity.", date: "Nov 20, 2024", readTime: "7 min", gradient: "from-neon-purple to-neon-blue" },
  { title: "The Future of African Tech Innovation", category: "Innovation", excerpt: "Why Africa is becoming the next frontier for digital innovation and tech startups.", date: "Nov 15, 2024", readTime: "6 min", gradient: "from-neon-cyan to-neon-purple" },
];

function BlogPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Insights"
            title="Ideas That"
            titleGradient="Inspire Growth"
            description="Expert perspectives on design, technology, AI, and building successful digital businesses."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.title} className="glass-card overflow-hidden hover-lift group">
                <div className={`aspect-[16/9] bg-gradient-to-br ${post.gradient} opacity-60 group-hover:opacity-80 transition-opacity`} />
                <div className="p-6">
                  <span className="text-xs font-semibold text-neon-blue uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-lg font-bold text-foreground mt-2 mb-2 group-hover:text-neon-blue transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
