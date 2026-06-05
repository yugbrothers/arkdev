"use client";

import { useEffect, useState } from "react";

export default function StudioAIPage() {

  const [images,setImages] = useState([]);
  const [music,setMusic] = useState([]);
  const [videos,setVideos] = useState([]);

  useEffect(()=>{

    fetch("/api/studio/assets")
      .then(r=>r.json())
      .then(setImages);

    fetch("/api/music-assets")
      .then(r=>r.json())
      .then(setMusic);

    fetch("/api/video-assets")
      .then(r=>r.json())
      .then(setVideos);

  },[]);

  return (
    <main className="relative min-h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/space2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="max-w-7xl mx-auto px-4 py-24">

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎬</div>
          <h1 className="text-5xl font-black">Ark Studio AI</h1>
        </div>

      </div>

    </main>
  );
}
