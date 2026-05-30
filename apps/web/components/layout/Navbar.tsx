"use client";

import ThemeToggle from "@/components/ui/theme-toggle";

export default function Navbar() {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      backdrop-blur-xl
      border-b
      border-white/10
      bg-black/20
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        h-16
        flex
        items-center
        justify-between
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
            h-10
            w-10
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            "
          />

          <h1 className="text-2xl font-bold">
            ArkDev
          </h1>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
