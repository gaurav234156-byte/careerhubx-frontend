"use client";

export function Toggle({ on, onClick, size = "md" }: { on: boolean; onClick: () => void; size?: "sm" | "md" }) {
  const w = size === "sm" ? 34 : 40;
  const h = size === "sm" ? 19 : 22;
  const knob = size === "sm" ? 15 : 18;
  return (
    <button
      onClick={onClick}
      className="rounded-full p-0.5 transition-colors shrink-0"
      style={{ width: w, height: h, background: on ? "linear-gradient(90deg,#2E5AFF,#8B5CF6)" : "#E7EAF5" }}
    >
      <span
        className="block rounded-full bg-white shadow transition-transform"
        style={{ width: knob, height: knob, transform: on ? `translateX(${w - knob - 4}px)` : "translateX(0)" }}
      />
    </button>
  );
}
