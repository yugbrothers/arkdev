"use client";

export default function MusicGenPage() {

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
            className="w-full min-h-40 rounded-xl border p-4"
            placeholder="Describe your music..."
          />

          <select className="w-full rounded-xl border p-3 mt-4">
            <option>Electronic</option>
            <option>Cinematic</option>
            <option>Hip Hop</option>
            <option>LoFi</option>
          </select>

          <select className="w-full rounded-xl border p-3 mt-4">
            <option>Happy</option>
            <option>Dark</option>
            <option>Energetic</option>
            <option>Epic</option>
          </select>

          <button
            className="mt-4 px-5 py-3 rounded-xl border"
          >
            Generate Music
          </button>

        </div>

        <div className="rounded-3xl border p-6">

          <h2 className="text-xl font-bold mb-4">
            Audio Library
          </h2>

          <div className="rounded-xl border p-4">
            Demo Track
          </div>

          <button
            className="mt-4 px-5 py-3 rounded-xl border"
          >
            Download MP3
          </button>

        </div>

      </div>

    </main>
  );
}
