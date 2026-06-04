"use client";

import { useEffect, useState } from "react";

type MusicAsset = {
  id: string;
  prompt: string;
  genre: string;
  mood: string;
  audio: string;
  createdAt: string;
};

export default function MusicGenPage() {

  const [prompt,setPrompt] = useState("");
  const [genre,setGenre] = useState("Electronic");
  const [mood,setMood] = useState("Happy");

  const [assets,setAssets] =
    useState<MusicAsset[]>([]);

  async function generateMusic() {

    const res = await fetch(
      "/api/music-generate",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          prompt,
          genre,
          mood
        })
      }
    );

    const asset = await res.json();

    setAssets(prev => [
      asset,
      ...prev
    ]);
  }

  useEffect(() => {

    fetch("/api/music-assets")
      .then(r=>r.json())
      .then(setAssets)
      .catch(console.error);

  },[]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">

      <h1 className="text-5xl font-black mb-4">
        Ark MusicGen
      </h1>

      <p className="opacity-70 mb-10">
        Generate music for reels, shorts and videos.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl border p-6">

          <h2 className="text-xl font-bold mb-4">
            Music Creator
          </h2>

          <textarea
            value={prompt}
            onChange={(e)=>
              setPrompt(e.target.value)
            }
            className="w-full min-h-40 rounded-xl border p-4"
            placeholder="Describe your music..."
          />

          <select
            value={genre}
            onChange={(e)=>
              setGenre(e.target.value)
            }
            className="w-full rounded-xl border p-3 mt-4"
          >
            <option>Electronic</option>
            <option>Cinematic</option>
            <option>Hip Hop</option>
            <option>LoFi</option>
          </select>

          <select
            value={mood}
            onChange={(e)=>
              setMood(e.target.value)
            }
            className="w-full rounded-xl border p-3 mt-4"
          >
            <option>Happy</option>
            <option>Dark</option>
            <option>Energetic</option>
            <option>Epic</option>
          </select>

          <button
            onClick={generateMusic}
            className="mt-4 px-5 py-3 rounded-xl border"
          >
            Generate Music
          </button>

        </div>

        <div className="rounded-3xl border p-6">

          <h2 className="text-xl font-bold mb-4">
            Audio Library
          </h2>

          <div className="grid gap-4">

            {assets.map(asset=>(
              <div
                key={asset.id}
                className="rounded-xl border p-4"
              >
                <p>{asset.prompt}</p>

                <p className="text-sm opacity-60">
                  {asset.genre} • {asset.mood}
                </p>

                <a
                  href={asset.audio}
                  target="_blank"
                  className="inline-block mt-3 border rounded-xl px-3 py-2"
                >
                  Download MP3
                </a>
              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}
