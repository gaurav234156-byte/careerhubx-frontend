import { Sparkles } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <div className="relative hidden lg:flex flex-col justify-between w-[42%] p-10 overflow-hidden bg-gradient-to-br from-primary-ink via-primary to-accent">
        <div className="relative flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-white/15 flex items-center justify-center backdrop-blur">
            <Sparkles size={16} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-display font-semibold text-[17px] text-white">CareerHubX</span>
        </div>

        <div className="relative">
          <h2 className="font-display font-semibold text-3xl text-white leading-tight">
            Every opportunity here has already been checked for you.
          </h2>
          <p className="mt-3 text-white/75 text-sm max-w-sm">
            Domain age, HTTPS, registration fees and suspicious keywords — verified before it ever reaches your feed.
          </p>
        </div>

        <div className="relative flex items-center gap-8 text-white/80 text-sm font-mono">
          <div>
            <span className="block font-display font-semibold text-xl text-white">3.2M</span>matches made
          </div>
          <div>
            <span className="block font-display font-semibold text-xl text-white">96%</span>fraud caught
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12">{children}</div>
    </div>
  );
}
