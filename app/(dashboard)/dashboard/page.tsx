"use client";

import { useEffect, useState } from "react";
import { Sparkles, Briefcase, Bookmark, Target, CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TrustRing, TrustBadge } from "@/components/ui/trust";

interface Stat {
  label: string;
  value: string;
  icon: typeof Briefcase;
}

const STATS: Stat[] = [
  { label: "Applications", value: "14", icon: Briefcase },
  { label: "Saved", value: "23", icon: Bookmark },
  { label: "Avg. match", value: "78%", icon: Target },
  { label: "Interviews", value: "3", icon: CalendarDays },
];

export default function DashboardPage() {
  // Real implementation: fetch these from GET /users/me/stats,
  // GET /recommendations, GET /opportunities?sort=newest, etc. using the
  // access token from sessionStorage (or better, a proper auth context).
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="p-6 space-y-5 max-w-[1400px]">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-sm text-ink-mute">Good morning, Asha</p>
          <h1 className="font-display font-semibold text-2xl text-ink dark:text-white">3 new matches waiting for you</h1>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold px-4 py-2.5">
          <Sparkles size={15} /> Ask AI Agent
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <Card key={s.label} className="p-4">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <s.icon size={16} className="text-primary" />
            </div>
            <p className="mt-3 font-display font-semibold text-2xl text-ink dark:text-white">{s.value}</p>
            <p className="text-xs font-mono mt-0.5 text-ink-mute">{s.label}</p>
          </Card>
        ))}
      </div>

      <Card className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-semibold text-[15px] flex items-center gap-1.5 text-ink dark:text-white">
            <Sparkles size={15} className="text-accent" /> AI Recommendations
          </h3>
        </div>
        {loading ? (
          <div className="mt-4 h-32 rounded-xl bg-surface-mute animate-pulse" />
        ) : (
          <div className="mt-4 flex items-center gap-4 rounded-xl border border-[#E7EAF5] p-4">
            <TrustRing score={94} size={44} />
            <div className="flex-1">
              <p className="font-display font-semibold text-sm text-ink">Senior Frontend Engineer — Nexora Labs</p>
              <p className="text-xs text-ink-mute mt-0.5">Matches your React + TypeScript skills and remote preference.</p>
            </div>
            <TrustBadge level="verified" />
          </div>
        )}
      </Card>

      <Card className="p-5">
        <h3 className="font-display font-semibold text-[15px] text-ink dark:text-white mb-3">Upcoming deadlines</h3>
        <div className="space-y-3">
          {[
            ["AI Hackathon — DevPost", "2 days"],
            ["Google STEP Internship", "5 days"],
          ].map(([name, days]) => (
            <div key={name} className="flex items-center gap-3">
              <Clock size={14} className="text-amber-500" />
              <span className="text-sm flex-1 text-ink">{name}</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface-mute text-ink-mute">{days}</span>
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
}
