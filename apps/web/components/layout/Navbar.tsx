"use client";

import ThemeToggle from "@/components/ui/theme-toggle";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-xl
      bg-black/30
      border-b
      border-white/10
      "
    >
      <div
        className="
        h-16
        px-6
        flex
        items-center
        justify-between
        "
      >
        <div className="flex items-center gap-3">
          <img
            src="/arkdev-logo.svg"
            alt="ArkDev"
            className="
            h-10
            w-10
            animate-spin
            "
          />

          <span className="font-bold text-2xl">
            ArkDev
          </span>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/projects">Projects</a>
          <a href="/workspace">Workspace</a>
          <a href="/analytics">Analytics</a>
          <a href="/ai">AI</a>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
