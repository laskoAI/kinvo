"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Handshake,
  Home,
  Inbox,
  Package,
  Settings,
  Sparkles,
  Wallet,
} from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Overview", icon: Home },
  { href: "/dashboard/inbox", label: "Inbox", icon: Inbox, badge: 4 },
  { href: "/dashboard/deals", label: "Deals", icon: Handshake },
  { href: "/dashboard/offers", label: "Offers", icon: Package },
  { href: "/dashboard/matches", label: "AI Matches", icon: Sparkles, badge: "NEW" },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/payouts", label: "Payouts", icon: Wallet },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 shrink-0 border-r border-border bg-card/50 hidden lg:flex flex-col">
      <Link
        href="/"
        className="h-16 px-6 flex items-center gap-2 font-semibold border-b border-border"
      >
        <span className="w-8 h-8 rounded-full bg-primary grid place-items-center text-primary-foreground font-bold">
          S
        </span>
        Sunroot
      </Link>
      <nav className="flex-1 p-3 space-y-0.5">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon size={17} />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                    typeof item.badge === "number"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-foreground"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 m-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
        <div className="flex items-center gap-2 text-xs font-medium mb-1">
          <Sparkles size={12} className="text-primary" /> AI credits
        </div>
        <div className="text-2xl font-semibold">128</div>
        <div className="text-xs text-muted-foreground">left this month</div>
        <button className="mt-3 w-full text-xs py-1.5 rounded-full bg-foreground text-background">
          Upgrade
        </button>
      </div>
    </aside>
  );
}
