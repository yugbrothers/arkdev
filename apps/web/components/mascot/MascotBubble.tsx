"use client";

import { usePathname } from "next/navigation";

export default function MascotBubble(){

  const pathname =
    usePathname();

  const messages:any = {

    "/blog":
      "New article detected.",

    "/workspace":
      "Ready to build.",

    "/chat":
      "Community online.",

    "/ai":
      "Generate something amazing.",

    "/projects":
      "Ship your next project."
  };

  const text =
    messages[pathname];

  if(!text) return null;

  return (

    <div
      className="
      absolute
      right-24
      top-2
      bg-black
      text-white
      px-4
      py-2
      rounded-xl
      whitespace-nowrap
      "
    >
      {text}
    </div>

  );
}
