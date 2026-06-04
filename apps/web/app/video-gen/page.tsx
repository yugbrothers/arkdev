"use client";

import { useEffect, useState } from "react";

type MusicAsset = {
  id:string;
  prompt:string;
};

type VideoAsset = {
  id:string;
  prompt:string;
  musicId:string;
  video:string;
};

export default function VideoGenPage() {

  const [prompt,setPrompt] = useState("");
  const [musicId,setMusicId] = useState("");

  const [musicAssets,setMusicAssets] =
    useState<MusicAsset[]>([]);

  const [videoAssets,setVideoAssets] =
    useState<VideoAsset[]>([]);

  async function generateVideo() {

    const res = await fetch(
      "/api/video-generate",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          prompt,
          musicId
        })
      }
    );

    const asset = await res.json();

    setVideoAssets(prev => [
      asset,
      ...prev
    ]);
  }

  useEffect(()=>{

    fetch("/api/music-assets")
      .then(r=>r.json())
      .then(setMusicAssets);

    fetch("/api/video-assets")
      .then(r=>r.json())
      .then(setVideoAssets);

  },[]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">

      <h1 className="text-5xl font-black mb-4">
        Ark VideoGen
      </h1>

      <p className="opacity-70 mb-10">
        Create AI videos from images and music.
      </p>

      <div className="grid gap-6">

        <section className="rounded-3xl border p-6">

          <h2 className="text-xl font-bold mb-4">
            Video Creator
          </h2>

          <textarea
            value={prompt}
            onChange={(e)=>
              setPrompt(e.target.value)
            }
            placeholder="Describe your video..."
            className="w-full min-h-40 rounded-xl border p-4"
          />

          <select
            value={musicId}
            onChange={(e)=>
              setMusicId(e.target.value)
            }
            className="w-full rounded-xl border p-3 mt-4"
          >
            <option value="">
              Select Music Asset
            </option>

            {musicAssets.map(asset=>(
              <option
                key={asset.id}
                value={asset.id}
              >
                {asset.prompt}
              </option>
            ))}
          </select>

          <button
            onClick={generateVideo}
            className="mt-4 px-5 py-3 rounded-xl border"
          >
            Generate Video
          </button>

        </section>

        <section className="rounded-3xl border p-6">

          <h2 className="text-xl font-bold mb-4">
            Video Library
          </h2>

          <div className="grid gap-4">

            {videoAssets.map(asset=>(
              <div
                key={asset.id}
                className="rounded-xl border p-4"
              >
                <p>{asset.prompt}</p>

                <a
                  href={asset.video}
                  target="_blank"
                  className="inline-block mt-3 border rounded-xl px-3 py-2"
                >
                  Download MP4
                </a>
              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}
