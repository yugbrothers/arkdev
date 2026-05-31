"use client";

export default function MusicPlayer() {
  return (
    <audio
      controls
      loop
      className="
      fixed
      bottom-4
      right-4
      z-50
      "
    >
      <source
        src="/music/Echo Drift.mp3"
        type="audio/mpeg"
      />
    </audio>
  );
}
