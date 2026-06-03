"use client";

import NotificationBell from "@/components/notifications/NotificationBell";
import MobileDrawer from "@/components/mobile/MobileDrawer";

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
        h-16 lg:h-20
        px-4 md:px-6 lg:px-8
        flex
        items-center
        justify-between
        "
      >
        <a
          href="/"
          className="
          text-2xl md:text-3xl lg:text-4xl
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
          gap-6 xl:gap-8
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

          <div className="nav-group">
            <span>AI ▾</span>

            <div className="nav-dropdown">
              <a href="/ai">AI Assistant</a>
              <a href="/studio-ai">Ark Studio AI</a>
            </div>
          </div>

          <a href="/about">About</a>
        </nav>

        <div className="flex items-center gap-4"><MobileDrawer /><NotificationBell /></div>
      </div>
    </header>
  );
}
