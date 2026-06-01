"use client";

import { useState } from "react";

export default function NotificationBell(){

  const [open,setOpen] = useState(false);

  const notifications = [
    "Workspace updated",
    "New AI generation",
    "Project published",
    "Community message"
  ];

  return (

    <div className="relative">

      <button
        onClick={()=>setOpen(!open)}
        className="
        text-2xl
        "
      >
        🔔
      </button>

      {open && (

        <div
          className="
          absolute
          right-0
          mt-4
          w-72
          rounded-2xl
          border
          border-white/10
          bg-black
          p-4
          z-50
          "
        >

          {notifications.map((n,index)=>(
            <div
              key={index}
              className="
              py-3
              border-b
              border-white/10
              "
            >
              {n}
            </div>
          ))}

        </div>

      )}

    </div>

  );
}
