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
    <main className="max-w-7xl mx-auto px-4 py-8">

      <div className="text-center mb-12">

        <div className="text-6xl mb-4">
          🎬
        </div>

        <h1 className="text-5xl font-black">
          Ark Studio AI
        </h1>

        <p className="mt-4 text-xl opacity-80">
          Unified Creator Dashboard
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border p-6">
          <h2 className="text-xl font-bold">
            Images
          </h2>

          <p className="text-5xl font-black mt-4">
            {images.length}
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="text-xl font-bold">
            Music
          </h2>

          <p className="text-5xl font-black mt-4">
            {music.length}
          </p>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="text-xl font-bold">
            Videos
          </h2>

          <p className="text-5xl font-black mt-4">
            {videos.length}
          </p>
        </div>

      </div>

      <div className="grid gap-6 mt-10 lg:grid-cols-2">

        <div className="rounded-3xl border p-6">

          <h2 className="text-xl font-bold mb-4">
            Creator Workflow
          </h2>

          <div className="space-y-4">

            <a href="/studio-ai" className="block border rounded-xl p-4">
              Create Images
            </a>

            <a href="/music-gen" className="block border rounded-xl p-4">
              Create Music
            </a>

            <a href="/video-gen" className="block border rounded-xl p-4">
              Create Videos
            </a>

          </div>

        </div>

        <div className="rounded-3xl border p-6">

          <h2 className="text-xl font-bold mb-4">
            Export Center
          </h2>

          <p>
            Music Assets: {music.length}
          </p>

          <p>
            Video Assets: {videos.length}
          </p>

        </div>

      </div>

    </main>
  );
}
