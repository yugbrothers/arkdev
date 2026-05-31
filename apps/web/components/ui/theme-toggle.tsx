"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme("light")}
        className="px-3 py-2 rounded-xl border"
      >
        ☀
      </button>

      <button
        onClick={() => setTheme("dark")}
        className="px-3 py-2 rounded-xl border"
      >
        🌙
      </button>

      <button
        onClick={() => setTheme("brand")}
        className="px-3 py-2 rounded-xl border"
      >
        ⚡
      </button>
    </div>
  );
}
