import { Link } from "@tanstack/react-router";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple">
                <Zap className="h-5 w-5 text-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Vital<span className="gradient-text">Vision</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A next-generation AI-powered digital solutions brand helping businesses grow faster.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {["Web Design", "AI Websites", "Graphic Design", "Brand Identity"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", to: "/about" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Blog", to: "/blog" },
                { label: "Pricing", to: "/pricing" },
                { label: "Contact", to: "/contact" },
                { label: "Data Analytics", to: "/data-analytics" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-neon-blue" /> Accra, Ghana
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-neon-blue" /> hello@vitalvision.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-neon-blue" /> +233 XX XXX XXXX
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Vital Vision. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
