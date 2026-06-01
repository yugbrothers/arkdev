"use client";

import { useEffect } from "react";

export default function BackgroundMusic(){

  useEffect(()=>{

    const tracks = [

      "/music/echo-drift.mp3",

      "/music/pulse-runner.mp3",

      "/music/pulse-runner-formula.mp3"

    ];

    const randomTrack =
      tracks[
        Math.floor(
          Math.random() *
          tracks.length
        )
      ];

    const audio =
      new Audio(randomTrack);

    audio.volume = 0.25;

    audio.loop = true;

    audio.play()
      .catch(() => {

        console.log(
          "Autoplay blocked by browser"
        );

      });

  },[]);

  return null;
}
