import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-orange-500 to-accent p-12 md:p-20 text-center">
          <div className="absolute inset-0 grain opacity-30" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Your next sponsor is
              <br /> already searching.
            </h2>
            <p className="mt-6 text-white/90 text-lg max-w-xl mx-auto">
              Claim your Sunroot page and let AI do the pitching while you make content.
            </p>
            <Link
              href="#signup"
              className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-foreground font-medium hover:scale-105 transition-transform"
            >
              Create your page — free
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Dashboard", "Changelog"],
    },
    { title: "Creators", links: ["Templates", "Media kit", "Guides", "Blog"] },
    { title: "Brands", links: ["Discover", "Case studies", "Pricing", "Book demo"] },
    { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  ];
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-6 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="w-8 h-8 rounded-full bg-primary grid place-items-center text-primary-foreground font-bold">
              S
            </span>
            Sunroot
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            The calm home for creator sponsorships. Made with care in Warsaw & Lisbon.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="font-medium text-sm mb-4">{c.title}</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
          <div>© {new Date().getFullYear()} Sunroot Labs. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
