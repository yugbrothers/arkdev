import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArkDev",
  description: "AI Powered Workspace Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <Navbar />

          <div className="flex pt-16">
            <Sidebar />

            <main
              className="
              flex-1
              min-h-screen
              overflow-x-hidden
              "
            >
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
