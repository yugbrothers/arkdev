"use client";

import { useEffect,useState } from "react";
import { socket } from "@/lib/socket/client";

export default function NotificationCounter(){

  const [count,setCount] =
    useState(0);

  useEffect(()=>{

    socket.connect();

    socket.on(
      "receive-message",
      ()=>{

        setCount(prev=>prev+1);

      }
    );

  },[]);

  return(

    <div
      className="
      fixed
      bottom-6
      left-6
      z-50
      px-4
      py-2
      rounded-xl
      bg-blue-500
      text-white
      "
    >
      {count} notifications
    </div>

  );

}
