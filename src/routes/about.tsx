import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Target, Eye, Lightbulb, Code, Palette, BarChart3, Cpu, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Vital Vision | Our Story" },
      { name: "description", content: "Learn about Vital Vision, a next-generation AI-powered digital solutions brand from Ghana." },
    ],
  }),
});

const timeline = [
  { year: "2020", title: "Learning Design", desc: "Started mastering graphic design and visual communication." },
  { year: "2021", title: "Data & Analytics", desc: "Expanded into data analysis, dashboards, and business intelligence." },
  { year: "2022", title: "Entering AI", desc: "Embraced AI tools and automation to supercharge creative workflows." },
  { year: "2023", title: "Building Vital Vision", desc: "Launched Vital Vision to bring premium digital solutions to African businesses." },
  { year: "2024", title: "Scaling Impact", desc: "Growing our client base and expanding AI-powered service offerings." },
];

const skills = [
  { icon: Palette, label: "Visual Design" },
  { icon: Code, label: "Web Development" },
  { icon: BarChart3, label: "Data Analytics" },
  { icon: Cpu, label: "AI Integration" },
  { icon: Target, label: "Brand Strategy" },
  { icon: Heart, label: "Client Success" },
];

function AboutPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="About Us"
            title="The Vision Behind"
            titleGradient="The Brand"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vital Vision was born from a simple belief: every business deserves access to world-class digital solutions, regardless of where they're based.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded by a creative technologist who combines graphic design, data analysis, and AI expertise, we bridge the gap between African businesses and the global digital standard.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're not just designers or developers — we're strategic partners who use creativity, technology, and data to help brands grow and compete on the world stage.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, title: "Mission", desc: "Empower businesses with AI-driven digital solutions that drive real growth." },
                { icon: Eye, title: "Vision", desc: "To be Africa's most innovative digital solutions brand." },
                { icon: Lightbulb, title: "Philosophy", desc: "Where creativity meets technology, extraordinary things happen." },
                { icon: Heart, title: "Values", desc: "Excellence, innovation, integrity, and client success above all." },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5 hover-lift">
                  <item.icon className="h-6 w-6 text-neon-blue mb-3" />
                  <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-card/20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Expertise" title="Skills &" titleGradient="Capabilities" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((s) => (
              <div key={s.label} className="glass-card p-5 text-center hover-lift">
                <s.icon className="h-8 w-8 text-neon-blue mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <SectionHeading badge="Our Journey" title="The" titleGradient="Timeline" />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue to-neon-purple" />
            <div className="space-y-8">
              {timeline.map((t) => (
                <div key={t.year} className="relative pl-12">
                  <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple border-2 border-background" />
                  <span className="text-xs font-semibold text-neon-blue uppercase tracking-wider">{t.year}</span>
                  <h3 className="text-lg font-bold text-foreground mt-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-blue blob animate-pulse-glow" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Let's Create Something <span className="gradient-text">Amazing Together.</span>
          </h2>
          <div className="mt-8">
            <Link to="/contact"><Button variant="hero" size="xl">Start a Conversation <ArrowRight className="h-5 w-5" /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
