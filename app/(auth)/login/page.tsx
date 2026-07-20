"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authApi } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { access_token } = await authApi.login(email, password);
      // Store access token in memory for this session. A production app
      // would keep this in a React context / cookie-backed store rather
      // than re-deriving it per page — sessionStorage shown here only as
      // the simplest thing that works without extra libraries.
      sessionStorage.setItem("access_token", access_token);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-sm w-full mx-auto">
      <h1 className="font-display font-semibold text-2xl text-ink">Welcome back</h1>
      <p className="mt-1.5 text-sm text-ink-mute">Log in to see your matches and saved opportunities.</p>

      <form className="mt-7 space-y-4" onSubmit={onSubmit}>
        <label className="block">
          <span className="text-sm font-medium text-ink">Email</span>
          <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-[#E7EAF5] bg-[#F8F9FD] px-3.5 py-3 focus-within:border-primary focus-within:bg-white">
            <Mail size={16} className="text-ink-mute shrink-0" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink">Password</span>
          <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-[#E7EAF5] bg-[#F8F9FD] px-3.5 py-3 focus-within:border-primary focus-within:bg-white">
            <Lock size={16} className="text-ink-mute shrink-0" />
            <input
              type={showPw ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-sm outline-none"
            />
            <button type="button" onClick={() => setShowPw((s) => !s)} className="text-ink-mute shrink-0">
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </label>

        {error && <p className="text-xs font-mono text-red-500">{error}</p>}

        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2 text-ink-mute">
            <input type="checkbox" className="rounded border-[#E7EAF5] text-primary" />
            Remember me
          </label>
          <Link href="/forgot-password" className="text-primary font-medium hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button variant="accent" size="lg" icon={ArrowRight} type="submit" disabled={loading} className="w-full">
          {loading ? "Logging in…" : "Log in"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-ink-mute">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary font-semibold hover:underline">
          Sign up free
        </Link>
      </p>
    </div>
  );
}
