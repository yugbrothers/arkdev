"use client";

import NotificationBell from "@/components/notifications/NotificationBell";
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

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >
          <a href="/">Home</a>

          <div className="nav-group">
            <span>Work ▾</span>

            <div className="nav-dropdown">
              <a href="/archive">Archive</a>
              <a href="/workspace">Workspace</a>
              <a href="/showcase">Showcase</a>
              <a href="/projects">Projects</a>
            </div>
          </div>

          <div className="nav-group">
            <span>Community ▾</span>

            <div className="nav-dropdown">
              <a href="/channels">Channels</a>
              <a href="/community">Community</a>
              <a href="/blog">Blog</a>

              <a
                href="https://discord.com"
                target="_blank"
              >
                Discord
              </a>
            </div>
          </div>

          <a href="/ai">AI</a>

          <a href="/about">About</a>
        </nav>

        <div className="flex items-center gap-4"><NotificationBell /><ThemeToggle /></div>
      </div>
    </header>
  );
}
