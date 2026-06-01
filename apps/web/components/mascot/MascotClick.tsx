"use client";

import { useState } from "react";

export default function MascotClick(){

  const [message,setMessage] =
    useState("⚡");

  return(

    <button
      onClick={()=>{
        setMessage("🚀");
        setTimeout(()=>{
          setMessage("⚡");
        },1500);
      }}
      className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      text-lg
      "
    >
      {message}
    </button>

  );

}
