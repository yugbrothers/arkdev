"use client";

import { usePathname } from "next/navigation";

export default function MascotBrain(){

  const pathname = usePathname();

  const messages:Record<string,string> = {

    "/":"Welcome to ArkDev",

    "/workspace":"Build something amazing",

    "/projects":"Manage your projects",

    "/ai":"AI systems online",

    "/chat":"Realtime communication active",

    "/community":"Community is growing",

    "/analytics":"Monitoring platform metrics",

    "/dashboard":"System dashboard active"

  };

  return(

    <div
      className="
      absolute
      -top-14
      left-1/2
      -translate-x-1/2
      whitespace-nowrap
      px-3
      py-2
      rounded-xl
      bg-black/80
      text-xs
      border
      border-blue-500/30
      "
    >
      {messages[pathname] || "ArkDev Online"}
    </div>

  );

}
