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
      bg-black/20
      border-b
      border-white/10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        h-20
        px-8
        flex
        items-center
        justify-between
        "
      >
        <a
          href="/"
          className="
          text-5xl
          font-black
          ark-logo
          "
        >
          ArkDev
        </a>

        <nav className="hidden md:flex gap-8">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/projects">Projects</a>
          <a href="/workspace">Workspace</a>
          <a href="/analytics">Analytics</a>
          <a href="/ai">AI</a>

          <a
            href="https://discord.com"
            target="_blank"
          >
            Discord
          </a>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
