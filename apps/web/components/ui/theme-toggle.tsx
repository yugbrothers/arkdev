"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        className="px-3 py-2 rounded-xl border"
        onClick={() => setTheme("light")}
      >
        Light
      </button>

      <button
        className="px-3 py-2 rounded-xl border"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>

      <button
        className="px-3 py-2 rounded-xl border"
        onClick={() => setTheme("brand")}
      >
        Brand
      </button>
    </div>
  );
}
