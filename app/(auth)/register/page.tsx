"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authApi } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await authApi.register(fullName, email, password);
      router.push(`/verify-email?email=${encodeURIComponent(email)}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-sm w-full mx-auto">
      <h1 className="font-display font-semibold text-2xl text-ink">Create your account</h1>
      <p className="mt-1.5 text-sm text-ink-mute">Free forever. No credit card required.</p>

      <form className="mt-7 space-y-4" onSubmit={onSubmit}>
        <label className="block">
          <span className="text-sm font-medium text-ink">Full name</span>
          <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-[#E7EAF5] bg-[#F8F9FD] px-3.5 py-3 focus-within:border-primary focus-within:bg-white">
            <User size={16} className="text-ink-mute shrink-0" />
            <input required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Asha Kapoor" className="w-full bg-transparent text-sm outline-none" />
          </div>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink">Email</span>
          <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-[#E7EAF5] bg-[#F8F9FD] px-3.5 py-3 focus-within:border-primary focus-within:bg-white">
            <Mail size={16} className="text-ink-mute shrink-0" />
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full bg-transparent text-sm outline-none" />
          </div>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink">Password</span>
          <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-[#E7EAF5] bg-[#F8F9FD] px-3.5 py-3 focus-within:border-primary focus-within:bg-white">
            <Lock size={16} className="text-ink-mute shrink-0" />
            <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" className="w-full bg-transparent text-sm outline-none" />
          </div>
        </label>

        {error && <p className="text-xs font-mono text-red-500">{error}</p>}

        <label className="flex items-start gap-2.5 text-xs text-ink-mute">
          <input type="checkbox" required className="mt-0.5 rounded border-[#E7EAF5] text-primary" />I agree to the{" "}
          <a href="#" className="text-primary hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </label>

        <Button variant="accent" size="lg" icon={ArrowRight} type="submit" disabled={loading} className="w-full">
          {loading ? "Creating account…" : "Create account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-ink-mute">
        Already have an account?{" "}
        <Link href="/login" className="text-primary font-semibold hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
