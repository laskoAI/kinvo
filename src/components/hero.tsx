import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      {/* decorative blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-24 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-success/20 rounded-full blur-3xl animate-blob [animation-delay:-8s]" />
      </div>
      <div className="absolute inset-0 -z-10 grain opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <Link
          href="#new"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-sm mb-8 hover:shadow-md transition-shadow"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="font-medium">New</span>
          <span className="text-muted-foreground">
            AI-powered brand matching is here
          </span>
          <ArrowRight size={14} />
        </Link>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl mx-auto">
          Close creator{" "}
          <span className="relative inline-block">
            <span className="relative z-10">sponsorships</span>
            <span className="absolute inset-x-0 bottom-2 h-4 bg-accent/60 -z-0 rounded-sm" />
          </span>
          <br />
          in days, not weeks.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Sunroot is the calm inbox where creators and brands negotiate,
          contract, and get paid — with AI doing the boring part.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="#signup"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Get your free page
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card hover:bg-muted transition-colors"
          >
            Watch 90-sec demo
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="fill-accent text-accent"
              />
            ))}
            <span className="ml-2">4.9 from 2,300+ creators</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">No credit card required</span>
        </div>

        {/* Product preview */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-success/20 blur-2xl rounded-3xl" />
          <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden animate-float">
            <div className="h-9 bg-muted border-b border-border flex items-center gap-1.5 px-4">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-4 text-xs text-muted-foreground">
                sunroot.co/maya
              </span>
            </div>
            <div className="p-8 md:p-12 text-left grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-4" />
                <h3 className="font-semibold text-xl">Maya Chen</h3>
                <p className="text-sm text-muted-foreground">
                  Sustainable fashion · 480K
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response</span>
                    <span className="font-medium">~2h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Deals closed</span>
                    <span className="font-medium">47</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 space-y-3">
                {[
                  { name: "Instagram Reel", price: "$2,400" },
                  { name: "Story Package (3x)", price: "$1,200" },
                  { name: "TikTok + Reel bundle", price: "$3,800" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/40 transition-colors"
                  >
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-muted-foreground">
                        2-day turnaround · usage rights included
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">{p.price}</span>
                      <button className="text-xs px-3 py-1.5 rounded-full bg-foreground text-background">
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
