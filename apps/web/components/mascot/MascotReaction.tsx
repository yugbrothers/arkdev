"use client";

import { useEffect,useState } from "react";

export default function MascotReaction(){

  const [message,setMessage] =
    useState("Ready");

  useEffect(()=>{

    const messages = [
      "New notification",
      "AI completed task",
      "Community active",
      "Project updated",
      "New builder joined"
    ];

    const interval =
      setInterval(()=>{

        const random =
          messages[
            Math.floor(
              Math.random() *
              messages.length
            )
          ];

        setMessage(random);

      },12000);

    return ()=>clearInterval(interval);

  },[]);

  return (
    <div
      className="
      absolute
      -left-48
      top-4
      bg-black
      text-white
      text-xs
      px-3
      py-2
      rounded-xl
      border
      border-white/10
      "
    >
      {message}
    </div>
  );
}
