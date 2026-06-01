"use client";

import { useEffect,useState } from "react";

export default function MascotEmotion(){

  const emotions = [
    "😊",
    "🤖",
    "🚀",
    "🎉",
    "⚡",
    "💡"
  ];

  const [emotion,setEmotion] =
    useState("🤖");

  useEffect(()=>{

    const interval =
      setInterval(()=>{

        const random =
          emotions[
            Math.floor(
              Math.random() *
              emotions.length
            )
          ];

        setEmotion(random);

      },5000);

    return ()=>clearInterval(interval);

  },[]);

  return(
    <div
      className="
      absolute
      -bottom-4
      left-1/2
      -translate-x-1/2
      text-xl
      "
    >
      {emotion}
    </div>
  );

}
