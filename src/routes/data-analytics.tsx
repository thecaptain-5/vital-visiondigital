import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, BarChart3, PieChart, TrendingUp, Activity, Database, Eye } from "lucide-react";

export const Route = createFileRoute("/data-analytics")({
  component: DataAnalyticsPage,
  head: () => ({
    meta: [
      { title: "Data & Analytics — Vital Vision | Business Intelligence" },
      { name: "description", content: "Custom dashboards, data visualization, and business intelligence solutions." },
    ],
  }),
});

const capabilities = [
  { icon: BarChart3, title: "Custom Dashboards", desc: "Beautiful, interactive dashboards tailored to your KPIs." },
  { icon: PieChart, title: "Business Reporting", desc: "Automated reports that save hours of manual work." },
  { icon: TrendingUp, title: "Performance Tracking", desc: "Monitor growth metrics in real-time." },
  { icon: Activity, title: "Data Visualization", desc: "Turn complex data into clear, actionable visuals." },
  { icon: Database, title: "Data Integration", desc: "Connect multiple data sources into one unified view." },
  { icon: Eye, title: "Insight Generation", desc: "AI-assisted analysis that surfaces hidden opportunities." },
];

function DataAnalyticsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-cyan blob animate-pulse-glow" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            badge="Data & Analytics"
            title="Decisions Powered by"
            titleGradient="Data"
            description="We transform raw data into actionable insights that drive real business growth."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="glass-card p-6 hover-lift">
                <c.icon className="h-8 w-8 text-neon-blue mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section className="section-padding bg-card/20">
        <div className="mx-auto max-w-5xl">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Revenue", value: "$124K", change: "+12%" },
                { label: "Users", value: "8,492", change: "+24%" },
                { label: "Conversion", value: "3.8%", change: "+8%" },
                { label: "Growth", value: "156%", change: "+45%" },
              ].map((stat) => (
                <div key={stat.label} className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className="text-xs text-neon-blue mt-1">{stat.change}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary/30 rounded-xl p-6 aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-neon-blue mx-auto mb-2 opacity-50" />
                  <p className="text-xs text-muted-foreground">Revenue Chart</p>
                </div>
              </div>
              <div className="bg-secondary/30 rounded-xl p-6 aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-12 w-12 text-neon-purple mx-auto mb-2 opacity-50" />
                  <p className="text-xs text-muted-foreground">Traffic Sources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-blue blob animate-pulse-glow" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Become <span className="gradient-text">Data-Driven?</span>
          </h2>
          <div className="mt-8">
            <Link to="/contact"><Button variant="hero" size="xl">Get Your Dashboard <ArrowRight className="h-5 w-5" /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
