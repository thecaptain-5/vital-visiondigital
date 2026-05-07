import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Vital Vision | Our Work" },
      { name: "description", content: "Explore our portfolio of AI-powered websites, branding, dashboards, and digital solutions." },
    ],
  }),
});

const categories = ["All", "Websites", "Branding", "Dashboards", "Social Media", "AI Projects"];

const projects = [
  { title: "GreenLeaf Organics", category: "Websites", client: "E-Commerce Brand", desc: "Complete e-commerce redesign resulting in 300% increase in online orders.", gradient: "from-neon-blue to-neon-cyan", goals: "Increase online sales", results: "300% order increase" },
  { title: "TechBridge Africa", category: "Dashboards", client: "Tech Startup", desc: "Real-time analytics dashboard tracking key business metrics across 5 countries.", gradient: "from-neon-purple to-neon-blue", goals: "Centralize data", results: "50% faster decisions" },
  { title: "Studio Accra", category: "Branding", client: "Creative Agency", desc: "Complete brand identity overhaul including logo, guidelines, and digital presence.", gradient: "from-neon-cyan to-neon-purple", goals: "Modern rebrand", results: "2x client inquiries" },
  { title: "AfroFresh Market", category: "Websites", client: "Online Marketplace", desc: "Mobile-first marketplace connecting local farmers with urban consumers.", gradient: "from-neon-blue to-neon-purple", goals: "Launch marketplace", results: "1000+ users in 1 month" },
  { title: "FinTrack Pro", category: "Dashboards", client: "Financial Services", desc: "Financial reporting dashboard with automated insights and trend analysis.", gradient: "from-neon-purple to-neon-cyan", goals: "Automate reports", results: "80% time saved" },
  { title: "Kente Luxe", category: "Branding", client: "Fashion Brand", desc: "Luxury fashion brand identity blending traditional Ghanaian art with modern aesthetics.", gradient: "from-neon-cyan to-neon-blue", goals: "Premium positioning", results: "International recognition" },
  { title: "EduSpark Ghana", category: "Social Media", client: "EdTech Platform", desc: "Viral social media campaign reaching over 500K students across West Africa.", gradient: "from-neon-blue to-neon-purple", goals: "Grow awareness", results: "500K reach" },
  { title: "SmartFlow AI", category: "AI Projects", client: "SaaS Company", desc: "AI-powered customer service automation reducing response times by 90%.", gradient: "from-neon-purple to-neon-blue", goals: "Automate support", results: "90% faster responses" },
];

function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Our Portfolio"
            title="Work That Speaks"
            titleGradient="For Itself"
            description="Real projects. Real results. See how we've helped brands transform their digital presence."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === c
                    ? "bg-gradient-to-r from-neon-blue to-neon-purple text-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <div key={p.title} className="glass-card overflow-hidden hover-lift group">
                <div className={`aspect-[16/9] bg-gradient-to-br ${p.gradient} opacity-70 group-hover:opacity-90 transition-opacity relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass-card px-6 py-4 text-center">
                      <p className="text-xs text-neon-blue font-medium uppercase tracking-wider">{p.category}</p>
                      <h3 className="text-lg font-bold text-foreground mt-1">{p.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-neon-blue font-medium uppercase tracking-wider mb-1">{p.client}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">Goal: </span>
                      <span className="text-foreground font-medium">{p.goals}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Result: </span>
                      <span className="text-neon-blue font-medium">{p.results}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-blue blob animate-pulse-glow" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Want Results Like These? <span className="gradient-text">Let's Build Together.</span>
          </h2>
          <div className="mt-8">
            <Link to="/contact"><Button variant="hero" size="xl">Start Your Project <ArrowRight className="h-5 w-5" /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
