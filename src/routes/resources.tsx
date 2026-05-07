import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Download, FileText, Lightbulb, BookOpen } from "lucide-react";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    meta: [
      { title: "Free Resources — Vital Vision | Guides & Templates" },
      { name: "description", content: "Free guides, templates, and AI tips to help your business grow." },
    ],
  }),
});

const resources = [
  { icon: FileText, title: "Brand Identity Checklist", desc: "A comprehensive guide to building a cohesive brand identity.", type: "PDF Guide", available: true },
  { icon: Lightbulb, title: "AI Tools for Small Business", desc: "Top 10 AI tools every small business should be using in 2024.", type: "Guide", available: true },
  { icon: BookOpen, title: "Website Launch Playbook", desc: "Step-by-step guide to launching a high-converting website.", type: "Playbook", available: true },
  { icon: FileText, title: "Social Media Templates", desc: "Ready-to-use templates for Instagram, LinkedIn, and more.", type: "Templates", available: false },
  { icon: Lightbulb, title: "Data Analytics Starter Kit", desc: "Everything you need to start making data-driven decisions.", type: "Toolkit", available: false },
  { icon: BookOpen, title: "AI Automation Handbook", desc: "How to automate your business processes with AI.", type: "Handbook", available: false },
];

function ResourcesPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Free Resources"
            title="Tools to Help You"
            titleGradient="Grow"
            description="Free guides, templates, and resources to accelerate your digital growth."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => (
              <div key={r.title} className="glass-card p-6 hover-lift relative">
                {!r.available && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-neon-purple bg-neon-purple/10 px-2.5 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
                <r.icon className="h-8 w-8 text-neon-blue mb-4" />
                <span className="text-xs text-neon-blue font-medium uppercase tracking-wider">{r.type}</span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
                {r.available ? (
                  <Button variant="heroOutline" size="default">
                    <Download className="h-4 w-4" /> Download Free
                  </Button>
                ) : (
                  <Button variant="ghost" size="default" disabled>
                    Coming Soon
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
