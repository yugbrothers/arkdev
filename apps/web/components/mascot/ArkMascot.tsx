"use client";

import { usePathname } from "next/navigation";
import MascotReaction from "./MascotReaction";
import MascotEmotion from "./MascotEmotion";
import MascotBubble from "./MascotBubble";

export default function ArkMascot(){

  const pathname =
    usePathname();

  const mascotMap:Record<string,string> = {

    "/":"ark1mascot.png",

    "/about":"owl.png",

    "/blog":"macotsaprrow1.png",

    "/archive":"mascotsparrrow2.png",

    "/workspace":"racoon.png",

    "/community":"penguin.png",

    "/chat":"AIconsciousness.png",

    "/ai":"mascotrobotheme.png",

    "/projects":"panda.png",

    "/analytics":"fox.png",

    "/dashboard":"ark2mascot.png"

  };

  const mascot =
    mascotMap[pathname] ||
    "arc1.png";

  return (

    <div
      className="
      fixed
      top-6
      right-6
      z-[9999]
      group
      "
    >

      <MascotReaction />

      <MascotEmotion />

      <MascotBubble />

      <div className="mascot-orb" />

      <img
        src={`/mascots/${mascot}`}
        alt="ArkDev Mascot"
        className="
        w-24
        h-24
        object-contain
        drop-shadow-2xl
        mascot-glow
        mascot-float
        hover:scale-110
        transition-all
        duration-500
        cursor-pointer
        "
      />

    </div>

  );
}
