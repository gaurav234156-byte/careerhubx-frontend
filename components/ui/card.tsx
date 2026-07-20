import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("rounded-2xl border bg-white border-[#E7EAF5] dark:bg-dsurface dark:border-dborder", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function GlassCard({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_24px_70px_-24px_rgba(46,90,255,0.4)] dark:bg-white/[0.06] dark:border-white/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
