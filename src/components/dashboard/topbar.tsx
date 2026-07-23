import { Bell, Search } from "lucide-react";

export function Topbar({ title }: { title: string }) {
  return (
    <header className="h-16 border-b border-border bg-background/70 backdrop-blur-lg sticky top-0 z-30 flex items-center px-6 gap-4">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="flex-1 max-w-md ml-auto relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          placeholder="Search deals, brands, messages…"
          className="w-full pl-9 pr-4 py-2 rounded-full bg-muted border border-transparent focus:border-primary focus:bg-card outline-none text-sm transition-colors"
        />
      </div>
      <button className="p-2 rounded-full hover:bg-muted relative">
        <Bell size={18} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
      </button>
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent" />
    </header>
  );
}
