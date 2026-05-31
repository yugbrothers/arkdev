import Orb from "@/components/effects/Orb";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArkDev",
  description: "AI Powered Development Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ThemeProvider>
          <Orb />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
