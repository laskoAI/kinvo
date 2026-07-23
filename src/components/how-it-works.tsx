const steps = [
  {
    n: "01",
    title: "Build your page",
    desc: "Import from Linktree or start from a template. 3 minutes.",
  },
  {
    n: "02",
    title: "Set your offers",
    desc: "Prices, turnaround, usage rights. Brands see exactly what they get.",
  },
  {
    n: "03",
    title: "Get matched",
    desc: "Our AI pings brands that fit. You approve, they book, escrow locks funds.",
  },
  {
    n: "04",
    title: "Deliver & get paid",
    desc: "Ship the content, invoice auto-generates, payout hits in 24h.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32 bg-muted/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-medium text-primary mb-3">HOW IT WORKS</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            From cold DM to paid, in four steps.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="p-6 rounded-2xl bg-card border border-border h-full">
                <div className="text-3xl font-mono text-primary/60 mb-4">
                  {s.n}
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
