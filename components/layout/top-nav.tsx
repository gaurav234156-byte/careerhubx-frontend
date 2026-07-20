"use client";

import { useState } from "react";
import { Sparkles, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TopNav() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/jobs", label: "Jobs" },
    { href: "/jobs?category=Internships", label: "Internships" },
    { href: "/jobs?category=Hackathons", label: "Hackathons" },
    { href: "/search", label: "Search" },
    { href: "/agent", label: "AI Agent" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur-xl bg-white/80 border-[#E7EAF5] dark:bg-dbg/80 dark:border-dborder">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles size={16} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-display font-semibold text-[17px] text-ink dark:text-white">CareerHubX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-ink-mute hover:text-ink dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="h-9 w-9 rounded-lg flex items-center justify-center text-ink-mute hover:bg-surface-mute dark:text-slate-300 dark:hover:bg-white/5"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="primary" size="sm">
              Start Free
            </Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t px-5 py-4 flex flex-col gap-1 border-[#E7EAF5] bg-white dark:border-dborder dark:bg-dbg">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="px-3 py-2.5 rounded-lg text-sm font-medium text-ink-mute">
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-2">
            <Link href="/login" className="flex-1">
              <Button variant="secondary" size="sm" className="w-full">
                Log in
              </Button>
            </Link>
            <Link href="/register" className="flex-1">
              <Button variant="primary" size="sm" className="w-full">
                Start Free
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
