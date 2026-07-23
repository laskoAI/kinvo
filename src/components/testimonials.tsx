const testimonials = [
  {
    quote:
      "I closed 3 brand deals in my first week. The AI even drafted the responses — I just tweaked them.",
    name: "Léa Dubois",
    handle: "@leacreates · 220K",
  },
  {
    quote:
      "Passionfroot got us started, Sunroot got us paid faster. Escrow was the killer feature for us.",
    name: "Marcus Wynn",
    handle: "@marcuswynn · 1.1M",
  },
  {
    quote:
      "As a brand, I can find niche creators without the agency markup. Sunroot is my new procurement tool.",
    name: "Priya Rao",
    handle: "Head of Growth, Loop",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-3">LOVED BY</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Creators and brands. On the same side.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <blockquote className="text-lg leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.handle}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
          {["notion", "figma", "linear", "vercel", "stripe", "loop"].map((b) => (
            <div key={b} className="text-xl font-mono tracking-tight">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
