"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if(theme==="light") setTheme("dark");
    else if(theme==="dark") setTheme("brand");
    else setTheme("light");
  };

  return (
    <button
      onClick={cycleTheme}
      className="
      mascot-btn
      "
    >
      {theme==="light" && "😺"}
      {theme==="dark" && "🤖"}
      {theme==="brand" && "🚀"}
    </button>
  );
}
