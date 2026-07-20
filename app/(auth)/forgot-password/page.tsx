"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await api.post("/auth/forgot-password", { email }).catch(() => null);
    setSent(true); // always show success — don't leak whether the email exists
  }

  return (
    <div className="max-w-sm w-full mx-auto">
      <Link href="/login" className="inline-flex items-center gap-1.5 text-sm text-ink-mute hover:text-ink mb-6">
        <ArrowLeft size={14} /> Back to login
      </Link>

      {!sent ? (
        <>
          <h1 className="font-display font-semibold text-2xl text-ink">Reset your password</h1>
          <p className="mt-1.5 text-sm text-ink-mute">We&apos;ll email you a secure link to set a new one.</p>
          <form className="mt-7 space-y-4" onSubmit={onSubmit}>
            <label className="block">
              <span className="text-sm font-medium text-ink">Email</span>
              <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-[#E7EAF5] bg-[#F8F9FD] px-3.5 py-3">
                <Mail size={16} className="text-ink-mute shrink-0" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full bg-transparent text-sm outline-none" />
              </div>
            </label>
            <Button variant="accent" size="lg" icon={ArrowRight} type="submit" className="w-full">
              Send reset link
            </Button>
          </form>
        </>
      ) : (
        <div className="text-center py-6">
          <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <Mail size={22} className="text-primary" />
          </div>
          <h2 className="mt-4 font-display font-semibold text-xl text-ink">Check your inbox</h2>
          <p className="mt-1.5 text-sm text-ink-mute">If that email exists, we&apos;ve sent a reset link. It expires in 15 minutes.</p>
        </div>
      )}
    </div>
  );
}
