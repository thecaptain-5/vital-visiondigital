import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Vital Vision | Get In Touch" },
      { name: "description", content: "Start your project with Vital Vision. Contact us for AI-powered websites, branding, and digital solutions." },
    ],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Get In Touch"
            title="Let's Build Something"
            titleGradient="Exceptional"
            description="Ready to start your next project? We'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 glass-card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon-blue/10 mx-auto mb-4">
                    <Send className="h-8 w-8 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                      <input type="text" required placeholder="Your name" className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <input type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Service Needed</label>
                    <select className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50">
                      <option>Web Design</option>
                      <option>AI Website</option>
                      <option>Graphic Design</option>
                      <option>Brand Identity</option>
                      <option>Data Analytics</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Budget Range</label>
                    <select className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50">
                      <option>Under $500</option>
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $3,000</option>
                      <option>$3,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <textarea rows={4} required placeholder="Tell us about your project..." className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50 resize-none" />
                  </div>
                  <Button variant="hero" size="lg" type="submit" className="w-full">
                    Send Message <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-5">
              {[
                { icon: Mail, title: "Email Us", info: "hello@vitalvision.com", desc: "We respond within 24 hours" },
                { icon: Phone, title: "Call Us", info: "+233 XX XXX XXXX", desc: "Mon - Fri, 9am - 6pm GMT" },
                { icon: MapPin, title: "Location", info: "Accra, Ghana", desc: "Serving clients worldwide" },
              ].map((item) => (
                <div key={item.title} className="glass-card p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neon-blue/10">
                      <item.icon className="h-5 w-5 text-neon-blue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-foreground mt-0.5">{item.info}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/233000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 hover-lift flex items-center gap-4 group block"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                  <MessageCircle className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-xs text-muted-foreground">Chat with us instantly</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
