"use client";

export default function AnimatedTitle({
  children
}:{
  children: React.ReactNode
}) {
  return (
    <h1
      className="
      text-7xl
      md:text-8xl
      font-black
      tracking-tight
      ark-gradient-text
      "
    >
      {children}
    </h1>
  );
}
