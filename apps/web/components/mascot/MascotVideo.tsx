"use client";

export default function MascotVideo(){

  return(
    <video
      autoPlay
      loop
      muted
      playsInline
      className="
      w-24
      h-24
      rounded-full
      object-cover
      "
    >
      <source
        src="/mascots/mascotorb.mp4"
        type="video/mp4"
      />
    </video>
  );
}
