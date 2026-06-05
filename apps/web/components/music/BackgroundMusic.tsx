"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function BackgroundMusic(){

  const tracks = [
    "/music/echo-drift.mp3",
    "/music/pulse-runner.mp3",
    "/music/pulse-runner-formula.mp3",
  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(()=>{
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    audioRef.current = new Audio(randomTrack);
    if(audioRef.current){
      audioRef.current.volume = 0.25;
      audioRef.current.loop = true;
    }
    // attempt autoplay
    audioRef.current.play().then(()=>setPlaying(true)).catch(()=>{
      // autoplay blocked
      setPlaying(false);
    });

    return () => {
      if(audioRef.current){
        audioRef.current.pause();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const togglePlay = async () => {
    if(!audioRef.current) return;
    try{
      if(playing){
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    }catch(e){
      console.warn('audio play prevented', e);
    }
  };

  const toggleTheme = () => {
    // map to next-themes expected values
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    // set some CSS vars for brand accents
    const root = document.documentElement;
    if(next === 'light'){
      root.style.setProperty('--brand-overlay', 'linear-gradient(rgba(255,255,255,0.22), rgba(255,255,255,0.10))');
      root.style.setProperty('--brand-text', '#072A6B');
      root.style.setProperty('--brand-accent', '#FF6B6B');
    } else {
      root.style.setProperty('--brand-overlay', 'linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.35))');
      root.style.setProperty('--brand-text', '#FFFFFF');
      root.style.setProperty('--brand-accent', '#7C3AED');
    }
  };

  return (
    <>
      <button
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="fixed top-4 left-4 z-50 w-10 h-10 rounded-md flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white/90"
      >
        {theme === 'light' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0l.7.7a1 1 0 11-1.42 1.42l-.7-.7a1 1 0 010-1.42zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm8 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM15.78 4.22a1 1 0 011.42 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7zM17 9a1 1 0 110 2h-1a1 1 0 110-2H17zM4.22 15.78a1 1 0 010-1.42l.7-.7a1 1 0 011.42 1.42l-.7.7a1 1 0 01-1.42 0zM15.78 15.78a1 1 0 010-1.42l.7-.7a1 1 0 111.42 1.42l-.7.7a1 1 0 01-1.42 0zM10 6a4 4 0 100 8 4 4 0 000-8z" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 116.707 2.707 8.001 8.001 0 0017.293 13.293z"/></svg>
        )}
      </button>

      <button
        aria-label="Music control"
        onClick={togglePlay}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-md flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white/90 border border-white/10"
      >
        {playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M6 4h2v12H6V4zm6 0h2v12h-2V4z"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4v12h4l6 4V0L8 4H4z"/></svg>
        )}
      </button>
    </>
  );
}
