"use client";

import { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";

export default function VerifyEmailPage() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") ?? "";
  const [digits, setDigits] = useState(Array(6).fill(""));
  const [error, setError] = useState<string | null>(null);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const setDigit = (i: number, v: string) => {
    if (!/^[0-9]?$/.test(v)) return;
    const next = [...digits];
    next[i] = v;
    setDigits(next);
    if (v && i < 5) refs.current[i + 1]?.focus();
  };

  async function onSubmit() {
    setError(null);
    try {
      await api.post("/auth/verify-email", { email, otp: digits.join("") });
      router.push("/profile-setup");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid code");
    }
  }

  const complete = digits.every((d) => d !== "");

  return (
    <div className="max-w-sm w-full mx-auto text-center">
      <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <ShieldCheck size={22} className="text-primary" />
      </div>
      <h1 className="mt-4 font-display font-semibold text-2xl text-ink">Verify your email</h1>
      <p className="mt-1.5 text-sm text-ink-mute">
        Enter the 6-digit code we sent to <span className="font-medium text-ink">{email || "your email"}</span>
      </p>

      <div className="mt-7 flex justify-center gap-2.5">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            value={d}
            onChange={(e) => setDigit(i, e.target.value)}
            maxLength={1}
            inputMode="numeric"
            className="h-14 w-12 rounded-xl border border-[#E7EAF5] bg-[#F8F9FD] text-center font-display font-semibold text-xl text-ink outline-none focus:border-primary focus:bg-white"
          />
        ))}
      </div>

      {error && <p className="mt-3 text-xs font-mono text-red-500">{error}</p>}

      <Button variant="accent" size="lg" className="mt-7 w-full" disabled={!complete} onClick={onSubmit}>
        Verify email
      </Button>
    </div>
  );
}
