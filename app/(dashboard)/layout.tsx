"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  Home,
  Briefcase,
  Trophy,
  GraduationCap,
  Bookmark,
  FileText,
  UserCircle2,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

const NAV = [
  { href: "/dashboard", label: "Overview", icon: Home },
  { href: "/jobs", label: "Jobs", icon: Briefcase },
  { href: "/jobs?category=Hackathons", label: "Hackathons", icon: Trophy },
  { href: "/jobs?category=Scholarships", label: "Scholarships", icon: GraduationCap },
  { href: "/saved", label: "Saved", icon: Bookmark },
  { href: "/agent", label: "AI Agent", icon: Sparkles },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/profile", label: "Profile", icon: UserCircle2 },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-surface-mute dark:bg-dbg">
      <aside className="w-60 shrink-0 border-r hidden lg:flex flex-col justify-between h-screen sticky top-0 bg-white border-[#E7EAF5] dark:bg-dsurface dark:border-dborder">
        <div className="p-5">
          <div className="flex items-center gap-2 pb-7">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-semibold text-[17px] text-ink dark:text-white">CareerHubX</span>
          </div>
          <nav className="space-y-1">
            {NAV.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-[0_10px_24px_-10px_rgba(46,90,255,0.6)]"
                      : "text-ink-mute hover:bg-surface-mute dark:text-slate-400 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} strokeWidth={2.1} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t flex items-center gap-3 border-[#E7EAF5] dark:border-dborder">
          <Avatar name="Asha Kapoor" gradient="from-primary to-accent" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate text-ink dark:text-white">Asha Kapoor</p>
            <p className="text-xs truncate text-ink-mute">asha@example.com</p>
          </div>
          <LogOut size={15} className="text-ink-mute" />
        </div>
      </aside>

      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
