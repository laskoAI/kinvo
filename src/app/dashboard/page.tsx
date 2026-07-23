import { Topbar } from "@/components/dashboard/topbar";
import {
  ArrowUpRight,
  DollarSign,
  Eye,
  Handshake,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const stats = [
  { label: "Revenue this month", value: "$12,480", delta: "+24%", icon: DollarSign },
  { label: "Active deals", value: "7", delta: "+2", icon: Handshake },
  { label: "Page views", value: "3,214", delta: "+12%", icon: Eye },
  { label: "Match score", value: "94", delta: "+6", icon: TrendingUp },
];

const deals = [
  { brand: "Loop", type: "Instagram Reel", amount: "$2,400", status: "In review", color: "bg-accent/30 text-orange-700 dark:text-accent" },
  { brand: "Notion", type: "Newsletter", amount: "$1,800", status: "Signed", color: "bg-success/20 text-success" },
  { brand: "Vercel", type: "YouTube integration", amount: "$5,600", status: "Draft", color: "bg-muted text-muted-foreground" },
  { brand: "Figma", type: "TikTok bundle", amount: "$3,200", status: "Paid", color: "bg-success/20 text-success" },
  { brand: "Linear", type: "Podcast ad", amount: "$1,100", status: "Delivered", color: "bg-primary/15 text-primary" },
];

const matches = [
  { brand: "Arc Browser", fit: 96, budget: "$2-5k", note: "Matches your dev-productivity niche" },
  { brand: "Oatly", fit: 91, budget: "$3-8k", note: "Loves your sustainability angle" },
  { brand: "Framer", fit: 88, budget: "$1-3k", note: "Wants Reels with real product usage" },
];

export default function DashboardPage() {
  return (
    <>
      <Topbar title="Overview" />
      <main className="p-6 md:p-8 space-y-6">
        {/* Greeting */}
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Good afternoon, Maya ☀️
            </h2>
            <p className="text-muted-foreground mt-1">
              You have 3 brands waiting on a reply and 4 fresh AI matches.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg hover:shadow-primary/30 transition-all">
            <Sparkles size={16} /> Ask AI to draft replies
          </button>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-5 rounded-2xl border border-border bg-card"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
                  <s.icon size={16} />
                </div>
                <span className="text-xs text-success font-medium flex items-center gap-0.5">
                  <ArrowUpRight size={12} /> {s.delta}
                </span>
              </div>
              <div className="mt-4 text-2xl font-semibold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Deals table */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
            <div className="p-5 flex items-center justify-between border-b border-border">
              <div>
                <h3 className="font-semibold">Recent deals</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Your last 5 partnerships
                </p>
              </div>
              <button className="text-xs px-3 py-1.5 rounded-full hover:bg-muted">
                View all
              </button>
            </div>
            <div className="divide-y divide-border">
              {deals.map((d) => (
                <div
                  key={d.brand + d.type}
                  className="p-4 flex items-center gap-4 hover:bg-muted/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/40 to-accent/40 grid place-items-center font-semibold text-sm">
                    {d.brand[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{d.brand}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {d.type}
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-medium px-2 py-1 rounded-full ${d.color}`}
                  >
                    {d.status}
                  </span>
                  <div className="font-semibold text-sm w-20 text-right">
                    {d.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI matches */}
          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-card to-accent/5 overflow-hidden">
            <div className="p-5 border-b border-border flex items-center gap-2">
              <Sparkles size={16} className="text-primary" />
              <h3 className="font-semibold">AI matches</h3>
              <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-accent text-foreground font-medium">
                NEW
              </span>
            </div>
            <div className="p-3 space-y-2">
              {matches.map((m) => (
                <div
                  key={m.brand}
                  className="p-3 rounded-xl hover:bg-card transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-sm">{m.brand}</div>
                    <div className="text-xs font-mono text-primary">
                      {m.fit}% fit
                    </div>
                  </div>
                  <div className="mt-1.5 h-1 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${m.fit}%` }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">{m.note}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Budget · {m.budget}
                    </span>
                    <button className="text-xs px-2.5 py-1 rounded-full bg-foreground text-background">
                      Pitch
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue chart */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Revenue</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Last 12 weeks</p>
            </div>
            <div className="flex gap-1 text-xs">
              {["12w", "6m", "1y", "All"].map((t, i) => (
                <button
                  key={t}
                  className={`px-3 py-1 rounded-full ${
                    i === 0 ? "bg-muted font-medium" : "text-muted-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-2 h-48">
            {[40, 55, 30, 65, 50, 70, 45, 85, 60, 90, 75, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-primary to-accent hover:opacity-80 transition-opacity"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] text-muted-foreground">W{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
