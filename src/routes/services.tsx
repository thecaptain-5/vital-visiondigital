import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Globe, Cpu, Palette, Fingerprint, BarChart3, Share2, Bot, Package,
  ArrowRight, CheckCircle
} from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Vital Vision | AI-Powered Digital Solutions" },
      { name: "description", content: "Web design, AI websites, graphic design, brand identity, data analytics, and AI automation services." },
    ],
  }),
});

const services = [
  {
    icon: Globe, title: "Web Design", desc: "Modern, responsive websites that look stunning on every device and convert visitors into customers.",
    features: ["Custom responsive design", "SEO optimized", "Fast performance", "CMS integration"],
  },
  {
    icon: Cpu, title: "AI Website Creation", desc: "Leverage AI to build and launch your website faster than ever before.",
    features: ["AI-assisted development", "Rapid prototyping", "Smart layouts", "Automated optimization"],
  },
  {
    icon: Palette, title: "Graphic Design", desc: "Beautiful brand visuals, marketing materials, and social media content.",
    features: ["Social media graphics", "Print materials", "Marketing collateral", "Presentation design"],
  },
  {
    icon: Fingerprint, title: "Brand Identity", desc: "Complete brand systems including logos, guidelines, and visual strategy.",
    features: ["Logo design", "Brand guidelines", "Visual identity system", "Brand strategy"],
  },
  {
    icon: BarChart3, title: "Data Analytics", desc: "Transform raw data into actionable insights with custom dashboards.",
    features: ["Custom dashboards", "Business reports", "Data visualization", "Performance tracking"],
  },
  {
    icon: Share2, title: "Social Media Design", desc: "Scroll-stopping content designed for engagement and growth.",
    features: ["Content calendars", "Story templates", "Ad creatives", "Brand consistency"],
  },
  {
    icon: Bot, title: "AI Business Automation", desc: "Smart automation workflows that save time and boost productivity.",
    features: ["Workflow automation", "AI chatbots", "Process optimization", "Smart notifications"],
    badge: "Coming Soon",
  },
  {
    icon: Package, title: "Digital Product Design", desc: "Custom digital tools, apps, and interactive experiences.",
    features: ["UI/UX design", "Prototype development", "User research", "Product strategy"],
    badge: "Coming Soon",
  },
];

function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Our Services"
            title="Everything You Need to"
            titleGradient="Grow Digitally"
            description="From concept to launch, we provide end-to-end digital solutions powered by creativity and AI."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass-card p-8 hover-lift group relative">
                {s.badge && (
                  <span className="absolute top-6 right-6 text-[10px] font-semibold uppercase tracking-wider text-neon-purple bg-neon-purple/10 px-3 py-1 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 mb-5 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all">
                  <s.icon className="h-7 w-7 text-neon-blue" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-neon-blue shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to="/contact">
                    <Button variant="heroOutline" size="default">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-blue blob animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-neon-purple blob animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Not Sure What You Need? <span className="gradient-text">Let's Talk.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">We'll help you find the perfect solution for your business.</p>
          <div className="mt-8">
            <Link to="/contact"><Button variant="hero" size="xl">Book a Free Consultation <ArrowRight className="h-5 w-5" /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
