"use client";

import { useEffect } from "react";

export default function MascotTracker(){

  useEffect(()=>{

    const move = (e:MouseEvent)=>{

      const mascot =
        document.querySelector(
          ".ark-ai-core"
        ) as HTMLElement;

      if(!mascot) return;

      const x =
        (e.clientX/window.innerWidth-0.5)
        *10;

      const y =
        (e.clientY/window.innerHeight-0.5)
        *10;

      mascot.style.transform =
        `translate(${x}px,${y}px)`;

    };

    window.addEventListener(
      "mousemove",
      move
    );

    return ()=>{

      window.removeEventListener(
        "mousemove",
        move
      );

    };

  },[]);

  return null;

}
