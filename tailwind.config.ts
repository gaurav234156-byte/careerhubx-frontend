import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#2E5AFF", ink: "#1A3FCC" },
        accent: { DEFAULT: "#8B5CF6", ink: "#6D28D9" },
        surface: { DEFAULT: "#FFFFFF", mute: "#F4F6FB" },
        ink: { DEFAULT: "#0F1222", mute: "#5B6072" },
        verified: "#10B981",
        warning: "#F59E0B",
        risk: "#EF4444",
        dbg: "#0A0D17",
        dsurface: "#12162A",
        dborder: "#232842",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
