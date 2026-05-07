import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Cpu, Bot, Sparkles, Workflow, Brain, Wand2, Clock, Rocket } from "lucide-react";

export const Route = createFileRoute("/ai-solutions")({
  component: AISolutionsPage,
  head: () => ({
    meta: [
      { title: "AI Solutions — Vital Vision | Smart Automation" },
      { name: "description", content: "AI-assisted design, automation, and smart workflows for modern businesses." },
    ],
  }),
});

const solutions = [
  { icon: Wand2, title: "AI-Assisted Design", desc: "Generate and refine visuals at unprecedented speed using AI tools.", available: true },
  { icon: Bot, title: "AI Automation", desc: "Automate repetitive tasks and free your team to focus on growth.", available: false },
  { icon: Sparkles, title: "AI Marketing Assets", desc: "Create on-brand marketing content at scale with AI generation.", available: true },
  { icon: Workflow, title: "Smart Workflows", desc: "Connect your tools with intelligent automation that learns and improves.", available: false },
  { icon: Brain, title: "AI Consulting", desc: "Strategic guidance on implementing AI in your business operations.", available: false },
  { icon: Cpu, title: "Custom AI Solutions", desc: "Bespoke AI integrations tailored to your specific business needs.", available: false },
];

function AISolutionsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue blob animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-purple blob animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            badge="AI-Powered"
            title="The Future of Digital"
            titleGradient="Is Here"
            description="We harness artificial intelligence to deliver faster, smarter, and more impactful digital solutions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="glass-card p-6 hover-lift group relative">
                {!s.available && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-neon-purple bg-neon-purple/10 px-2.5 py-1 rounded-full">
                    Launching Soon
                  </span>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 mb-4">
                  <s.icon className="h-6 w-6 text-neon-blue" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Benefits */}
      <section className="section-padding bg-card/20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Benefits" title="Why AI-Powered" titleGradient="Solutions?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "10x Faster", desc: "AI accelerates every step from concept to launch." },
              { icon: Clock, title: "Save Time & Money", desc: "Automated workflows reduce costs and turnaround." },
              { icon: Sparkles, title: "Higher Quality", desc: "AI helps us iterate and refine for perfection." },
            ].map((b) => (
              <div key={b.title} className="glass-card p-6 text-center hover-lift">
                <b.icon className="h-10 w-10 text-neon-blue mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-purple blob animate-pulse-glow" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Go <span className="gradient-text">AI-First?</span>
          </h2>
          <div className="mt-8">
            <Link to="/contact"><Button variant="hero" size="xl">Explore AI Solutions <ArrowRight className="h-5 w-5" /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
