"use client";

import { Menu } from "lucide-react";

export default function MobileDrawer() {
  return (
    <button
      className="
      md:hidden
      rounded-xl
      border
      border-white/10
      p-2
      "
    >
      <Menu size={22}/>
    </button>
  );
}
