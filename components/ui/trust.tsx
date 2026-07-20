"use client";

interface TrustRingProps {
  score: number;
  size?: number;
  dark?: boolean;
}

export function TrustRing({ score, size = 56, dark = false }: TrustRingProps) {
  const tone = score >= 80 ? "#10B981" : score >= 55 ? "#F59E0B" : "#EF4444";
  const track = dark ? "#232842" : "#E7EAF5";
  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: `conic-gradient(${tone} ${score * 3.6}deg, ${track} 0deg)` }}
      />
      <div
        className={`absolute rounded-full flex items-center justify-center ${dark ? "bg-dsurface" : "bg-white"}`}
        style={{ inset: 5 }}
      >
        <span className="font-mono font-semibold" style={{ fontSize: size * 0.24, color: tone }}>
          {score}
        </span>
      </div>
    </div>
  );
}

type Level = "verified" | "warning" | "risk";

const badgeMap: Record<Level, { label: string; cls: string }> = {
  verified: {
    label: "Verified",
    cls: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400",
  },
  warning: {
    label: "Caution",
    cls: "text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/30 dark:text-amber-400",
  },
  risk: {
    label: "High risk",
    cls: "text-red-600 bg-red-50 border-red-200 dark:bg-red-500/10 dark:border-red-500/30 dark:text-red-400",
  },
};

export function TrustBadge({ level = "verified" as Level }) {
  const b = badgeMap[level];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-mono font-medium ${b.cls}`}>
      {b.label}
    </span>
  );
}
