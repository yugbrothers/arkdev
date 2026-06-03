"use client";

import { useState } from "react";

export default function ArkAssistant(){

  const [open,setOpen] =
    useState(false);

  return(

    <>

      <button
        onClick={()=>setOpen(!open)}
        className="
        fixed
        bottom-8
        right-8
        z-[9998]
        px-4
        py-3
        rounded-xl
        bg-blue-600
        text-white
        shadow-xl
        "
      >
        Ark AI
      </button>

      {open && (

        <div
          className="
          fixed
          bottom-24
          right-8
          z-[9998]
          w-full max-w-sm md:max-w-md lg:max-w-lg
          h-[70vh] max-h-[700px] min-h-[400px]
          rounded-2xl
          border
          border-white/10
          bg-black/90
          backdrop-blur-xl
          p-4
          "
        >

          <div className="font-bold mb-4">
            Ark Assistant
          </div>

          <div className="space-y-3">

            <button className="w-full p-3 rounded-xl bg-white/5">
              Create Project
            </button>

            <button className="w-full p-3 rounded-xl bg-white/5">
              Open Workspace
            </button>

            <button className="w-full p-3 rounded-xl bg-white/5">
              Launch AI
            </button>

            <button className="w-full p-3 rounded-xl bg-white/5">
              Analytics
            </button>

          </div>

        </div>

      )}

    </>

  );

}
