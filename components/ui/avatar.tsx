export function Avatar({ name, gradient, size = 36 }: { name: string; gradient: string; size?: number }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div
      className={`rounded-full flex items-center justify-center text-white font-display font-semibold shrink-0 bg-gradient-to-br ${gradient}`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  );
}
