"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Reveal({
  children
}:{
  children: React.ReactNode
}){

  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current,{
      y:80,
      opacity:0,
      duration:1
    });
  });

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}
