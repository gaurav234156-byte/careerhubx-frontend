"use client";

import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "accent" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
}

const sizes: Record<Size, string> = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-4 py-2.5",
  lg: "text-base px-6 py-3.5",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-ink shadow-[0_10px_26px_-10px_rgba(46,90,255,0.6)] hover:-translate-y-0.5",
  accent:
    "bg-gradient-to-r from-primary to-accent text-white hover:brightness-110 shadow-[0_10px_26px_-10px_rgba(139,92,246,0.6)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-ink border border-[#E7EAF5] hover:border-[#C7CEEA] dark:bg-dsurface dark:text-white dark:border-dborder",
  ghost:
    "text-ink-mute hover:text-ink hover:bg-surface-mute dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5",
};

export function Button({ variant = "primary", size = "md", icon: Icon, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      {Icon && <Icon size={16} strokeWidth={2.5} />}
    </button>
  );
}
