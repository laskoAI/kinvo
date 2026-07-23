import {
  Bot,
  FileText,
  Inbox,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI brand matching",
    desc: "We surface brands that fit your niche, audience, and price point — no more cold pitching.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Inbox,
    title: "One calm inbox",
    desc: "All partnership conversations in one thread. Slack, Gmail, DMs — synced.",
    accent: "bg-accent/20 text-orange-700 dark:text-accent",
  },
  {
    icon: FileText,
    title: "Contracts in one click",
    desc: "Legally-reviewed templates that auto-fill from the deal. E-sign built in.",
    accent: "bg-success/10 text-success",
  },
  {
    icon: Wallet,
    title: "Invoices & payouts",
    desc: "Auto-invoice on delivery. Get paid in 24h via Stripe, wire, or crypto.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Escrow protection",
    desc: "Brand funds are held until content ships. Both sides sleep well.",
    accent: "bg-accent/20 text-orange-700 dark:text-accent",
  },
  {
    icon: Zap,
    title: "Media kit that updates itself",
    desc: "Live stats pulled from your socials. Always the newest numbers.",
    accent: "bg-success/10 text-success",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="text-sm font-medium text-primary mb-3">FEATURES</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Everything you need to run partnerships like a pro.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Passionfroot users: think of Sunroot as the same idea — but with AI
            that actually drafts your replies.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div
                className={`w-11 h-11 rounded-xl ${f.accent} grid place-items-center mb-5`}
              >
                <f.icon size={20} />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
