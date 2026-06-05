"use client";

import MusicPlayer from "@/components/media/MusicPlayer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/videos/space2.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">

        <img
          src="/arkdev-logo.svg"
          alt="ArkDev"
          className="h-28 w-28 mb-6"
        />

        <h1 className="text-7xl md:text-8xl font-black text-white">
          ArkDev
        </h1>

        <p className="mt-6 text-xl text-white/90">
          AI Powered Development Workspace
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white"
          >
            Dashboard
          </a>

          <a
            href="/ai"
            className="px-6 py-3 rounded-xl border border-white/20 text-white"
          >
            AI Assistant
          </a>
        </div>

      </div>

      <MusicPlayer />

    </main>
  );
}
