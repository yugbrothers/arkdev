"use client";
"use client";
import MusicPlayer from "@/components/media/MusicPlayer";

import { useEffect, useState } from "react";

const videos = [
  "/videos/butterfly.mp4"
];
export default function HomePage() {
  const [videoIndex, setVideoIndex] =
    useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVideoIndex(
        (v) => (v + 1) % videos.length
      );
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-[4236px]">
      <video
        key={videos[videoIndex]}
        autoPlay
        muted
        loop
        playsInline
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover scale-105
        "
      >
        <source
          src={videos[videoIndex]}
          type="video/mp4"
        />
      </video>

      <div
        className="
        absolute
        inset-0
        bg-black/60
        "
      />

      <div
        className="
        relative
        z-10
        min-h-[4236px]
        flex
        flex-col
        items-center
        justify-center
        px-6
        text-center
        "
      >
        <img
          src="/arkdev-logo.svg"
          alt="ArkDev"
          className="
          h-28
          w-28
          animate-spin
          mb-6
          "
        />

        <h1
          className="
          text-7xl
          md:text-8xl
          font-black
          text-white
          "
        >
          ArkDev
        </h1>

        <p
          className="
          mt-6
          text-xl
          text-white/90
          "
        >
          AI Powered Development Workspace
        </p>

        <div
          className="
          mt-10
          flex
          gap-4
          "
        >
          <a
            href="/dashboard"
            className="
            px-6
            py-3
            rounded-xl
            bg-blue-600
            text-white
            "
          >
            Dashboard
          </a>

          <a
            href="/ai"
            className="
            px-6
            py-3
            rounded-xl
            border
            border-white/20
            text-white
            "
          >
            AI Assistant
          </a>
        </div>
      </div>
      <MusicPlayer />
</main>
  );
}
