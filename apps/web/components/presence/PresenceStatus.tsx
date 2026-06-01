"use client";

export default function PresenceStatus(){

  const statuses = [
    "Online",
    "Building",
    "Coding",
    "Reviewing"
  ];

  const status =
    statuses[
      Math.floor(
        Math.random()*
        statuses.length
      )
    ];

  return(

    <div
      className="
      fixed
      bottom-6
      right-6
      z-50
      px-4
      py-2
      rounded-xl
      bg-green-500/20
      border
      border-green-500/30
      backdrop-blur-md
      "
    >
      🟢 {status}
    </div>

  );

}
