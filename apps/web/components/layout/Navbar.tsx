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
        h-16
        px-8
        flex
        items-center
        justify-between
        "
      >
        <h1
          className="
          text-3xl
          font-black
          "
        >
          ArkDev
        </h1>

        <div
          className="
          flex
          items-center
          gap-6
          "
        >
          <img
            src="/ark-orb.svg"
            alt="Ark Orb"
            className="
            h-10
            w-10
            orb-spin
            "
          />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
