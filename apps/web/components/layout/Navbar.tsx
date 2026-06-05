"use client";

import MobileDrawer from "@/components/mobile/MobileDrawer";
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
        
<div className="flex items-center gap-3">
  <img
    src="/arkdev-logo.svg"
    alt="ArkDev"
    className="h-10 w-10"
  />
  <span className="text-2xl font-black">
    ArkDev
  </span>
</div>


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
              <a href="/teams">Teams</a>
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
              <a href="/music-gen">Ark MusicGen</a>
              <a href="/video-gen">Ark VideoGen</a>
              <a href="/portfolio">Portfolio</a>
            </div>
          </div>

          <a href="/about">About</a>
        </nav>

        <div className="flex items-center gap-4"><ThemeToggle /><MobileDrawer /></div>
      </div>
    </header>
  );
}
