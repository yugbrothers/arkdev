import ThreeOrb from "@/components/three/ThreeOrb";
import Navbar from "@/components/layout/Navbar";
import PresenceStatus from "@/components/presence/PresenceStatus";
import BackgroundMusic from "@/components/music/BackgroundMusic";
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
          <ThreeOrb />
          <BackgroundMusic />
          <PresenceStatus />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
