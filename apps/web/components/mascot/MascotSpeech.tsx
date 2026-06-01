"use client";

import { usePathname } from "next/navigation";

export default function MascotSpeech(){

  const pathname = usePathname();

  const messages:Record<string,string> = {

    "/":"Welcome back",

    "/projects":"Building something new?",

    "/workspace":"Continue where you left off",

    "/community":"Builders are active",

    "/chat":"Realtime channel online",

    "/ai":"Ready to generate",

    "/analytics":"Monitoring activity",

    "/profile":"Identity synchronized"

  };

  return (

    <div
      className="
      absolute
      right-28
      top-4
      whitespace-nowrap
      rounded-xl
      px-4
      py-2
      text-sm
      bg-black/80
      backdrop-blur-xl
      border
      border-white/10
      "
    >
      {messages[pathname] || "Ark AI Core"}
    </div>

  );

}
