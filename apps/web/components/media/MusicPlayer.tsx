"use client";

import { useRef } from "react";

export default function MusicPlayer(){

  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if(!audio) return;

    if(audio.paused){
      audio.play();
    }else{
      audio.pause();
    }
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        className="
        fixed
        bottom-6
        right-6
        z-50
        text-5xl
        mascot-music
        "
      >
        🐦
      </button>

      <audio
        ref={audioRef}
        loop
      >
        <source
          src="/music/Echo Drift.mp3"
          type="audio/mpeg"
        />
      </audio>
    </>
  );
}
