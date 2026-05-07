import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Vital Vision | Transparent Plans" },
      { name: "description", content: "Affordable pricing for premium digital solutions. Choose the plan that fits your business." },
    ],
  }),
});

const plans = [
  {
    name: "Starter",
    price: "$299",
    desc: "Perfect for personal brands and small projects.",
    features: ["1-page website", "Basic branding", "Mobile responsive", "3-day delivery", "1 revision round", "Email support"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$799",
    desc: "For growing businesses that need premium presence.",
    features: ["Multi-page website", "Brand identity package", "SEO optimization", "5-day delivery", "3 revision rounds", "Priority support", "Social media templates"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$1,999",
    desc: "Full-suite digital transformation for serious brands.",
    features: ["Custom web application", "Complete brand system", "Analytics dashboard", "10-day delivery", "Unlimited revisions", "Dedicated support", "AI-powered features", "Content strategy"],
    popular: false,
  },
];

function PricingPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Pricing"
            title="Invest in Your"
            titleGradient="Digital Future"
            description="Transparent pricing. Premium quality. No surprises."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card p-8 hover-lift relative ${
                  plan.popular ? "ring-2 ring-neon-blue" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-wider text-foreground bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold gradient-text">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/project</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">{plan.desc}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-neon-blue shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/contact">
                    <Button
                      variant={plan.popular ? "hero" : "heroOutline"}
                      size="lg"
                      className="w-full"
                    >
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 glass-card p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-foreground">Need a Custom Enterprise Solution?</h3>
            <p className="text-sm text-muted-foreground mt-2">We create tailored packages for larger projects and ongoing partnerships.</p>
            <div className="mt-6">
              <Link to="/contact"><Button variant="heroOutline" size="lg">Contact Us <ArrowRight className="h-4 w-4" /></Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
