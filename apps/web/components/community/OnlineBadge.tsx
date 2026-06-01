"use client";

import { useEffect,useState } from "react";
import { socket } from "@/lib/socket/client";

export default function OnlineBadge(){

  const [count,setCount] =
    useState(0);

  useEffect(()=>{

    socket.connect();

    socket.on(
      "online-users",
      (users:number)=>{
        setCount(users);
      }
    );

  },[]);

  return (
    <div
      className="
      px-3
      py-2
      rounded-xl
      bg-green-500/20
      border
      border-green-500/30
      mb-4
      "
    >
      🟢 {count} online
    </div>
  );
}
