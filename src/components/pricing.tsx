import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Seedling",
    price: "$0",
    period: "forever",
    desc: "For creators testing the waters.",
    features: [
      "Public booking page",
      "Up to 3 active offers",
      "5% platform fee",
      "Email support",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Grow",
    price: "$19",
    period: "/month",
    desc: "For creators closing real deals.",
    features: [
      "Unlimited offers",
      "AI reply drafting",
      "2% platform fee",
      "Escrow + contracts",
      "Custom domain",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Studio",
    price: "$79",
    period: "/month",
    desc: "For agencies & multi-creator teams.",
    features: [
      "Everything in Grow",
      "Team seats (up to 10)",
      "0% platform fee",
      "White-label pages",
      "API + Zapier",
      "Dedicated manager",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-muted/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-medium text-primary mb-3">PRICING</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Fair pricing. No hidden fees.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free. Upgrade when you close your first deal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-8 rounded-2xl border ${
                p.featured
                  ? "border-primary bg-card shadow-xl shadow-primary/10 md:-translate-y-4"
                  : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Most popular
                </div>
              )}
              <h3 className="font-semibold text-xl">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight">
                  {p.price}
                </span>
                <span className="text-muted-foreground">{p.period}</span>
              </div>
              <Link
                href="#signup"
                className={`mt-6 block text-center py-3 rounded-full font-medium transition-all ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {p.cta}
              </Link>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-success mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
