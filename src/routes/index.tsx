import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Globe, Cpu, Palette, Fingerprint, BarChart3, Share2, Bot, Package,
  ArrowRight, CheckCircle, Star, Sparkles, Zap, Shield, Clock, TrendingUp,
  ChevronRight
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Vital Vision — AI-Powered Digital Solutions | Ghana" },
      { name: "description", content: "Building intelligent digital experiences for modern brands. AI-powered websites, branding, design, and analytics." },
    ],
  }),
});

const trustItems = [
  { icon: Sparkles, label: "Modern Design" },
  { icon: Cpu, label: "AI Enhanced" },
  { icon: Clock, label: "Fast Delivery" },
  { icon: BarChart3, label: "Data-Driven" },
  { icon: Globe, label: "Mobile Optimized" },
];

const services = [
  { icon: Globe, title: "Web Design", desc: "Modern responsive websites that convert visitors into customers." },
  { icon: Cpu, title: "AI Websites", desc: "Fast AI-assisted development for rapid launches." },
  { icon: Palette, title: "Graphic Design", desc: "Brand visuals, flyers, and social media content." },
  { icon: Fingerprint, title: "Brand Identity", desc: "Logos, visual systems, and brand strategy." },
  { icon: BarChart3, title: "Analytics Dashboards", desc: "Data visualization and business intelligence." },
  { icon: Share2, title: "Social Media Design", desc: "Scroll-stopping content for every platform." },
  { icon: Bot, title: "AI Automation", desc: "Smart workflows for business efficiency.", badge: "Coming Soon" },
  { icon: Package, title: "Digital Products", desc: "Custom tools and digital experiences." },
];

const reasons = [
  { icon: Cpu, title: "AI-Powered Workflows", desc: "We leverage AI to deliver faster, smarter results." },
  { icon: Zap, title: "Faster Delivery", desc: "Projects completed in days, not months." },
  { icon: Star, title: "Premium Aesthetics", desc: "Every pixel is crafted for visual excellence." },
  { icon: TrendingUp, title: "Strategic Thinking", desc: "Design backed by data and business strategy." },
  { icon: Shield, title: "Affordable Innovation", desc: "World-class quality at competitive pricing." },
  { icon: Sparkles, title: "Future-Ready Solutions", desc: "Built to scale and evolve with technology." },
];

const testimonials = [
  { name: "Ama Mensah", role: "CEO, GreenLeaf Organics", text: "Vital Vision transformed our entire brand. The website they built increased our online orders by 300% in just two months.", avatar: "AM" },
  { name: "Kwame Asante", role: "Founder, TechBridge Africa", text: "Their AI-powered approach saved us weeks of development time. The dashboard they created is the most intuitive tool our team has ever used.", avatar: "KA" },
  { name: "Nana Yaa", role: "Creative Director, Studio Accra", text: "Finally, a digital agency in Ghana that truly understands modern design. They're years ahead of everyone else.", avatar: "NY" },
];

const projects = [
  { title: "GreenLeaf E-Commerce", category: "Web Design", color: "from-neon-blue to-neon-cyan" },
  { title: "TechBridge Dashboard", category: "Analytics", color: "from-neon-purple to-neon-blue" },
  { title: "Studio Accra Rebrand", category: "Branding", color: "from-neon-cyan to-neon-purple" },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue blob animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple blob animate-pulse-glow" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-7xl leading-[1.1] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Building Intelligent Digital Experiences for{" "}
              <span className="gradient-text">Modern Brands.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              AI-powered websites, branding, design, and analytics solutions crafted to help businesses grow faster and stand out.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start Your Project <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="heroOutline" size="xl">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border bg-card/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5 text-muted-foreground">
                <item.icon className="h-5 w-5 text-neon-blue" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="What We Do"
            title="Services Built for"
            titleGradient="Growth"
            description="From AI-powered websites to brand strategy, we deliver digital solutions that move businesses forward."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="glass-card p-6 hover-lift group relative">
                {s.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-neon-purple bg-neon-purple/10 px-2.5 py-1 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 mb-4 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all">
                  <s.icon className="h-6 w-6 text-neon-blue" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="heroOutline" size="lg">
                View All Services <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-card/20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Our Work"
            title="Featured"
            titleGradient="Projects"
            description="See how we've helped brands elevate their digital presence."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="group relative overflow-hidden rounded-2xl hover-lift">
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass-card p-6 mx-6 text-center">
                      <p className="text-xs font-medium text-neon-blue uppercase tracking-wider mb-1">{p.category}</p>
                      <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/portfolio">
              <Button variant="heroOutline" size="lg">
                View Full Portfolio <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Why Vital Vision"
            title="Built Different,"
            titleGradient="By Design"
            description="We combine creativity, technology, and strategy to deliver results that matter."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="glass-card p-6 hover-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-neon-blue/10 mb-4">
                  <r.icon className="h-5 w-5 text-neon-blue" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card/20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients"
            titleGradient="Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card p-6 hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-neon-blue fill-neon-blue" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple text-xs font-bold text-foreground">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "50+", label: "Projects Delivered" },
              { num: "35+", label: "Happy Clients" },
              { num: "3x", label: "Faster Delivery" },
              { num: "98%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold gradient-text">{s.num}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-blue blob animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-neon-purple blob animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Ready to Build Something{" "}
            <span className="gradient-text">Exceptional?</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            Let's create a digital experience that sets your brand apart.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Book a Free Consultation <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
