"use client";

import { useEffect, useState } from "react";
import { socket } from "@/lib/socket/client";

export default function RealtimeChat() {

  const [messages,setMessages] =
    useState<string[]>([]);

  const [input,setInput] =
    useState("");

  useEffect(() => {

    socket.connect();

    socket.on(
      "connect",
      () => {
        console.log("connected", socket.id);
      }
    );

    return () => {
      socket.disconnect();
    };

  },[]);

  return (
    <div className="space-y-4">

      <div
        className="
        border
        border-white/10
        rounded-2xl
        p-4
        h-[450px]
        overflow-auto
        "
      >
        {messages.map(
          (msg,index) => (
            <div key={index}>
              {msg}
            </div>
          )
        )}
      </div>

      <input
        value={input}
        onChange={(e)=>
          setInput(e.target.value)
        }
        placeholder="Send message..."
        className="
        w-full
        p-4
        rounded-xl
        bg-white/5
        border
        border-white/10
        "
      />
    </div>
  );
}
