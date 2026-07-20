import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareerHubX — Your AI Career Assistant",
  description:
    "Find verified jobs, internships, hackathons, competitions, and scholarships from one place — ranked by an AI that reads your profile, not just your keywords.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-dbg text-ink dark:text-white antialiased">{children}</body>
    </html>
  );
}
