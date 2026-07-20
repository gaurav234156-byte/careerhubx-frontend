"use client";

import { ArrowRight, Sparkles, ShieldCheck, Target, ShieldAlert, FileText, TrendingUp, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard, Card } from "@/components/ui/card";
import { TrustRing, TrustBadge } from "@/components/ui/trust";
import { Avatar } from "@/components/ui/avatar";
import { TopNav } from "@/components/layout/top-nav";

const FEATURES = [
  { icon: Sparkles, title: "AI Search", desc: "Describe what you want in plain language — get ranked, relevant results." },
  { icon: ShieldCheck, title: "Verified Opportunities", desc: "Every listing checked against domain age, HTTPS and fee patterns." },
  { icon: Target, title: "Resume Matching", desc: "See a match percentage and the exact skills gap for every listing." },
  { icon: ShieldAlert, title: "Fraud Detection", desc: "Suspicious keywords and unofficial sources get flagged before you apply." },
  { icon: FileText, title: "Application Tracker", desc: "One board for every application, deadline and interview." },
  { icon: TrendingUp, title: "AI Career Agent", desc: "Watches new listings continuously and explains why it recommends them." },
];

export default function LandingPage() {
  return (
    <div>
      <TopNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-surface-mute to-white dark:bg-dbg" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono border-[#E7EAF5] text-ink-mute bg-white">
              <ShieldCheck size={13} className="text-emerald-500" />
              48,201 opportunities verified this month
            </div>

            <h1 className="reveal mt-6 font-display font-semibold tracking-tight text-[42px] sm:text-[58px] leading-[1.04] text-ink">
              Your AI Career
              <br />
              <span className="bg-gradient-to-r from-primary via-[#6D6BFF] to-accent bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>

            <p className="reveal mt-6 max-w-lg text-lg leading-relaxed text-ink-mute">
              Find verified jobs, internships, hackathons and competitions from one place — ranked by an AI that
              reads your profile, not just your keywords.
            </p>

            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <Link href="/register">
                <Button variant="accent" size="lg" icon={ArrowRight}>
                  Start Free
                </Button>
              </Link>
              <Link href="/jobs">
                <Button variant="secondary" size="lg">
                  Explore Opportunities
                </Button>
              </Link>
            </div>

            <div className="reveal mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                <Avatar name="Priya S." gradient="from-primary to-[#5B7BFF]" />
                <Avatar name="Daniel O." gradient="from-accent to-[#B794F6]" />
                <Avatar name="Maya R." gradient="from-emerald-400 to-emerald-500" />
              </div>
              <p className="text-sm text-ink-mute">
                <span className="font-display font-semibold text-ink">12,400+</span> students placed this year
              </p>
            </div>
          </div>

          <div className="relative reveal">
            <GlassCard className="p-5">
              <div className="flex items-center gap-2 rounded-xl border px-3.5 py-2.5 border-[#E7EAF5] bg-[#F8F9FD]">
                <Sparkles size={16} className="text-ink-mute" />
                <span className="text-sm text-ink-mute">Search AI, remote, hackathons…</span>
              </div>
              <div className="mt-4 rounded-2xl border p-4 border-[#E7EAF5] bg-white">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl flex items-center justify-center font-display font-semibold text-white text-sm bg-gradient-to-br from-primary to-accent">
                      NX
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-[15px] text-ink">Senior Frontend Engineer</h4>
                      <p className="text-sm text-ink-mute">Nexora Labs</p>
                    </div>
                  </div>
                  <TrustRing score={94} size={44} />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <TrustBadge level="verified" />
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Apply <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-dbg">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <span className="text-xs font-mono uppercase tracking-wider text-primary">Why CareerHubX</span>
          <h2 className="mt-2 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            Built to be trusted, not just used
          </h2>
          <p className="mt-3 text-base text-ink-mute">Six systems working together so you spend time applying, not verifying.</p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-6 hover:-translate-y-1 transition-transform">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Icon size={19} className="text-primary" strokeWidth={2.2} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-[17px] text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-mute">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-accent" />
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-white tracking-tight">
            Stop guessing which listings are real
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Join 12,400+ students and professionals applying with verified data behind every listing.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/register">
              <button className="inline-flex items-center gap-2 rounded-xl bg-white text-primary font-semibold px-6 py-3.5 shadow-lg hover:-translate-y-0.5 transition-transform">
                Start Free <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E7EAF5] bg-surface-mute py-10 text-center text-xs font-mono text-ink-mute">
        © 2026 CareerHubX. All opportunities independently verified.
      </footer>
    </div>
  );
}
